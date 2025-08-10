import { BlogList } from '@/components/sections/BlogList'
import { type Locale } from '@/lib/i18n'

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {locale === 'pl' 
            ? 'Myśli o technologii, AI i przedsiębiorczości'
            : 'Thoughts on technology, AI, and entrepreneurship'}
        </p>
      </div>
      <BlogList locale={locale} />
    </div>
  )
}