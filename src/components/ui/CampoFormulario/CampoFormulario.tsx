import type { InputHTMLAttributes } from 'react'
import { clases } from '@/utils/clases'
import estilos from './CampoFormulario.module.css'

export interface CampoFormularioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'> {
  id: string
  etiqueta: string
  error?: string
  className?: string
}

export function CampoFormulario({
  id,
  etiqueta,
  error,
  className,
  'aria-describedby': descritoPor,
  ...resto
}: CampoFormularioProps) {
  const idError = `${id}-error`
  const describedBy = clases(descritoPor, error && idError) || undefined

  return (
    <div className={clases(estilos.campo, className)}>
      <label htmlFor={id} className={estilos.etiqueta}>
        {etiqueta}
      </label>
      <input
        {...resto}
        id={id}
        className={estilos.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {error && (
        <p id={idError} className={estilos.error}>
          {error}
        </p>
      )}
    </div>
  )
}
