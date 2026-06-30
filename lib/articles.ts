import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleMeta {
  slug: string
  title: string
  excerpt: string
  competition: string
  category: string
  date: string
  readingTime: string
  thumbnail: string
  thumbnailAlt: string
  author: string
  featured?: boolean
}

export interface Article extends ArticleMeta {
  content: string
}

function calculateReadingTime(content: string): string {
  // Strip MDX/HTML tags for word count
  const text = content.replace(/<[^>]+>/g, '').replace(/\*+|#+|`+/g, '')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 220
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute))
  return `${minutes} min read`
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        competition: data.competition as string,
        category: data.category as string,
        date: data.date as string,
        readingTime: calculateReadingTime(content),
        thumbnail: data.thumbnail as string,
        thumbnailAlt: (data.thumbnailAlt as string) || (data.title as string),
        author: (data.author as string) || 'Sty Paul',
        featured: (data.featured as boolean) || false,
      } satisfies ArticleMeta
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

  return articles
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    competition: data.competition as string,
    category: data.category as string,
    date: data.date as string,
    readingTime: calculateReadingTime(content),
    thumbnail: data.thumbnail as string,
    thumbnailAlt: (data.thumbnailAlt as string) || (data.title as string),
    author: (data.author as string) || 'Sty Paul',
    featured: (data.featured as boolean) || false,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}

export function getAdjacentArticles(
  currentSlug: string
): { prev: ArticleMeta | null; next: ArticleMeta | null } {
  const articles = getAllArticles()
  const currentIndex = articles.findIndex((a) => a.slug === currentSlug)

  return {
    prev: currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null,
    next: currentIndex > 0 ? articles[currentIndex - 1] : null,
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
