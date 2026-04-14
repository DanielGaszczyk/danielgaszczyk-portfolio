import Link from 'next/link'
import { BookOpen, Github, Linkedin, Mail, Twitter } from 'lucide-react'
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
    { label: t.nav.about, href: `/${locale}/about` },
    { label: t.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <footer className="relative z-10 mt-10 border-t border-white/10">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start">
          <div>
            <span className="eyebrow mb-4">Daniel Gaszczyk</span>
            <p className="max-w-[34rem] text-base leading-relaxed text-foreground/60">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="link-fade text-sm text-foreground/50">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-fade inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground/50"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-foreground/40">
          © {currentYear} Daniel Gaszczyk. {t.footer.rights}.
        </div>
      </div>
    </footer>
  )
}
