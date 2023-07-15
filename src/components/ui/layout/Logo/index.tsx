import Image from 'next/image'

import logo from '@/assets/ignus-bigflame-fill.svg'

export function Logo() {
  return (
    <figure className="border-r border-r-zinc-700 pr-10">
      <Image
        src={logo}
        alt="Ignus Logo"
        className="h-12 w-28 md:h-14 md:w-20 2xl:h-14 2xl:w-28"
      />
    </figure>
  )
}
