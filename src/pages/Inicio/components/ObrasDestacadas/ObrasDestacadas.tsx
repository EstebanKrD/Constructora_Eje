import { TarjetaObra } from '@/components/secciones/TarjetaObra'
import { Boton } from '@/components/ui/Boton'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { OBRAS_DESTACADAS } from '@/data/inicio'
import { obrasPorId } from '@/data/obras'
import estilos from './ObrasDestacadas.module.css'

const OBRAS = obrasPorId(OBRAS_DESTACADAS.ids)

export function ObrasDestacadas() {
  return (
    <section className={estilos.seccion} aria-labelledby="obras-destacadas">
      <div className="contenedor">
        <div className={estilos.encabezado}>
          <div>
            <EtiquetaSeccion>{OBRAS_DESTACADAS.etiqueta}</EtiquetaSeccion>
            <h2 id="obras-destacadas" className="titulo-seccion">
              {OBRAS_DESTACADAS.titulo}
            </h2>
          </div>
          <Boton to={OBRAS_DESTACADAS.enlace.ruta} variante="enlace">
            {OBRAS_DESTACADAS.enlace.etiqueta}
          </Boton>
        </div>
        <ul className={estilos.obras}>
          {OBRAS.map((obra) => (
            <li key={obra.id} className={estilos.item}>
              <TarjetaObra obra={obra} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
