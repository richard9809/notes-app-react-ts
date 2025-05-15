import { Archive, Trash2 } from 'lucide-react'
import { Button } from './ui/button'

interface NoteMenuProps {
  isOpen: boolean
  onClose: () => void
  onArchive: () => void
  onDelete: () => void
}

export const NoteMenu = ({ isOpen, onClose, onArchive, onDelete }: NoteMenuProps) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed right-0 top-0 bottom-0 w-[400px] bg-white dark:bg-[#2B303B] shadow-lg z-50 animate-slide-in-right">
        <div className="p-4">
          {/* Menu Items */}
          <div className="space-y-2">
            <Button
              variant="menuItem"
              onClick={onArchive}
            >
              <Archive className="w-6 h-6" />
              Archive Note
            </Button>

            <Button
              variant="menuItem"
              onClick={onDelete}
            >
              <Trash2 className="w-6 h-6" />
              Delete Note
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
