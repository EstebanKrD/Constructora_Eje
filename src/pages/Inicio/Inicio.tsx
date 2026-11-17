import { FranjaClientes } from '@/components/secciones/FranjaClientes'
import { ListaRazones } from '@/components/secciones/ListaRazones'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { CLIENTES_INICIO, POR_QUE, SEO_INICIO } from '@/data/inicio'
import { BloqueSalud } from '@/pages/Inicio/components/BloqueSalud'
import { DisenoConstruccion } from '@/pages/Inicio/components/DisenoConstruccion'
import { Hero } from '@/pages/Inicio/components/Hero'
import { ObrasDestacadas } from '@/pages/Inicio/components/ObrasDestacadas'
import { ServiciosResumen } from '@/pages/Inicio/components/ServiciosResumen'
import estilos from './Inicio.module.css'

export function Inicio() {
  return (
    <>
      <title>{SEO_INICIO.titulo}</title>
      <meta name="description" content={SEO_INICIO.descripcion} />
      <Hero />

      <section className={estilos.clientes} aria-labelledby="clientes-inicio">
        <div className="contenedor">
          <EtiquetaSeccion>{CLIENTES_INICIO.etiqueta}</EtiquetaSeccion>
          <h2 id="clientes-inicio" className="titulo-seccion">
            {CLIENTES_INICIO.titulo}
          </h2>
          <FranjaClientes className={estilos.franja} />
        </div>
      </section>

      <ServiciosResumen />
      <DisenoConstruccion />
      <BloqueSalud />

      <section className="seccion" aria-labelledby="por-que">
        <div className="contenedor">
          <EtiquetaSeccion>{POR_QUE.etiqueta}</EtiquetaSeccion>
          <h2 id="por-que" className="titulo-seccion">
            {POR_QUE.titulo}
          </h2>
          <ListaRazones razones={POR_QUE.razones} className={estilos.razones} />
        </div>
      </section>

      <ObrasDestacadas />
    </>
  )
}
