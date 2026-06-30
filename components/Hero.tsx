import Logo from './Logo'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden" aria-label="Hero section">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      {/* Pitch line grid overlay — subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38BDF8 1px, transparent 1px),
            linear-gradient(to bottom, #38BDF8 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs font-medium font-heading tracking-widest uppercase">
            World Cup 2026 Coverage
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-primary-text mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          See the Game{' '}
          <span className="text-gradient">Differently</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-secondary-text text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4 animate-slide-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Football Analysis&nbsp;•&nbsp;Tactical Insights&nbsp;•&nbsp;Match Reports
        </p>

        <p
          className="text-secondary-text/70 text-sm sm:text-base max-w-xl mx-auto animate-slide-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          Deep-dive analysis of the beautiful game — from tactical formations to
          individual brilliance. Every match, every angle.
        </p>

        {/* Decorative divider */}
        <div
          className="mt-12 flex items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <span className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-border" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
            <circle cx="8" cy="8" r="3" fill="#38BDF8" opacity="0.8" />
          </svg>
          <span className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  )
}
