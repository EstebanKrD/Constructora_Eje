import { MENSAJE_SOLICITUD } from '@/data/contacto'
import type { ConfigSitio } from '@/types/sitio'
import type { CanalEnvio, DatosSolicitud, SolicitudPreparada } from '@/types/solicitud'
import { digitosTelefono, esCorreoValido, esNumeroWhatsappValido } from '@/utils/validacion'

/** Enlace de WhatsApp; devuelve null si el número no cumple ^57\d{10}$. */
export function urlWhatsApp(numero: string, mensaje?: string): string | null {
  const limpio = numero.trim()
  if (!esNumeroWhatsappValido(limpio)) return null
  const base = `https://wa.me/${limpio}`
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base
}

/** Enlace mailto; devuelve null si el correo no es válido. */
export function urlCorreo(correo: string, asunto: string, cuerpo: string): string | null {
  const limpio = correo.trim()
  if (!esCorreoValido(limpio)) return null
  return `mailto:${limpio}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
}

/** "573001234567" → "+57 300 123 4567". Si no tiene ese formato, lo devuelve sin cambios. */
export function formatearNumero(numero: string): string {
  const digitos = numero.replace(/\D/g, '')
  const local = digitos.length === 12 && digitos.startsWith('57') ? digitos.slice(2) : digitos
  const partes = /^(\d{3})(\d{3})(\d{4})$/.exec(local)
  return partes ? `+57 ${partes[1]} ${partes[2]} ${partes[3]}` : numero.trim()
}

/**
 * Canal para enviar la solicitud: el configurado en `canalSolicitud` si tiene
 * datos válidos; si no, el otro; null si no hay ninguno.
 */
export function elegirCanal(sitio: ConfigSitio): CanalEnvio | null {
  const whatsapp: CanalEnvio | null = esNumeroWhatsappValido(sitio.whatsappNumero)
    ? { tipo: 'whatsapp', numero: sitio.whatsappNumero.trim() }
    : null
  const correo: CanalEnvio | null = esCorreoValido(sitio.correo)
    ? { tipo: 'correo', correo: sitio.correo.trim() }
    : null
  return sitio.canalSolicitud === 'correo' ? (correo ?? whatsapp) : (whatsapp ?? correo)
}

const dosDigitos = (valor: number) => String(valor).padStart(2, '0')

/** Código CDE-AAAAMMDD-HHMM-XXXX (XXXX = 4 últimos dígitos del teléfono). */
export function crearCodigo(telefono: string, fecha: Date = new Date()): string {
  const dia = `${fecha.getFullYear()}${dosDigitos(fecha.getMonth() + 1)}${dosDigitos(fecha.getDate())}`
  const hora = `${dosDigitos(fecha.getHours())}${dosDigitos(fecha.getMinutes())}`
  const final = digitosTelefono(telefono).slice(-4)
  return `${MENSAJE_SOLICITUD.prefijoCodigo}-${dia}-${hora}-${final}`
}

/** Texto de la solicitud con los datos ya recortados. */
export function armarMensaje(datos: DatosSolicitud, codigo: string): string {
  const { etiquetas, noIndicado } = MENSAJE_SOLICITUD
  const valor = (texto: string) => texto.trim() || noIndicado
  return [
    MENSAJE_SOLICITUD.titulo,
    '',
    `${etiquetas.codigo}: ${codigo}`,
    `${etiquetas.nombre}: ${datos.nombre.trim()}`,
    `${etiquetas.telefono}: ${digitosTelefono(datos.telefono)}`,
    `${etiquetas.correo}: ${valor(datos.correo)}`,
    `${etiquetas.tipo}: ${datos.tipo}`,
    `${etiquetas.municipio}: ${valor(datos.municipio)}`,
    `${etiquetas.descripcion}: ${datos.descripcion.trim()}`,
  ].join('\n')
}

/** Arma código, mensaje y enlace para el canal; null si el enlace no es válido. */
export function prepararSolicitud(
  datos: DatosSolicitud,
  canal: CanalEnvio,
  fecha?: Date,
): SolicitudPreparada | null {
  const codigo = crearCodigo(datos.telefono, fecha)
  const mensaje = armarMensaje(datos, codigo)
  const url =
    canal.tipo === 'whatsapp'
      ? urlWhatsApp(canal.numero, mensaje)
      : urlCorreo(canal.correo, `${MENSAJE_SOLICITUD.asunto}${codigo}`, mensaje)
  return url ? { codigo, mensaje, url, canal: canal.tipo } : null
}
