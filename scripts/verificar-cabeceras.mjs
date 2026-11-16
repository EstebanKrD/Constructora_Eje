// Compara las cabeceras del bloque /* de public/_headers (Cloudflare Pages)
// con las de public/.htaccess (Apache/LiteSpeed). Falla si difieren.
import { fileURLToPath } from 'node:url'
import { leerBloqueHeaders, leerHeadersHtaccess } from './cabeceras.mjs'

const raiz = new URL('../', import.meta.url)
const headers = leerBloqueHeaders(fileURLToPath(new URL('public/_headers', raiz)), '/*')
const htaccess = leerHeadersHtaccess(fileURLToPath(new URL('public/.htaccess', raiz)))

const nombres = new Set([...Object.keys(headers), ...Object.keys(htaccess)])
const diferencias = []

for (const nombre of nombres) {
  if (!(nombre in headers)) diferencias.push(`${nombre}: falta en _headers`)
  else if (!(nombre in htaccess)) diferencias.push(`${nombre}: falta en .htaccess`)
  else if (headers[nombre] !== htaccess[nombre]) {
    diferencias.push(`${nombre}: valores distintos\n  _headers:  ${headers[nombre]}\n  .htaccess: ${htaccess[nombre]}`)
  }
}

if (Object.keys(headers).length === 0) diferencias.push('No se encontró el bloque /* en _headers')

if (diferencias.length > 0) {
  process.stderr.write(`Las cabeceras no coinciden:\n${diferencias.join('\n')}\n`)
  process.exit(1)
}

process.stdout.write(`Cabeceras coinciden (${nombres.size}): ${[...nombres].join(', ')}\n`)
