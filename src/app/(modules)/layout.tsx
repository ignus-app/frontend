import { ReactNode } from 'react'

import { api } from '@/lib/api'
import { Header } from '@/components/ui/layout/Header'

async function getSession(): Promise<void> {
  await api.get('/users/auth')
}

export default async function ModulesLayout({
  children,
}: {
  children: ReactNode
}) {
  await getSession()

  return (
    <div
      className="mx-auto min-h-screen justify-center bg-gradient-to-r from-pink-500
      via-red-500 to-yellow-500 text-gray-800"
    >
      <div
        className="mx-auto min-h-screen w-full max-w-11xl overflow-hidden
       bg-zinc-50 shadow-lg shadow-zinc-100"
      >
        <Header />
        <main className="flex">{children}</main>
      </div>
    </div>
  )
}
