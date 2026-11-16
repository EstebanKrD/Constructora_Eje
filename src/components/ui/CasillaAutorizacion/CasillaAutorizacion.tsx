import type { InputHTMLAttributes, ReactNode } from 'react'
import { clases } from '@/utils/clases'
import estilos from './CasillaAutorizacion.module.css'

export interface CasillaAutorizacionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type' | 'className' | 'children'> {
  id: string
  /** Texto de la autorización; puede incluir enlaces. */
  children: ReactNode
  error?: string
  className?: string
}

export function CasillaAutorizacion({
  id,
  children,
  error,
  className,
  'aria-describedby': descritoPor,
  ...resto
}: CasillaAutorizacionProps) {
  const idError = `${id}-error`
  const describedBy = clases(descritoPor, error && idError) || undefined

  return (
    <div className={clases(estilos.casilla, className)}>
      <div className={estilos.fila}>
        <input
          {...resto}
          id={id}
          type="checkbox"
          className={estilos.control}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
        <label htmlFor={id} className={estilos.texto}>
          {children}
        </label>
      </div>
      {error && (
        <p id={idError} className={estilos.error}>
          {error}
        </p>
      )}
    </div>
  )
}
