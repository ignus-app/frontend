import { STORAGE_KEY } from '@/constants'

export function useStorage() {
  function setLocalStorage(key: string, value: unknown) {
    const storageData: string | null = JSON.stringify(value)

    if (typeof window !== 'undefined') {
      return window.localStorage.setItem(`${STORAGE_KEY}${key}`, storageData)
    }
  }

  function getLocalStorage(key: string) {
    if (typeof window !== 'undefined') {
      const storageData: string | null = window.localStorage.getItem(
        `${STORAGE_KEY}${key}`,
      )

      return JSON.parse(storageData!)
    }
  }

  return {
    setLocalStorage,
    getLocalStorage,
  }
}
