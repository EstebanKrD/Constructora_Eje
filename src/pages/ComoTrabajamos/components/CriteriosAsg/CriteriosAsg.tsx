import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { CRITERIOS_ASG } from '@/data/metodo'
import estilos from './CriteriosAsg.module.css'

export function CriteriosAsg() {
  return (
    <section className="seccion" aria-labelledby="criterios-asg">
      <div className="contenedor">
        <EtiquetaSeccion>{CRITERIOS_ASG.etiqueta}</EtiquetaSeccion>
        <h2 id="criterios-asg" className="titulo-seccion">
          {CRITERIOS_ASG.titulo}
        </h2>
        <div className={estilos.columnas}>
          {CRITERIOS_ASG.criterios.map((criterio) => (
            <div key={criterio.titulo} className={estilos.criterio}>
              <h3 className={estilos.titulo}>{criterio.titulo}</h3>
              <ul className={estilos.puntos}>
                {criterio.puntos.map((punto) => (
                  <li key={punto}>{punto}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
