'use client'

import Link from 'next/link'
import { Google } from 'uicons-react'

export function SignIn() {
  return (
    <Link
      className="hidden items-center gap-3 text-left text-gray-100 transition-colors delay-150 ease-linear
      hover:text-gray-50 laptop:flex desktop:flex"
      href="http://localhost:3000/sign-up#/?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard"
    >
      <div
        className="flex h-10 w-10 items-center justify-center
        rounded-full bg-white"
      >
        <Google className="text-red-500" size={32} weight="fill" />
      </div>

      <p className="max-w-[240px] text-sm leading-snug">
        <span className="underline">Crie sua conta</span> com o Google ou se
        cadastre e comece a monitorar e integrar suas usinas!
      </p>
    </Link>
  )
}
