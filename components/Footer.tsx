import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-surface/30" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" aria-label="The Game Observer — Home">
            <Logo size={34} showText={true} />
          </Link>

          {/* Tagline */}
          <p className="text-secondary-text text-sm text-center font-body">
            Football Analysis&nbsp;•&nbsp;Tactical Insights&nbsp;•&nbsp;Match Reports
          </p>

          {/* Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <Link
              href="/"
              className="text-secondary-text hover:text-accent text-sm font-heading transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/#articles"
              className="text-secondary-text hover:text-accent text-sm font-heading transition-colors duration-200"
            >
              Articles
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-text font-body">
          <p>
            &copy; {currentYear} The Game Observer. All rights reserved.
          </p>
          <p>
            Built by{' '}
            <span className="text-accent font-medium">Sty Paul</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
