import { Manrope, Schibsted_Grotesk } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
})

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-schibsted-grotesk',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${manrope.variable} ${schibstedGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
