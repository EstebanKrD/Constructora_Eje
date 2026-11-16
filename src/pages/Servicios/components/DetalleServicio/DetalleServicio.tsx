import { useId } from 'react'
import { CifraDestacada } from '@/components/ui/CifraDestacada'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import type { DetalleServicio as DatosDetalle } from '@/types/contenido'
import { clases } from '@/utils/clases'
import estilos from './DetalleServicio.module.css'

interface DetalleServicioProps {
  detalle: DatosDetalle
  /** Fondo blanco o gris claro; también alterna el lado de la foto. */
  fondo?: 'blanco' | 'claro'
}

export function DetalleServicio({ detalle, fondo = 'blanco' }: DetalleServicioProps) {
  const id = useId()

  return (
    <section
      className={clases(estilos.seccion, fondo === 'blanco' ? estilos.blanco : estilos.claro)}
      aria-labelledby={id}
    >
      <div className={clases('contenedor', estilos.columnas)}>
        <div className={estilos.texto}>
          <EtiquetaSeccion>{detalle.etiqueta}</EtiquetaSeccion>
          <h2 id={id} className="titulo-seccion">
            {detalle.titulo}
          </h2>
          <p className={estilos.parrafo}>{detalle.texto}</p>
          {detalle.dato && (
            <CifraDestacada
              className={estilos.dato}
              valor={detalle.dato.valor}
              texto={detalle.dato.texto}
              tamano="grande"
            />
          )}
        </div>
        <img
          className={estilos.imagen}
          src={detalle.imagen.src}
          alt={detalle.imagen.alt}
          width={detalle.imagen.ancho}
          height={detalle.imagen.alto}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
