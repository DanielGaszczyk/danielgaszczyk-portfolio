import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
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
      href: 'https://twitter.com/danielgaszczyk',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:daniel.gaszzczyk@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-lg mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Daniel Gaszczyk. {t.footer.rights}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}