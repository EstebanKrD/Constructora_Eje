import { FORMULARIO, LIMITES, TIPOS_PROYECTO } from '@/data/contacto'
import type { DatosSolicitud, ErroresSolicitud } from '@/types/solicitud'

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

/** Devuelve el valor solo si está en la lista blanca; si no, null. */
export function valorPermitido<T extends string>(
  valor: string | null,
  permitidos: readonly T[],
): T | null {
  return permitidos.find((permitido) => permitido === valor) ?? null
}

/* ---------- Formulario de solicitud (listas blancas) ---------- */

const LETRAS = 'A-Za-zÁÉÍÓÚÜÑáéíóúüñ'
const PATRON_NOMBRE = new RegExp(`^[${LETRAS}' -]+$`)
const PATRON_MUNICIPIO = new RegExp(`^[${LETRAS} .-]+$`)
const SIMBOLOS_BLOQUEADOS = /[<>{}]/g

/** Caracteres de control, salvo salto de línea, retorno de carro y tabulación. */
function esControl(caracter: string): boolean {
  const codigo = caracter.codePointAt(0) ?? 0
  return (codigo < 32 && codigo !== 9 && codigo !== 10 && codigo !== 13) || codigo === 127
}

/** Al escribir el teléfono solo se conservan dígitos y espacios. */
export function filtrarTelefono(valor: string): string {
  return valor.replace(/[^\d ]/g, '').slice(0, LIMITES.telefono.maxCaracteres)
}

/** Al escribir la descripción se eliminan < > { } y los caracteres de control. */
export function filtrarDescripcion(valor: string): string {
  return Array.from(valor.replace(SIMBOLOS_BLOQUEADOS, ''))
    .filter((caracter) => !esControl(caracter))
    .join('')
    .slice(0, LIMITES.descripcion.max)
}

export function digitosTelefono(valor: string): string {
  return valor.replace(/\D/g, '')
}

/** Valida un campo y devuelve el mensaje de error, o undefined si es válido. */
export function validarCampo(
  campo: keyof DatosSolicitud,
  datos: DatosSolicitud,
): string | undefined {
  const { errores } = FORMULARIO
  switch (campo) {
    case 'nombre': {
      const valor = datos.nombre.trim()
      const valido =
        valor.length >= LIMITES.nombre.min &&
        valor.length <= LIMITES.nombre.max &&
        PATRON_NOMBRE.test(valor)
      return valido ? undefined : errores.nombre
    }
    case 'telefono': {
      const digitos = digitosTelefono(datos.telefono)
      const valido =
        /^[\d ]*$/.test(datos.telefono) &&
        digitos.length >= LIMITES.telefono.min &&
        digitos.length <= LIMITES.telefono.max
      return valido ? undefined : errores.telefono
    }
    case 'correo': {
      const valor = datos.correo.trim()
      return valor === '' || esCorreoValido(valor) ? undefined : errores.correo
    }
    case 'tipo':
      return valorPermitido(datos.tipo, TIPOS_PROYECTO) ? undefined : errores.tipo
    case 'municipio': {
      const valor = datos.municipio.trim()
      const valido =
        valor === '' || (valor.length <= LIMITES.municipio.max && PATRON_MUNICIPIO.test(valor))
      return valido ? undefined : errores.municipio
    }
    case 'descripcion': {
      const valor = datos.descripcion.trim()
      const valido =
        valor.length >= LIMITES.descripcion.min &&
        valor.length <= LIMITES.descripcion.max &&
        !/[<>{}]/.test(valor) &&
        !Array.from(valor).some(esControl)
      return valido ? undefined : errores.descripcion
    }
    case 'autorizacion':
      return datos.autorizacion ? undefined : errores.autorizacion
  }
}

export const CAMPOS_SOLICITUD: (keyof DatosSolicitud)[] = [
  'nombre',
  'telefono',
  'correo',
  'tipo',
  'municipio',
  'descripcion',
  'autorizacion',
]

export function validarSolicitud(datos: DatosSolicitud): ErroresSolicitud {
  const errores: ErroresSolicitud = {}
  for (const campo of CAMPOS_SOLICITUD) {
    const error = validarCampo(campo, datos)
    if (error) errores[campo] = error
  }
  return errores
}
