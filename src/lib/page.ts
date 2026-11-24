import type { PageId } from '../content/site'

/**
 * The page this document renders, from `<body data-page="…">` in its HTML entry
 * (index.html, about/index.html). Pages are separate documents, so this never
 * changes during a visit.
 */
export const currentPage: PageId = document.body.dataset.page === 'about' ? 'about' : 'home'

/** `aria-current="page"` for a link that points at the current page. */
export const ariaCurrent = (page?: PageId) => (page && page === currentPage ? ('page' as const) : undefined)
