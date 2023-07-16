'use client'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { Bell, CalendarDays, MessageSquare } from 'lucide-react'

import { DotPulse } from '@/components/ui/layout/DotPulse'
import { Logo } from '@/components/ui/layout/Logo'
import { SearchBar } from '@/components/ui/tools/Search'
import { Menu } from '@/components/ui/layout/Menu'
import { Badge } from '@/components/ui/layout/Badge'
import { Widget } from '@/components/ui/layout/Widget'

export function Header() {
  return (
    <header
      className="fixed flex w-full max-w-11xl items-center justify-between border-b border-b-zinc-700
    bg-zinc-970 p-8 md:p-4 2xl:p-8"
    >
      <div className="flex w-full items-center justify-between pl-3">
        <div className="flex w-max items-center justify-between gap-8">
          <Link href="/">
            <Logo />
          </Link>

          <div className="hidden xl:flex 2xl:flex">
            <Menu />
          </div>
          <div className="relative right-5 flex xl:hidden 2xl:hidden">
            <svg
              width="48"
              height="48"
              className="cursor-pointer text-neutral-200"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="12" y="20" width="24" height="2" fill="#ffffff"></rect>
              <rect x="20" y="26" width="16" height="2" fill="#ffffff"></rect>
            </svg>
          </div>
        </div>
        <div className="flex max-h-12 w-max items-center justify-between gap-6 px-2">
          <div className="border-r border-zinc-700 py-[7px] pr-4">
            <SearchBar />
          </div>
          <div className="flex">
            <CalendarDays className="h-5 w-5 text-zinc-50" />
            <DotPulse foreground="bg-amber-400" background="bg-amber-300" />
          </div>
          <div className="flex">
            <MessageSquare className="h-5 w-5 text-zinc-50" />
            <DotPulse foreground="bg-blue-500" background="bg-blue-400" />
          </div>
          <Widget>
            <button className="flex">
              <Bell className="h-5 w-5 text-zinc-50" />
              <DotPulse foreground="bg-red-500" background="bg-red-400" />
            </button>
          </Widget>
          <div className="relative flex flex-col border-l border-zinc-700 pl-4">
            <UserButton
              afterSignOutUrl="/sign-in"
              showName
              appearance={{
                variables: {
                  colorPrimary: '#71717a',
                  colorText: '#71717a',
                  colorTextSecondary: 'black',
                },
                elements: {
                  avatarBox: 'w-12 h-12 md:w-9 md:h-9 2xl:w-12 2xl:h-12',
                },
              }}
            />
            <div
              className="absolute -bottom-2 right-14 mx-auto flex max-w-[12.5rem]
              items-center justify-center gap-1 text-[.625rem] text-zinc-600"
            >
              Conta
              <Badge
                className="rounded-md bg-red-950 px-1 py-[.0625rem] text-[.625rem]
                text-red-400"
              >
                PRO
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
