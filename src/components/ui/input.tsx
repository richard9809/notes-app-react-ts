import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  hint?: React.ReactNode
  onRightIconClick?: () => void
}

const AlertCircleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const EyeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 2l20 20" />
    <path d="M6.71 6.71a3.5 3.5 0 0 1 4.58 4.58" />
    <path d="M5.21 11.61A16 16 0 0 0 4 12l.47.71A16 16 0 0 0 12 16a16 16 0 0 0 7.53-3.29l.47-.71-.47-.71A16 16 0 0 0 12 8a15.2 15.2 0 0 0-2.47.2" />
  </svg>
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, error, hint, onRightIconClick, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const isPassword = type === "password"

    const handlePasswordToggle = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className="w-full">
        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </div>
          )}
          <input
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={cn(
              "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400",
              "transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-500",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              leftIcon && "pl-10",
              (rightIcon || isPassword) && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {(rightIcon || isPassword) && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {isPassword ? (
                <button
                  type="button"
                  onClick={handlePasswordToggle}
                  className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              ) : (
                <div
                  className={cn(
                    onRightIconClick
                      ? "cursor-pointer hover:text-slate-900 dark:hover:text-slate-50"
                      : "pointer-events-none"
                  )}
                  onClick={onRightIconClick}
                >
                  {rightIcon}
                </div>
              )}
            </div>
          )}
        </div>
        {hint && (
          <div className="mt-1 flex items-center gap-1.5">
            {error && <AlertCircleIcon className="h-4 w-4 text-red-500" />}
            <p
              className={cn(
                "text-sm",
                error
                  ? "text-red-500"
                  : "text-slate-500 dark:text-slate-400"
              )}
            >
              {hint}
            </p>
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
