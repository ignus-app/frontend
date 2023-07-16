'use client'

import { ReactNode } from 'react'
import {
  Popover as PopoverRoot,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from '@/components/base/popover'
import { ArrowRight, Check, Zap, X } from 'lucide-react'
import { Notification } from '../Notification'

export function Widget({ children }: { children: ReactNode }) {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[28rem] overflow-hidden rounded border-none bg-transparent p-0">
        {/* Header */}
        <div className="flex items-center justify-between bg-zinc-800 px-6 py-4">
          <span className="text-sm font-bold text-zinc-50">Notificações</span>
          <button className="text-xs font-bold uppercase text-blue-300">
            Marcar todas como lidas
          </button>
        </div>

        {/* Recent Section */}
        <div>
          <div className="bg-zinc-950 px-6 py-2 text-sm font-medium text-zinc-400">
            Recentes
          </div>
          {/* Recipient */}
          <div className="divide-y-2 divide-zinc-950">
            <Notification.Root>
              <Notification.Icon icon={Zap} />
              <Notification.Content text="Você recebeu uma nova mensagem do seu colaborador." />
              <Notification.Actions>
                <Notification.Action onClick={() => {}} icon={X} />
                <Notification.Action
                  onClick={() => {}}
                  icon={Check}
                  className="bg-blue-500 hover:bg-blue-600"
                />
              </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={Zap} />
              <Notification.Content text="Você recebeu uma nova mensagem do seu colaborador." />
              <Notification.Actions>
                <Notification.Action
                  onClick={() => {}}
                  icon={ArrowRight}
                  className="bg-emerald-500 hover:bg-emerald-600"
                />
              </Notification.Actions>
            </Notification.Root>
          </div>
        </div>

        {/* Ancient Section */}
        <div>
          <div className="bg-zinc-950 px-6 py-2 text-sm font-medium text-zinc-400">
            Antigas
          </div>
          {/* Recipient */}
          <div className="divide-y-2 divide-zinc-950">
            <Notification.Root>
              <Notification.Icon icon={Zap} />
              <Notification.Content text="Você recebeu uma nova mensagem do seu colaborador." />
            </Notification.Root>

            <Notification.Root>
              <Notification.Content text="Você recebeu uma nova mensagem do seu colaborador." />
            </Notification.Root>
          </div>
        </div>

        <PopoverArrow className="fill-zinc-800" />
      </PopoverContent>
    </PopoverRoot>
  )
}
