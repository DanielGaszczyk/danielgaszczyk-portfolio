'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { getTranslations, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function ContactSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:daniel.gaszczyk@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const contactInfo = {
    pl: [
      { icon: Mail, label: 'Email', value: 'daniel.gaszczyk@gmail.com' },
      { icon: MapPin, label: 'Lokalizacja', value: 'Polska' },
      { icon: Phone, label: 'Dostępność', value: 'Otwarte kalendarz' },
    ],
    en: [
      { icon: Mail, label: 'Email', value: 'daniel.gaszczyk@gmail.com' },
      { icon: MapPin, label: 'Location', value: 'Poland' },
      { icon: Phone, label: 'Availability', value: 'Calendar open' },
    ],
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-t from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card variant="glass" className="animate-fade-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  {t.contact.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo[locale].map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.label}
                  variant="glass"
                  className={cn(
                    'animate-fade-up hover:scale-105 transition-all duration-300'
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <Card variant="glass" className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">
                  {locale === 'pl' ? 'Umów spotkanie' : 'Schedule a Meeting'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {locale === 'pl'
                    ? 'Zarezerwuj czas w moim kalendarzu'
                    : 'Book a time in my calendar'}
                </p>
                <a
                  href="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-full">
                    {locale === 'pl' ? 'Otwórz kalendarz' : 'Open Calendar'}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}