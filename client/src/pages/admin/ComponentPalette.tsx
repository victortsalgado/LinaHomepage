import { useDraggable } from '@dnd-kit/core'
import { Card } from '@/components/ui/card'
import { Type, Image, Square, MousePointer } from 'lucide-react'

const components = [
  { id: 'banner', name: 'Banner', icon: Square, description: 'Banner com título e fundo' },
  { id: 'text', name: 'Texto', icon: Type, description: 'Parágrafo de texto' },
  { id: 'button', name: 'Botão', icon: MousePointer, description: 'Botão clicável' },
  { id: 'image', name: 'Imagem', icon: Image, description: 'Imagem com legenda' },
]

function DraggableComponentItem({ component }: { component: typeof components[0] }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `palette-${component.id}`,
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    opacity: isDragging ? 0.5 : 1,
  } : undefined

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`p-4 cursor-grab hover:bg-gray-50 transition-colors ${isDragging ? 'opacity-50' : ''}`}
      {...listeners}
      {...attributes}
      data-testid={`component-${component.id}`}
    >
      <div className="flex items-center space-x-3">
        <component.icon className="w-5 h-5 text-gray-600" />
        <div>
          <h3 className="font-medium text-sm text-gray-900">{component.name}</h3>
          <p className="text-xs text-gray-500">{component.description}</p>
        </div>
      </div>
    </Card>
  )
}

export default function ComponentPalette() {
  return (
    <div className="p-4 space-y-3">
      <p className="text-sm text-gray-600 mb-4">
        Arraste os componentes para a página para adicioná-los
      </p>
      
      {components.map((component) => (
        <DraggableComponentItem key={component.id} component={component} />
      ))}
    </div>
  )
}