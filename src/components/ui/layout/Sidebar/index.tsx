import { SignOutButton } from '@clerk/nextjs'
import {
  Activity,
  Boxes,
  Coins,
  FileSpreadsheet,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  LogOut,
  ScrollText,
  Settings,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { ProjectMenu } from '@/components/ui/layout/ProjectMenu'
import { Button } from '@/components/ui/layout/Button'

export function Sidebar() {
  return (
    <aside
      className="hidden flex-col gap-8 bg-gray-20 p-4 text-gray-50 md:flex
      lg:border-r lg:border-r-zinc-300"
    >
      <nav
        className="flex min-h-[90vh] w-full select-none flex-col items-start justify-between
        pb-24 pt-7 text-zinc-800"
      >
        <div className="flex">
          <ul className="flex w-full flex-col gap-4">
            <li className="flex items-center gap-4">
              <ProjectMenu>
                <Button
                  type="button"
                  size="icon"
                  className="bg-slate-400 text-yellow-500 hover:bg-slate-800"
                >
                  <Zap className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-amber-500" />
                </Button>
              </ProjectMenu>
              <span>Projetos</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/dashboard">
                  <LayoutDashboard className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Dashboard</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/monitoramento">
                  <Activity className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Monitoramento</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/integracao">
                  <Boxes className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Integração</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/relatorios">
                  <FileSpreadsheet className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Relatórios</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/faturas">
                  <ScrollText className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Faturas</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/sus">
                  <HeartPulse className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Saúde da Usina</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/analise-financeira">
                  <LineChart className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Análise Financeira</span>
            </li>

            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/gestao-creditos">
                  <Coins className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Gestão de Créditos</span>
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="flex w-full flex-col gap-4">
            <li className="flex items-center gap-4">
              <Button size="icon" className="bg-slate-200" asChild>
                <Link href="/admin">
                  <Settings className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Link>
              </Button>
              <span>Configurações</span>
            </li>
            <li className="flex items-center gap-4">
              <SignOutButton>
                <Button size="icon" className="hover:bg-red-500">
                  <LogOut className="h-5 w-5 transition-colors duration-150 ease-linear group-hover:text-gray-50" />
                </Button>
              </SignOutButton>
              <span>Sair</span>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
