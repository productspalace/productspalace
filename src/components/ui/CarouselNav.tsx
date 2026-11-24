import { Icon } from './Icon'

type Props = {
  count: number
  index: number
  onSelect: (index: number) => void
  onPrev: () => void
  onNext: () => void
  label: string
  className?: string
}

/** Pill dots + round arrows shared by the process and testimonial tracks. */
export function CarouselNav({ count, index, onSelect, onPrev, onNext, label, className = '' }: Props) {
  return (
    <div className={`flex items-center justify-between gap-6 ${className}`}>
      <div className="flex items-center gap-2" role="group" aria-label={`${label} slides`}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => onSelect(i)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-accent' : 'w-2 bg-ink-900/20 hover:bg-ink-900/40'
            }`}
          />
        ))}
      </div>
      <div className="flex gap-2.5">
        <button type="button" className="btn-round" onClick={onPrev} disabled={index === 0} aria-label="Previous slide">
          <Icon name="arrow-left" size={18} />
        </button>
        <button type="button" className="btn-round" onClick={onNext} disabled={index === count - 1} aria-label="Next slide">
          <Icon name="arrow-right" size={18} />
        </button>
      </div>
    </div>
  )
}
