'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" aria-label="The Game Observer — Home">
            <Logo size={36} showText={true} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#articles">Articles</NavLink>
            <a
              href="/#articles"
              className="px-4 py-2 rounded-full text-sm font-medium font-heading bg-accent text-background hover:bg-accent-hover transition-colors duration-200"
            >
              Read Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-secondary-text hover:text-primary-text hover:bg-surface transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-fade-in">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/#articles" onClick={() => setMenuOpen(false)}>Articles</MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-secondary-text hover:text-primary-text text-sm font-medium font-heading transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-3 rounded-lg text-secondary-text hover:text-primary-text hover:bg-surface transition-colors text-base font-medium font-heading"
    >
      {children}
    </Link>
  )
}
