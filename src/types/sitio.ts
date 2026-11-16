export type VersionLogo = 'horizontal' | 'circular'

export type CanalSolicitud = 'whatsapp' | 'correo'

export interface ConfigSitio {
  versionLogoHeader: VersionLogo
  /** Formato 57XXXXXXXXXX; null mientras la empresa no lo entregue. */
  whatsappNumero: string | null
  correo: string
  telefono: string
  direccion: string
  nit: string
  canalSolicitud: CanalSolicitud
  /** false = mostrar solo los nombres en texto */
  mostrarLogosClientes: boolean
  /** false = ocultar la columna de valor */
  mostrarValoresContratos: boolean
  /** Por ejemplo https://constructoradeleje.com.co */
  dominio: string
}
