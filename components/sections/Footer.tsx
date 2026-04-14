import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, BookOpen } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/i18n'

export function Footer({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniel-gaszczyk/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/danielgaszczyk',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/DaGaszczyk',
      icon: Twitter,
    },
    {
      name: 'Substack',
      href: 'https://substack.com/@danielgaszczyk',
      icon: BookOpen,
    },
    {
      name: 'Email',
      href: 'mailto:hello@danielgaszczyk.com',
      icon: Mail,
    },
  ]

  const navLinks = [
    { label: t.nav.projects, href: `/${locale}/projects` },
    { label: t.nav.blog, href: `/${locale}/blog` },
    { label: t.nav.about, href: `/${locale}#about` },
    { label: t.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <footer className="relative z-10 border-t border-white/10 glass mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <span className="font-heading text-xl font-bold gradient-text">Daniel Gaszczyk</span>
            <p className="text-sm text-muted-foreground mt-2">{t.footer.tagline}</p>
          </div>

          {/* Nav links */}
          <div className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Daniel Gaszczyk. {t.footer.rights}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
