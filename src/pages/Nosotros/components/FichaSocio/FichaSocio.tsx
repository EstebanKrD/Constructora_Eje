import { useId, useState } from 'react'
import { SOCIOS_TEXTOS } from '@/data/nosotros'
import type { CifraTrayectoria, Socio } from '@/types/contenido'
import { aniosDesde } from '@/utils/formato'
import estilos from './FichaSocio.module.css'

interface FichaSocioProps {
  socio: Socio
}

function textoCifra(cifra: CifraTrayectoria): string {
  return 'desdeAnio' in cifra ? `${aniosDesde(cifra.desdeAnio)} ${cifra.texto}` : cifra.texto
}

export function FichaSocio({ socio }: FichaSocioProps) {
  const [abierta, setAbierta] = useState(false)
  const idPanel = useId()
  const { foto, trayectoria } = socio

  return (
    <article className={estilos.ficha}>
      <div className={estilos.cabecera}>
        {foto ? (
          <img
            className={estilos.foto}
            src={foto.src}
            alt={foto.alt}
            width={96}
            height={120}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={estilos.sinFoto} aria-hidden="true">
            {SOCIOS_TEXTOS.textoFoto}
          </div>
        )}
        <div className={estilos.datos}>
          <p className={estilos.rol}>{socio.rol}</p>
          <h3 className={estilos.nombre}>{socio.nombre}</h3>
          <p className={estilos.profesion}>{socio.profesion}</p>
        </div>
      </div>

      {trayectoria && (
        <>
          <button
            type="button"
            className={estilos.boton}
            aria-expanded={abierta}
            aria-controls={idPanel}
            onClick={() => setAbierta((valor) => !valor)}
          >
            {SOCIOS_TEXTOS.verTrayectoria}
            <span className={estilos.flecha} aria-hidden="true" />
          </button>
          <div id={idPanel} className={estilos.panel} hidden={!abierta}>
            <h4 className={estilos.subtitulo}>{SOCIOS_TEXTOS.formacion}</h4>
            <p className={estilos.parrafo}>{trayectoria.formacion}</p>
            <h4 className={estilos.subtitulo}>{SOCIOS_TEXTOS.cifras}</h4>
            <ul className={estilos.cifras}>
              {trayectoria.cifras.map((cifra) => (
                <li key={cifra.texto}>{textoCifra(cifra)}</li>
              ))}
            </ul>
            <h4 className={estilos.subtitulo}>{SOCIOS_TEXTOS.obras}</h4>
            <ul className={estilos.obras}>
              {trayectoria.obras.map((obra) => (
                <li key={obra}>{obra}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </article>
  )
}
