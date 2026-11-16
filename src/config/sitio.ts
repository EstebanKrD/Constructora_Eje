import type { ConfigSitio } from '@/types/sitio'

/**
 * Única fuente de los datos de contacto y opciones del sitio.
 * Un valor vacío se muestra como "Por confirmar".
 */
export const SITIO: ConfigSitio = {
  versionLogoHeader: 'horizontal', // 'horizontal' (logo-rect) | 'circular' (logo-circulo)
  whatsappNumero: '', // formato 57XXXXXXXXXX
  correo: '',
  telefono: '',
  direccion: '',
  nit: '',
  canalSolicitud: 'whatsapp', // 'whatsapp' | 'correo'
  mostrarLogosClientes: true, // false = mostrar solo los nombres en texto
  mostrarValoresContratos: true, // false = ocultar la columna de valor
  dominio: '', // p. ej. https://constructoradeleje.com.co
}
