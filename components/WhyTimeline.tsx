'use client'

import { useEffect, useRef, useState } from 'react'
import { whyIconMap } from '@/components/icons/Icons'

type TimelineItem = {
  icon: keyof typeof whyIconMap
  title: string
  body: string
}

export default function WhyTimeline({
  items,
}: {
  items: readonly TimelineItem[]
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([])
  const desktopItemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [progress, setProgress] = useState(0) // 0 -> 1, how much of the line is "filled"
  const [activeCount, setActiveCount] = useState(0) // how many nodes are lit up
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion.current) {
      setProgress(1)
      setActiveCount(items.length)
      mobileItemRefs.current.forEach((el) => el?.classList.add('is-visible'))
      return
    }

    // Per-item reveal, staggered as each node scrolls into view
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index)
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            setActiveCount((c) => Math.max(c, idx + 1))
          }
        })
      },
      { threshold: 0.4, rootMargin: '0px 0px -10% 0px' },
    )
    mobileItemRefs.current.forEach((el) => el && revealObserver.observe(el))
    desktopItemRefs.current.forEach((el) => el && revealObserver.observe(el))

    // Scroll-linked progress line fill, based on section position in viewport
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // start filling when top enters bottom of viewport, finish when bottom hits ~40% of viewport
      const start = vh * 0.85
      const end = vh * 0.35
      const traveled = start - rect.top
      const pct = Math.min(
        1,
        Math.max(0, traveled / (rect.height + start - end)),
      )
      setProgress(pct)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const n = items.length
  // Wave geometry lives in a 1000x260 unit space; every position below is
  // expressed as a % of that space, so the SVG (preserveAspectRatio="none")
  // and the absolutely-positioned node/text blocks always line up exactly,
  // regardless of the rendered container's real pixel size.
  const TOP_Y = 54 // top rail of the signal trace
  const BOT_Y = 206 // bottom rail of the signal trace
  const topPct = (TOP_Y / 260) * 100
  const botPct = (BOT_Y / 260) * 100

  const points = items.map((_, i) => ({
    x: ((i + 0.5) / n) * 1000,
    y: i % 2 === 0 ? TOP_Y : BOT_Y,
  }))

  const pathD = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`
      const prev = points[i - 1]
      const midX = (prev.x + p.x) / 2
      return `C ${midX} ${prev.y}, ${midX} ${p.y}, ${p.x} ${p.y}`
    })
    .join(' ')

  return (
    <div ref={sectionRef} className='relative mt-16'>
      {/* track (background line), mobile: vertical */}
      <div
        aria-hidden
        className='absolute left-[19px] top-2 bottom-2 w-[2px] bg-[var(--border)] lg:hidden'
      />
      {/* progress (filled line), mobile: vertical, grows downward */}
      <div
        aria-hidden
        className='absolute left-[19px] top-2 w-[2px] origin-top bg-[var(--accent)] transition-[height] duration-300 ease-out lg:hidden'
        style={{ height: `calc((100% - 16px) * ${progress})` }}
      />

      {/* mobile / tablet list */}
      <div className='grid gap-10 lg:hidden'>
        {items.map((item, i) => {
          const Icon = whyIconMap[item.icon]
          const lit = i < activeCount
          return (
            <div
              key={item.title}
              ref={(el) => {
                mobileItemRefs.current[i] = el
              }}
              data-index={i}
              className='timeline-item timeline-item--slide relative pl-14'
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                className={`node absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[var(--card)] transition-colors duration-500 ${
                  lit
                    ? 'border-[var(--accent)] text-[var(--accent)]'
                    : 'border-[var(--border)] text-[var(--text-muted)]'
                }`}
              >
                <Icon className='h-4 w-4' />
                <span
                  className={`absolute -inset-1 rounded-full ring-2 transition-opacity duration-500 ${
                    lit
                      ? 'opacity-100 ring-[var(--accent)]/25'
                      : 'opacity-0 ring-transparent'
                  }`}
                  aria-hidden
                />
              </div>
              <span className='font-mono-brand text-[11px] uppercase tracking-[0.15em] text-[var(--accent)]'>
                Step {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className='mt-1.5 font-display text-sm font-semibold sm:text-base'>
                {item.title}
              </h3>
              <p className='mt-2 text-xs leading-relaxed text-[var(--text-muted)] sm:text-[13px]'>
                {item.body}
              </p>
            </div>
          )
        })}
      </div>

      {/* desktop: winding signal trace */}
      <div className='relative hidden lg:block' style={{ height: 460 }}>
        <svg
          aria-hidden
          className='absolute inset-0 h-full w-full'
          viewBox='0 0 1000 260'
          preserveAspectRatio='none'
        >
          <path
            d={pathD}
            fill='none'
            stroke='var(--border)'
            strokeWidth='2'
            vectorEffect='non-scaling-stroke'
          />
          <path
            d={pathD}
            fill='none'
            stroke='var(--accent)'
            strokeWidth='2'
            vectorEffect='non-scaling-stroke'
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress}
            style={{ filter: 'drop-shadow(0 0 6px var(--accent))' }}
          />
          {!reducedMotion.current && (
            <circle
              r='4'
              fill='var(--accent)'
              style={{ filter: 'drop-shadow(0 0 5px var(--accent))' }}
            >
              <animateMotion
                dur='7s'
                repeatCount='indefinite'
                path={pathD}
                rotate='auto'
              />
            </circle>
          )}
        </svg>

        {items.map((item, i) => {
          const Icon = whyIconMap[item.icon]
          const lit = i < activeCount
          const isTop = i % 2 === 0
          const leftPct = ((i + 0.5) / n) * 100
          return (
            <div
              key={item.title}
              ref={(el) => {
                desktopItemRefs.current[i] = el
              }}
              data-index={i}
              className={`absolute w-[19%] text-center ${
                isTop
                  ? 'flex flex-col items-center'
                  : 'flex flex-col-reverse items-center'
              }`}
              style={{
                left: `${leftPct}%`,
                top: isTop ? `${topPct}%` : `${botPct}%`,
                transform: isTop
                  ? 'translate(-50%, 0)'
                  : 'translate(-50%, -100%)',
              }}
            >
              <div
                className={`node relative flex h-11 w-11 items-center justify-center rounded-full border-2 bg-[var(--bg-elevated)] transition-colors duration-500 ${
                  lit
                    ? 'border-[var(--accent)] text-[var(--accent)]'
                    : 'border-[var(--border)] text-[var(--text-muted)]'
                }`}
              >
                <Icon className='h-4 w-4' />
                <span
                  className={`absolute -inset-1 rounded-full ring-2 transition-opacity duration-500 ${
                    lit
                      ? 'opacity-100 ring-[var(--accent)]/25'
                      : 'opacity-0 ring-transparent'
                  }`}
                  aria-hidden
                />
              </div>
              <div className={isTop ? 'mt-4' : 'mb-4'}>
                <span className='font-mono-brand text-[11px] uppercase tracking-[0.15em] text-[var(--accent)]'>
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className='mt-1.5 font-display text-sm font-semibold sm:text-base'>
                  {item.title}
                </h3>
                <p className='mt-2 text-xs leading-relaxed text-[var(--text-muted)] sm:text-[13px]'>
                  {item.body}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .timeline-item {
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .timeline-item--slide {
          transform: translateY(18px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }
        .timeline-item.is-visible {
          opacity: 1;
        }
        .timeline-item--slide.is-visible {
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .timeline-item {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}
