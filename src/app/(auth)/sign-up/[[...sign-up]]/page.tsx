'use client'

import { SignUp } from '@clerk/nextjs'
import { motion } from 'framer-motion'

import { useStorage } from '@/hooks/useStorage'
import { useUrl } from '@/hooks/useUrl'

export default function Signup() {
  const { pathname } = useUrl()
  const { setLocalStorage } = useStorage()

  setLocalStorage('/currentPath', pathname)

  return (
    <div className="mt-16 flex w-full max-w-[18.75rem] flex-col gap-2 tablet:mt-16 desktop:mt-10">
      <motion.div
        className="flex flex-col items-center gap-2 py-8"
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <SignUp afterSignUpUrl="/dashboard" />
      </motion.div>
    </div>
  )
}
