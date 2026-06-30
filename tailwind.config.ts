import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        surface: '#1E293B',
        'surface-hover': '#263548',
        'primary-text': '#F8FAFC',
        'secondary-text': '#94A3B8',
        accent: '#38BDF8',
        'accent-hover': '#7DD3FC',
        border: '#334155',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#CBD5E1',
            '--tw-prose-headings': '#F8FAFC',
            '--tw-prose-lead': '#94A3B8',
            '--tw-prose-links': '#38BDF8',
            '--tw-prose-bold': '#F8FAFC',
            '--tw-prose-counters': '#94A3B8',
            '--tw-prose-bullets': '#38BDF8',
            '--tw-prose-hr': '#334155',
            '--tw-prose-quotes': '#F8FAFC',
            '--tw-prose-quote-borders': '#38BDF8',
            '--tw-prose-captions': '#94A3B8',
            '--tw-prose-code': '#F8FAFC',
            '--tw-prose-pre-code': '#CBD5E1',
            '--tw-prose-pre-bg': '#1E293B',
            '--tw-prose-th-borders': '#334155',
            '--tw-prose-td-borders': '#334155',
            maxWidth: 'none',
            lineHeight: '1.85',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'h2, h3, h4': {
              fontFamily: 'var(--font-poppins)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontSize: '1.6rem',
              marginTop: '2.5em',
              marginBottom: '1em',
            },
            h3: {
              fontSize: '1.3rem',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            blockquote: {
              borderLeftWidth: '3px',
              borderLeftColor: '#38BDF8',
              backgroundColor: '#1E293B',
              paddingLeft: '1.5em',
              paddingTop: '0.75em',
              paddingBottom: '0.75em',
              paddingRight: '1em',
              borderRadius: '0 0.375rem 0.375rem 0',
              fontStyle: 'normal',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            img: {
              borderRadius: '0.5rem',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
