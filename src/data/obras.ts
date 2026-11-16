import complejoDelPorro from '@/assets/obras/complejo-del-porro.webp'
import corredoresVialesSinu from '@/assets/obras/corredores-viales-sinu.webp'
import estadioCentenarioAerea from '@/assets/obras/estadio-centenario-aerea.webp'
import megacolegioAerea from '@/assets/obras/megacolegio-aerea.webp'
import placasCubiertas from '@/assets/obras/placas-cubiertas.webp'
import unidadDeportivaPista from '@/assets/obras/unidad-deportiva-pista.webp'
import utpBloqueNorte from '@/assets/obras/utp-bloque-norte.webp'
import villasDeEnsueno from '@/assets/obras/villas-de-ensueno.webp'
import type { IdCategoriaObra, Obra } from '@/types/contenido'

export const CATEGORIAS_OBRA: Record<IdCategoriaObra, string> = {
  educacion: 'EDUCACIÓN',
  multifamiliar: 'MULTIFAMILIAR',
  'escenario-deportivo': 'ESCENARIO DEPORTIVO',
  'estructura-metalica': 'ESTRUCTURA METÁLICA',
  infraestructura: 'INFRAESTRUCTURA',
}

export const OBRAS: Obra[] = [
  {
    id: 'megacolegio-ezequiel-moreno',
    categoria: 'educacion',
    titulo: 'Megacolegio Ezequiel Moreno y Díaz',
    lugar: 'Villanueva, Casanare',
    periodo: '2010 – 2013',
    descripcion:
      'Todo el colegio en acero y cubierta sándwich. Aulas, laboratorios, auditorio, restaurantes y una cubierta curva sobre la plaza central.',
    ficha: [
      { etiqueta: 'Área cubierta', valor: '25.000 m² en dos etapas' },
      { etiqueta: 'Estructura', valor: 'Aproximadamente 200 t de acero' },
      { etiqueta: 'Ejecución', valor: '2010 – 2013' },
    ],
    imagen: {
      src: megacolegioAerea,
      alt: 'Vista aérea del Megacolegio Ezequiel Moreno y Díaz en Villanueva, Casanare',
      ancho: 1600,
      alto: 1200,
    },
  },
  {
    id: 'villas-de-ensueno',
    categoria: 'multifamiliar',
    titulo: 'Villas de Ensueño',
    lugar: 'La Estrella, Antioquia',
    periodo: 'Etapas 1 y 3',
    descripcion: 'Vivienda multifamiliar en mampostería estructural a la vista.',
    ficha: [
      { etiqueta: 'Etapa 1', valor: '84 apartamentos en tres torres' },
      { etiqueta: 'Etapa 3', valor: '160 apartamentos' },
      { etiqueta: 'Sistema', valor: 'Mampostería estructural a la vista' },
    ],
    imagen: {
      src: villasDeEnsueno,
      alt: 'Torres de vivienda multifamiliar Villas de Ensueño en mampostería estructural a la vista',
      ancho: 1600,
      alto: 1200,
    },
  },
  {
    id: 'unidad-deportiva-luis-fernando-montoya',
    categoria: 'escenario-deportivo',
    titulo: 'Unidad Deportiva Luis Fernando Montoya',
    lugar: 'Caldas, Antioquia',
    periodo: '2015',
    descripcion: 'Estadio, pista atlética y graderías cubiertas.',
    ficha: [
      { etiqueta: 'Alcance', valor: 'Estadio, pista atlética y graderías cubiertas' },
      { etiqueta: 'Valor de la obra', valor: '$8.250.552.751' },
      { etiqueta: 'Entrega', valor: '2015' },
    ],
    imagen: {
      src: unidadDeportivaPista,
      alt: 'Pista atlética y graderías cubiertas de la Unidad Deportiva Luis Fernando Montoya',
      ancho: 966,
      alto: 655,
    },
  },
  {
    id: 'estadio-centenario',
    categoria: 'estructura-metalica',
    titulo: 'Estadio Centenario',
    lugar: 'Armenia, Quindío',
    periodo: '2010 – 2011',
    descripcion: 'Cubiertas en estructura metálica para el Mundial Sub-20 de 2011.',
    ficha: [
      { etiqueta: 'Área intervenida', valor: '5.031,41 m² en cuatro pisos' },
      { etiqueta: 'Ejecución', valor: '2010 – 2011' },
    ],
    imagen: {
      src: estadioCentenarioAerea,
      alt: 'Vista aérea del Estadio Centenario de Armenia con sus cubiertas metálicas',
      ancho: 1379,
      alto: 1598,
    },
  },
  {
    id: 'placas-cubiertas-santa-rosa',
    categoria: 'estructura-metalica',
    titulo: 'Placas cubiertas',
    lugar: 'Santa Rosa de Osos, Antioquia',
    periodo: '2013',
    descripcion: 'Cubierta metálica ejecutada en siete meses.',
    ficha: [
      { etiqueta: 'Área de cubierta', valor: '4.736,86 m²' },
      { etiqueta: 'Plazo', valor: 'Siete meses' },
    ],
    imagen: {
      src: placasCubiertas,
      alt: 'Cubierta metálica sobre placas deportivas en Santa Rosa de Osos',
      ancho: 1165,
      alto: 1350,
    },
  },
  {
    id: 'bloque-norte-utp',
    categoria: 'educacion',
    titulo: 'Bloque Norte, Universidad Tecnológica de Pereira',
    lugar: 'Pereira, Risaralda',
    periodo: '2007 – 2009',
    descripcion: 'Bloque norte del módulo interdisciplinario.',
    ficha: [
      { etiqueta: 'Área construida', valor: '5.435 m²' },
      { etiqueta: 'Urbanismo', valor: '7.542 m²' },
      { etiqueta: 'Ejecución', valor: '2007 – 2009' },
    ],
    imagen: {
      src: utpBloqueNorte,
      alt: 'Fachada del Bloque Norte de la Universidad Tecnológica de Pereira',
      ancho: 1200,
      alto: 624,
    },
  },
  {
    id: 'complejo-cultural-del-porro',
    categoria: 'infraestructura',
    titulo: 'Complejo Cultural del Porro',
    lugar: 'San Pelayo, Córdoba',
    descripcion: 'Cubierta metálica de gran luz.',
    ficha: [{ etiqueta: 'Ubicación', valor: 'San Pelayo, Córdoba' }],
    imagen: {
      src: complejoDelPorro,
      alt: 'Cubierta metálica de gran luz del Complejo Cultural del Porro en San Pelayo',
      ancho: 1024,
      alto: 674,
    },
  },
  {
    id: 'corredores-viales-sinu',
    categoria: 'infraestructura',
    titulo: 'Corredores viales del Sinú',
    lugar: 'Córdoba',
    descripcion: 'Vías y pavimentos.',
    ficha: [{ etiqueta: 'Ubicación', valor: 'Córdoba' }],
    imagen: {
      src: corredoresVialesSinu,
      alt: 'Vía pavimentada de los corredores viales del Sinú en Córdoba',
      ancho: 1138,
      alto: 749,
    },
  },
]

/** Devuelve las obras en el orden de los identificadores recibidos. */
export function obrasPorId(ids: readonly string[]): Obra[] {
  return ids.flatMap((id) => OBRAS.filter((obra) => obra.id === id))
}
