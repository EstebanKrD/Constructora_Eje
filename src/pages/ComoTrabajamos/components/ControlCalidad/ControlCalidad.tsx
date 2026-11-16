import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { CONTROL_CALIDAD } from '@/data/metodo'
import estilos from './ControlCalidad.module.css'

const { columnas } = CONTROL_CALIDAD

/*
 * Los roles explícitos conservan la semántica de tabla cuando, en móvil,
 * las filas se muestran como tarjetas (display: block).
 */
export function ControlCalidad() {
  return (
    <section className={estilos.seccion} aria-labelledby="control-calidad">
      <div className="contenedor">
        <EtiquetaSeccion>{CONTROL_CALIDAD.etiqueta}</EtiquetaSeccion>
        <h2 id="control-calidad" className="titulo-seccion">
          {CONTROL_CALIDAD.titulo}
        </h2>
        <table className={estilos.tabla} role="table">
          <caption className="visualmente-oculto">{CONTROL_CALIDAD.titulo}</caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">
                {columnas.sistema}
              </th>
              <th scope="col" role="columnheader">
                {columnas.prueba}
              </th>
              <th scope="col" role="columnheader">
                {columnas.criterio}
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {CONTROL_CALIDAD.filas.map((fila) => (
              <tr key={fila.sistema} role="row">
                <th scope="row" role="rowheader" className={estilos.sistema}>
                  {fila.sistema}
                </th>
                <td role="cell" data-etiqueta={columnas.prueba}>
                  {fila.prueba}
                </td>
                <td role="cell" data-etiqueta={columnas.criterio}>
                  {fila.criterio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={estilos.nota}>{CONTROL_CALIDAD.nota}</p>
      </div>
    </section>
  )
}
