import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { defaultLocale } from '@/lib/i18n'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

/**
 * metadataBase must be set at the root so every relative URL Next emits
 * for OG/Twitter images resolves against the canonical host instead of
 * localhost. Child segments (app/[locale]/layout.tsx) override titles
 * and descriptions but inherit metadataBase from here.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // The actual per-page language is known only deeper in the tree
  // ([locale]/layout.tsx), but `<html lang>` can only be set once at
  // the root. We use defaultLocale here; crawlers also get precise
  // language signals from Content-Language headers, hreflang alternates,
  // and `inLanguage` in WebSite JSON-LD — so this fallback is acceptable.
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}