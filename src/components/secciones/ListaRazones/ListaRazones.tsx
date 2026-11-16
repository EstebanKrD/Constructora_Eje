import type { Razon } from '@/types/contenido'
import { clases } from '@/utils/clases'
import estilos from './ListaRazones.module.css'

interface ListaRazonesProps {
  razones: readonly Razon[]
  className?: string
}

export function ListaRazones({ razones, className }: ListaRazonesProps) {
  return (
    <ol className={clases(estilos.lista, className)}>
      {razones.map((razon) => (
        <li key={razon.numero} className={estilos.razon}>
          <span className={estilos.numero} aria-hidden="true">
            {razon.numero}
          </span>
          <h3 className={estilos.titulo}>{razon.titulo}</h3>
          <p className={estilos.texto}>{razon.texto}</p>
        </li>
      ))}
    </ol>
  )
}
