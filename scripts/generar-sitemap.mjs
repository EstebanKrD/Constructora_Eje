// Se ejecuta después de `vite build`. Con SITIO.dominio definido:
//   - crea dist/sitemap.xml con las rutas del sitio,
//   - completa la línea Sitemap de dist/robots.txt con la URL absoluta,
//   - vuelve absolutas las imágenes de Open Graph y Twitter en dist/index.html.
// Si el dominio está vacío o no es válido, no genera nada y lo avisa.
// Node importa los .ts directamente (eliminación de tipos, Node 22.18+).
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { SITIO } from '../src/config/sitio.ts'
import { BOTON_CONTACTO, FOOTER, NAVEGACION } from '../src/data/navegacion.ts'

const dist = (archivo) => fileURLToPath(new URL(`../dist/${archivo}`, import.meta.url))
const dominio = SITIO.dominio.trim().replace(/\/+$/, '')

if (!existsSync(dist('index.html'))) {
  process.stderr.write('generar-sitemap: no existe dist/index.html; ejecute primero vite build.\n')
  process.exit(1)
}

if (!/^https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(dominio)) {
  process.stdout.write(
    dominio === ''
      ? 'Aviso: SITIO.dominio está vacío; no se generó dist/sitemap.xml. Complete src/config/sitio.ts y vuelva a hacer el build.\n'
      : `Aviso: SITIO.dominio "${dominio}" no es una URL https válida; no se generó dist/sitemap.xml.\n`,
  )
  process.exit(0)
}

const rutas = [...NAVEGACION.map((enlace) => enlace.ruta), BOTON_CONTACTO.ruta, FOOTER.politica.ruta]
const urls = [...new Set(rutas)]
  .map((ruta) => `  <url>\n    <loc>${dominio}${ruta}</loc>\n  </url>`)
  .join('\n')

writeFileSync(
  dist('sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

const robots = readFileSync(dist('robots.txt'), 'utf8')
writeFileSync(dist('robots.txt'), robots.replace(/^Sitemap: .*$/m, `Sitemap: ${dominio}/sitemap.xml`))

const html = readFileSync(dist('index.html'), 'utf8')
writeFileSync(dist('index.html'), html.replaceAll('content="/og-imagen.jpg"', `content="${dominio}/og-imagen.jpg"`))

process.stdout.write(`Sitemap generado con ${new Set(rutas).size} rutas para ${dominio}\n`)
