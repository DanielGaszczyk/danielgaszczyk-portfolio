import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { getAllProjects } from '@/lib/projects'
import { getBlogPosts } from '@/lib/blog'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danielgaszczyk.com'
  
  const routes = ['', '/projects', '/blog', '/about', '/contact']
  const entries: MetadataRoute.Sitemap = []

  // Add main routes for each locale
  locales.forEach(locale => {
    routes.forEach(route => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })

    // Add project pages
    const projects = getAllProjects(locale)
    projects.forEach(project => {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })

    // Add blog posts
    const posts = getBlogPosts(locale)
    posts.forEach(post => {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly',
        priority: 0.5,
      })
    })
  })

  return entries
}