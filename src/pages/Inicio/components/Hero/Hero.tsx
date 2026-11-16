import { Boton } from '@/components/ui/Boton'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { HERO } from '@/data/inicio'
import { clases } from '@/utils/clases'
import { CifrasHero } from '@/pages/Inicio/components/CifrasHero'
import estilos from './Hero.module.css'

export function Hero() {
  return (
    <section className={estilos.hero}>
      <div className={clases('contenedor', estilos.columnas)}>
        <div className={estilos.texto}>
          <EtiquetaSeccion tono="oscuro">{HERO.etiqueta}</EtiquetaSeccion>
          <h1 className={estilos.titulo}>{HERO.titulo}</h1>
          <p className={estilos.parrafo}>{HERO.texto}</p>
          <div className={estilos.acciones}>
            <Boton to={HERO.botonPrincipal.ruta} fondo="oscuro">
              {HERO.botonPrincipal.etiqueta}
            </Boton>
            <Boton to={HERO.botonSecundario.ruta} variante="secundarioOscuro" fondo="oscuro">
              {HERO.botonSecundario.etiqueta}
            </Boton>
          </div>
        </div>
        <img
          className={estilos.imagen}
          src={HERO.imagen.src}
          alt={HERO.imagen.alt}
          width={HERO.imagen.ancho}
          height={HERO.imagen.alto}
          fetchPriority="high"
        />
      </div>
      <CifrasHero />
    </section>
  )
}
