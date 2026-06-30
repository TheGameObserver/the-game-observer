'use client'

import { useState, useMemo, useId } from 'react'
import type { ArticleMeta } from '@/lib/articles'
import ArticleCard from './ArticleCard'

interface SearchableArticleGridProps {
  articles: ArticleMeta[]
}

export default function SearchableArticleGrid({ articles }: SearchableArticleGridProps) {
  const [query, setQuery] = useState('')
  const searchId = useId()

  const filtered = useMemo(() => {
    if (!query.trim()) return articles
    const q = query.toLowerCase().trim()
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.competition.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    )
  }, [articles, query])

  return (
    <section id="articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24" aria-label="Articles section">
      {/* Section header + search */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-accent text-xs font-heading font-semibold tracking-widest uppercase mb-2">
            Latest Coverage
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary-text tracking-tight">
            All Articles
          </h2>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72 lg:w-80">
          <label htmlFor={searchId} className="sr-only">
            Search articles by title or competition
          </label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-secondary-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full bg-surface border border-border/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200"
            aria-label="Search articles by title, competition, or category"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-3 flex items-center text-secondary-text hover:text-primary-text transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      {query && (
        <p className="text-secondary-text text-sm mb-6" aria-live="polite">
          {filtered.length === 0
            ? 'No articles found.'
            : `${filtered.length} article${filtered.length === 1 ? '' : 's'} found for "${query}"`}
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-secondary-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-heading font-semibold text-lg text-primary-text mb-2">No articles found</h3>
          <p className="text-secondary-text text-sm">
            Try a different search term or{' '}
            <button
              onClick={() => setQuery('')}
              className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
            >
              clear the search
            </button>
          </p>
        </div>
      )}
    </section>
  )
}
