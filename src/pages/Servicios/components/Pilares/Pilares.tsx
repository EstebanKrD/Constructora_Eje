import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { PILARES } from '@/data/servicios'
import estilos from './Pilares.module.css'

export function Pilares() {
  return (
    <section className={estilos.seccion} aria-labelledby="pilares">
      <div className="contenedor">
        <EtiquetaSeccion>{PILARES.etiqueta}</EtiquetaSeccion>
        <h2 id="pilares" className="titulo-seccion">
          {PILARES.titulo}
        </h2>
        <ul className={estilos.pilares}>
          {PILARES.pilares.map((pilar) => (
            <li key={pilar.titulo} className={estilos.pilar}>
              <h3 className={estilos.titulo}>{pilar.titulo}</h3>
              <p className={estilos.texto}>{pilar.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
