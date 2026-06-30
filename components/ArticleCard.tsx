import Image from 'next/image'
import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'
import { formatDate } from '@/lib/articles'

interface ArticleCardProps {
  article: ArticleMeta
  index?: number
}

const categoryColors: Record<string, string> = {
  'Tactical Analysis': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'Match Report': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Team Analysis': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  'Player Profile': 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  'Preview': 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'default': 'bg-accent/10 text-accent border-accent/20',
}

function getCategoryColor(category: string): string {
  return categoryColors[category] || categoryColors['default']
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <article
      className="group relative bg-surface rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 card-shine animate-slide-up flex flex-col"
      style={{
        animationDelay: `${index * 0.08}s`,
        animationFillMode: 'both',
      }}
    >
      {/* Thumbnail */}
      <Link
        href={`/articles/${article.slug}`}
        className="block relative h-52 sm:h-56 overflow-hidden flex-shrink-0"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={article.thumbnail}
          alt={article.thumbnailAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />

        {/* Competition badge on image */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-heading bg-background/80 backdrop-blur-sm text-primary-text border border-border/50">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {article.competition}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Category + Reading time */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium font-heading border ${getCategoryColor(article.category)}`}
          >
            {article.category}
          </span>
          <span className="text-xs text-secondary-text font-body tabular-nums">
            {article.readingTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-bold text-lg text-primary-text leading-snug mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
          <Link href={`/articles/${article.slug}`} className="focus:outline-none focus:underline">
            {article.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-secondary-text text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            {/* Author avatar placeholder */}
            <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <span className="text-accent text-xs font-bold font-heading">
                {article.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-primary-text leading-none mb-0.5">{article.author}</p>
              <time
                dateTime={article.date}
                className="text-xs text-secondary-text tabular-nums"
              >
                {formatDate(article.date)}
              </time>
            </div>
          </div>

          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium font-heading text-accent hover:text-accent-hover transition-colors duration-200 group/btn"
            aria-label={`Read article: ${article.title}`}
          >
            Read Article
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
