import { useEffect, useRef } from 'react'
import { Boton } from '@/components/ui/Boton'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { MENSAJE_SOLICITUD, SOLICITUD_LISTA } from '@/data/contacto'
import { abrirSolicitud } from '@/pages/Contacto/hooks/useSolicitud'
import type { DatosSolicitud, SolicitudPreparada } from '@/types/solicitud'
import { digitosTelefono } from '@/utils/validacion'
import estilos from './SolicitudLista.module.css'

interface SolicitudListaProps {
  solicitud: SolicitudPreparada
  datos: DatosSolicitud
  onReiniciar: () => void
}

/**
 * Pantalla honesta tras preparar la solicitud: el sitio no puede confirmar el
 * envío, así que pide a la persona terminarlo en WhatsApp o en su correo.
 */
export function SolicitudLista({ solicitud, datos, onReiniciar }: SolicitudListaProps) {
  const titulo = useRef<HTMLHeadingElement>(null)
  const { etiquetas, noIndicado } = MENSAJE_SOLICITUD

  useEffect(() => {
    titulo.current?.focus()
  }, [])

  const resumen = [
    [etiquetas.codigo, solicitud.codigo],
    [etiquetas.nombre, datos.nombre.trim()],
    [etiquetas.telefono, digitosTelefono(datos.telefono)],
    [etiquetas.correo, datos.correo.trim() || noIndicado],
    [etiquetas.tipo, datos.tipo],
    [etiquetas.municipio, datos.municipio.trim() || noIndicado],
    [etiquetas.descripcion, datos.descripcion.trim()],
  ]

  return (
    <div className={estilos.lista}>
      <EtiquetaSeccion>{SOLICITUD_LISTA.etiqueta}</EtiquetaSeccion>
      <h3 ref={titulo} tabIndex={-1} className={estilos.titulo}>
        {SOLICITUD_LISTA.titulo}
      </h3>
      <p className={estilos.texto}>{SOLICITUD_LISTA.texto}</p>
      <Boton onClick={() => abrirSolicitud(solicitud)}>{SOLICITUD_LISTA.abrirDeNuevo}</Boton>
      <dl className={estilos.resumen}>
        {resumen.map(([etiqueta, valor]) => (
          <div key={etiqueta} className={estilos.fila}>
            <dt>{etiqueta}</dt>
            <dd>{valor}</dd>
          </div>
        ))}
      </dl>
      <Boton variante="enlace" onClick={onReiniciar}>
        {SOLICITUD_LISTA.otraSolicitud}
      </Boton>
    </div>
  )
}
