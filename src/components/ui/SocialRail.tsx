import type { CSSProperties } from 'react'
import { followLabel, socials } from '../../content/site'
import { Icon } from './Icon'

/**
 * Vertical "Follow us" rail used on hero imagery (from md up). It slides in from
 * the right (fadeInRight, 300ms delay). Position it with `className`.
 */
export function SocialRail({ className = '' }: { className?: string }) {
  return (
    <div
      data-reveal="right"
      style={{ '--reveal-delay': '300ms' } as CSSProperties}
      className={`absolute z-10 hidden flex-col items-center gap-6 text-white md:flex ${className}`}
    >
      <span className="rotate-180 text-[0.8125rem] font-medium [writing-mode:vertical-rl]">{followLabel}</span>
      <span className="h-12 w-px bg-white/40" />
      <ul className="flex flex-col items-center gap-3.5 [--icon-cutout:#111]">
        {socials.map((s) => (
          <li key={s.id}>
            <a href={s.href} aria-label={s.label} className="transition-colors hover:text-accent">
              <Icon name={s.id} size={17} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
