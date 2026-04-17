import Script from 'next/script'
import { SITE_URL } from '@/lib/site'
import type { Locale } from '@/lib/i18n'

/**
 * Renders a BreadcrumbList JSON-LD block. Pass a list of {name, path}
 * where path is relative to the locale root (e.g. '/projects'). Home is
 * prepended for you.
 *
 * Note: next/script's `afterInteractive` strategy still emits the tag
 * in SSR HTML — it only controls browser execution timing. Google's
 * crawler sees the JSON-LD on first fetch.
 */
export function BreadcrumbsJsonLd({
  locale,
  trail,
}: {
  locale: Locale
  trail: Array<{ name: string; path: string }>
}) {
  const homeName = locale === 'pl' ? 'Strona główna' : 'Home'
  const items = [
    { name: homeName, path: '' },
    ...trail,
  ].map((item, i) => ({
    '@type': 'ListItem' as const,
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}/${locale}${item.path}`,
  }))

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }

  // Escape `<` inside JSON values so no value can close the script tag.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')

  return (
    <Script
      id="ld-breadcrumbs"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
