export interface Imagen {
  src: string
  alt: string
  ancho: number
  alto: number
}

export interface EnlaceNavegacion {
  etiqueta: string
  ruta: string
}

export interface Servicio {
  numero: string
  titulo: string
  texto: string
}

export interface Cliente {
  nombre: string
  logo: Imagen
}

export interface DatoFicha {
  etiqueta: string
  valor: string
}

export type IdCategoriaObra =
  | 'educacion'
  | 'multifamiliar'
  | 'escenario-deportivo'
  | 'estructura-metalica'
  | 'infraestructura'

export interface Obra {
  id: string
  categoria: IdCategoriaObra
  titulo: string
  lugar: string
  /** Se omite cuando la obra no tiene año. */
  periodo?: string
  descripcion: string
  ficha: DatoFicha[]
  imagen: Imagen
  galeria?: Imagen[]
}

export interface Razon {
  numero: string
  titulo: string
  texto: string
}

/** Cifra fija o calculada a partir de un año (p. ej. años desde la graduación). */
export type CifraTrayectoria = { texto: string } | { desdeAnio: number; texto: string }

export interface Trayectoria {
  formacion: string
  cifras: CifraTrayectoria[]
  obras: string[]
}

export interface Socio {
  rol: string
  nombre: string
  profesion: string
  foto?: Imagen
  trayectoria?: Trayectoria
}

export interface HitoTiempo {
  anio: string
  texto: string
}

export interface PresenciaDepartamento {
  departamento: string
  municipios: number
  tono: 'azul' | 'noche' | 'gris'
}
