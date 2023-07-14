import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  icon: ReactNode
  label: string
  href: string
}

export function Card({ children, icon, label, href = '' }: CardProps) {
  return (
    <div className="mb-10 space-y-4 selection:bg-gray-900 selection:text-gray-50 md:mb-0">
      <div className="flex items-center">
        <div
          className="inline-flex h-8 w-8 items-center justify-center
          rounded-md bg-skin-fill-accent text-gray-100"
        >
          {icon}
        </div>
        <dt className="ml-3 flex flex-row text-skin-base xl:flex-col">
          {label}
        </dt>
      </div>
      <p className="mb-4 text-skin-base">{children}</p>
      <Link
        href={href}
        className="group mt-3 block cursor-pointer text-sm
        text-skin-base hover:text-skin-muted-hover"
      >
        <div className="group flex items-center gap-1">
          <span className="sr-only">Saber mais sobre {href}</span>
          <span>Saber mais</span>
          <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  )
}
