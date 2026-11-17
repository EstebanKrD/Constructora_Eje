import estructuraInterior from '@/assets/obras/estructura-interior.webp'
import portadaCasaCampestre from '@/assets/obras/portada-casa-campestre.webp'
import type { Imagen } from '@/types/contenido'

export const HERO = {
  etiqueta: 'DISEÑO · CONSTRUCCIÓN · ESTRUCTURA METÁLICA',
  titulo: 'Un solo responsable, del primer trazo a la entrega.',
  texto:
    'Diseñamos, presupuestamos y construimos bajo un mismo techo. Usted habla con un solo equipo y sabe siempre en qué va su obra y cuánto cuesta.',
  botonPrincipal: { etiqueta: 'Hablemos de su proyecto', ruta: '/contacto' },
  botonSecundario: { etiqueta: 'Ver experiencia', ruta: '/experiencia' },
  imagen: {
    src: portadaCasaCampestre,
    alt: 'Vivienda campestre construida por Constructora del Eje',
    ancho: 1527,
    alto: 1472,
  } satisfies Imagen,
}

export const CIFRAS_HERO = [
  { valor: '+500.000', texto: 'metros cuadrados construidos' },
  { valor: '+30', texto: 'años ejecutando proyectos' },
  { valor: '+200.000', texto: 'm² en obra cubierta' },
  { valor: '+2.000.000', texto: 'm² en consultoría y diseño' },
  { valor: '+50', texto: 'colaboradores' },
]

export const CLIENTES_INICIO = {
  etiqueta: 'ALGUNOS DE NUESTROS CLIENTES',
  titulo: 'Han confiado en nosotros.',
}

export const SERVICIOS_INICIO = {
  etiqueta: 'SERVICIOS',
  titulo: 'Seis frentes, un mismo equipo.',
  enlace: { etiqueta: 'Ver todos los servicios', ruta: '/servicios' },
}

export const DISENO_CONSTRUCCION = {
  etiqueta: 'DISEÑO + CONSTRUCCIÓN',
  titulo: 'Quien diseña su obra es quien la construye.',
  texto:
    'Sin reprocesos entre diseñador y constructor, sin cruces de responsabilidades y con un presupuesto hecho sobre cantidades medidas en BIM.',
  imagen: {
    src: estructuraInterior,
    alt: 'Estructura metálica interior',
    ancho: 638,
    alto: 744,
  } satisfies Imagen,
}

export const SALUD = {
  etiqueta: 'EXPERIENCIA EN SALUD',
  titulo: 'Obras de salud con la operación en marcha.',
  texto:
    'Hospitales, clínicas, laboratorios y sedes de atención intervenidos con pacientes y personal presentes, bajo pruebas y certificaciones de cada red.',
  obras: [
    {
      titulo: 'Hospital Universitario San Juan de Dios',
      detalle: 'Reforzamiento estructural · Armenia · 2012',
    },
    {
      titulo: 'Laboratorio Clínico MLH',
      detalle: 'Tres sedes adecuadas y dotadas · Armenia, Pereira y Manizales · 2017 – 2019',
    },
    {
      titulo: 'Unidad mental, comedor y consulta externa',
      detalle: '600 m² en cuatro meses y medio · 2022',
    },
  ],
  enlace: { etiqueta: 'Ver casos de éxito', ruta: '/experiencia#casos' },
}

export const POR_QUE = {
  etiqueta: 'POR QUÉ CONSTRUCTORA DEL EJE',
  titulo: 'Cuatro razones para estar tranquilo durante la obra.',
  razones: [
    { numero: '1', titulo: 'Un solo responsable', texto: 'Diseño y construcción en las mismas manos.' },
    {
      numero: '2',
      titulo: 'Socios al frente de la obra',
      texto: 'Más de 30 años de experiencia dirigen cada proyecto.',
    },
    {
      numero: '3',
      titulo: 'Presupuesto sin sorpresas',
      texto: 'Cantidades medidas en el modelo y precios unitarios explicados.',
    },
    {
      numero: '4',
      titulo: 'Transparencia total',
      texto: 'Avance, costo y fotos de su obra en un tablero en línea.',
    },
  ],
}

export const OBRAS_DESTACADAS = {
  etiqueta: 'OBRAS',
  titulo: 'Lo construido habla por nosotros.',
  enlace: { etiqueta: 'Ver toda la experiencia', ruta: '/experiencia' },
  ids: ['megacolegio-ezequiel-moreno', 'estadio-centenario', 'villas-de-ensueno'],
}

export const SEO_INICIO = {
  titulo: 'Constructora del Eje · Diseño, construcción y estructura metálica',
  descripcion:
    'Diseño, construcción, estructura metálica y gerencia de proyectos con un solo responsable. Más de 30 años y 227 contratos ejecutados en 21 departamentos.',
}
