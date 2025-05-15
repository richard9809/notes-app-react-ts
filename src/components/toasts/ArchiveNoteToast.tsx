import { Toast } from "../ui/Toast"

interface ArchiveNoteToastProps {
  isOpen: boolean
  onClose: () => void
  onViewArchived: () => void
}

export const ArchiveNoteToast = ({ isOpen, onClose, onViewArchived }: ArchiveNoteToastProps) => {
  return (
    <Toast
      message="Note archived."
      isOpen={isOpen}
      onClose={onClose}
      action={{
        label: "Archived Notes",
        onClick: onViewArchived
      }}
    />
  )
}
