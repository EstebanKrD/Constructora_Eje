import { POR_CONFIRMAR } from '@/data/contacto'

/** Devuelve el valor recortado o "Por confirmar" si está vacío. */
export function valorOPorConfirmar(valor: string): string {
  const limpio = valor.trim()
  return limpio === '' ? POR_CONFIRMAR : limpio
}

/** Años completos transcurridos desde `anio` hasta el año actual. */
export function aniosDesde(anio: number, hoy: Date = new Date()): number {
  return hoy.getFullYear() - anio
}
