import React from 'react'

interface LogoProps {
  size?: number
  showText?: boolean
  className?: string
}

export default function Logo({ size = 40, showText = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG: Eye integrated with football pitch centre circle */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The Game Observer logo"
        role="img"
      >
        {/* Outer circle — pitch boundary */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#38BDF8"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Centre circle — pitch marking */}
        <circle
          cx="20"
          cy="20"
          r="11"
          stroke="#38BDF8"
          strokeWidth="1.2"
          opacity="0.6"
        />
        {/* Horizontal halfway line */}
        <line
          x1="2"
          y1="20"
          x2="38"
          y2="20"
          stroke="#38BDF8"
          strokeWidth="1"
          opacity="0.3"
        />
        {/* Eye — upper lid arc */}
        <path
          d="M8 20 Q20 9 32 20"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Eye — lower lid arc */}
        <path
          d="M8 20 Q20 31 32 20"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Iris */}
        <circle cx="20" cy="20" r="5.5" fill="#38BDF8" opacity="0.15" stroke="#38BDF8" strokeWidth="1.8" />
        {/* Pupil */}
        <circle cx="20" cy="20" r="2.5" fill="#38BDF8" />
        {/* Highlight */}
        <circle cx="21.5" cy="18.5" r="1" fill="white" opacity="0.8" />
        {/* Centre spot */}
        <circle cx="20" cy="20" r="0.8" fill="#0F172A" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-heading font-bold tracking-tight text-primary-text"
            style={{ fontSize: size * 0.45 }}
          >
            The Game Observer
          </span>
          <span
            className="font-body text-accent"
            style={{ fontSize: size * 0.225, letterSpacing: '0.05em', marginTop: 2 }}
          >
            FOOTBALL ANALYSIS
          </span>
        </div>
      )}
    </div>
  )
}
