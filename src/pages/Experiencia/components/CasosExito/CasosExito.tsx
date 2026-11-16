import { CifraDestacada } from '@/components/ui/CifraDestacada'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { CASOS_EXITO } from '@/data/experiencia'
import estilos from './CasosExito.module.css'

const { textos } = CASOS_EXITO

export function CasosExito() {
  return (
    <section id="casos" className={estilos.seccion} aria-labelledby="casos-titulo">
      <div className="contenedor">
        <EtiquetaSeccion>{CASOS_EXITO.etiqueta}</EtiquetaSeccion>
        <h2 id="casos-titulo" className="titulo-seccion">
          {CASOS_EXITO.titulo}
        </h2>
        <ol className={estilos.casos}>
          {CASOS_EXITO.casos.map((caso) => (
            <li key={caso.etiqueta}>
              <article className={estilos.caso}>
                <div className={estilos.resumen}>
                  <p className={estilos.etiqueta}>{caso.etiqueta}</p>
                  <h3 className={estilos.titulo}>{caso.titulo}</h3>
                  <p className={estilos.subtitulo}>{caso.subtitulo}</p>
                  <ul className={estilos.cifras}>
                    {caso.cifras.map((cifra) => (
                      <li key={cifra.texto}>
                        <CifraDestacada valor={cifra.valor} texto={cifra.texto} />
                      </li>
                    ))}
                  </ul>
                  {caso.fuente && <p className={estilos.fuente}>{caso.fuente}</p>}
                </div>
                <div className={estilos.detalle}>
                  <h4 className={estilos.subtituloDetalle}>{textos.reto}</h4>
                  <p className={estilos.parrafo}>{caso.reto}</p>
                  <h4 className={estilos.subtituloDetalle}>{textos.herramientas}</h4>
                  <ul className={estilos.herramientas}>
                    {caso.herramientas.map((herramienta) => (
                      <li key={herramienta}>{herramienta}</li>
                    ))}
                  </ul>
                  <h4 className={estilos.subtituloDetalle}>{textos.resultado}</h4>
                  <p className={estilos.parrafo}>{caso.resultado}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
