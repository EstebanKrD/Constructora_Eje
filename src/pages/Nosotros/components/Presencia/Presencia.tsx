import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { PRESENCIA } from '@/data/nosotros'
import { clases } from '@/utils/clases'
import estilos from './Presencia.module.css'

export function Presencia() {
  return (
    <section className={estilos.seccion} aria-labelledby="presencia">
      <div className={clases('contenedor', estilos.columnas)}>
        <div>
          <EtiquetaSeccion>{PRESENCIA.etiqueta}</EtiquetaSeccion>
          <h2 id="presencia" className="titulo-seccion">
            {PRESENCIA.titulo}
          </h2>
          <p className={estilos.texto}>{PRESENCIA.texto}</p>
        </div>

        <div>
          <h3 id="presencia-grafica" className={estilos.tituloGrafica}>
            {PRESENCIA.tituloGrafica}
          </h3>
          <ul className={estilos.barras} aria-labelledby="presencia-grafica">
            {PRESENCIA.departamentos.map((fila) => (
              <li key={fila.departamento} className={estilos.fila}>
                <span className={estilos.departamento}>{fila.departamento}</span>
                <span className={estilos.pista} aria-hidden="true">
                  <span
                    className={clases(estilos.barra, estilos[fila.tono])}
                    style={{ width: `${(fila.municipios / PRESENCIA.maximo) * 100}%` }}
                  />
                </span>
                <span className={estilos.valor}>{fila.municipios}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
