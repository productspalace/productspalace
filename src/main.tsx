import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { currentPage } from './lib/page'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

const pages = { home: HomePage, about: AboutPage }
const Page = pages[currentPage]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <Page />
    </App>
  </StrictMode>,
)
