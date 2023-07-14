'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Sun, Moon } from 'lucide-react'
import { useUser } from '@clerk/nextjs'

import { Divider } from '@/components/ui/layout/Divider'
import { Button } from '@/components/ui/layout/Button'
import { Card } from '@/components/ui/layout/Card'

import { useUrl } from '@/hooks/useUrl'
import { useCard } from '@/hooks/useCard'
import { useTheme } from '@/hooks/useTheme'
import { useStorage } from '@/hooks/useStorage'

import { cn } from '@/lib/utils'

import logo from '@/assets/logo.svg'
import fronius from '@/assets/fronius-gray.svg'
import huawei from '@/assets/huawei-gray.svg'
import weg from '@/assets/weg-gray.svg'
import byd from '@/assets/byd-gray.svg'

export default function Home() {
  const { cardData } = useCard()
  const { pathname } = useUrl()
  const { setLocalStorage } = useStorage()
  const { toggleTheme, handleToggleTheme } = useTheme()
  const { isSignedIn } = useUser()

  setLocalStorage('/currentPath', pathname)

  return (
    <main
      className={cn(`flex min-h-screen w-full flex-col bg-skin-fill-base`, {
        'theme-light': !toggleTheme,
        'theme-dark': toggleTheme,
      })}
    >
      <header
        className="bg-fill-base fixed flex w-full items-center border-b
        border-b-gray-100/50 px-8 py-3 text-skin-base backdrop-blur"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex-1 items-center">
            <Image
              src={logo}
              className="h-[40px] w-[40px]"
              alt="Logotipo da Ecovolts"
            />
          </div>
          <Button type="button" onClick={handleToggleTheme} variant="ghost">
            {!toggleTheme ? (
              <Moon
                size={20}
                className="text-skin-base transition-colors duration-150 ease-linear group-hover:text-slate-400"
              />
            ) : (
              <Sun
                size={20}
                className="text-skin-base transition-colors duration-150 ease-linear group-hover:text-amber-500"
              />
            )}
          </Button>
          <div
            className={cn(`flex w-full items-center gap-2`, {
              'max-w-[9.5rem]': isSignedIn,
              'max-w-[15rem]': !isSignedIn,
            })}
          >
            {isSignedIn ? (
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/dashboard">Entrar</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/dashboard">Iniciar</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto mt-36 flex w-full flex-col justify-between">
        <section
          id="hero"
          className="mx-auto flex h-[520px] w-full max-w-7xl flex-col items-center justify-center gap-4"
        >
          <article className="flex w-full max-w-2xl flex-col items-center justify-center gap-4">
            <h1
              className="text-center text-4xl font-bold text-skin-base
              sm:text-5xl sm:leading-none lg:text-6xl"
            >
              <span className="block">Monitore suas Usinas</span>
              <span
                className="bg-gradient-to-br from-[#3ECF8E] via-[#3ECF8E]
                to-[#3ecfb2] bg-clip-text text-transparent selection:text-skin-base"
              >
                Fácil Integração.
              </span>
            </h1>
            <p
              className="my-3 pt-2 text-center text-sm text-skin-base sm:mt-5
              sm:text-base lg:mb-0 lg:text-lg"
            >
              A Ecovolts é um portal de Monitoramento e Integração de Usinas
              fotovoltaicas. Temos o compromisso de levar rapidez, eficiência e
              simplicidade ao integrador no processo integração e monitoramento.
            </p>
          </article>

          <div className="flex w-full max-w-md items-center justify-between gap-4 px-8 pt-4">
            <Button asChild>
              <Link href="/dashboard">Iniciar seu Projeto</Link>
            </Button>
            <Button variant="secondary">
              <BookOpen size={16} />
              Documentação
            </Button>
          </div>

          <div
            className="flex w-full max-w-md flex-col items-center
            justify-between gap-8 px-8 pb-8 pt-8"
          >
            <span className="text-xs text-skin-base">
              Portais terceiros com integração disponível
            </span>
            <div className="flex w-full items-center justify-center gap-4">
              <Image src={fronius} alt="Fronius" className="h-12 w-12" />
              <Image src={huawei} alt="Huawei" className="h-10 w-10" />
              <Image src={weg} alt="WEG Iot" className="h-10 w-10" />
              <Image src={byd} alt="BYD Shine Monitor" className="h-10 w-10" />
            </div>
          </div>
        </section>

        <Divider />

        <section
          id="features-cards"
          className="sm:py-18 container mx-auto space-y-16 px-6 py-16
          pb-0 md:py-24 lg:px-16 lg:py-24 xl:px-20"
        >
          <h3 className="mx-auto flex w-full max-w-xl text-center text-2xl text-skin-base">
            Na Ecovolts o Integrador vai além do Monitoramento das suas Usinas.
          </h3>

          <div
            className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-2
            md:gap-16 lg:gap-x-8 xl:grid-cols-4"
          >
            {cardData.map((card) => {
              return (
                <Card
                  key={card.id}
                  icon={card.icon}
                  label={card.label}
                  href={card.href}
                >
                  {card.description}
                </Card>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
