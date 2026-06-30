import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SearchableArticleGrid from '@/components/SearchableArticleGrid'
import Footer from '@/components/Footer'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'The Game Observer — Football Analysis & Tactical Insights',
  description:
    'Premium football analysis, tactical breakdowns, and in-depth match reports covering World Cup 2026 and major tournaments.',
}

// Revalidate once per hour in production
export const revalidate = 3600

export default function HomePage() {
  const articles = getAllArticles()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchableArticleGrid articles={articles} />
      </main>
      <Footer />
    </>
  )
}
