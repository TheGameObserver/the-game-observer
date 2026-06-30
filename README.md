# The Game Observer

> Football Analysis • Tactical Insights • Match Reports

A premium, magazine-style football analysis blog built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **MDX**. Designed for performance, SEO, and beautiful long-form reading.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + @tailwindcss/typography |
| Content | MDX (gray-matter + next-mdx-remote) |
| Fonts | Poppins + Inter (Google Fonts via next/font) |
| Images | next/image with Unsplash |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Publishing a New Article

Simply create a new `.mdx` file in `content/articles/`:

```
content/
  articles/
    my-new-article.mdx   ← create this file
```

### Frontmatter fields

```yaml
---
title: "Article Title Here"
excerpt: "A one-paragraph summary of the article shown on the card and in meta tags."
competition: "FIFA World Cup 2026 — Group A"
category: "Match Report"          # Match Report | Tactical Analysis | Team Analysis | Player Profile | Preview
date: "2026-06-20"                # ISO date, newest first
thumbnail: "https://images.unsplash.com/photo-XXXX?w=1200&q=80"
thumbnailAlt: "Description of the thumbnail image"
author: "Sty Paul"
featured: false
---

Your MDX content here...
```

The article will be automatically:
- Added to the homepage grid
- Given a clean URL: `/articles/my-new-article`
- Indexed in the sitemap
- Given proper Open Graph metadata

---

## Project Structure

```
the-game-observer/
├── app/
│   ├── globals.css           # Global styles + Tailwind
│   ├── layout.tsx            # Root layout with fonts & metadata
│   ├── page.tsx              # Homepage (server component)
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Auto-generated sitemap.xml
│   ├── robots.ts             # robots.txt
│   └── articles/
│       └── [slug]/
│           └── page.tsx      # Individual article page
├── components/
│   ├── Logo.tsx              # SVG logo
│   ├── Navbar.tsx            # Sticky navigation
│   ├── Hero.tsx              # Homepage hero section
│   ├── ArticleCard.tsx       # Article card component
│   ├── SearchableArticleGrid.tsx  # Client-side search + grid
│   ├── Footer.tsx            # Site footer
│   ├── ReadingProgress.tsx   # Sticky reading progress bar
│   ├── ShareButtons.tsx      # Social sharing buttons
│   └── ArticleNavigation.tsx # Prev/Next article nav
├── content/
│   └── articles/             # MDX article files
│       ├── portugal-vs-congo.mdx
│       ├── usa-vs-paraguay.mdx
│       └── mexico-vs-south-africa.mdx
├── lib/
│   └── articles.ts           # Data layer: MDX parsing utilities
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## Deployment

### Deploy to Vercel (recommended)

#### Option A — Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

#### Option B — GitHub + Vercel Dashboard

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit: The Game Observer"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/the-game-observer.git
git push -u origin main
```

Then go to [vercel.com](https://vercel.com), import the repository, and deploy. No configuration required — `vercel.json` handles everything.

### Environment variables

No environment variables are required for the base setup. The site is fully static-capable.

If you add a CMS or API in the future, add variables to `.env.local` and the Vercel dashboard.

---

## Updating the Domain in Production

Replace `https://thegameobserver.com` with your actual domain in:

- `app/layout.tsx` — `metadataBase`
- `app/sitemap.ts` — `baseUrl`
- `app/robots.ts` — sitemap URL and host

---

## Performance

The site is optimised for a Lighthouse score of 95+:

- **Images**: Served via `next/image` with automatic WebP conversion, lazy loading, and blur placeholders
- **Fonts**: Self-hosted via `next/font/google` — zero layout shift
- **Static generation**: All article pages are statically generated at build time
- **Minimal JavaScript**: Client components are isolated to search, progress bar, and share buttons only

---

Built by **Sty Paul**
