import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-fade-in">
          <div className="flex justify-center mb-8">
            <Logo size={60} showText={false} />
          </div>
          <h1 className="font-heading font-extrabold text-6xl text-gradient mb-4">404</h1>
          <h2 className="font-heading font-bold text-2xl text-primary-text mb-4">
            Page Not Found
          </h2>
          <p className="text-secondary-text leading-relaxed mb-8">
            This article seems to have drifted off the pitch. Head back to the
            homepage to find what you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-heading font-semibold hover:bg-accent-hover transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
