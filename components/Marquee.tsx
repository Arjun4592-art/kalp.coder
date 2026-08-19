import { techBrandIconMap } from './icons/BrandIcons'

export default function Marquee({
  items,
  light = false,
}: {
  items: string[]
  light?: boolean
}) {
  const loop = [...items, ...items]

  return (
    <div className='marquee-wrap overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]'>
      <div className='marquee-track py-1'>
        {loop.map((item, i) => {
          const Icon = techBrandIconMap[item]
          return (
            <span
              key={`${item}-${i}`}
              className={
                light
                  ? 'mx-6 flex items-center gap-2 whitespace-nowrap font-mono-brand text-sm text-[#9ae52a] grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0'
                  : 'mx-3 flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 font-mono-brand text-sm text-[var(--text-muted)]'
              }
            >
              {Icon ? (
                <Icon className='h-4 w-4 shrink-0' />
              ) : (
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    light ? 'bg-[#8a8f98]' : 'bg-[var(--accent)]'
                  }`}
                />
              )}

              {item}
            </span>
          )
        })}
      </div>
    </div>
  )
}
