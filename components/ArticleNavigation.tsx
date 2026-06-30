import Link from 'next/link'
import Image from 'next/image'
import type { ArticleMeta } from '@/lib/articles'

interface ArticleNavigationProps {
  prev: ArticleMeta | null
  next: ArticleMeta | null
}

export default function ArticleNavigation({ prev, next }: ArticleNavigationProps) {
  if (!prev && !next) return null

  return (
    <nav
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-border/50"
      aria-label="Article navigation"
    >
      {prev ? (
        <NavCard article={prev} direction="prev" />
      ) : (
        <div />
      )}
      {next ? (
        <NavCard article={next} direction="next" />
      ) : (
        <div />
      )}
    </nav>
  )
}

function NavCard({
  article,
  direction,
}: {
  article: ArticleMeta
  direction: 'prev' | 'next'
}) {
  const isPrev = direction === 'prev'

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex items-center gap-4 p-4 rounded-xl bg-surface border border-border/50 hover:border-accent/30 transition-all duration-200 hover:shadow-lg hover:shadow-accent/5"
      aria-label={`${isPrev ? 'Previous' : 'Next'} article: ${article.title}`}
    >
      {/* Thumbnail */}
      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={article.thumbnail}
          alt={article.thumbnailAlt}
          fill
          sizes="64px"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-secondary-text font-heading font-medium uppercase tracking-wider mb-1 flex items-center gap-1">
          {isPrev ? (
            <>
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </>
          ) : (
            <>
              Next
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </p>
        <p className="text-sm font-heading font-semibold text-primary-text group-hover:text-accent transition-colors duration-200 line-clamp-2 leading-snug">
          {article.title}
        </p>
      </div>
    </Link>
  )
}
