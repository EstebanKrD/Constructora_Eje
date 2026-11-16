import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Lleva la vista arriba en cada cambio de ruta. Si la URL trae un ancla
 * (#casos), desplaza hasta esa sección. No reacciona a cambios de ?query
 * (los filtros no deben mover la página).
 */
export function ScrollAlInicio() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const id = hash.slice(1)
    const destino = id ? document.getElementById(decodeURIComponent(id)) : null
    if (destino) {
      destino.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
