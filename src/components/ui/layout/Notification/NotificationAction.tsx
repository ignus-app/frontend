import { ButtonHTMLAttributes, ElementType } from 'react'

import { cn } from '@/lib/utils'

interface NotificationActionsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: NotificationActionsProps) {
  return (
    <button
      {...rest}
      className={cn(
        `flex h-8 w-8 items-center justify-center rounded
        bg-zinc-800 transition-colors duration-300 ease-linear
        hover:bg-zinc-700`,
        rest.className,
      )}
    >
      <Icon className="h-3 w-3 text-zinc-50" />
    </button>
  )
}
