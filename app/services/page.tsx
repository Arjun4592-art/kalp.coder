import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import { serviceIconMap } from '@/components/icons/Icons'
import { techBrandIconMap } from '@/components/icons/BrandIcons'
import { services, techStack, industries, pricing } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development, mobile apps, custom software, UI/UX design, e-commerce, API integration, maintenance, and MVP development.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow='What We Do'
        title='End-to-end software development'
        description='From the first sketch to the final deployment — and everything after.'
      />

      <section className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((s, i) => {
            const Icon = serviceIconMap[s.icon as keyof typeof serviceIconMap]
            return (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <div className='group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h2 className='mt-5 font-display text-lg font-semibold'>
                    {s.title}
                  </h2>
                  <p className='mt-2 text-sm leading-relaxed text-[var(--text-muted)]'>
                    {s.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Tech stack */}
      <section className='border-y border-[var(--border)] bg-[var(--bg-elevated)]'>
        <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
          <SectionHeading
            eyebrow='Our Stack'
            title='Technology we work with'
            description='We pick the right tool for the job — not the trendiest one.'
            align='center'
          />
          <div className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {Object.entries(techStack).map(([category, items], i) => (
              <Reveal key={category} delay={i * 70}>
                <div className='h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6'>
                  <p className='font-mono-brand text-xs uppercase tracking-widest text-[var(--accent)]'>
                    {category}
                  </p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {items.map((item) => {
                      const Icon = techBrandIconMap[item]
                      return (
                        <span
                          key={item}
                          className='flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)]'
                        >
                          {Icon && <Icon className='h-4 w-4 shrink-0' />}
                          {item}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
        <SectionHeading
          eyebrow='Who We Serve'
          title='Built for businesses across industries'
          description='We adapt our process to your domain — not the other way around.'
        />
        <div className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 3) * 80}>
              <div className='h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6'>
                <h3 className='font-display text-base font-semibold'>
                  {ind.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-[var(--text-muted)]'>
                  {ind.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className='border-t border-[var(--border)] bg-[var(--bg-elevated)]'>
        <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
          <SectionHeading
            eyebrow='Investment'
            title='How much does it cost?'
            description="Every project is different, but here's a general starting point."
            align='center'
          />
          <div className='mt-14 grid gap-5 lg:grid-cols-3'>
            {pricing.map((p, i) => (
              <Reveal key={p.tier} delay={i * 90}>
                <div className='flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center'>
                  <h3 className='font-display text-base font-semibold'>
                    {p.tier}
                  </h3>
                  <p className='mt-4 font-display text-2xl font-semibold text-[var(--accent)]'>
                    {p.price}
                  </p>
                  <p className='mt-3 flex-1 text-sm text-[var(--text-muted)]'>
                    {p.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className='mt-12 flex justify-center'>
              <Button href='/contact'>
                Get an exact quote — free 30-min call
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
