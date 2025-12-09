'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect to default locale for better performance
    router.replace(`/${defaultLocale}`)
  }, [router])

  return null
}
