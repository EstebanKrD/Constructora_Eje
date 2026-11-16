import { CifraDestacada } from '@/components/ui/CifraDestacada'
import { CIFRAS_HERO } from '@/data/inicio'
import { clases } from '@/utils/clases'
import estilos from './CifrasHero.module.css'

export function CifrasHero() {
  return (
    <div className={clases('contenedor', estilos.envoltura)}>
      <ul className={estilos.cifras}>
        {CIFRAS_HERO.map((cifra) => (
          <li key={cifra.texto}>
            <CifraDestacada valor={cifra.valor} texto={cifra.texto} tono="oscuro" />
          </li>
        ))}
      </ul>
    </div>
  )
}
