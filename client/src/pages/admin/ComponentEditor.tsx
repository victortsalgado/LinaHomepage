import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Component {
  id: string
  type: 'banner' | 'text' | 'button' | 'image'
  props: Record<string, any>
  order: number
}

interface ComponentEditorProps {
  component: Component
  onUpdate: (props: Record<string, any>) => void
}

export default function ComponentEditor({ component, onUpdate }: ComponentEditorProps) {
  const [localProps, setLocalProps] = useState(component.props)

  const handleChange = (key: string, value: any) => {
    const newProps = { ...localProps, [key]: value }
    setLocalProps(newProps)
    onUpdate(newProps)
  }

  const renderEditor = () => {
    switch (component.type) {
      case 'banner':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={localProps.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Título do banner"
              />
            </div>
            
            <div>
              <Label htmlFor="subtitle">Subtítulo</Label>
              <Input
                id="subtitle"
                value={localProps.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                placeholder="Subtítulo opcional"
              />
            </div>
            
            <div>
              <Label htmlFor="backgroundColor">Cor de Fundo</Label>
              <div className="flex space-x-2">
                <Input
                  id="backgroundColor"
                  type="color"
                  value={localProps.backgroundColor || '#3b82f6'}
                  onChange={(e) => handleChange('backgroundColor', e.target.value)}
                  className="w-16"
                />
                <Input
                  value={localProps.backgroundColor || '#3b82f6'}
                  onChange={(e) => handleChange('backgroundColor', e.target.value)}
                  placeholder="#3b82f6"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="textColor">Cor do Texto</Label>
              <div className="flex space-x-2">
                <Input
                  id="textColor"
                  type="color"
                  value={localProps.textColor || '#ffffff'}
                  onChange={(e) => handleChange('textColor', e.target.value)}
                  className="w-16"
                />
                <Input
                  value={localProps.textColor || '#ffffff'}
                  onChange={(e) => handleChange('textColor', e.target.value)}
                  placeholder="#ffffff"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="backgroundImage">Imagem de Fundo (URL)</Label>
              <Input
                id="backgroundImage"
                value={localProps.backgroundImage || ''}
                onChange={(e) => handleChange('backgroundImage', e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
        )

      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                value={localProps.content || ''}
                onChange={(e) => handleChange('content', e.target.value)}
                placeholder="Digite o texto aqui..."
                rows={4}
              />
            </div>
            
            <div>
              <Label htmlFor="fontSize">Tamanho da Fonte</Label>
              <Select
                value={localProps.fontSize || 'md'}
                onValueChange={(value) => handleChange('fontSize', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">Pequeno</SelectItem>
                  <SelectItem value="md">Médio</SelectItem>
                  <SelectItem value="lg">Grande</SelectItem>
                  <SelectItem value="xl">Muito Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="textAlign">Alinhamento</Label>
              <Select
                value={localProps.textAlign || 'left'}
                onValueChange={(value) => handleChange('textAlign', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Esquerda</SelectItem>
                  <SelectItem value="center">Centro</SelectItem>
                  <SelectItem value="right">Direita</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="color">Cor do Texto</Label>
              <div className="flex space-x-2">
                <Input
                  id="color"
                  type="color"
                  value={localProps.color || '#000000'}
                  onChange={(e) => handleChange('color', e.target.value)}
                  className="w-16"
                />
                <Input
                  value={localProps.color || '#000000'}
                  onChange={(e) => handleChange('color', e.target.value)}
                  placeholder="#000000"
                />
              </div>
            </div>
          </div>
        )

      case 'button':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Texto do Botão</Label>
              <Input
                id="text"
                value={localProps.text || ''}
                onChange={(e) => handleChange('text', e.target.value)}
                placeholder="Clique aqui"
              />
            </div>
            
            <div>
              <Label htmlFor="href">Link (URL)</Label>
              <Input
                id="href"
                value={localProps.href || ''}
                onChange={(e) => handleChange('href', e.target.value)}
                placeholder="https://..."
              />
            </div>
            
            <div>
              <Label htmlFor="variant">Estilo</Label>
              <Select
                value={localProps.variant || 'primary'}
                onValueChange={(value) => handleChange('variant', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primário</SelectItem>
                  <SelectItem value="secondary">Secundário</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="size">Tamanho</Label>
              <Select
                value={localProps.size || 'md'}
                onValueChange={(value) => handleChange('size', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">Pequeno</SelectItem>
                  <SelectItem value="md">Médio</SelectItem>
                  <SelectItem value="lg">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="src">URL da Imagem</Label>
              <Input
                id="src"
                value={localProps.src || ''}
                onChange={(e) => handleChange('src', e.target.value)}
                placeholder="https://..."
              />
            </div>
            
            <div>
              <Label htmlFor="alt">Texto Alternativo</Label>
              <Input
                id="alt"
                value={localProps.alt || ''}
                onChange={(e) => handleChange('alt', e.target.value)}
                placeholder="Descrição da imagem"
              />
            </div>
            
            <div>
              <Label htmlFor="width">Largura</Label>
              <Select
                value={localProps.width || '100%'}
                onValueChange={(value) => handleChange('width', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50%">50%</SelectItem>
                  <SelectItem value="75%">75%</SelectItem>
                  <SelectItem value="100%">100%</SelectItem>
                  <SelectItem value="auto">Automático</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="caption">Legenda</Label>
              <Input
                id="caption"
                value={localProps.caption || ''}
                onChange={(e) => handleChange('caption', e.target.value)}
                placeholder="Legenda opcional"
              />
            </div>
          </div>
        )

      default:
        return <p className="text-gray-500">Editor não disponível para este componente</p>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">
          Editar {component.type.charAt(0).toUpperCase() + component.type.slice(1)}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {renderEditor()}
      </CardContent>
    </Card>
  )
}