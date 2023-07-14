import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/base/sheet'
import { Zap } from 'lucide-react'
import { ReactNode } from 'react'

export function ProjectMenu({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col space-y-2 bg-blue-sheet/60 text-zinc-800 backdrop-blur-sm"
      >
        <SheetHeader>
          <SheetTitle>
            <span className="font-bold">Últimos Projetos</span>
          </SheetTitle>
          <SheetDescription>
            Lista os ultimos projetos acessados.
          </SheetDescription>
        </SheetHeader>

        <div className="flex w-full flex-col gap-4">
          <button className="group flex rounded-md bg-zinc-100 p-2 shadow-sm transition-colors duration-300 delay-75 ease-linear selection:bg-zinc-800 hover:bg-blue-500">
            <div className="flex items-center gap-4">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-md
                bg-slate-200 text-blue-500"
              >
                <Zap className="h-5 w-5" />
              </div>
              <span className="font-semibold text-zinc-800 group-hover:text-zinc-100">
                Projeto 01
              </span>
            </div>
          </button>

          <button className="group flex rounded-md bg-zinc-100 p-2 shadow-sm transition-colors duration-300 delay-75 ease-linear selection:bg-zinc-800 hover:bg-blue-500">
            <div className="flex items-center gap-4">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-md
                bg-slate-200 text-blue-500"
              >
                <Zap className="h-5 w-5" />
              </div>
              <span className="font-semibold text-zinc-800 group-hover:text-zinc-100">
                Projeto 02
              </span>
            </div>
          </button>
        </div>

        <SheetHeader>
          <SheetTitle>
            <span className="font-bold">Colaboradores</span>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
