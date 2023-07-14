import { usePathname } from 'next/navigation'

export function useUrl() {
  const pathname = usePathname()

  return {
    pathname,
  }
}
