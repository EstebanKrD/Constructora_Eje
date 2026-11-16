import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

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
})
