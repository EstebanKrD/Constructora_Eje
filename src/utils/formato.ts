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

const FORMATO_PESOS = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 })

/** 1166758456 → "$1.166.758.456" (separador de miles con punto). */
export function formatearPesos(valor: number): string {
  return `$${FORMATO_PESOS.format(valor)}`
}
