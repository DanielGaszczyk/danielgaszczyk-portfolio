import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n'

// Root URL has no content of its own — it always resolves to the default
// locale. Using next/navigation's `redirect()` in a server component emits
// a proper 307 at the edge (no HTML body, no client JS, no flash), which
// is what crawlers and social card parsers need to resolve the canonical
// URL correctly.
export default function RootPage() {
  redirect(`/${defaultLocale}`)
}
