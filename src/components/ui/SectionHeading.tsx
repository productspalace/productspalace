import { useRef, type CSSProperties, type ReactNode } from 'react'
import { gsap, MOTION_OK, SplitText, useGSAP } from '../../lib/gsap'

type Props = {
  kicker?: string
  title: ReactNode
  /**
   * `fade`: the whole block rises in (fadeInUp, 400ms delay).
   * `split-scale`: words scale in from 0 / 2 alternately when the heading reaches 86% of the viewport.
   */
  effect?: 'fade' | 'split-scale'
  as?: 'h1' | 'h2'
  /** Show the hairline after the kicker. */
  rule?: boolean
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  kicker,
  title,
  effect = 'fade',
  as: Tag = 'h2',
  rule = true,
  className = '',
  titleClassName = '',
}: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      if (effect !== 'split-scale' || !titleRef.current) return
      const el = titleRef.current
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(el, {
          type: 'words',
          autoSplit: true,
          onSplit(self) {
            gsap.set(self.words, { opacity: 0, scale: (i: number) => (i % 2 === 0 ? 0 : 2), force3D: true })
            return gsap.to(self.words, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'power1.out',
              scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' },
            })
          },
        })
        return () => split.revert()
      })
      return () => mm.revert()
    },
    { dependencies: [effect] },
  )

  const fade = effect === 'fade'
  const delay = { '--reveal-delay': '400ms' } as CSSProperties

  return (
    <div className={`w-fit max-w-full ${className}`} data-reveal={fade ? 'up' : undefined} style={fade ? delay : undefined}>
      {kicker && (
        <p
          className={`kicker ${rule ? 'kicker-rule' : ''} mb-5 md:mb-6`}
          data-reveal={fade ? undefined : 'up'}
          style={fade ? undefined : delay}
        >
          {kicker}
        </p>
      )}
      <Tag ref={titleRef} className={`type-h2 text-pretty ${titleClassName}`}>
        {title}
      </Tag>
    </div>
  )
}

/** Accent-coloured word inside a heading. */
export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-brass-600">{children}</span>
}
