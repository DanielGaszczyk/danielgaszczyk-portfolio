import type { Metadata } from 'next'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { type Locale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/site'
import { BreadcrumbsJsonLd } from '@/components/seo/BreadcrumbsJsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale, page: 'about' })
}

// FAQ JSON-LD — LLM crawlers cite Q&A-structured content more readily.
// Questions match real-world queries about Daniel; answers constrained
// to verified claims only (no fabricated specifics).
function buildFaq(locale: Locale) {
  const items = locale === 'pl' ? [
    { q: 'Kim jest Daniel Gaszczyk?',
      a: 'Daniel Gaszczyk to przedsiębiorca technologiczny i konsultant AI z ponad 5-letnim doświadczeniem w budowaniu produktów na styku AI i biznesu. Współtwórca startupu TeamFeedback.' },
    { q: 'Czym jest TeamFeedback?',
      a: 'TeamFeedback to narzędzie do feedbacku 360 stopni, oceny pracownika i ankiet zaangażowania wspierane przez AI. Produkt pozyskał około miliona złotych finansowania z funduszy UE i posiada certyfikat ISO 27001.' },
    { q: 'Dla kogo Daniel świadczy konsulting AI?',
      a: 'Głównie dla polskich MŚP, które chcą wdrożyć praktyczne rozwiązania AI bez dużych inwestycji. Daniel oferuje audyty procesów, prototypy (PoC) i pełne wdrożenia z ROI w 3–6 miesięcy.' },
    { q: 'Jakie certyfikaty posiada Daniel?',
      a: 'Daniel posiada certyfikat Microsoft Azure AI.' },
  ] : [
    { q: 'Who is Daniel Gaszczyk?',
      a: 'Daniel Gaszczyk is a tech entrepreneur and AI consultant with over 5 years of experience building products at the intersection of AI and business. Co-founder of the startup TeamFeedback.' },
    { q: 'What is TeamFeedback?',
      a: 'TeamFeedback is an AI-powered 360-degree feedback, employee assessment and engagement survey tool. The product secured around 1 million PLN in EU funding and holds ISO 27001 security certification.' },
    { q: 'Who does Daniel provide AI consulting for?',
      a: 'Primarily Polish SMEs looking to implement practical AI solutions without large upfront investment. Daniel offers process audits, prototypes (PoCs), and full implementations with ROI in 3–6 months.' },
    { q: 'What certifications does Daniel hold?',
      a: 'Daniel holds a Microsoft Azure AI certification.' },
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const trail = [{ name: locale === 'pl' ? 'O mnie' : 'About', path: '/about' }]
  // Escape `<` so no JSON value can accidentally close the script tag.
  const faqJson = JSON.stringify(buildFaq(locale)).replace(/</g, '\\u003c')

  return (
    <>
      <BreadcrumbsJsonLd locale={locale} trail={trail} />
      {/* React 19 renders a string child inside <script> as a text node,
          which is what JSON-LD needs. Inline text instead of
          dangerouslySetInnerHTML keeps static analysis happy. */}
      <script type="application/ld+json">{faqJson}</script>
      <AboutSection locale={locale} />
      <SkillsSection locale={locale} />
    </>
  )
}
