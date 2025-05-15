import { Archive, Trash2 } from 'lucide-react'

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
          <div className="space-y-4">
            <button
              onClick={onArchive}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700/25 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors"
            >
              <Archive className="w-6 h-6" />
              <span className="text-lg">Archive Note</span>
            </button>

            <button
              onClick={onDelete}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700/25 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors"
            >
              <Trash2 className="w-6 h-6" />
              <span className="text-lg">Delete Note</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
