import type { SelectHTMLAttributes } from 'react'
import { clases } from '@/utils/clases'
import estilos from './CampoSeleccion.module.css'

export interface OpcionSeleccion {
  valor: string
  etiqueta: string
}

export interface CampoSeleccionProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className' | 'children'> {
  id: string
  etiqueta: string
  opciones: readonly OpcionSeleccion[]
  /** Texto de la opción vacía inicial; si se omite, no se muestra. */
  textoVacio?: string
  error?: string
  className?: string
}

export function CampoSeleccion({
  id,
  etiqueta,
  opciones,
  textoVacio,
  error,
  className,
  'aria-describedby': descritoPor,
  ...resto
}: CampoSeleccionProps) {
  const idError = `${id}-error`
  const describedBy = clases(descritoPor, error && idError) || undefined

  return (
    <div className={clases(estilos.campo, className)}>
      <label htmlFor={id} className={estilos.etiqueta}>
        {etiqueta}
      </label>
      <div className={estilos.envoltura}>
        <select
          {...resto}
          id={id}
          className={estilos.control}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        >
          {textoVacio !== undefined && <option value="">{textoVacio}</option>}
          {opciones.map((opcion) => (
            <option key={opcion.valor} value={opcion.valor}>
              {opcion.etiqueta}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p id={idError} className={estilos.error}>
          {error}
        </p>
      )}
    </div>
  )
}
