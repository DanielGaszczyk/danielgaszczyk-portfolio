import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { SITE_URL, PAGE_PATHS, type PageKey } from '@/lib/site'

export const dynamic = 'force-static'
export const revalidate = false

/**
 * Sitemap lists ONLY routes that exist as real pages under app/[locale]/.
 *
 * The previous version also generated per-project and per-blog-post URLs
 * from lib/projects.ts / lib/blog.ts — but neither `/[locale]/projects/[id]`
 * nor `/[locale]/blog/[slug]` exists as a route. That produced 28 404s in
 * the sitemap and would have caused Google Search Console coverage issues.
 *
 * When per-project / per-post routes do exist, add them here explicitly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routeConfig: Array<{
    key: PageKey
    priority: number
    changeFrequency: 'weekly' | 'monthly'
  }> = [
    { key: 'home', priority: 1.0, changeFrequency: 'weekly' },
    { key: 'projects', priority: 0.9, changeFrequency: 'monthly' },
    { key: 'about', priority: 0.8, changeFrequency: 'monthly' },
    { key: 'contact', priority: 0.7, changeFrequency: 'monthly' },
    { key: 'blog', priority: 0.5, changeFrequency: 'monthly' },
  ]

  const entries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    routeConfig.forEach(({ key, priority, changeFrequency }) => {
      const path = PAGE_PATHS[key]
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            pl: `${SITE_URL}/pl${path}`,
            en: `${SITE_URL}/en${path}`,
          },
        },
      })
    })
  })

  return entries
}
