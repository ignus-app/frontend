import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/ignus-bigflame-traditional-login.svg'
import { Underline } from '../SVGElements/Underline'
import { HeroPattern } from '../SVGElements/HeroPattern'
import { Button } from '@/components/ui/layout/Button'

export function Hero() {
  return (
    <>
      <div className="relative z-10 space-y-5">
        <figure>
          <Image src={logo} className="" alt="Ecovolts" />
        </figure>

        <article
          className="hidden max-w-[26.25rem] space-y-1 font-alt text-gray-50
          laptop:flex laptop:flex-col desktop:flex desktop:flex-col"
        >
          <h1 className="text-5xl font-bold leading-tight text-gray-50">
            Líder no mercado de Energia Solar
          </h1>
          <p className="text-lg leading-relaxed">
            Junte-se a Ignus e esteja na vanguarda do setor de energia solar,
            energia limpa e renovável através das{' '}
            <span className="relative">
              Placas Fotovoltaicas.
              <Underline className="absolute right-1 top-6" />
            </span>
          </p>
        </article>

        <Button
          className="inline-block max-w-max rounded-full px-5 py-3 text-sm font-bold
          uppercase leading-none text-black tablet:hidden laptop:inline-block desktop:inline-block"
          asChild
        >
          <Link href="/dashboard">Começar Agora</Link>
        </Button>
      </div>
      <HeroPattern
        className="absolute left-1/2 top-1/2 -translate-y-1/2
        tablet:-translate-x-1/2 laptop:-translate-x-2/3"
      />
    </>
  )
}
