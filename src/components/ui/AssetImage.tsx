import type { ImgHTMLAttributes } from 'react'
import type { ImageAsset } from '../../content/assets'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> & {
  asset: ImageAsset
  /** Decorative usage: hides the image from assistive tech. */
  decorative?: boolean
}

/**
 * Renders an entry from the asset registry. Intrinsic width/height reserve space,
 * object-position comes from the registry so crops survive asset swaps.
 */
export function AssetImage({ asset, decorative, loading = 'lazy', style, ...rest }: Props) {
  return (
    <img
      src={asset.src}
      alt={decorative ? '' : asset.alt}
      width={asset.width}
      height={asset.height}
      loading={loading}
      decoding="async"
      style={asset.position ? { objectPosition: asset.position, ...style } : style}
      {...rest}
    />
  )
}
