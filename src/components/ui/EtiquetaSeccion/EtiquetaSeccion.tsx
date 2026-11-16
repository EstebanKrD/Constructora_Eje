import type { ReactNode } from 'react'
import { clases } from '@/utils/clases'
import estilos from './EtiquetaSeccion.module.css'

interface EtiquetaSeccionProps {
  children: ReactNode
  tono?: 'claro' | 'oscuro'
  className?: string
}

export function EtiquetaSeccion({ children, tono = 'claro', className }: EtiquetaSeccionProps) {
  return (
    <p className={clases(estilos.etiqueta, tono === 'oscuro' && estilos.oscura, className)}>
      {children}
    </p>
  )
}
