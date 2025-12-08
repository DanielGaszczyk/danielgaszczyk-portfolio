'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Code2, BookOpen, User, Mail, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type Locale } from '@/lib/i18n'

interface NavItem {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

export function FloatingNav({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: NavItem[] = [
    { href: `/${locale}`, icon: Home, label: 'Home' },
    { href: `/${locale}/projects`, icon: Code2, label: 'Projects' },
    { href: `/${locale}/blog`, icon: BookOpen, label: 'Blog' },
    { href: `/${locale}/about`, icon: User, label: 'About' },
    { href: `/${locale}/contact`, icon: Mail, label: 'Contact' },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
          style={{ opacity }}
        >
          <motion.div
            className="glass-card noise-texture px-6 py-3 flex items-center gap-2 shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.button
                  className={cn(
                    "relative p-3 rounded-xl transition-all duration-300",
                    "hover:bg-white/10 group"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />

                  {/* Tooltip */}
                  <motion.span
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg glass text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Ripple effect on click */}
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 2, opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </Link>
            ))}

            {/* Language switcher */}
            <div className="w-px h-6 bg-white/20 mx-2" />
            <Link href={locale === 'pl' ? '/en' : '/pl'}>
              <motion.button
                className="relative p-3 rounded-xl transition-all duration-300 hover:bg-white/10 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg glass text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {locale === 'pl' ? 'EN' : 'PL'}
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
