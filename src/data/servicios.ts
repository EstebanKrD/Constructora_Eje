import coliseoCubierta from '@/assets/obras/coliseo-cubierta.webp'
import interiorSala from '@/assets/obras/interior-sala.webp'
import utpBloqueNorte from '@/assets/obras/utp-bloque-norte.webp'
import type { DetalleServicio, Pilar, Servicio } from '@/types/contenido'

export const SERVICIOS: Servicio[] = [
  {
    numero: '01',
    titulo: 'Diseño integral',
    texto: 'Arquitectura, estructura, redes y sistemas en un solo modelo.',
  },
  {
    numero: '02',
    titulo: 'Vivienda a la medida',
    texto: 'Casas campestres y urbanas pensadas para quien las habita.',
  },
  {
    numero: '03',
    titulo: 'Edificaciones',
    texto: 'Residenciales, corporativas, educativas e institucionales.',
  },
  {
    numero: '04',
    titulo: 'Adecuaciones',
    texto: 'Sedes, oficinas y locales intervenidos con la operación en marcha.',
  },
  {
    numero: '05',
    titulo: 'Estructura metálica',
    texto: 'Cubiertas de gran luz, coliseos, bodegas y naves.',
  },
  {
    numero: '06',
    titulo: 'Gerencia de proyectos',
    texto: 'Presupuesto, programación y control de costo y plazo.',
  },
]

export const ENCABEZADO_SERVICIOS = {
  etiqueta: '01 · QUÉ HACEMOS',
  titulo: 'De la idea al espacio habitado.',
  texto: 'Diseñamos y construimos vivienda y edificaciones.',
}

export const PILARES = {
  etiqueta: 'QUIÉNES SOMOS',
  titulo: 'Un solo responsable: diseñamos, gerenciamos y construimos.',
  pilares: [
    {
      titulo: 'Diseño',
      texto:
        'Diseñadores propios en arquitectura, estructuras, redes eléctricas, aire acondicionado y red contra incendio.',
    },
    {
      titulo: 'Gerencia integral',
      texto:
        'Planeación, compras, control de costo y plazo, y reporte transparente al cliente en tiempo real.',
    },
    {
      titulo: 'Obra',
      texto:
        'Ejecución con equipo propio y especialistas, bajo un sistema de calidad y seguridad probado.',
    },
  ] satisfies Pilar[],
}

export const DETALLES_SERVICIO: DetalleServicio[] = [
  {
    etiqueta: 'VIVIENDA A LA MEDIDA',
    titulo: 'Casas que se diseñan alrededor de quien las habita.',
    texto:
      'Luz natural, materiales nobles y detalles de carpintería resueltos desde el diseño. Acompañamos cada decisión con planos, modelos 3D y un presupuesto claro.',
    imagen: {
      src: interiorSala,
      alt: 'Sala de una vivienda a la medida con luz natural y carpintería en madera',
      ancho: 661,
      alto: 744,
    },
  },
  {
    etiqueta: 'ESTRUCTURA METÁLICA',
    titulo: 'Grandes luces, cero columnas de sobra.',
    texto: 'Diseñamos, fabricamos y montamos cubiertas, coliseos, bodegas y naves.',
    dato: { valor: '+200.000 m²', texto: 'de cubiertas y estructuras en acero' },
    imagen: {
      src: coliseoCubierta,
      alt: 'Cubierta circular en estructura metálica de gran luz sobre las graderías de un coliseo',
      ancho: 1200,
      alto: 1200,
    },
  },
  {
    etiqueta: 'EDIFICACIONES',
    titulo: 'Edificios que funcionan bien desde el primer día.',
    texto:
      'Aulas, laboratorios, sedes y espacios de atención con redes eléctricas, datos, aire acondicionado y protección contra incendio integradas.',
    imagen: {
      src: utpBloqueNorte,
      alt: 'Bloque Norte de la Universidad Tecnológica de Pereira',
      ancho: 1200,
      alto: 624,
    },
  },
]
