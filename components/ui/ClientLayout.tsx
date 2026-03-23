'use client'

import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { CTABanner } from '@/components/sections/CTABanner'
import { FloatingNav } from '@/components/navigation/FloatingNav'
import { type Locale } from '@/lib/i18n'
import { OptimizedLiquidBackground } from '@/components/effects/OptimizedLiquidBackground'
import { CustomCursor } from '@/components/ui/CustomCursor'

export function ClientLayout({
  children,
  locale
}: {
  children: React.ReactNode
  locale: Locale
}) {
  return (
    <ThemeProvider>
      <OptimizedLiquidBackground />
      <CustomCursor />
      <FloatingNav locale={locale} />
      <div className="min-h-screen">
        <Header locale={locale} />
        <main className="pt-20">{children}</main>
        <CTABanner locale={locale} />
        <Footer locale={locale} />
      </div>
    </ThemeProvider>
  )
}