import { useState, useCallback } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DndContext, DragEndEvent, DragOverlay, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Eye, Save, Trash2 } from 'lucide-react'
import { apiRequest } from '@/lib/queryClient'
import ComponentPalette from './ComponentPalette'
import DraggableComponent from './DraggableComponent'
import ComponentEditor from './ComponentEditor'

interface Component {
  id: string
  type: 'banner' | 'text' | 'button' | 'image'
  props: Record<string, any>
  order: number
}

interface EditablePage {
  id: string
  slug: string
  title: string
  components: Component[]
  isPublished: boolean
}

interface PageEditorProps {
  page: EditablePage
  onBack: () => void
}

export default function PageEditor({ page, onBack }: PageEditorProps) {
  const [components, setComponents] = useState<Component[]>(page.components || [])
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null)
  const [isPreview, setIsPreview] = useState(false)
  const queryClient = useQueryClient()

  // Save page mutation
  const saveMutation = useMutation({
    mutationFn: async (isPublish: boolean = false) => {
      const response = await apiRequest('PUT', `/api/admin/pages/${page.id}`, {
        components,
        isPublished: isPublish,
      })
      if (!response.ok) throw new Error('Failed to save page')
      return await response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/pages'] })
    }
  })

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    // Handle dropping from palette
    if (active.id.toString().startsWith('palette-')) {
      const componentType = active.id.toString().replace('palette-', '') as Component['type']
      const newComponent: Component = {
        id: `component-${Date.now()}`,
        type: componentType,
        props: getDefaultProps(componentType),
        order: components.length
      }
      setComponents([...components, newComponent])
      return
    }

    // Handle reordering existing components
    const activeIndex = components.findIndex(c => c.id === active.id)
    const overIndex = components.findIndex(c => c.id === over.id)

    if (activeIndex !== overIndex) {
      const newComponents = [...components]
      const [removed] = newComponents.splice(activeIndex, 1)
      newComponents.splice(overIndex, 0, removed)
      
      // Update order
      const updatedComponents = newComponents.map((comp, index) => ({
        ...comp,
        order: index
      }))
      
      setComponents(updatedComponents)
    }
  }, [components])

  const handleDeleteComponent = (componentId: string) => {
    setComponents(components.filter(c => c.id !== componentId))
    if (selectedComponent?.id === componentId) {
      setSelectedComponent(null)
    }
  }

  const handleUpdateComponent = (componentId: string, newProps: Record<string, any>) => {
    setComponents(components.map(c => 
      c.id === componentId 
        ? { ...c, props: { ...c.props, ...newProps } }
        : c
    ))
  }

  const handleSave = () => saveMutation.mutate(false)
  const handlePublish = () => saveMutation.mutate(true)

  if (isPreview) {
    return (
      <div className="min-h-screen bg-white">
        {/* Preview Header */}
        <div className="bg-gray-900 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-lg font-semibold">Preview: {page.title}</h1>
            <Button
              variant="outline"
              onClick={() => setIsPreview(false)}
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              Voltar ao Editor
            </Button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="max-w-7xl mx-auto">
          {components.map((component) => (
            <div key={component.id}>
              {renderComponent(component, false)}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex bg-gray-50">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {/* Left Sidebar - Component Palette */}
        <div className="w-80 bg-white border-r flex flex-col">
          <div className="p-4 border-b">
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-4"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h2 className="font-semibold text-gray-900">Componentes</h2>
          </div>
          
          <ComponentPalette />
          
          {selectedComponent && (
            <div className="border-t p-4 flex-1 overflow-y-auto">
              <ComponentEditor
                component={selectedComponent}
                onUpdate={(props) => handleUpdateComponent(selectedComponent.id, props)}
              />
            </div>
          )}
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="bg-white border-b p-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{page.title}</h1>
              <p className="text-sm text-gray-500">/{page.slug}</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => setIsPreview(true)}
                data-testid="button-preview"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              
              <Button
                variant="outline"
                onClick={handleSave}
                disabled={saveMutation.isPending}
                data-testid="button-save"
              >
                <Save className="w-4 h-4 mr-2" />
                {saveMutation.isPending ? 'Salvando...' : 'Salvar'}
              </Button>
              
              <Button
                onClick={handlePublish}
                disabled={saveMutation.isPending}
                data-testid="button-publish"
              >
                Publicar
              </Button>
            </div>
          </div>

          {/* Editor Canvas */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border min-h-96">
              <SortableContext items={components.map(c => c.id)} strategy={verticalListSortingStrategy}>
                <div className="p-6 space-y-4">
                  {components.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <p className="text-lg mb-2">Página vazia</p>
                      <p className="text-sm">Arraste componentes da barra lateral para começar</p>
                    </div>
                  ) : (
                    components.map((component) => (
                      <DraggableComponent
                        key={component.id}
                        component={component}
                        isSelected={selectedComponent?.id === component.id}
                        onSelect={() => setSelectedComponent(component)}
                        onDelete={() => handleDeleteComponent(component.id)}
                      >
                        {renderComponent(component, true)}
                      </DraggableComponent>
                    ))
                  )}
                </div>
              </SortableContext>
            </div>
          </div>
        </div>

        <DragOverlay>
          {/* Render drag overlay if needed */}
        </DragOverlay>
      </DndContext>
    </div>
  )
}

function getDefaultProps(type: Component['type']): Record<string, any> {
  switch (type) {
    case 'banner':
      return {
        title: 'Título do Banner',
        subtitle: 'Subtítulo do banner',
        backgroundImage: '',
        textColor: '#ffffff',
        backgroundColor: '#3b82f6'
      }
    case 'text':
      return {
        content: 'Digite seu texto aqui',
        fontSize: 'md',
        textAlign: 'left',
        color: '#000000'
      }
    case 'button':
      return {
        text: 'Clique aqui',
        href: '#',
        variant: 'primary',
        size: 'md'
      }
    case 'image':
      return {
        src: '',
        alt: 'Imagem',
        width: '100%',
        caption: ''
      }
    default:
      return {}
  }
}

function renderComponent(component: Component, isEditor: boolean = false) {
  const { type, props } = component

  switch (type) {
    case 'banner':
      return (
        <div 
          className="relative p-12 rounded-lg text-center"
          style={{ 
            backgroundColor: props.backgroundColor,
            color: props.textColor,
            backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
          {props.subtitle && (
            <p className="text-xl opacity-90">{props.subtitle}</p>
          )}
        </div>
      )
    
    case 'text':
      return (
        <div 
          className={`prose max-w-none text-${props.fontSize} text-${props.textAlign}`}
          style={{ color: props.color }}
        >
          <p>{props.content}</p>
        </div>
      )
    
    case 'button':
      return (
        <div className="text-center">
          <button
            className={`px-6 py-3 rounded-lg font-medium ${
              props.variant === 'primary' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            } ${props.size === 'sm' ? 'px-4 py-2 text-sm' : props.size === 'lg' ? 'px-8 py-4 text-lg' : ''}`}
            onClick={isEditor ? undefined : () => window.open(props.href, '_blank')}
          >
            {props.text}
          </button>
        </div>
      )
    
    case 'image':
      return (
        <div className="text-center">
          {props.src ? (
            <img 
              src={props.src} 
              alt={props.alt}
              className="mx-auto rounded-lg"
              style={{ width: props.width }}
            />
          ) : (
            <div className="bg-gray-200 rounded-lg p-12 text-gray-500">
              Imagem não definida
            </div>
          )}
          {props.caption && (
            <p className="text-sm text-gray-600 mt-2">{props.caption}</p>
          )}
        </div>
      )
    
    default:
      return <div className="p-4 bg-gray-100 rounded">Componente desconhecido</div>
  }
}