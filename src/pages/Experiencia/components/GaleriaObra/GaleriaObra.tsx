import { useRef, useState, type KeyboardEvent } from 'react'
import { Boton } from '@/components/ui/Boton'
import { GALERIA } from '@/data/experiencia'
import type { Imagen } from '@/types/contenido'
import estilos from './GaleriaObra.module.css'

interface GaleriaObraProps {
  titulo: string
  fotos: readonly Imagen[]
}

/**
 * Galería en un <dialog> nativo abierto con showModal(): el resto de la página
 * queda inerte (el foco no sale del diálogo) y Escape lo cierra.
 */
export function GaleriaObra({ titulo, fotos }: GaleriaObraProps) {
  const dialogo = useRef<HTMLDialogElement>(null)
  const origen = useRef<HTMLElement | null>(null)
  const [indice, setIndice] = useState(0)
  const total = fotos.length
  const foto = fotos[indice]

  const abrir = () => {
    origen.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setIndice(0)
    dialogo.current?.showModal()
  }

  const cerrar = () => dialogo.current?.close()

  const mover = (paso: number) => setIndice((actual) => (actual + paso + total) % total)

  const alPresionarTecla = (evento: KeyboardEvent<HTMLDialogElement>) => {
    if (evento.key === 'ArrowRight') {
      evento.preventDefault()
      mover(1)
    } else if (evento.key === 'ArrowLeft') {
      evento.preventDefault()
      mover(-1)
    }
  }

  if (total === 0 || !foto) return null

  return (
    <>
      <Boton variante="enlace" onClick={abrir}>
        {GALERIA.verFotos(total)}
      </Boton>
      <dialog
        ref={dialogo}
        className={estilos.dialogo}
        aria-label={titulo}
        onKeyDown={alPresionarTecla}
        onClose={() => origen.current?.focus()}
      >
        <div className={estilos.cabecera}>
          <p className={estilos.titulo}>{titulo}</p>
          <button type="button" className={estilos.cerrar} onClick={cerrar}>
            {GALERIA.cerrar}
          </button>
        </div>
        <figure className={estilos.figura}>
          <img
            className={estilos.imagen}
            src={foto.src}
            alt={foto.alt}
            width={foto.ancho}
            height={foto.alto}
            loading="lazy"
            decoding="async"
          />
          <figcaption className={estilos.posicion} aria-live="polite">
            {GALERIA.posicion(indice + 1, total)}
          </figcaption>
        </figure>
        {total > 1 && (
          <div className={estilos.controles}>
            <button
              type="button"
              className={estilos.flecha}
              aria-label={GALERIA.anterior}
              onClick={() => mover(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className={estilos.flecha}
              aria-label={GALERIA.siguiente}
              onClick={() => mover(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}
