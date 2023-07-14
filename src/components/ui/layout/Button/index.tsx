import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva(
  `group items-center justify-center gap-2 rounded-md duration-150
  text-white transition-colors ease-linear disabled:border-skin-button-muted
  disabled:bg-gray-100/50 disabled:text-gray-300/50`,
  {
    variants: {
      variant: {
        primary:
          'flex w-full border-none bg-skin-fill hover:bg-skin-fill-hover',
        destructive:
          'flex w-full border-none bg-red-500 text-zinc-50 hover:bg-red-600',
        outline:
          'flex w-full border border-skin-fill bg-transparent hover:border-skin-fill-hover hover:text-green-500',
        secondary:
          'flex w-full border-none bg-skin-button-accent text-gray-800 shadow-md hover:bg-skin-button-accent-hover',
        ghost: 'hover:bg-button-muted hover:text-skin-muted',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'p-2',
        sm: 'p-1',
        lg: 'p-3',
        icon: 'h-9 w-9 text-slate-500 bg-transparent hover:bg-slate-500',
      },
      textSize: {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      textSize: 'sm',
    },
  },
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, textSize, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        className={cn(buttonVariants({ variant, size, textSize, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
