import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { SOCIOS, SOCIOS_TEXTOS } from '@/data/nosotros'
import { FichaSocio } from '@/pages/Nosotros/components/FichaSocio'
import estilos from './Socios.module.css'

export function Socios() {
  return (
    <section className="seccion" aria-labelledby="socios">
      <div className="contenedor">
        <EtiquetaSeccion>{SOCIOS_TEXTOS.etiqueta}</EtiquetaSeccion>
        <h2 id="socios" className="titulo-seccion">
          {SOCIOS_TEXTOS.titulo}
        </h2>
        <ul className={estilos.socios}>
          {SOCIOS.map((socio) => (
            <li key={socio.nombre}>
              <FichaSocio socio={socio} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
