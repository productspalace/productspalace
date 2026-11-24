import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Connect, type Plugin } from 'vite'

const root = import.meta.dirname

/**
 * Pages are separate HTML documents (multi-page build), like the reference site:
 * every page has its own crawlable metadata, works on direct load and refresh, and
 * replays the shared loader. Add a page here and as `<page>/index.html`.
 * See docs/architecture.md.
 */
const pages = {
  home: resolve(root, 'index.html'),
  about: resolve(root, 'about/index.html'),
}

/** Replaces `<!-- @partial name -->` with src/partials/name.html, so pages share one head and loader. */
function htmlPartials(): Plugin {
  return {
    name: 'html-partials',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) =>
        html.replace(/<!-- @partial ([\w-]+) -->/g, (_, name: string) =>
          readFileSync(resolve(root, `src/partials/${name}.html`), 'utf8').trimEnd(),
        ),
    },
  }
}

/**
 * `/about` → `/about/` in dev and preview. Without it the dev server's SPA fallback
 * would answer `/about` with the homepage. Static hosts do the same redirect for
 * directory indexes (see docs/architecture.md).
 */
function trailingSlash(): Plugin {
  const redirect: Connect.NextHandleFunction = (req, res, next) => {
    const [path, query = ''] = (req.url ?? '').split('?')
    const page = path.replace(/^\//, '')
    if (page && page !== 'home' && page in pages) {
      res.writeHead(301, { Location: `${path}/${query && `?${query}`}` })
      res.end()
      return
    }
    next()
  }
  return {
    name: 'page-trailing-slash',
    configureServer: (server) => void server.middlewares.use(redirect),
    configurePreviewServer: (server) => void server.middlewares.use(redirect),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [htmlPartials(), trailingSlash(), react(), tailwindcss()],
  build: {
    rollupOptions: { input: pages },
  },
})
