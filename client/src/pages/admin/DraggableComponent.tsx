import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Button } from '@/components/ui/button'
import { Trash2, GripVertical } from 'lucide-react'

interface Component {
  id: string
  type: string
  props: Record<string, any>
  order: number
}

interface DraggableComponentProps {
  component: Component
  children: React.ReactNode
  isSelected: boolean
  onSelect: () => void
  onDelete: () => void
}

export default function DraggableComponent({
  component,
  children,
  isSelected,
  onSelect,
  onDelete,
}: DraggableComponentProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: component.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group rounded-lg border-2 transition-all ${
        isSelected 
          ? 'border-blue-500 ring-2 ring-blue-200' 
          : 'border-transparent hover:border-gray-200'
      }`}
      onClick={onSelect}
      data-testid={`draggable-${component.id}`}
    >
      {/* Component controls - show on hover/select */}
      <div className={`absolute -top-3 left-0 flex items-center space-x-2 transition-opacity ${
        isSelected || isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}>
        <div 
          className="bg-white border rounded px-2 py-1 shadow-sm cursor-grab flex items-center space-x-1"
          {...listeners}
          {...attributes}
        >
          <GripVertical className="w-3 h-3 text-gray-400" />
          <span className="text-xs font-medium text-gray-600 capitalize">
            {component.type}
          </span>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="h-6 w-6 p-0 bg-white hover:bg-red-50 hover:text-red-600"
          data-testid={`delete-${component.id}`}
        >
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>

      {/* Component content */}
      <div className={`p-4 rounded-lg ${isSelected ? 'bg-blue-50' : ''}`}>
        {children}
      </div>
    </div>
  )
}