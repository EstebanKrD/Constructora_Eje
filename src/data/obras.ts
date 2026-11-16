import complejoDelPorro from '@/assets/obras/complejo-del-porro.webp'
import corredoresVialesSinu from '@/assets/obras/corredores-viales-sinu.webp'
import estadioCentenarioAerea from '@/assets/obras/estadio-centenario-aerea.webp'
import estadioGraderias from '@/assets/obras/estadio-graderias.webp'
import estadioNoche from '@/assets/obras/estadio-noche.webp'
import megacolegioAerea from '@/assets/obras/megacolegio-aerea.webp'
import megacolegioAulas from '@/assets/obras/megacolegio-aulas.webp'
import megacolegioAzul from '@/assets/obras/megacolegio-azul.webp'
import megacolegioBloque from '@/assets/obras/megacolegio-bloque.webp'
import megacolegioCubierta from '@/assets/obras/megacolegio-cubierta.webp'
import megacolegioEstructura from '@/assets/obras/megacolegio-estructura.webp'
import megacolegioPasillo from '@/assets/obras/megacolegio-pasillo.webp'
import placasCubiertas from '@/assets/obras/placas-cubiertas.webp'
import placasCubiertas2 from '@/assets/obras/placas-cubiertas-2.webp'
import unidadDeportivaCancha from '@/assets/obras/unidad-deportiva-cancha.webp'
import unidadDeportivaEstadio from '@/assets/obras/unidad-deportiva-estadio.webp'
import unidadDeportivaPista from '@/assets/obras/unidad-deportiva-pista.webp'
import utpBloqueNorte from '@/assets/obras/utp-bloque-norte.webp'
import utpBloqueNorte2 from '@/assets/obras/utp-bloque-norte-2.webp'
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
    galeria: [
      { src: megacolegioAulas, alt: 'Bloques de aulas con cubierta metálica entre zonas verdes del Megacolegio', ancho: 1041, alto: 968 },
      { src: megacolegioAzul, alt: 'Bloque de aulas en ladrillo con marcos y pérgola azules del Megacolegio', ancho: 1232, alto: 960 },
      { src: megacolegioBloque, alt: 'Bloque en ladrillo con celosías y cubierta metálica del Megacolegio', ancho: 1155, alto: 900 },
      { src: megacolegioCubierta, alt: 'Cubierta curva sobre la plaza central del Megacolegio', ancho: 601, alto: 528 },
      { src: megacolegioEstructura, alt: 'Vista aérea de un edificio del Megacolegio con pórticos blancos y pasarela', ancho: 1244, alto: 1200 },
      { src: megacolegioPasillo, alt: 'Pasillo entre bloques de aulas con pérgolas rojas del Megacolegio', ancho: 894, alto: 722 },
    ],
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
      alt: 'Personas corriendo en la pista atlética de la Unidad Deportiva Luis Fernando Montoya, con la gradería cubierta al fondo',
      ancho: 966,
      alto: 655,
    },
    galeria: [
      { src: unidadDeportivaCancha, alt: 'Partido en la cancha de la Unidad Deportiva Luis Fernando Montoya, con la gradería cubierta al fondo', ancho: 1329, alto: 570 },
      { src: unidadDeportivaEstadio, alt: 'Cancha, pista y graderías cubiertas de la Unidad Deportiva Luis Fernando Montoya', ancho: 966, alto: 655 },
    ],
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
    galeria: [
      { src: estadioGraderias, alt: 'Graderías y cancha del Estadio Centenario de Armenia', ancho: 638, alto: 744 },
      { src: estadioNoche, alt: 'Vista aérea nocturna del Estadio Centenario iluminado', ancho: 638, alto: 744 },
    ],
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
      alt: 'Cancha múltiple con cubierta metálica en Santa Rosa de Osos',
      ancho: 1165,
      alto: 1350,
    },
    galeria: [
      { src: placasCubiertas2, alt: 'Cancha múltiple bajo la cubierta metálica en Santa Rosa de Osos', ancho: 638, alto: 744 },
    ],
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
    galeria: [
      { src: utpBloqueNorte2, alt: 'Vista aérea del Bloque Norte de la Universidad Tecnológica de Pereira', ancho: 1200, alto: 405 },
    ],
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
      alt: 'Vista aérea de una vía de doble calzada de los corredores viales del Sinú en Córdoba',
      ancho: 1138,
      alto: 749,
    },
  },
]

/** Devuelve las obras en el orden de los identificadores recibidos. */
export function obrasPorId(ids: readonly string[]): Obra[] {
  return ids.flatMap((id) => OBRAS.filter((obra) => obra.id === id))
}
