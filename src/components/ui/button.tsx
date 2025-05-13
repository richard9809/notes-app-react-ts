import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Theme colors
const colors = {
  primary: {
    base: '#335CFF',
    hover: '#2547D0',
    active: '#335CFF',
  },
  neutral: {
    white: '#FFFFFF',
    background: '#F3F5F8',
    border: '#CACFD8',
    text: '#0E121B',
    gray700: 'rgb(55, 65, 81)', // text-gray-700
    gray900: 'rgb(17, 24, 39)', // text-gray-900
  },
  disabled: {
    background: '#F3F5F8',
    text: '#CACFD8',
  },
} as const

// Base button styles
const baseButtonStyles = [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'whitespace-nowrap',
  'rounded-lg',
  'text-sm',
  'font-medium',
  'transition-colors',
  'cursor-pointer',
  'outline-offset-2',
  `outline-[${colors.neutral.border}]`,
  'focus:outline-2',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
].join(' ')

// Variant styles
const variantStyles = {
  primary: [
    `bg-[${colors.primary.base}]`,
    'text-white',
    `hover:bg-[${colors.primary.hover}]/90`,
    'focus:drop-shadow-lg',
    `active:bg-[${colors.primary.active}]`,
    `disabled:bg-[${colors.disabled.background}]`,
    `disabled:text-[${colors.disabled.text}]`,
  ].join(' '),
  
  secondary: [
    `bg-[${colors.neutral.background}]`,
    `text-[${colors.neutral.text}]`,
    `hover:bg-[${colors.neutral.white}]`,
    'hover:border-2',
    `hover:border-[${colors.neutral.border}]`,
    `focus:bg-[${colors.neutral.white}]`,
    'focus:border-2',
    `focus:border-[${colors.neutral.text}]`,
    `disabled:bg-[${colors.disabled.background}]`,
    `disabled:text-[${colors.disabled.text}]`,
  ].join(' '),
  
  border: [
    'border-2',
    `border-[${colors.neutral.border}]`,
    'bg-white',
    `text-[${colors.neutral.gray700}]`,
    `hover:bg-[${colors.neutral.background}]`,
    'hover:border-none',
    `focus:bg-[${colors.neutral.background}]`,
    'focus:border-none',
    'active:bg-gray-100',
    `disabled:bg-[${colors.disabled.background}]`,
    `disabled:text-[${colors.disabled.text}]`,
  ].join(' '),
}

// Size variants
const sizeStyles = {
  default: 'h-10 px-4 py-2',
  sm: 'h-8 px-3 py-1.5 text-sm',
  lg: 'h-12 px-6 py-3 text-lg',
} as const

const buttonVariants = cva(baseButtonStyles, {
  variants: {
    variant: variantStyles,
    size: sizeStyles,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants, type ButtonProps }

