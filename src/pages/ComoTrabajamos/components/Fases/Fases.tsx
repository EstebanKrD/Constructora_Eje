import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { FASES } from '@/data/metodo'
import estilos from './Fases.module.css'

export function Fases() {
  return (
    <section className="seccion" aria-labelledby="metodo">
      <div className="contenedor">
        <EtiquetaSeccion>{FASES.etiqueta}</EtiquetaSeccion>
        <h2 id="metodo" className="titulo-seccion">
          {FASES.titulo}
        </h2>
        <ol className={estilos.fases}>
          {FASES.fases.map((fase) => (
            <li key={fase.numero} className={estilos.fase}>
              <span className={estilos.numero} aria-hidden="true">
                {fase.numero}
              </span>
              <h3 className={estilos.titulo}>{fase.titulo}</h3>
              <p className={estilos.texto}>{fase.texto}</p>
              <p className={estilos.entregable}>
                <span aria-hidden="true">→ </span>
                {fase.entregable}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
