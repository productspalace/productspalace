import type { CSSProperties } from 'react'
import { news } from '../../content/home'
import { AssetImage } from '../ui/AssetImage'
import { LogoMark } from '../ui/Logo'
import { SectionHeading } from '../ui/SectionHeading'

export function NewsSection() {
  return (
    <section id="news" className="bg-surface-alt pt-[4.75rem] pb-24 lg:pt-[7.2rem] lg:pb-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker={news.kicker} title={news.title} effect="split-scale" className="max-w-[48.5rem]" />
          <div data-reveal="up" style={{ '--reveal-delay': '500ms' } as CSSProperties} className="flex-none">
            <a href={news.cta.href} className="btn btn-ink">
              {news.cta.label}
            </a>
          </div>
        </div>

        <ul className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-[3.1rem] lg:grid-cols-3">
          {news.posts.map((post, i) => (
            <li
              key={post.title}
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 150}ms` } as CSSProperties}
              className="flex flex-col rounded-card bg-white p-2.5"
            >
              <div className="relative aspect-news overflow-hidden rounded-card bg-stone-200">
                <AssetImage asset={post.image} decorative className="size-full object-cover" />
                <LogoMark className="absolute top-3 right-3 h-8 w-auto text-accent" />
              </div>
              <div className="flex flex-1 flex-col px-5 pt-9 pb-7">
                <p className="flex flex-wrap items-center gap-5 text-[0.9375rem] text-fg-muted">
                  <span className="rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-fg uppercase">{post.category}</span>
                  <time>{post.date}</time>
                </p>
                <h3 className="mt-5 font-display text-2xl leading-[1.41] font-medium tracking-[-0.01em] text-fg">
                  <a href={post.href} className="transition-colors hover:text-accent-ink">
                    {post.title}
                  </a>
                </h3>
                <a
                  href={post.href}
                  aria-label={`${news.readMore}: ${post.title}`}
                  className="mt-auto pt-5 text-sm font-bold text-accent-ink transition-colors hover:text-fg"
                >
                  {news.readMore}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
