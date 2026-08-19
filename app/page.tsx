import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import Marquee from '@/components/Marquee'
import TerminalHero from '@/components/TerminalHero'
import WhyTimeline from '@/components/WhyTimeline'
import StatsStrip from '@/components/StatsStrip'
import { serviceIconMap, StarIcon } from '@/components/icons/Icons'
import {
  services,
  process,
  whyChooseUs,
  stats,
  testimonials,
  techStack,
} from '@/lib/content'

const techFlat = Object.values(techStack).flat()

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className='relative overflow-hidden border-b border-[var(--border)]'>
        <div className='grid-noise absolute inset-0' />
        <div className='relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-32'>
          <div>
            <Reveal>
              <span className='font-mono-brand text-xs uppercase tracking-[0.2em] text-[var(--accent)]'>
                Software Development Agency
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className='mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]'>
                We Build Software That Moves Your Business Forward
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className='mt-6 max-w-xl text-balance text-base leading-relaxed text-[var(--text-muted)] sm:text-lg'>
                Kalp Coder is a full-service software development agency helping
                startups and businesses design, build, and scale digital
                products that actually work — on time, on budget, and built to
                last.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className='mt-9 flex flex-wrap items-center gap-4'>
                <Button href='/contact'>Get a Free Consultation</Button>
                <Button href='/portfolio' variant='secondary'>
                  See Our Work
                </Button>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className='mt-8 text-sm text-[var(--text-muted)]'>
                Trusted by founders, startups, and growing businesses to turn
                ideas into working products.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className='lg:pl-6'>
            <TerminalHero />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Tech marquee (white band) ---------------- */}
      <section className='border-b border-[var(--border)] bg-white/98 py-6'>
        <Marquee items={techFlat} light />
      </section>

      {/* ---------------- About teaser ---------------- */}
      <section className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-20'>
          <SectionHeading
            eyebrow='Who We Are'
            title="Good software shouldn't be complicated to get."
            description="We're a team of developers, designers, and problem-solvers who've worked with early-stage founders building their first MVP and established businesses modernizing their systems. In every project, our job is the same: understand the problem deeply, then build the simplest, most reliable solution for it."
          />
          <Reveal delay={120}>
            <div className='rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8'>
              <p className='text-lg leading-relaxed text-[var(--text)]'>
                &ldquo;We&apos;re not a factory that churns out templated
                websites. Every project starts with a conversation about your
                business, not your tech stack.&rdquo;
              </p>
              <div className='mt-8'>
                <Button href='/about' variant='ghost'>
                  More about our approach
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className='border-y border-[var(--border)] bg-[var(--bg-elevated)]'>
        <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
          <SectionHeading
            eyebrow='What We Do'
            title='End-to-end software development'
            description='From the first sketch to the final deployment — and everything after.'
          />
          <div className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {services.map((s, i) => {
              const Icon = serviceIconMap[s.icon as keyof typeof serviceIconMap]
              return (
                <Reveal key={s.slug} delay={(i % 4) * 70}>
                  <div className='group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--card-hover)]'>
                    <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <h3 className='mt-5 font-display text-base font-semibold'>
                      {s.title}
                    </h3>
                    <p className='mt-2 text-sm leading-relaxed text-[var(--text-muted)]'>
                      {s.short}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={200}>
            <div className='mt-12 flex justify-center'>
              <Button href='/services' variant='secondary'>
                Explore all services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Process teaser ---------------- */}
      <section className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
        <SectionHeading
          eyebrow='How We Work'
          title='A clear process from day one'
          description='No confusing jargon, no disappearing after the contract is signed.'
        />
        <div className='mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
          {process.slice(0, 4).map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <div className='border-l-2 border-[var(--border)] pl-5'>
                <span className='font-mono-brand text-sm text-[var(--accent)]'>
                  {step.step}
                </span>
                <h3 className='mt-2 font-display text-lg font-semibold'>
                  {step.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-[var(--text-muted)]'>
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className='mt-12'>
            <Button href='/how-we-work' variant='ghost'>
              See the full 7-step process
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ---------------- Why choose us ---------------- */}
      <section className='border-y border-[var(--border)] bg-[var(--bg-elevated)]'>
        <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
          <SectionHeading
            eyebrow='Why Kalp Coder'
            title='Why businesses work with us'
            align='center'
          />
          <WhyTimeline items={whyChooseUs} />
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <StatsStrip stats={stats} />

      {/* ---------------- Testimonials teaser ---------------- */}
      <section className='border-y border-[var(--border)] bg-[var(--bg-elevated)]'>
        <div className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
          <SectionHeading
            eyebrow='What Clients Say'
            title='Real feedback from real projects'
          />
          <div className='mt-14 grid gap-6 lg:grid-cols-3'>
            {testimonials.map((t, i) => (
              <Reveal key={t.name + i} delay={i * 90}>
                <div className='flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7'>
                  <div className='flex gap-1 text-[var(--accent)]'>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon key={idx} className='h-4 w-4' />
                    ))}
                  </div>
                  <p className='mt-4 flex-1 text-sm leading-relaxed text-[var(--text)]'>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className='mt-6 border-t border-[var(--border)] pt-4'>
                    <p className='text-sm font-semibold'>{t.name}</p>
                    <p className='text-xs text-[var(--text-muted)]'>
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <div className='mt-12 flex justify-center'>
              <Button href='/testimonials' variant='secondary'>
                Read more client stories
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className='mx-auto max-w-7xl px-5 py-24 sm:px-8'>
        <Reveal>
          <div className='relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] px-8 py-16 text-center sm:px-16'>
            <div className='ambient-glow' />
            <div className='relative'>
              <h2 className='font-display text-3xl font-semibold tracking-tight sm:text-4xl'>
                Have a Project in Mind?
              </h2>
              <p className='mx-auto mt-4 max-w-xl text-balance text-[var(--text-muted)]'>
                Tell us what you&apos;re building — we&apos;ll tell you honestly
                whether it makes sense, what it&apos;ll take, and how we can
                help.
              </p>
              <div className='mt-8 flex justify-center'>
                <Button href='/contact'>Book a Free Consultation</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
