import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { ESTANDARES } from '@/data/metodo'
import estilos from './Estandares.module.css'

export function Estandares() {
  return (
    <section className="seccion" aria-labelledby="estandares">
      <div className="contenedor">
        <EtiquetaSeccion>{ESTANDARES.etiqueta}</EtiquetaSeccion>
        <h2 id="estandares" className="titulo-seccion">
          {ESTANDARES.titulo}
        </h2>
        <ul className={estilos.tarjetas}>
          {ESTANDARES.estandares.map((estandar) => (
            <li key={estandar.titulo} className={estilos.tarjeta}>
              <h3 className={estilos.titulo}>{estandar.titulo}</h3>
              <p className={estilos.texto}>{estandar.texto}</p>
              <p className={estilos.normas}>{estandar.normas}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
