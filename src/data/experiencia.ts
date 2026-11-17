import type { IdCategoriaObra } from '@/types/contenido'

export const ENCABEZADO_EXPERIENCIA = {
  etiqueta: '03 · EXPERIENCIA',
  titulo: 'Lo construido habla por nosotros.',
  texto:
    'Vivienda campestre y multifamiliar, edificaciones, vías, acueductos y escenarios deportivos.',
}

export const FILTROS_OBRAS = {
  leyenda: 'Filtrar obras por categoría',
  parametro: 'categoria',
  todas: 'Todas',
  opciones: [
    { valor: 'educacion', etiqueta: 'Educación' },
    { valor: 'multifamiliar', etiqueta: 'Multifamiliar' },
    { valor: 'escenario-deportivo', etiqueta: 'Escenario deportivo' },
    { valor: 'estructura-metalica', etiqueta: 'Estructura metálica' },
    { valor: 'infraestructura', etiqueta: 'Infraestructura' },
  ] satisfies { valor: IdCategoriaObra; etiqueta: string }[],
}

export const GALERIA = {
  verFotos: (cantidad: number) => `Ver fotos (${cantidad})`,
  cerrar: 'Cerrar',
  anterior: 'Foto anterior',
  siguiente: 'Foto siguiente',
  posicion: (actual: number, total: number) => `${actual} de ${total}`,
}

export interface CasoExito {
  etiqueta: string
  titulo: string
  subtitulo: string
  reto: string
  herramientas: string[]
  resultado: string
  cifras: { valor: string; texto: string }[]
  fuente?: string
}

export const CASOS_EXITO = {
  etiqueta: 'CASOS DE ÉXITO',
  titulo: 'Tres proyectos donde la gestión hizo la diferencia.',
  textos: {
    reto: 'El reto',
    herramientas: 'Herramientas aplicadas',
    resultado: 'El resultado',
  },
  casos: [
    {
      etiqueta: 'CASO 1 · SEDES DE ATENCIÓN EN SALUD',
      titulo: 'Laboratorio Clínico MLH: tres sedes en el Eje Cafetero',
      subtitulo:
        'Adecuación, construcción y dotación de mobiliario de sus sedes en Armenia, Pereira y Manizales.',
      reto: 'Convertir locales existentes en sedes de atención en salud, con mobiliario a la medida y en plazos reducidos.',
      herramientas: [
        'Programación en MS Project con línea base por sede',
        'Control de presupuesto y compras por capítulo',
        'Estándar de diseño y mobiliario replicado entre sedes',
      ],
      resultado:
        'Tres sedes adecuadas y dotadas. Lo aprendido en Armenia (320 m²) se aplicó en Pereira (240 m²) y luego en Manizales.',
      cifras: [
        { valor: '3', texto: 'sedes' },
        { valor: '$2.487.717.000', texto: 'ejecutados en total' },
      ],
      fuente: 'Récord de obra, contratos 03 de 2017, 2018 y 2019',
    },
    {
      etiqueta: 'CASO 2 · OBRA EN UNA SEDE EN FUNCIONAMIENTO',
      titulo: 'Clínica Especializada Luis Amigó Ferrer',
      subtitulo:
        'Construcción de la unidad mental, el comedor y el área de consulta externa de su sede principal.',
      reto: 'Construir espacios de atención en salud dentro de una sede en funcionamiento, con pacientes y personal presentes.',
      herramientas: [
        'Planificación semanal con compromisos por cuadrilla',
        'Bitácora digital con registro fotográfico diario',
        'Listas de chequeo por especialidad antes de cerrar',
      ],
      resultado: 'Obra de $1.166.758.456 terminada en cuatro meses y medio.',
      cifras: [
        { valor: '600', texto: 'm² de obra de salud' },
        { valor: '4,5', texto: 'meses, julio a diciembre de 2022' },
      ],
      fuente: 'Récord de obra, contrato OPS-027-2022',
    },
    {
      etiqueta: 'CASO 3 · GRAN ESCALA',
      titulo: 'Megacolegio Ezequiel Moreno y Díaz',
      subtitulo:
        'Villanueva, Casanare. Aulas, laboratorios, auditorio y restaurantes en estructura metálica, en dos etapas.',
      reto: 'Coordinar decenas de bloques, frentes simultáneos y montajes metálicos en una región con logística compleja.',
      herramientas: [
        'Modelo para coordinar estructura metálica y cubiertas',
        'MS Project con frentes y ruta crítica por bloque',
        'Plataforma propia con alertas tempranas y tablero al cliente',
      ],
      resultado:
        'Dos etapas entregadas y liquidadas, con información de avance disponible para el cliente durante toda la ejecución.',
      cifras: [{ valor: '$28.921.589.691', texto: 'ejecutados en las dos etapas' }],
    },
  ] satisfies CasoExito[],
}

export interface Contrato {
  proyecto: string
  ciudad: string
  anio: string
  /** Valor en pesos colombianos. */
  valor: number
}

export const CONTRATOS = {
  etiqueta: 'CONTRATOS EJECUTADOS',
  titulo: 'Experiencia que se puede verificar.',
  columnas: { proyecto: 'Proyecto', ciudad: 'Ciudad', anio: 'Año', valor: 'Valor' },
  textoTotal: 'en contratos de esta tabla',
  contratos: [
    {
      proyecto: 'Adecuación y dotación de mobiliario · Laboratorio Clínico MLH',
      ciudad: 'Manizales',
      anio: '2019',
      valor: 900_000_000,
    },
    {
      proyecto: 'Adecuación y dotación de mobiliario · Laboratorio Clínico MLH (240 m²)',
      ciudad: 'Pereira',
      anio: '2018',
      valor: 850_000_000,
    },
    {
      proyecto: 'Adecuación y dotación de mobiliario · Laboratorio Clínico MLH (320 m²)',
      ciudad: 'Armenia',
      anio: '2017',
      valor: 737_717_000,
    },
    {
      proyecto: 'Unidad mental, comedor y consulta externa (600 m²) · Clínica LA FE',
      ciudad: 'Sede principal',
      anio: '2022',
      valor: 1_166_758_456,
    },
    {
      proyecto: 'Obras civiles, eléctricas y adecuación de sedes · Telefónica Móviles',
      ciudad: 'Nacional',
      anio: '2009',
      valor: 1_950_829_358,
    },
    {
      proyecto: 'Reforzamiento estructural · Hospital Universitario San Juan de Dios',
      ciudad: 'Armenia',
      anio: '2012',
      valor: 2_173_800_872,
    },
    {
      proyecto: 'Bloque norte del módulo interdisciplinario · Universidad Tecnológica de Pereira',
      ciudad: 'Pereira',
      anio: '2009',
      valor: 4_969_057_410,
    },
    {
      proyecto: 'Megacolegio Ezequiel Moreno y Díaz, etapas 1 y 2',
      ciudad: 'Villanueva',
      anio: '2011–2013',
      valor: 28_921_589_691,
    },
  ] satisfies Contrato[],
}

export const CLIENTES_EXPERIENCIA = {
  etiqueta: 'CLIENTES',
  titulo: 'Algunos de nuestros clientes.',
}

export const CTA_EXPERIENCIA = {
  titulo: '¿Tiene un proyecto en mente?',
  boton: { etiqueta: 'Hablemos de su proyecto', ruta: '/contacto' },
}

export const SEO_EXPERIENCIA = {
  titulo: 'Experiencia y obras · Constructora del Eje',
  descripcion:
    'Obras, casos de éxito y contratos verificables: megacolegio, estadios, vivienda multifamiliar, sedes de salud y estructura metálica en Colombia.',
}
