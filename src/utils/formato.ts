import { POR_CONFIRMAR } from '@/data/contacto'

/** Devuelve el valor recortado o "Por confirmar" si está vacío. */
export function valorOPorConfirmar(valor: string): string {
  const limpio = valor.trim()
  return limpio === '' ? POR_CONFIRMAR : limpio
}
