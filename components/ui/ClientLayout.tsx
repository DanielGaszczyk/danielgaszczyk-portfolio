'use client'

import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { type Locale } from '@/lib/i18n'

export function ClientLayout({ 
  children, 
  locale 
}: { 
  children: React.ReactNode
  locale: Locale 
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
        <Header locale={locale} />
        <main className="pt-20">{children}</main>
        <Footer locale={locale} />
      </div>
    </ThemeProvider>
  )
}