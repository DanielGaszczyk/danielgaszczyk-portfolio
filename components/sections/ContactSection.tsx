'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getTranslations, type Locale } from '@/lib/i18n'
import { GlassCard } from '@/components/ui/GlassCard'
import { CalendarEmbed } from '@/components/ui/CalendarEmbed'

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
    const mailtoLink = `mailto:daniel.gaszzczyk@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const contactInfo = {
    pl: [
      { icon: Mail, label: 'Email', value: 'daniel.gaszzczyk@gmail.com' },
      { icon: MapPin, label: 'Lokalizacja', value: 'Polska' },
      { icon: Phone, label: 'Dostępność', value: 'Kalendarz' },
    ],
    en: [
      { icon: Mail, label: 'Email', value: 'daniel.gaszzczyk@gmail.com' },
      { icon: MapPin, label: 'Location', value: 'Poland' },
      { icon: Phone, label: 'Availability', value: 'Calendar' },
    ],
  }

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-black mb-6 tracking-tight">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group bg-white text-black hover:bg-white/90">
                  <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  {t.contact.form.send}
                </Button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Calendar Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-0 overflow-hidden h-full">
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold mb-2">
                    {locale === 'pl' ? 'Zarezerwuj rozmowę' : 'Schedule a Meeting'}
                  </h3>
                  <p className="text-foreground/70">
                    {locale === 'pl'
                      ? 'Wybierz dogodny termin w moim kalendarzu'
                      : 'Pick a convenient time in my calendar'}
                  </p>
                </div>
                <CalendarEmbed />
              </GlassCard>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo[locale].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <GlassCard
                    className="flex items-center space-x-6 hover:bg-white/10 transition-colors h-full"
                  >
                    <div className="p-4 rounded-full bg-white/5 border border-white/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-xl font-medium">{item.value}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
