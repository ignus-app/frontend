'use client'

import { useEffect, useState } from 'react'
import { useStorage } from '@/hooks/useStorage'

export function useTheme() {
  const { setLocalStorage, getLocalStorage } = useStorage()
  const storedTheme = getLocalStorage('/theme')

  const [toggleTheme, setToggleTheme] = useState(storedTheme !== 'theme-light')
  const [theme, setTheme] = useState(storedTheme || 'theme-light')

  function handleToggleTheme() {
    setToggleTheme((prevToggleTheme) => !prevToggleTheme)
  }

  setLocalStorage('/theme', theme)

  useEffect(() => {
    if (toggleTheme) {
      setTheme('theme-dark')
    } else {
      setTheme('theme-light')
    }
  }, [theme, toggleTheme])

  return {
    toggleTheme,
    storedTheme,
    handleToggleTheme,
  }
}
