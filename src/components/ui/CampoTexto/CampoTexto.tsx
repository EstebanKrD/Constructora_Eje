import type { TextareaHTMLAttributes } from 'react'
import { clases } from '@/utils/clases'
import estilos from './CampoTexto.module.css'

export interface CampoTextoProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'className' | 'value'> {
  id: string
  etiqueta: string
  value: string
  error?: string
  /** Muestra el contador "n / maxLength" cuando hay maxLength. */
  mostrarContador?: boolean
  className?: string
}

export function CampoTexto({
  id,
  etiqueta,
  value,
  error,
  mostrarContador = false,
  maxLength,
  className,
  'aria-describedby': descritoPor,
  ...resto
}: CampoTextoProps) {
  const idError = `${id}-error`
  const idContador = `${id}-contador`
  const conContador = mostrarContador && maxLength !== undefined
  const describedBy =
    clases(descritoPor, conContador && idContador, error && idError) || undefined

  return (
    <div className={clases(estilos.campo, className)}>
      <label htmlFor={id} className={estilos.etiqueta}>
        {etiqueta}
      </label>
      <textarea
        {...resto}
        id={id}
        value={value}
        maxLength={maxLength}
        className={estilos.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {conContador && (
        <p id={idContador} className={estilos.contador}>
          {value.length} / {maxLength}
        </p>
      )}
      {error && (
        <p id={idError} className={estilos.error}>
          {error}
        </p>
      )}
    </div>
  )
}
