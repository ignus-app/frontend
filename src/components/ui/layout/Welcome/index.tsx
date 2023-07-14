'use client'
import { useUser } from '@clerk/nextjs'

export function Welcome() {
  const { user } = useUser()

  return (
    <div id="welcome" className="flex flex-col gap-2">
      <span className="text-xs">
        Bem-vindo, <span className="font-bold">{user?.fullName}</span>
      </span>
      <h2 className="text-2xl font-bold">Portifólio</h2>
    </div>
  )
}
