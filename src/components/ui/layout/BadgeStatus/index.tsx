import { Badge } from '@/components/ui/layout/Badge'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeStatusProps {
  children: ReactNode
}

export function BadgeStatus({ children }: BadgeStatusProps) {
  return (
    <Badge
      className={cn(`flex gap-2 text-sm`, {
        'bg-green-700/30 text-green-200': children === 'Online',
        'bg-yellow-700/30 text-yellow-400': children === 'Offline',
        'bg-red-700/30 text-red-200': children === 'Sem Geração',
        'bg-zinc-700/30 text-zinc-200': children === 'Não Monitorada',
      })}
    >
      {children}
    </Badge>
  )
}
