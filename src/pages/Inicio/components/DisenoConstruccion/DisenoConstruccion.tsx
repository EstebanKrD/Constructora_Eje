import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { DISENO_CONSTRUCCION } from '@/data/inicio'
import { clases } from '@/utils/clases'
import estilos from './DisenoConstruccion.module.css'

export function DisenoConstruccion() {
  const { imagen } = DISENO_CONSTRUCCION

  return (
    <section className={estilos.seccion} aria-labelledby="diseno-construccion">
      <div className={clases('contenedor', estilos.columnas)}>
        <img
          className={estilos.imagen}
          src={imagen.src}
          alt={imagen.alt}
          width={imagen.ancho}
          height={imagen.alto}
          loading="lazy"
          decoding="async"
        />
        <div className={estilos.texto}>
          <EtiquetaSeccion>{DISENO_CONSTRUCCION.etiqueta}</EtiquetaSeccion>
          <h2 id="diseno-construccion" className="titulo-seccion">
            {DISENO_CONSTRUCCION.titulo}
          </h2>
          <p className={estilos.parrafo}>{DISENO_CONSTRUCCION.texto}</p>
        </div>
      </div>
    </section>
  )
}
