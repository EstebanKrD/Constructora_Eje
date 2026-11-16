import type { ReactNode } from 'react'
import { CATEGORIAS_OBRA } from '@/data/obras'
import type { Obra } from '@/types/contenido'
import { clases } from '@/utils/clases'
import estilos from './TarjetaObra.module.css'

interface TarjetaObraProps {
  obra: Obra
  variante?: 'resumida' | 'completa'
  /** Acción opcional al pie de la tarjeta (p. ej. abrir la galería). */
  accion?: ReactNode
  className?: string
}

export function TarjetaObra({ obra, variante = 'resumida', accion, className }: TarjetaObraProps) {
  const completa = variante === 'completa'
  const lugarYPeriodo = [obra.lugar, obra.periodo].filter(Boolean).join(' · ')

  return (
    <article className={clases(estilos.tarjeta, completa && estilos.completa, className)}>
      <img
        className={estilos.imagen}
        src={obra.imagen.src}
        alt={obra.imagen.alt}
        width={obra.imagen.ancho}
        height={obra.imagen.alto}
        loading="lazy"
        decoding="async"
      />
      <div className={estilos.cuerpo}>
        <p className={estilos.categoria}>{CATEGORIAS_OBRA[obra.categoria]}</p>
        <h3 className={estilos.titulo}>{obra.titulo}</h3>
        <p className={estilos.lugar}>{lugarYPeriodo}</p>
        {completa && (
          <>
            <p className={estilos.descripcion}>{obra.descripcion}</p>
            <dl className={estilos.ficha}>
              {obra.ficha.map((dato) => (
                <div key={dato.etiqueta} className={estilos.dato}>
                  <dt>{dato.etiqueta}</dt>
                  <dd>{dato.valor}</dd>
                </div>
              ))}
            </dl>
          </>
        )}
        {accion && <div className={estilos.accion}>{accion}</div>}
      </div>
    </article>
  )
}
