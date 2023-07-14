import axios from 'axios'

const isServer = typeof window === 'undefined'

export const api = axios.create({
  timeout: 60000,
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers')
    const token = cookies().get('__session')?.value

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)__session\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    )

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})
