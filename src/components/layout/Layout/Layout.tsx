import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ScrollAlInicio } from '@/components/layout/ScrollAlInicio'
import { HEADER } from '@/data/navegacion'
import estilos from './Layout.module.css'

export function Layout() {
  return (
    <div className={estilos.layout}>
      <ScrollAlInicio />
      <a href="#contenido" className={estilos.saltar}>
        {HEADER.saltarAlContenido}
      </a>
      <Header />
      <main id="contenido" tabIndex={-1} className={estilos.contenido}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
