import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { type Locale } from '@/lib/i18n'
import { getBlogPosts } from '@/lib/blog'

export function BlogList({ locale }: { locale: Locale }) {
  const posts = getBlogPosts(locale)
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/${locale}/blog/${post.slug}`}>
            <Card variant="glass" className="hover:scale-[1.02] transition-all duration-300 cursor-pointer">
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
                <CardTitle className="text-2xl">{post.title}</CardTitle>
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
                  <span className="flex items-center gap-1 text-primary">
                    {locale === 'pl' ? 'Czytaj więcej' : 'Read more'}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}