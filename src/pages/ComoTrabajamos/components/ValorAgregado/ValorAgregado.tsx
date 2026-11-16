import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { VALOR_AGREGADO } from '@/data/metodo'
import estilos from './ValorAgregado.module.css'

export function ValorAgregado() {
  return (
    <section className={estilos.seccion} aria-labelledby="valor-agregado">
      <div className="contenedor">
        <EtiquetaSeccion>{VALOR_AGREGADO.etiqueta}</EtiquetaSeccion>
        <h2 id="valor-agregado" className="titulo-seccion">
          {VALOR_AGREGADO.titulo}
        </h2>
        <ul className={estilos.beneficios}>
          {VALOR_AGREGADO.beneficios.map((beneficio) => (
            <li key={beneficio.titulo} className={estilos.beneficio}>
              <h3 className={estilos.titulo}>{beneficio.titulo}</h3>
              {beneficio.texto && <p className={estilos.texto}>{beneficio.texto}</p>}
            </li>
          ))}
        </ul>
        <p className={estilos.nota}>{VALOR_AGREGADO.nota}</p>
      </div>
    </section>
  )
}
