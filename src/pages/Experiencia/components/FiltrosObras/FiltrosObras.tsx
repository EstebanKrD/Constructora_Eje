import { FILTROS_OBRAS } from '@/data/experiencia'
import type { IdCategoriaObra } from '@/types/contenido'
import { clases } from '@/utils/clases'
import estilos from './FiltrosObras.module.css'

interface FiltrosObrasProps {
  /** Categoría activa; null equivale a «Todas». */
  activa: IdCategoriaObra | null
  onCambiar: (categoria: IdCategoriaObra | null) => void
}

export function FiltrosObras({ activa, onCambiar }: FiltrosObrasProps) {
  const opciones: { valor: IdCategoriaObra | null; etiqueta: string }[] = [
    { valor: null, etiqueta: FILTROS_OBRAS.todas },
    ...FILTROS_OBRAS.opciones,
  ]

  return (
    <fieldset className={estilos.filtros}>
      <legend className="visualmente-oculto">{FILTROS_OBRAS.leyenda}</legend>
      {opciones.map((opcion) => {
        const presionado = opcion.valor === activa
        return (
          <button
            key={opcion.etiqueta}
            type="button"
            className={clases(estilos.filtro, presionado && estilos.activo)}
            aria-pressed={presionado}
            onClick={() => onCambiar(opcion.valor)}
          >
            {opcion.etiqueta}
          </button>
        )
      })}
    </fieldset>
  )
}
