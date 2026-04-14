'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, Globe, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Header({ locale }: { locale: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = getTranslations(locale)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLanguageSwitchUrl = () => {
    const newLocale = locale === 'pl' ? 'en' : 'pl'
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
  }

  const descriptor = locale === 'pl' ? 'AI founder · product operator' : 'AI founder · product operator'

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.projects, href: `/${locale}/projects` },
    { name: t.nav.blog, href: `/${locale}/blog` },
    { name: t.nav.about, href: `/${locale}/about` },
    { name: t.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          'container mx-auto rounded-[1.6rem] border px-5 py-3 backdrop-blur-xl transition-all duration-300',
          isScrolled
            ? 'border-white/10 bg-background/80 shadow-[0_24px_60px_rgba(3,8,20,0.32)]'
            : 'border-white/10 bg-background/60'
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="min-w-0">
            <span className="block font-heading text-xl font-semibold tracking-[-0.05em] text-foreground">
              Daniel Gaszczyk
            </span>
            <span className="block truncate text-xs uppercase tracking-[0.18em] text-foreground/50">
              {descriptor}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'bg-white/[0.06] text-foreground'
                      : 'text-foreground/60 hover:bg-white/[0.04] hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={getLanguageSwitchUrl()} className="hidden sm:block">
              <Button variant="ghost" size="sm" className="rounded-full px-4 text-foreground/70 hover:text-foreground">
                <Globe className="h-4 w-4" />
                {locale === 'pl' ? 'EN' : 'PL'}
              </Button>
            </Link>

            <a
              href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <Button size="sm" className="rounded-full px-5">
                <Calendar className="h-4 w-4" />
                {t.hero.cta.secondary}
              </Button>
            </a>

            <Button
              variant="ghost"
              size="sm"
              className="rounded-full lg:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-3 lg:hidden">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-white/[0.06] text-foreground'
                      : 'text-foreground/60 hover:bg-white/[0.04] hover:text-foreground'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={getLanguageSwitchUrl()}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/60 hover:bg-white/[0.04] hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale === 'pl' ? 'Switch to English' : 'Przełącz na polski'}
              </Link>
              <a
                href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/60 hover:bg-white/[0.04] hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.hero.cta.secondary}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
