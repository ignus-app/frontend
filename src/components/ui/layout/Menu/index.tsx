'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/base/navigation-menu'

import ecovolts from '@/assets/logo.svg'
import Image from 'next/image'

const feedback: { title: string; href: string; description: string }[] = [
  {
    title: 'Relatórios',
    href: '/relatorios',
    description: 'Gere relatórios automáticos e manuais.',
  },
  {
    title: 'Fatura digital',
    href: '/faturas',
    description: 'Visualize e baixe suas faturas.',
  },
  {
    title: 'Saúde da usina foto-voltaica',
    href: '/sus',
    description: 'Monitore a integridade e a saúde de suas usinas.',
  },
]

const financeiro: { title: string; href: string; description: string }[] = [
  {
    title: 'Análise Financeira',
    href: '/analise-financeira',
    description: 'Gerencie seu investimento, ROI e o tempo médio do Payback.',
  },
  {
    title: 'Gestão de créditos',
    href: '/gestao-de-creditos',
    description: 'Gerencie os créditos de energia gerados por suas usinas.',
  },
]

const triggerStyle = `border border-transparent bg-transparent text-zinc-50
hover:bg-transparent hover:text-zinc-300 focus:bg-transparent
focus:text-zinc-50 focus:outline-none data-[active]:bg-transparent
data-[state=open]:bg-transparent`

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerStyle}>
            Projeto
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-lg">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink className="bg-zinc-500" asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={ecovolts}
                      alt="Ecovolts"
                      className="h-12 w-12"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Ecovolts.
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Solar Energy Manager Project
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/dashboard" title="Dashboard">
                Tenha uma visão geral do seu portifólio.
              </ListItem>
              <ListItem href="/monitoramento" title="Monitoramento de usinas">
                Monitore o funcionamento das usinas em tempo real.
              </ListItem>
              <ListItem href="/integracao" title="Integração digital">
                Integre ao Ignus as usinas de portais terceiros.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerStyle}>
            Feedback
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {feedback.map((feedback) => (
                <ListItem
                  key={feedback.title}
                  title={feedback.title}
                  href={feedback.href}
                >
                  {feedback.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerStyle}>
            Financeiro
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {financeiro.map((financeiro) => (
                <ListItem
                  key={financeiro.title}
                  title={financeiro.title}
                  href={financeiro.href}
                >
                  {financeiro.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentação
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
