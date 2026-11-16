import type { EnlaceNavegacion } from '@/types/contenido'

export const NOMBRE_EMPRESA = 'Constructora del Eje · Ingeniería y Proyectos SAS'

export const NAVEGACION: EnlaceNavegacion[] = [
  { etiqueta: 'Inicio', ruta: '/' },
  { etiqueta: 'Nosotros', ruta: '/nosotros' },
  { etiqueta: 'Servicios', ruta: '/servicios' },
  { etiqueta: 'Cómo trabajamos', ruta: '/como-trabajamos' },
  { etiqueta: 'Experiencia', ruta: '/experiencia' },
]

export const BOTON_CONTACTO: EnlaceNavegacion = {
  etiqueta: 'Hablemos de su proyecto',
  ruta: '/contacto',
}

export const HEADER = {
  altLogo: NOMBRE_EMPRESA,
  etiquetaNavegacion: 'Navegación principal',
  abrirMenu: 'Abrir menú',
  cerrarMenu: 'Cerrar menú',
  saltarAlContenido: 'Saltar al contenido',
}

export const FOOTER = {
  altLogo: NOMBRE_EMPRESA,
  tituloNavegacion: 'NAVEGACIÓN',
  tituloServicios: 'SERVICIOS',
  tituloContacto: 'CONTACTO',
  invitacion: 'Hablemos de su próximo proyecto.',
  ubicacion: 'Quindío · Colombia',
  boton: { etiqueta: 'Escríbanos', ruta: '/contacto' },
  derechos: '© 2026 Constructora del Eje · Ingeniería y Proyectos SAS',
  politica: { etiqueta: 'Política de tratamiento de datos', ruta: '/politica-de-datos' },
  lema: 'DISEÑO · CONSTRUCCIÓN · ESTRUCTURA METÁLICA',
}
