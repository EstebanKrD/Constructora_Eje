import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { leerBloqueHeaders } from './scripts/cabeceras.mjs'

const EXTENSIONES_FUENTE = /\.(woff2?|ttf|otf|eot)$/i

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: false,
    // Las fuentes nunca se incrustan como data: (la CSP solo permite font-src 'self').
    assetsInlineLimit: (rutaArchivo) =>
      EXTENSIONES_FUENTE.test(rutaArchivo) ? false : undefined,
  },
  // Solo en `npm run preview`: las mismas cabeceras del bloque /* de public/_headers.
  // En desarrollo no se aplican porque la CSP bloquearía la recarga en caliente de Vite.
  preview: {
    headers: leerBloqueHeaders(fileURLToPath(new URL('./public/_headers', import.meta.url)), '/*'),
  },
})
