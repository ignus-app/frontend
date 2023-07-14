import { Copyright } from '@/components/ui/layout/Copyright'
import { Hero } from '@/components/ui/layout/Hero'
import { SignIn } from '@/components/ui/layout/Signin'
import { ReactNode } from 'react'

interface LoginLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: LoginLayoutProps) {
  return (
    <main
      className="min-h-screen bg-gray-900 tablet:flex tablet:flex-col
      laptop:grid laptop:grid-cols-2 laptop-sm:grid-cols-2
      desktop:grid-cols-2"
    >
      {/* Left */}
      <section
        className="relative items-start justify-between overflow-hidden
        border-r border-white/10 bg-[url(../../assets/bg-stars-sun.png)] bg-cover
        px-28 py-16 tablet:flex laptop:flex-col desktop:flex-col"
      >
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sign In */}
        <SignIn />
        {/* Hero */}
        <Hero />

        {/* Copyright */}
        <Copyright />
      </section>

      {/* Right */}
      <section
        className="flex flex-1 items-center justify-center
        overflow-y-auto bg-skin-fill-base text-gray-800"
      >
        {children}
      </section>
    </main>
  )
}
