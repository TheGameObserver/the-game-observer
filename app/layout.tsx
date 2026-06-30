import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thegameobserver.com'),
  title: {
    default: 'The Game Observer — Football Analysis & Tactical Insights',
    template: '%s | The Game Observer',
  },
  description:
    'Premium football analysis, tactical breakdowns, and in-depth match reports. Covering World Cup 2026, major tournaments, and the beautiful game.',
  keywords: [
    'football analysis',
    'tactical insights',
    'match reports',
    'World Cup 2026',
    'football tactics',
    'football blog',
  ],
  authors: [{ name: 'Sty Paul' }],
  creator: 'Sty Paul',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thegameobserver.com',
    siteName: 'The Game Observer',
    title: 'The Game Observer — Football Analysis & Tactical Insights',
    description:
      'Premium football analysis, tactical breakdowns, and in-depth match reports.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Game Observer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Game Observer',
    description: 'Football Analysis • Tactical Insights • Match Reports',
    creator: '@thegameobserver',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`}>
      <body className="min-h-screen bg-background font-body text-primary-text antialiased">
        {children}
      </body>
    </html>
  )
}
