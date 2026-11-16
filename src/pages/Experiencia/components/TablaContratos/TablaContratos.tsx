import { CifraDestacada } from '@/components/ui/CifraDestacada'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { SITIO } from '@/config/sitio'
import { CONTRATOS } from '@/data/experiencia'
import { formatearPesos } from '@/utils/formato'
import estilos from './TablaContratos.module.css'

const { columnas } = CONTRATOS

/** Total calculado a partir de las filas de la tabla, nunca escrito a mano. */
const TOTAL = CONTRATOS.contratos.reduce((suma, contrato) => suma + contrato.valor, 0)

interface TablaContratosProps {
  /** Por defecto toma `SITIO.mostrarValoresContratos`. */
  mostrarValores?: boolean
}

export function TablaContratos({ mostrarValores = SITIO.mostrarValoresContratos }: TablaContratosProps) {
  return (
    <section className="seccion" aria-labelledby="contratos">
      <div className="contenedor">
        <EtiquetaSeccion>{CONTRATOS.etiqueta}</EtiquetaSeccion>
        <h2 id="contratos" className="titulo-seccion">
          {CONTRATOS.titulo}
        </h2>
        <table className={estilos.tabla} role="table">
          <caption className="visualmente-oculto">{CONTRATOS.titulo}</caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">
                {columnas.proyecto}
              </th>
              <th scope="col" role="columnheader">
                {columnas.ciudad}
              </th>
              <th scope="col" role="columnheader">
                {columnas.anio}
              </th>
              {mostrarValores && (
                <th scope="col" role="columnheader" className={estilos.numero}>
                  {columnas.valor}
                </th>
              )}
            </tr>
          </thead>
          <tbody role="rowgroup">
            {CONTRATOS.contratos.map((contrato) => (
              <tr key={contrato.proyecto} role="row">
                <th scope="row" role="rowheader" className={estilos.proyecto}>
                  {contrato.proyecto}
                </th>
                <td role="cell" data-etiqueta={columnas.ciudad}>
                  {contrato.ciudad}
                </td>
                <td role="cell" data-etiqueta={columnas.anio}>
                  {contrato.anio}
                </td>
                {mostrarValores && (
                  <td role="cell" data-etiqueta={columnas.valor} className={estilos.numero}>
                    {formatearPesos(contrato.valor)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {mostrarValores && (
          <CifraDestacada
            className={estilos.total}
            valor={formatearPesos(TOTAL)}
            texto={CONTRATOS.textoTotal}
            tamano="grande"
          />
        )}
      </div>
    </section>
  )
}
