// Lectura de las cabeceras declaradas en public/_headers y public/.htaccess.
// La usan vite.config.ts (preview) y scripts/verificar-cabeceras.mjs.
import { readFileSync } from 'node:fs'

/**
 * Devuelve las cabeceras de un bloque de _headers (por ejemplo "/*").
 * Un bloque empieza con la ruta en la columna 0 y sigue con líneas indentadas
 * "Nombre: valor" hasta la siguiente línea sin indentar.
 */
export function leerBloqueHeaders(rutaArchivo, rutaBloque) {
  const lineas = readFileSync(rutaArchivo, 'utf8').split(/\r?\n/)
  const cabeceras = {}
  let dentro = false
  for (const linea of lineas) {
    if (linea.trim() === '' || linea.trimStart().startsWith('#')) continue
    if (!/^\s/.test(linea)) {
      dentro = linea.trim() === rutaBloque
      continue
    }
    if (dentro) {
      const separador = linea.indexOf(':')
      cabeceras[linea.slice(0, separador).trim()] = linea.slice(separador + 1).trim()
    }
  }
  return cabeceras
}

/** Devuelve las cabeceras "Header always set" del .htaccess (sin Cache-Control). */
export function leerHeadersHtaccess(rutaArchivo) {
  const texto = readFileSync(rutaArchivo, 'utf8')
  const cabeceras = {}
  for (const [, nombre, valor] of texto.matchAll(/^\s*Header always set ([\w-]+) "([^"]*)"/gm)) {
    if (nombre.toLowerCase() !== 'cache-control') cabeceras[nombre] = valor
  }
  return cabeceras
}
