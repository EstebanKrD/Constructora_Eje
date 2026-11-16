import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { PASOS_INICIO } from '@/data/contacto'
import estilos from './PasosInicio.module.css'

export function PasosInicio() {
  return (
    <section className={estilos.seccion}>
      <div className="contenedor">
        <EtiquetaSeccion tono="oscuro">{PASOS_INICIO.etiqueta}</EtiquetaSeccion>
        <h1 className={estilos.titulo}>{PASOS_INICIO.titulo}</h1>
        <ol className={estilos.pasos}>
          {PASOS_INICIO.pasos.map((paso) => (
            <li key={paso.numero} className={estilos.paso}>
              <span className={estilos.numero} aria-hidden="true">
                {paso.numero}
              </span>
              <h2 className={estilos.subtitulo}>{paso.titulo}</h2>
              <p className={estilos.texto}>{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
