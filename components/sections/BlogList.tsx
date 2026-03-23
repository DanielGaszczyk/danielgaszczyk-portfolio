import { Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { getTranslations, type Locale } from '@/lib/i18n'
import { getBlogPosts } from '@/lib/blog'

export function BlogList({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  const posts = getBlogPosts(locale)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.slug} className="relative">
            <Card variant="glass" className="transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString(locale === 'pl' ? 'pl-PL' : 'en-US')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime}
                  </span>
                </div>
                <CardTitle className="text-2xl font-heading">{post.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Coming Soon overlay */}
            <div className="absolute inset-0 rounded-2xl bg-background/60 backdrop-blur-[2px] flex items-center justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-1.5 tracking-wide">
                {t.blog.comingSoon}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
