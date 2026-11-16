import type { Cliente } from '@/types/contenido'
import conconcreto from '@/assets/clientes/conconcreto.webp'
import odinsaGrupoArgos from '@/assets/clientes/odinsa-grupo-argos.webp'
import movistar from '@/assets/clientes/movistar.webp'
import bancoDeLaRepublica from '@/assets/clientes/banco-de-la-republica.webp'
import federacionNacionalDeCafeteros from '@/assets/clientes/federacion-nacional-de-cafeteros.webp'
import camaraDeComercioArmenia from '@/assets/clientes/camara-de-comercio-armenia.webp'
import edeqGrupoEpm from '@/assets/clientes/edeq-grupo-epm.webp'
import invias from '@/assets/clientes/invias.webp'
import universidadTecnologicaDePereira from '@/assets/clientes/universidad-tecnologica-de-pereira.webp'
import universidadNacional from '@/assets/clientes/universidad-nacional.webp'
import universidadDelValle from '@/assets/clientes/universidad-del-valle.webp'
import universidadDelQuindio from '@/assets/clientes/universidad-del-quindio.webp'
import hospitalSanJuanDeDios from '@/assets/clientes/hospital-san-juan-de-dios.webp'
import gobernacionDeCasanare from '@/assets/clientes/gobernacion-de-casanare.webp'
import alcaldiaDeArmenia from '@/assets/clientes/alcaldia-de-armenia.webp'
import telecom from '@/assets/clientes/telecom.webp'

export const CLIENTES: Cliente[] = [
  { nombre: 'Conconcreto', logo: { src: conconcreto, alt: 'Conconcreto', ancho: 691, alto: 148 } },
  { nombre: 'Odinsa (Grupo Argos)', logo: { src: odinsaGrupoArgos, alt: 'Odinsa (Grupo Argos)', ancho: 535, alto: 240 } },
  { nombre: 'Movistar', logo: { src: movistar, alt: 'Movistar', ancho: 265, alto: 240 } },
  { nombre: 'Banco de la República', logo: { src: bancoDeLaRepublica, alt: 'Banco de la República', ancho: 241, alto: 240 } },
  { nombre: 'Federación Nacional de Cafeteros de Colombia', logo: { src: federacionNacionalDeCafeteros, alt: 'Federación Nacional de Cafeteros de Colombia', ancho: 269, alto: 240 } },
  { nombre: 'Cámara de Comercio de Armenia y del Quindío', logo: { src: camaraDeComercioArmenia, alt: 'Cámara de Comercio de Armenia y del Quindío', ancho: 241, alto: 240 } },
  { nombre: 'EDEQ (Grupo EPM)', logo: { src: edeqGrupoEpm, alt: 'EDEQ (Grupo EPM)', ancho: 631, alto: 230 } },
  { nombre: 'INVIAS', logo: { src: invias, alt: 'INVIAS', ancho: 584, alto: 240 } },
  { nombre: 'Universidad Tecnológica de Pereira', logo: { src: universidadTecnologicaDePereira, alt: 'Universidad Tecnológica de Pereira', ancho: 356, alto: 240 } },
  { nombre: 'Universidad Nacional de Colombia', logo: { src: universidadNacional, alt: 'Universidad Nacional de Colombia', ancho: 550, alto: 240 } },
  { nombre: 'Universidad del Valle', logo: { src: universidadDelValle, alt: 'Universidad del Valle', ancho: 173, alto: 240 } },
  { nombre: 'Universidad del Quindío', logo: { src: universidadDelQuindio, alt: 'Universidad del Quindío', ancho: 681, alto: 205 } },
  { nombre: 'Hospital Departamental Universitario del Quindío San Juan de Dios', logo: { src: hospitalSanJuanDeDios, alt: 'Hospital Departamental Universitario del Quindío San Juan de Dios', ancho: 507, alto: 240 } },
  { nombre: 'Gobernación de Casanare', logo: { src: gobernacionDeCasanare, alt: 'Gobernación de Casanare', ancho: 202, alto: 240 } },
  { nombre: 'Alcaldía de Armenia', logo: { src: alcaldiaDeArmenia, alt: 'Alcaldía de Armenia', ancho: 723, alto: 203 } },
  { nombre: 'Telecom', logo: { src: telecom, alt: 'Telecom', ancho: 324, alto: 240 } },
]
