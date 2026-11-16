import { SITIO } from '@/config/sitio'
import { CLIENTES } from '@/data/clientes'
import type { Cliente } from '@/types/contenido'
import { clases } from '@/utils/clases'
import estilos from './FranjaClientes.module.css'

interface FranjaClientesProps {
  clientes?: readonly Cliente[]
  /** Por defecto toma `SITIO.mostrarLogosClientes`. */
  mostrarLogos?: boolean
  className?: string
}

export function FranjaClientes({
  clientes = CLIENTES,
  mostrarLogos = SITIO.mostrarLogosClientes,
  className,
}: FranjaClientesProps) {
  return (
    <ul className={clases(estilos.franja, !mostrarLogos && estilos.soloNombres, className)}>
      {clientes.map((cliente) => (
        <li key={cliente.nombre} className={estilos.cliente}>
          {mostrarLogos ? (
            <img
              className={estilos.logo}
              src={cliente.logo.src}
              alt={cliente.logo.alt}
              width={cliente.logo.ancho}
              height={cliente.logo.alto}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className={estilos.nombre}>{cliente.nombre}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
