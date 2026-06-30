import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import ShareButtons from '@/components/ShareButtons'
import ArticleNavigation from '@/components/ArticleNavigation'
import {
  getArticleBySlug,
  getAllSlugs,
  getAdjacentArticles,
  formatDate,
} from '@/lib/articles'

// Static params for all articles
export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Dynamic metadata per article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${article.title} | The Game Observer`,
    description: article.excerpt,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.thumbnail,
          alt: article.thumbnailAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnail],
    },
  }
}

// MDX components override for rich rendering
const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="font-heading font-bold text-2xl sm:text-3xl text-primary-text mt-12 mb-4 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="font-heading font-bold text-xl sm:text-2xl text-primary-text mt-8 mb-3 tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="text-[#CBD5E1] leading-[1.85] text-base sm:text-lg my-5">
      {children}
    </p>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="border-l-4 border-accent bg-surface rounded-r-xl px-6 py-4 my-8 not-italic"
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="text-primary-text font-semibold">
      {children}
    </strong>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="my-5 space-y-2 list-none pl-0">
      {children}
    </ul>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="flex items-start gap-3 text-[#CBD5E1] text-base sm:text-lg leading-relaxed">
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </li>
  ),
  hr: () => (
    <hr className="border-0 border-t border-border/50 my-10" />
  ),
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt || ''}
      {...props}
      className="w-full rounded-xl my-8 border border-border/50"
      loading="lazy"
    />
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      {...props}
      className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const { prev, next } = getAdjacentArticles(slug)

  return (
    <>
      <ReadingProgress />
      <Navbar />

      <main>
        {/* Hero image */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[320px] overflow-hidden">
          <Image
            src={article.thumbnail}
            alt={article.thumbnailAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent" />

          {/* Back button on image */}
          <div className="absolute top-20 sm:top-24 left-4 sm:left-8 lg:left-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/70 backdrop-blur-sm border border-border/60 text-sm font-heading font-medium text-secondary-text hover:text-primary-text hover:border-accent/40 transition-all duration-200"
              aria-label="Back to all articles"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-16">
          {/* Article meta card */}
          <div className="mb-10">
            {/* Competition + Category */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-heading bg-accent/10 text-accent border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {article.competition}
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium font-heading bg-surface border border-border/60 text-secondary-text">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-text tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-secondary-text text-lg leading-relaxed mb-6 font-body">
              {article.excerpt}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-secondary-text border-y border-border/50 py-4">
              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-bold font-heading">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-primary-text font-heading">{article.author}</span>
              </div>

              <span className="text-border hidden sm:block">|</span>

              {/* Date */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-secondary-text/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>

              {/* Reading time */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-secondary-text/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="tabular-nums">{article.readingTime}</span>
              </div>
            </div>
          </div>

          {/* MDX Content */}
          <article className="font-body">
            <MDXRemote source={article.content} components={mdxComponents} />
          </article>

          {/* Share section */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <ShareButtons title={article.title} />
          </div>

          {/* Prev / Next navigation */}
          <ArticleNavigation prev={prev} next={next} />
        </div>
      </main>

      <Footer />
    </>
  )
}
