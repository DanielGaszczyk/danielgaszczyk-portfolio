'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DynamicThemeToggle } from '@/components/ui/DynamicThemeToggle'
import { getTranslations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Header({ locale }: { locale: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = getTranslations(locale)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.projects, href: `/${locale}/projects` },
    { name: t.nav.blog, href: `/${locale}/blog` },
    { name: t.nav.about, href: `/${locale}/about` },
    { name: t.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href={`/${locale}`}
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Daniel Gaszczyk
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={locale === 'pl' ? '/en' : '/pl'}
              className="hidden sm:block"
            >
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                {locale === 'pl' ? 'EN' : 'PL'}
              </Button>
            </Link>

            <DynamicThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                pathname === item.href
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={locale === 'pl' ? '/en' : '/pl'}
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Globe className="h-4 w-4 inline mr-2" />
            {locale === 'pl' ? 'English' : 'Polski'}
          </Link>
        </div>
      </div>
    </header>
  )
}