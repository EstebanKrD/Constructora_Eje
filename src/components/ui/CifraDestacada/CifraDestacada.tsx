import { clases } from '@/utils/clases'
import estilos from './CifraDestacada.module.css'

interface CifraDestacadaProps {
  valor: string
  texto: string
  /** Nombre corto opcional del indicador (p. ej. SPI). */
  etiqueta?: string
  tono?: 'claro' | 'oscuro'
  tamano?: 'mediano' | 'grande'
  className?: string
}

export function CifraDestacada({
  valor,
  texto,
  etiqueta,
  tono = 'claro',
  tamano = 'mediano',
  className,
}: CifraDestacadaProps) {
  return (
    <div
      className={clases(
        estilos.cifra,
        tono === 'oscuro' && estilos.oscura,
        tamano === 'grande' && estilos.grande,
        className,
      )}
    >
      <p className={estilos.valor}>{valor}</p>
      {etiqueta && <p className={estilos.etiqueta}>{etiqueta}</p>}
      <p className={estilos.texto}>{texto}</p>
    </div>
  )
}
