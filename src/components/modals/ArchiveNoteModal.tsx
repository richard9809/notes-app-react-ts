import { Archive } from "lucide-react"
import { Modal } from "../ui/Modal"
import { Button } from "../ui/button"

interface ArchiveNoteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const ArchiveNoteModal = ({ isOpen, onClose, onConfirm }: ArchiveNoteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        {/* Icon and Title */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-700/25">
          <div className="flex space-x-2">
            <div className="w-14 h-12 bg-gray-100 dark:bg-gray-800 px-2 rounded-lg flex items-center justify-center">
              <Archive className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
            <div className="flex flex-col items-start pl-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Archive Note</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-light">
                Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4">
          <Button
            variant="modalCancel"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="modalAction"
            className="bg-blue-500 hover:bg-blue-600"
            onClick={onConfirm}
          >
            Archive Note
          </Button>
        </div>
      </div>
    </Modal>
  )
}
