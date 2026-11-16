import type { ReactNode } from 'react'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import estilos from './EncabezadoPagina.module.css'

interface EncabezadoPaginaProps {
  etiqueta: string
  titulo: string
  texto?: string
  /** Contenido extra bajo el texto, por ejemplo un botón. */
  children?: ReactNode
}

export function EncabezadoPagina({ etiqueta, titulo, texto, children }: EncabezadoPaginaProps) {
  return (
    <section className={estilos.encabezado}>
      <div className="contenedor">
        <EtiquetaSeccion tono="oscuro">{etiqueta}</EtiquetaSeccion>
        <h1 className={estilos.titulo}>{titulo}</h1>
        {texto && <p className={estilos.texto}>{texto}</p>}
        {children && <div className={estilos.acciones}>{children}</div>}
      </div>
    </section>
  )
}
