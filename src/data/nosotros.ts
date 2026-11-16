import type { HitoTiempo, PresenciaDepartamento, Socio } from '@/types/contenido'

export const HISTORIA = {
  etiqueta: 'NUESTRA HISTORIA',
  titulo: 'Cuatro décadas de obra, reunidas en una sola firma.',
  texto:
    'Un arquitecto y cinco ingenieros civiles con trayectorias propias en edificación, vivienda, estructura metálica, vías y acueductos decidieron sumar lo que cada uno sabe hacer mejor. Así se formó Constructora del Eje: la experiencia de seis carreras completas en un mismo equipo.',
}

export const LINEA_TIEMPO: HitoTiempo[] = [
  { anio: '1982', texto: 'Primeras obras de los socios en el Eje Cafetero.' },
  { anio: '1999', texto: 'Reconstrucción del Eje Cafetero tras el sismo.' },
  { anio: '2007 – 2015', texto: 'Universidades, colegios y escenarios deportivos en acero.' },
  { anio: 'HOY', texto: 'Vivienda, edificaciones y gerencia bajo una misma firma.' },
]

export const SOCIOS_TEXTOS = {
  etiqueta: 'LOS SOCIOS',
  titulo: 'Seis carreras completas al frente de cada obra.',
  textoFoto: 'FOTO',
  verTrayectoria: 'Ver trayectoria',
  formacion: 'Formación',
  cifras: 'Cifras',
  obras: 'Obras',
}

export const SOCIOS: Socio[] = [
  {
    rol: 'COFUNDADOR · REPRESENTANTE LEGAL',
    nombre: 'Carlos Harold Lara Betancourt',
    profesion: 'Ingeniero civil',
  },
  {
    rol: 'COFUNDADOR',
    nombre: 'Carlos Giovanny Uribe Montoya',
    profesion: 'Arquitecto constructor',
  },
  {
    rol: 'COFUNDADOR',
    nombre: 'Óscar Eduardo Hernández Gaviria',
    profesion: 'Ingeniero civil · Especialista en gerencia de proyectos',
    trayectoria: {
      formacion:
        'Ingeniero civil, Universidad del Quindío (1982). Especialista en Gerencia de Proyectos de Ingeniería, EAN.',
      cifras: [
        { desdeAnio: 1982, texto: 'años de graduado' },
        { texto: '270 mil m² cubiertos construidos' },
      ],
      obras: [
        'Reforzamiento estructural del Hospital Universitario San Juan de Dios de Armenia, fases I y II (2010–2012).',
        'Director de obra del Estadio Marino Klinger de Buenaventura, obra de $39.945.570.989 (2022–2024).',
        'Director de obra de la Estación de Bomberos de Istmina y de las obras del campus de la Universidad del Quindío.',
        'Megacolegio Ezequiel Moreno y Díaz y reformas del Estadio Centenario de Armenia.',
      ],
    },
  },
  {
    rol: 'COFUNDADOR',
    nombre: 'Luciano Argemiro Echeverri Arango',
    profesion: 'Ingeniero civil · Especialista en gerencia integral de obras',
    trayectoria: {
      formacion:
        'Ingeniero civil, Universidad del Quindío. Especialista en Gerencia Integral de Obras, Escuela de Ingenieros Militares (2001).',
      cifras: [{ texto: '+35 años en obra' }, { texto: '2,5 años en obra hospitalaria' }],
      obras: [
        'Reparación del cuarto piso del Hospital Universitario San Juan de Dios de Armenia (1999–2002).',
        'Primera etapa del Centro de Atención Integral a la Primera Infancia de Confamiliares de Caldas (2009).',
        'Remodelación y adecuación de la sede de la Corporación Universitaria Alexander von Humboldt (2007–2008).',
        'Residente de los edificios Yakarta y Pietra Santa, y de 183 viviendas del plan El Sueño en Quimbaya.',
      ],
    },
  },
  {
    rol: 'COFUNDADOR',
    nombre: 'Carlos Julián Soto Muriel',
    profesion: 'Ingeniero civil',
  },
  {
    rol: 'COFUNDADOR',
    nombre: 'Daniel Torres Betancourt',
    profesion: 'Ingeniero civil',
  },
]

export const PRESENCIA = {
  etiqueta: 'PRESENCIA',
  titulo: '106 municipios en 21 departamentos.',
  texto: '227 contratos ejecutados, con el centro de gravedad en Antioquia y el Eje Cafetero.',
  tituloGrafica: 'MUNICIPIOS CON OBRA POR DEPARTAMENTO',
  /** Valor que equivale al 100 % del ancho de la barra. */
  maximo: 39,
  departamentos: [
    { departamento: 'Antioquia', municipios: 39, tono: 'azul' },
    { departamento: 'Caquetá', municipios: 9, tono: 'gris' },
    { departamento: 'Tolima', municipios: 8, tono: 'gris' },
    { departamento: 'Cundinamarca', municipios: 7, tono: 'gris' },
    { departamento: 'Quindío', municipios: 6, tono: 'noche' },
    { departamento: 'Caldas', municipios: 6, tono: 'noche' },
    { departamento: 'Santander', municipios: 6, tono: 'gris' },
    { departamento: 'Valle del Cauca', municipios: 5, tono: 'gris' },
    { departamento: 'Meta', municipios: 4, tono: 'gris' },
    { departamento: '11 más', municipios: 16, tono: 'gris' },
  ] satisfies PresenciaDepartamento[],
}
