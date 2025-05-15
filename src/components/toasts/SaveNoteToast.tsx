import { Toast } from "../ui/Toast"

interface SaveNoteToastProps {
  isOpen: boolean
  onClose: () => void
}

export const SaveNoteToast = ({ isOpen, onClose }: SaveNoteToastProps) => {
  return (
    <Toast
      message="Note saved successfully!"
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}
