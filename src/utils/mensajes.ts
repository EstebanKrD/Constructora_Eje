import { esCorreoValido, esNumeroWhatsappValido } from '@/utils/validacion'

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
