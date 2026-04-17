import type { Metadata } from 'next'
import { BlogList } from '@/components/sections/BlogList'
import { getTranslations, type Locale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/site'
import { BreadcrumbsJsonLd } from '@/components/seo/BreadcrumbsJsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  // Blog is currently stubs only — no per-post pages, no finished content.
  // We still index /blog (it's a real page with a list view), but we
  // explicitly flag low crawl priority in sitemap.ts and will want to
  // add `robots: { index: false }` here once we confirm the list shows
  // "coming soon" rather than clickable dead stubs.
  return buildMetadata({ locale, page: 'blog' })
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)
  const trail = [{ name: t.blog.title, path: '/blog' }]

  return (
    <>
      <BreadcrumbsJsonLd locale={locale} trail={trail} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-balance">
            {t.blog.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>
        <BlogList locale={locale} />
      </div>
    </>
  )
}
