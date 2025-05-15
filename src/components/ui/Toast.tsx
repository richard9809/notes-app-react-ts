import { Check, X } from "lucide-react"
import { useEffect } from "react"
import { Button } from "./button"

interface ToastProps {
  message: string
  isOpen: boolean
  onClose: () => void
  action?: {
    label: string
    onClick: () => void
  }
}

export const Toast = ({ message, isOpen, onClose, action }: ToastProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000) // Auto close after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#2B303B] rounded-lg shadow-lg min-w-[400px]">
        {/* Success Icon */}
        <div className="w-5 h-5 text-emerald-500">
          <Check className="w-full h-full" />
        </div>

        {/* Message and Action */}
        <div className="flex-1 flex items-center gap-4">
          <p className="text-gray-900 dark:text-white font-medium flex-1">{message}</p>
          {action && (
            <Button
              variant="link"
              className="text-gray-900 dark:text-white font-medium underline hover:text-gray-700 dark:hover:text-gray-300"
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          )}
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-0"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
