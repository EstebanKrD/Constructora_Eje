import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { HERRAMIENTAS } from '@/data/metodo'
import estilos from './Herramientas.module.css'

export function Herramientas() {
  return (
    <section className={estilos.seccion} aria-labelledby="tecnologia">
      <div className="contenedor">
        <EtiquetaSeccion>{HERRAMIENTAS.etiqueta}</EtiquetaSeccion>
        <h2 id="tecnologia" className="titulo-seccion">
          {HERRAMIENTAS.titulo}
        </h2>
        <ul className={estilos.herramientas}>
          {HERRAMIENTAS.herramientas.map((herramienta) => (
            <li key={herramienta.titulo} className={estilos.herramienta}>
              <h3 className={estilos.titulo}>{herramienta.titulo}</h3>
              <p className={estilos.texto}>{herramienta.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
