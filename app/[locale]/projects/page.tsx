import type { Metadata } from 'next'
import Script from 'next/script'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { getTranslations, type Locale } from '@/lib/i18n'
import { buildMetadata, SITE_URL, SITE_NAME } from '@/lib/site'
import { BreadcrumbsJsonLd } from '@/components/seo/BreadcrumbsJsonLd'
import { getAllProjects } from '@/lib/projects'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale, page: 'projects' })
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)
  const projects = getAllProjects(locale)
  const trail = [{ name: t.projects.allTitle, path: '/projects' }]

  // ItemList JSON-LD: dense structured data, case-study friendly for
  // LLM crawlers (GEO). Each project is a CreativeWork pointing at its
  // canonical external URL. We keep the schema conservative — no
  // fabricated metrics, no ratings, no pricing. Just what's verifiable.
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${t.projects.allTitle} — ${SITE_NAME}`,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.longDescription || project.description,
        url: project.liveUrl || project.githubUrl || `${SITE_URL}/${locale}/projects`,
        creator: { '@id': `${SITE_URL}/#person` },
      },
    })),
  }
  const itemListJson = JSON.stringify(itemList).replace(/</g, '\\u003c')

  return (
    <>
      <BreadcrumbsJsonLd locale={locale} trail={trail} />
      <Script
        id="ld-projects-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: itemListJson }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-balance">
            {t.projects.allTitle}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.allSubtitle}
          </p>
        </div>
        <ProjectsGrid locale={locale} />
      </div>
    </>
  )
}
