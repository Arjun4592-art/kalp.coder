'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { nav } from '@/lib/content'
import { BracketLogo, CloseIcon, MenuIcon } from './icons/Icons'
import ThemeToggle from './ThemeToggle'
import Button from './Button'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState(pathname)

  // Close the mobile menu on navigation. Adjusting state during render
  // (rather than in an effect) avoids an extra render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    if (open) setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8'>
        <Link
          href='/'
          className='flex items-center gap-2.5 font-display text-lg font-semibold'
        >
          <BracketLogo className='h-7 w-7' />
          <span>
            Kalp<span className='text-[var(--accent)]'>Coder</span>
          </span>
        </Link>

        <div className='hidden items-center gap-1 lg:flex'>
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? 'text-[var(--text)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {item.label}
                {active && (
                  <span className='absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-[var(--accent)]' />
                )}
              </Link>
            )
          })}
        </div>

        <div className='flex items-center gap-3'>
          <ThemeToggle className='hidden sm:flex' />
          <Button
            href='/contact'
            className='hidden lg:inline-flex'
            withArrow={false}
          >
            Start Your Project
          </Button>
          <button
            type='button'
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] lg:hidden'
          >
            {open ? (
              <CloseIcon className='h-5 w-5' />
            ) : (
              <MenuIcon className='h-5 w-5' />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b border-[var(--border)] bg-[var(--bg)] transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col gap-1 px-5 pb-6 pt-2'>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-3 text-base font-medium ${
                pathname === item.href
                  ? 'bg-[var(--card)] text-[var(--text)]'
                  : 'text-[var(--text-muted)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className='mt-3 flex items-center gap-3'>
            <Button
              href='/contact'
              withArrow={false}
              className='flex-1 justify-center'
            >
              Start Your Project
            </Button>
            <ThemeToggle className='sm:hidden' />
          </div>
        </div>
      </div>
    </header>
  )
}
