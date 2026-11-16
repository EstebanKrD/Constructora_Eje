export const MAX_CORREO = 80

const PATRON_CORREO = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/
const PATRON_WHATSAPP = /^57\d{10}$/

/** Correo con formato válido, sin puntos dobles y de máximo 80 caracteres. */
export function esCorreoValido(correo: string): boolean {
  const valor = correo.trim()
  return valor.length <= MAX_CORREO && !valor.includes('..') && PATRON_CORREO.test(valor)
}

/** Número de WhatsApp colombiano con indicativo: 57 seguido de 10 dígitos. */
export function esNumeroWhatsappValido(numero: string): boolean {
  return PATRON_WHATSAPP.test(numero.trim())
}
