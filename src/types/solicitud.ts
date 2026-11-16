export interface DatosSolicitud {
  nombre: string
  telefono: string
  correo: string
  tipo: string
  municipio: string
  descripcion: string
  autorizacion: boolean
}

export type CampoSolicitud = keyof DatosSolicitud

export type ErroresSolicitud = Partial<Record<CampoSolicitud, string>>

export type CanalEnvio = { tipo: 'whatsapp'; numero: string } | { tipo: 'correo'; correo: string }

export interface SolicitudPreparada {
  codigo: string
  mensaje: string
  url: string
  canal: CanalEnvio['tipo']
}
