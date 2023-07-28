import { Badge } from '@/components/ui/layout/Badge'
import { BadgeStatus } from '@/components/ui/layout/BadgeStatus'
import { Link2, Sun } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex min-h-[478px] w-full flex-col bg-zinc-970">
        <div
          className="grid w-full flex-1 grid-cols-2 pt-[7.5625rem]
          md:grid-cols-1 md:pt-[5.5625rem] xl:grid-cols-2 2xl:grid-cols-2 2xl:pt-[7.5625rem]"
        >
          <section
            className="flex min-h-[30rem] w-full flex-col p-6 text-zinc-50"
            role="contentinfo"
          >
            <header className="flex w-full items-center justify-between">
              <div className="flex w-max items-center gap-6">
                <span className="border-r border-zinc-700 pr-6 text-xl font-bold">
                  Projetos
                </span>
                <button
                  className="flex items-center gap-2 rounded-2xl bg-blue-700/30
                  px-2.5 py-1 text-sm text-blue-200"
                >
                  Compartilhar
                  <Link2 className="h-4 w-4 text-blue-200" />
                </button>
              </div>
            </header>
          </section>
          <section
            className="flex min-h-[30rem] w-full flex-col p-6 text-zinc-50"
            role="contentinfo"
          >
            <header className="flex w-full items-center justify-between">
              <div className="flex w-max items-center gap-6">
                <span className="border-r border-zinc-700 pr-6 text-xl font-bold">
                  Performance
                </span>
                <BadgeStatus>Online</BadgeStatus>
              </div>
              <Badge className="flex gap-2 bg-zinc-700 text-sm text-zinc-50">
                <Sun fill="#eab308" className="h-4 w-4 text-yellow-500" />
                37°C
              </Badge>
            </header>
          </section>
        </div>
      </div>
      <section
        className="flex h-[29.875rem] w-full flex-col bg-zinc-50"
        role="contentinfo"
      >
        T
      </section>
    </div>
  )
}
