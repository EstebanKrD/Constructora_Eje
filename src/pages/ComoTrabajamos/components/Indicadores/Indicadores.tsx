import { CifraDestacada } from '@/components/ui/CifraDestacada'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { INDICADORES } from '@/data/metodo'
import estilos from './Indicadores.module.css'

export function Indicadores() {
  return (
    <section className="seccion" aria-labelledby="seguimiento">
      <div className="contenedor">
        <EtiquetaSeccion>{INDICADORES.etiqueta}</EtiquetaSeccion>
        <h2 id="seguimiento" className="titulo-seccion">
          {INDICADORES.titulo}
        </h2>
        <div className={estilos.columnas}>
          <dl className={estilos.ritmo}>
            {INDICADORES.ritmo.map((paso) => (
              <div key={paso.periodo} className={estilos.paso}>
                <dt className={estilos.periodo}>{paso.periodo}</dt>
                <dd className={estilos.descripcion}>{paso.texto}</dd>
              </div>
            ))}
          </dl>
          <div>
            <ul className={estilos.indicadores}>
              {INDICADORES.indicadores.map((indicador) => (
                <li key={indicador.etiqueta} className={estilos.indicador}>
                  <CifraDestacada
                    valor={indicador.valor}
                    etiqueta={indicador.etiqueta}
                    texto={indicador.texto}
                  />
                </li>
              ))}
            </ul>
            <p className={estilos.nota}>{INDICADORES.nota}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
