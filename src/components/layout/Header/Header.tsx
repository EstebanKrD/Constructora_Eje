import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoCirculo from '@/assets/marca/logo-circulo.webp'
import logoRect from '@/assets/marca/logo-rect.webp'
import { Boton } from '@/components/ui/Boton'
import { SITIO } from '@/config/sitio'
import { BOTON_CONTACTO, HEADER, NAVEGACION } from '@/data/navegacion'
import { clases } from '@/utils/clases'
import estilos from './Header.module.css'

const ID_MENU = 'menu-principal'

const LOGOS = {
  horizontal: { src: logoRect, ancho: 85, alto: 64 },
  circular: { src: logoCirculo, ancho: 72, alto: 72 },
} as const

export function Header() {
  const { pathname } = useLocation()
  const [abierto, setAbierto] = useState(false)
  const [rutaAnterior, setRutaAnterior] = useState(pathname)

  // Al cambiar de ruta el menú se cierra y su estado se limpia, para que no
  // reaparezca abierto al volver a la ruta anterior.
  if (rutaAnterior !== pathname) {
    setRutaAnterior(pathname)
    setAbierto(false)
  }

  const botonMenu = useRef<HTMLButtonElement>(null)
  const logo = LOGOS[SITIO.versionLogoHeader]

  useEffect(() => {
    if (!abierto) return
    const alPresionarTecla = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        setAbierto(false)
        botonMenu.current?.focus()
      }
    }
    document.addEventListener('keydown', alPresionarTecla)
    return () => document.removeEventListener('keydown', alPresionarTecla)
  }, [abierto])

  const alternarMenu = () => setAbierto((valor) => !valor)

  return (
    <header className={estilos.header}>
      <div className={clases('contenedor', estilos.barra)}>
        <Link to="/" className={estilos.marca}>
          <img
            className={clases(estilos.logo, SITIO.versionLogoHeader === 'circular' && estilos.logoCircular)}
            src={logo.src}
            alt={HEADER.altLogo}
            width={logo.ancho}
            height={logo.alto}
          />
        </Link>

        <button
          ref={botonMenu}
          type="button"
          className={estilos.botonMenu}
          aria-expanded={abierto}
          aria-controls={ID_MENU}
          aria-label={abierto ? HEADER.cerrarMenu : HEADER.abrirMenu}
          onClick={alternarMenu}
        >
          <span className={clases(estilos.icono, abierto && estilos.iconoAbierto)} aria-hidden="true" />
        </button>

        <nav
          id={ID_MENU}
          className={clases(estilos.navegacion, abierto && estilos.abierto)}
          aria-label={HEADER.etiquetaNavegacion}
        >
          <ul className={estilos.lista}>
            {NAVEGACION.map((enlace) => (
              <li key={enlace.ruta}>
                <NavLink
                  to={enlace.ruta}
                  end={enlace.ruta === '/'}
                  className={({ isActive }) => clases(estilos.enlace, isActive && estilos.activo)}
                >
                  {enlace.etiqueta}
                </NavLink>
              </li>
            ))}
            <li className={estilos.contactoEnMenu}>
              <Boton to={BOTON_CONTACTO.ruta}>{BOTON_CONTACTO.etiqueta}</Boton>
            </li>
          </ul>
        </nav>

        <Boton to={BOTON_CONTACTO.ruta} className={estilos.contacto}>
          {BOTON_CONTACTO.etiqueta}
        </Boton>
      </div>
    </header>
  )
}
