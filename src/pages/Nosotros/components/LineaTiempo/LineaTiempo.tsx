import { LINEA_TIEMPO } from '@/data/nosotros'
import estilos from './LineaTiempo.module.css'

export function LineaTiempo() {
  return (
    <div className="contenedor">
      <ol className={estilos.linea}>
        {LINEA_TIEMPO.map((hito) => (
          <li key={hito.anio} className={estilos.hito}>
            <p className={estilos.anio}>{hito.anio}</p>
            <p className={estilos.texto}>{hito.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
