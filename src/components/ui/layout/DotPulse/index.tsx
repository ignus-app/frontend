import { cn } from '@/lib/utils'

interface DotbackgroundProps {
  background?: string
  foreground?: string
}

export function DotPulse({ foreground, background }: DotbackgroundProps) {
  return (
    <span className="relative -left-2 -top-[.125rem] flex h-2 w-2">
      <span
        className={cn(
          `absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`,
          background,
        )}
      ></span>
      <span
        className={cn(`relative inline-flex h-2 w-2 rounded-full`, foreground)}
      ></span>
    </span>
  )
}
