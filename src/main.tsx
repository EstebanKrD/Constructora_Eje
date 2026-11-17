import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/fuentes.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import { App } from '@/app/App'

// El título y la descripción de index.html son el respaldo sin JavaScript.
// Cada página define los suyos, así que se retiran para no duplicarlos.
for (const etiqueta of document.head.querySelectorAll('[data-estatico]')) {
  etiqueta.remove()
}

const raiz = document.getElementById('root')

if (raiz) {
  createRoot(raiz).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
