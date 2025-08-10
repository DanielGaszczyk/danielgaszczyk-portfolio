import { ContactSection } from '@/components/sections/ContactSection'
import { type Locale } from '@/lib/i18n'

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  
  return <ContactSection locale={locale} />
}