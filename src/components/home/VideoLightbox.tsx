import { useEffect, useRef } from 'react'
import type { VideoAsset } from '../../content/assets'
import { setScrollLocked } from '../../lib/smooth-scroll'
import { AssetImage } from '../ui/AssetImage'
import { Icon } from '../ui/Icon'

/** Modal film player (native <dialog>: focus trap and Escape for free). */
export function VideoLightbox({ film, open, onClose }: { film: VideoAsset; open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      setScrollLocked(true)
    } else if (!open && dialog.open) {
      dialog.close()
    }
    return () => {
      if (open) setScrollLocked(false)
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-label="Brand film"
      className="m-auto w-[min(92vw,70rem)] bg-transparent p-0 backdrop:bg-black/85"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close film"
        className="absolute top-2 right-2 z-10 grid size-10 cursor-pointer place-items-center rounded-full bg-black/60 text-white transition-colors hover:bg-accent hover:text-accent-fg"
      >
        <Icon name="close" size={20} />
      </button>
      {open &&
        (film.src ? (
          <video className="aspect-video w-full bg-black" src={film.src} poster={film.poster.src} controls autoPlay playsInline />
        ) : (
          <figure className="relative aspect-video w-full bg-black">
            <AssetImage asset={film.poster} className="size-full object-cover opacity-60" />
            <figcaption className="absolute inset-0 grid place-items-center p-6 text-center font-display text-h4 text-white">
              Brand film placeholder. The final video will play here.
            </figcaption>
          </figure>
        ))}
    </dialog>
  )
}
