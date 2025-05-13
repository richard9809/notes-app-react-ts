import * as React from "react"
import { cn } from "@/lib/utils"

// Theme configuration
const theme = {
  colors: {
    neutral: {
      white: '#FFFFFF',
      background: '#F3F5F8',
      border: '#CACFD8',
      text: '#0E121B',
      placeholder: '#6C727F',
      hint: '#6C727F',
    },
    state: {
      focus: '#335CFF',
      error: '#FF3333',
      disabled: '#F3F5F8',
      disabledText: '#CACFD8',
    },
  },
  spacing: {
    input: {
      height: '11',
      paddingX: '4',
      paddingY: '3',
      iconOffset: '11',
    },
  },
} as const

// Icon components
const EyeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 2l20 20" />
    <path d="M6.71 6.71a3.5 3.5 0 0 1 4.58 4.58" />
    <path d="M5.21 11.61A16 16 0 0 0 4 12l.47.71A16 16 0 0 0 12 16a16 16 0 0 0 7.53-3.29l.47-.71-.47-.71A16 16 0 0 0 12 8a15.2 15.2 0 0 0-2.47.2" />
  </svg>
)

// Style configurations
const styles = {
  base: {
    input: [
      'flex',
      'w-full',
      `h-${theme.spacing.input.height}`,
      `py-${theme.spacing.input.paddingY}`,
      'text-sm',
      'bg-white',
      'rounded-lg',
      'border-2',
      `border-[${theme.colors.neutral.border}]`,
      `text-[${theme.colors.neutral.text}]`,
      'outline-none',
      'transition-all',
      `placeholder:text-[${theme.colors.neutral.placeholder}]`,
      // States
      `focus:border-[${theme.colors.state.focus}]`,
      'focus:ring-2',
      `focus:ring-[${theme.colors.state.focus}]/20`,
      // Disabled
      'disabled:cursor-not-allowed',
      `disabled:bg-[${theme.colors.state.disabled}]`,
      `disabled:text-[${theme.colors.state.disabledText}]`,
      `disabled:border-[${theme.colors.state.disabled}]`,
      // Error
      `aria-invalid:border-[${theme.colors.state.error}]`,
      'aria-invalid:ring-2',
      `aria-invalid:ring-[${theme.colors.state.error}]/20`,
    ].join(' '),
    wrapper: [
      'relative',
      'w-full',
      'flex',
      'items-center',
    ].join(' '),
    hint: [
      'mt-1.5',
      'text-sm',
      `text-[${theme.colors.neutral.hint}]`,
      `aria-invalid:text-[${theme.colors.state.error}]`,
    ].join(' '),
  },
  icon: {
    base: [
      'flex',
      'items-center',
      'justify-center',
      'w-5',
      'h-5',
      `text-[${theme.colors.neutral.placeholder}]`,
      `peer-disabled:text-[${theme.colors.state.disabledText}]`,
      `peer-aria-invalid:text-[${theme.colors.state.error}]`,
      'pointer-events-none',
    ].join(' '),
    left: 'absolute left-4',
    right: 'absolute right-4',
    button: [
      'cursor-pointer',
      'hover:opacity-80',
      'transition-opacity',
      'pointer-events-auto',
    ].join(' '),
  },
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  hint?: string
  onRightIconClick?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, hint, onRightIconClick, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const isPassword = type === 'password'
    const effectiveType = isPassword ? (showPassword ? 'text' : 'password') : type

    const inputStyles = [
      styles.base.input,
      'peer',
      'px-4',
      leftIcon && 'pl-11',
      (rightIcon || isPassword) && 'pr-11',
      className,
    ].filter(Boolean)

    const handleRightIconClick = () => {
      if (isPassword) {
        setShowPassword(!showPassword)
      } else if (onRightIconClick) {
        onRightIconClick()
      }
    }

    const rightIconClasses = cn(
      styles.icon.base,
      styles.icon.right,
      (isPassword || onRightIconClick) && styles.icon.button
    )

    return (
      <div className="w-full">
        <div className={styles.base.wrapper}>
          {leftIcon && (
            <div className={cn(styles.icon.base, styles.icon.left)}>
              {leftIcon}
            </div>
          )}
          <input
            type={effectiveType}
            ref={ref}
            data-slot="input"
            className={cn(...inputStyles)}
            {...props}
          />
          {(rightIcon || isPassword) && (
            <div
              className={rightIconClasses}
              onClick={!props.disabled ? handleRightIconClick : undefined}
              role={isPassword || onRightIconClick ? "button" : undefined}
              tabIndex={isPassword || onRightIconClick ? 0 : undefined}
            >
              {isPassword ? (showPassword ? <EyeOffIcon /> : <EyeIcon />) : rightIcon}
            </div>
          )}
        </div>
        {hint && (
          <p className={cn(styles.base.hint, props['aria-invalid'] && `text-[${theme.colors.state.error}]`)}>
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, type InputProps }
