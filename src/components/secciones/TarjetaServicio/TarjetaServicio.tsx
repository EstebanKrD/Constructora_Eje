import type { Servicio } from '@/types/contenido'
import { clases } from '@/utils/clases'
import estilos from './TarjetaServicio.module.css'

interface TarjetaServicioProps {
  servicio: Servicio
  className?: string
}

export function TarjetaServicio({ servicio, className }: TarjetaServicioProps) {
  return (
    <article className={clases(estilos.tarjeta, className)}>
      <p className={estilos.numero}>{servicio.numero}</p>
      <h3 className={estilos.titulo}>{servicio.titulo}</h3>
      <p className={estilos.texto}>{servicio.texto}</p>
    </article>
  )
}
