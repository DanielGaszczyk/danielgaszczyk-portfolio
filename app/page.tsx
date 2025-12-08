'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { locales, defaultLocale } from '@/lib/i18n'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split('-')[0].toLowerCase()

    // Check if browser language is supported
    const locale = (locales as readonly string[]).includes(browserLang) ? browserLang : defaultLocale

    // Redirect to locale
    router.replace(`/${locale}`)
  }, [router])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          Loading...
        </div>
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </div>
  )
}
