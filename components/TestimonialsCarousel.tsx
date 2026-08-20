'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowIcon, StarIcon } from '@/components/icons/Icons'
import { testimonialAvatarPalette } from '@/lib/content'

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  result?: string
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function TestimonialsCarousel({
  items,
}: {
  items: readonly Testimonial[]
}) {
  const n = items.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback((i: number) => setIndex(((i % n) + n) % n), [n])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // autoplay, paused on hover/focus/touch
  useEffect(() => {
    if (paused || n <= 1) return
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reducedMotion) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [paused, next, n])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 40) prev()
    else if (delta < -40) next()
    touchStartX.current = null
  }

  return (
    <div
      className='relative'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className='overflow-hidden'
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className='flex transition-transform duration-500 ease-out'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t, i) => {
            const color =
              testimonialAvatarPalette[i % testimonialAvatarPalette.length]
            return (
              <div key={t.name + i} className='w-full shrink-0 px-1 sm:px-2'>
                <div className='mx-auto flex h-full max-w-2xl flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9'>
                  <div className='flex gap-1 text-[var(--accent)]'>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon key={idx} className='h-4 w-4' />
                    ))}
                  </div>
                  <p className='mt-4 text-base leading-relaxed text-[var(--text)] sm:text-lg'>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className='mt-7 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-5'>
                    <div className='flex items-center gap-3'>
                      <div
                        className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold'
                        style={{
                          background: `${color}22`,
                          color,
                          border: `1px solid ${color}55`,
                        }}
                        aria-hidden
                      >
                        {initials(t.name)}
                      </div>
                      <div>
                        <p className='text-sm font-semibold'>{t.name}</p>
                        <p className='text-xs text-[var(--text-muted)]'>
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                    {t.result && (
                      <span className='hidden shrink-0 rounded-full bg-[var(--accent-soft)] px-3 py-1 font-mono-brand text-[11px] text-[var(--accent)] sm:inline-block'>
                        {t.result}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {n > 1 && (
        <>
          <button
            type='button'
            onClick={prev}
            aria-label='Previous testimonial'
            className='absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:flex md:-translate-x-5'
          >
            <ArrowIcon className='h-4 w-4 rotate-180' />
          </button>
          <button
            type='button'
            onClick={next}
            aria-label='Next testimonial'
            className='absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:flex md:translate-x-5'
          >
            <ArrowIcon className='h-4 w-4' />
          </button>

          <div className='mt-8 flex items-center justify-center gap-2'>
            {items.map((t, i) => (
              <button
                key={t.name + i}
                type='button'
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className='rounded-full transition-all duration-300'
                style={{
                  width: i === index ? 22 : 8,
                  height: 8,
                  background: i === index ? 'var(--accent)' : 'var(--border)',
                }}
              />
            ))}
          </div>

          {/* mobile prev/next, shown below the dots since edge arrows are hidden on small screens */}
          <div className='mt-5 flex justify-center gap-3 sm:hidden'>
            <button
              type='button'
              onClick={prev}
              aria-label='Previous testimonial'
              className='rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text)]'
            >
              <ArrowIcon className='h-4 w-4 rotate-180' />
            </button>
            <button
              type='button'
              onClick={next}
              aria-label='Next testimonial'
              className='rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text)]'
            >
              <ArrowIcon className='h-4 w-4' />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
