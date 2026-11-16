import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { HISTORIA } from '@/data/nosotros'
import { clases } from '@/utils/clases'
import estilos from './Historia.module.css'

export function Historia() {
  return (
    <section className={estilos.historia}>
      <div className={clases('contenedor', estilos.columnas)}>
        <div>
          <EtiquetaSeccion tono="oscuro">{HISTORIA.etiqueta}</EtiquetaSeccion>
          <h1 className={estilos.titulo}>{HISTORIA.titulo}</h1>
        </div>
        <p className={estilos.texto}>{HISTORIA.texto}</p>
      </div>
    </section>
  )
}
