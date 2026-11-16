import { Boton } from '@/components/ui/Boton'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { SALUD } from '@/data/inicio'
import estilos from './BloqueSalud.module.css'

export function BloqueSalud() {
  return (
    <section className={estilos.seccion} aria-labelledby="experiencia-salud">
      <div className="contenedor">
        <EtiquetaSeccion tono="oscuro">{SALUD.etiqueta}</EtiquetaSeccion>
        <h2 id="experiencia-salud" className="titulo-seccion">
          {SALUD.titulo}
        </h2>
        <p className={estilos.parrafo}>{SALUD.texto}</p>
        <ul className={estilos.obras}>
          {SALUD.obras.map((obra) => (
            <li key={obra.titulo} className={estilos.obra}>
              <h3 className={estilos.titulo}>{obra.titulo}</h3>
              <p className={estilos.detalle}>{obra.detalle}</p>
            </li>
          ))}
        </ul>
        <Boton to={SALUD.enlace.ruta} variante="enlace" fondo="oscuro">
          {SALUD.enlace.etiqueta}
        </Boton>
      </div>
    </section>
  )
}
