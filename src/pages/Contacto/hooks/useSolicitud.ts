import { useState } from 'react'
import { SITIO } from '@/config/sitio'
import type {
  CampoSolicitud,
  DatosSolicitud,
  ErroresSolicitud,
  SolicitudPreparada,
} from '@/types/solicitud'
import { elegirCanal, prepararSolicitud } from '@/utils/mensajes'
import {
  CAMPOS_SOLICITUD,
  filtrarDescripcion,
  filtrarTelefono,
  validarCampo,
  validarSolicitud,
} from '@/utils/validacion'

const DATOS_INICIALES: DatosSolicitud = {
  nombre: '',
  telefono: '',
  correo: '',
  tipo: '',
  municipio: '',
  descripcion: '',
  autorizacion: false,
}

/** Abre el enlace: WhatsApp en una pestaña nueva; el correo con el cliente de correo. */
export function abrirSolicitud(solicitud: SolicitudPreparada) {
  if (solicitud.canal === 'whatsapp') {
    window.open(solicitud.url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.assign(solicitud.url)
  }
}

/**
 * Estado del formulario de contacto. Los datos personales viven solo en este
 * estado de React: no se guardan en el navegador, en la URL ni en la consola.
 */
export function useSolicitud() {
  const [datos, setDatos] = useState<DatosSolicitud>(DATOS_INICIALES)
  const [errores, setErrores] = useState<ErroresSolicitud>({})
  const [preparada, setPreparada] = useState<SolicitudPreparada | null>(null)
  const canal = elegirCanal(SITIO)

  const actualizarError = (campo: CampoSolicitud, siguientes: DatosSolicitud) =>
    setErrores((actuales) => ({ ...actuales, [campo]: validarCampo(campo, siguientes) }))

  const cambiar = <C extends CampoSolicitud>(campo: C, valor: DatosSolicitud[C]) => {
    let limpio = valor
    if (campo === 'telefono') limpio = filtrarTelefono(valor as string) as DatosSolicitud[C]
    if (campo === 'descripcion') limpio = filtrarDescripcion(valor as string) as DatosSolicitud[C]
    const siguientes = { ...datos, [campo]: limpio }
    setDatos(siguientes)
    // Si el campo ya mostraba un error, se revalida mientras se corrige.
    if (errores[campo] || campo === 'autorizacion') actualizarError(campo, siguientes)
  }

  /** Valida el campo al salir de él. */
  const salir = (campo: CampoSolicitud) => actualizarError(campo, datos)

  /** Valida todo y abre el canal. Devuelve el primer campo con error, si lo hay. */
  const enviar = (): CampoSolicitud | null => {
    const encontrados = validarSolicitud(datos)
    setErrores(encontrados)
    const primero = CAMPOS_SOLICITUD.find((campo) => encontrados[campo]) ?? null
    if (primero || !canal) return primero
    const solicitud = prepararSolicitud(datos, canal)
    if (!solicitud) return null
    abrirSolicitud(solicitud)
    setPreparada(solicitud)
    return null
  }

  const reiniciar = () => {
    setDatos(DATOS_INICIALES)
    setErrores({})
    setPreparada(null)
  }

  return { datos, errores, preparada, hayCanal: canal !== null, cambiar, salir, enviar, reiniciar }
}
