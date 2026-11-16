import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/fuentes.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import { App } from '@/app/App'

const raiz = document.getElementById('root')

if (raiz) {
  createRoot(raiz).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
