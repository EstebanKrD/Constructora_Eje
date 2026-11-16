import { Historia } from '@/pages/Nosotros/components/Historia'
import { LineaTiempo } from '@/pages/Nosotros/components/LineaTiempo'
import { Presencia } from '@/pages/Nosotros/components/Presencia'
import { Socios } from '@/pages/Nosotros/components/Socios'
import estilos from './Nosotros.module.css'

export function Nosotros() {
  return (
    <>
      <Historia />
      <div className={estilos.linea}>
        <LineaTiempo />
      </div>
      <Socios />
      <Presencia />
    </>
  )
}
