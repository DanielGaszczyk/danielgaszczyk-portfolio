'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Header({ locale }: { locale: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = getTranslations(locale)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Get the language switch URL by replacing the current locale in the pathname
  const getLanguageSwitchUrl = () => {
    const newLocale = locale === 'pl' ? 'en' : 'pl'
    // Replace the locale segment in the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
  }

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.projects, href: `/${locale}/projects` },
    { name: t.nav.blog, href: `/${locale}/blog` },
    { name: t.nav.about, href: `/${locale}/about` },
    { name: t.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href={`/${locale}`}
              className="text-2xl font-heading font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              Daniel<span className="text-primary">.</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors px-4 py-2 rounded-full hover:bg-white/5',
                  pathname === item.href
                    ? 'text-primary bg-white/10'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href={getLanguageSwitchUrl()}
              className="hidden sm:block"
            >
              <Button variant="ghost" size="sm" className="hover:bg-white/10 rounded-full">
                <Globe className="h-4 w-4 mr-2" />
                {locale === 'pl' ? 'EN' : 'PL'}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-white/10 rounded-full"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary bg-white/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-white/5'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={getLanguageSwitchUrl()}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe className="h-4 w-4 inline mr-2" />
                {locale === 'pl' ? 'English' : 'Polski'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
