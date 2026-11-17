import { SEO_NOSOTROS } from '@/data/nosotros'
import { Historia } from '@/pages/Nosotros/components/Historia'
import { LineaTiempo } from '@/pages/Nosotros/components/LineaTiempo'
import { Presencia } from '@/pages/Nosotros/components/Presencia'
import { Socios } from '@/pages/Nosotros/components/Socios'
import estilos from './Nosotros.module.css'

export function Nosotros() {
  return (
    <>
      <title>{SEO_NOSOTROS.titulo}</title>
      <meta name="description" content={SEO_NOSOTROS.descripcion} />
      <Historia />
      <div className={estilos.linea}>
        <LineaTiempo />
      </div>
      <Socios />
      <Presencia />
    </>
  )
}
