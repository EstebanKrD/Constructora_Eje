import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { EncabezadoPagina } from '@/components/secciones/EncabezadoPagina'
import { FranjaClientes } from '@/components/secciones/FranjaClientes'
import { TarjetaObra } from '@/components/secciones/TarjetaObra'
import { Boton } from '@/components/ui/Boton'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import {
  CLIENTES_EXPERIENCIA,
  CTA_EXPERIENCIA,
  ENCABEZADO_EXPERIENCIA,
  FILTROS_OBRAS,
  SEO_EXPERIENCIA,
} from '@/data/experiencia'
import { OBRAS } from '@/data/obras'
import { CasosExito } from '@/pages/Experiencia/components/CasosExito'
import { FiltrosObras } from '@/pages/Experiencia/components/FiltrosObras'
import { GaleriaObra } from '@/pages/Experiencia/components/GaleriaObra'
import { TablaContratos } from '@/pages/Experiencia/components/TablaContratos'
import type { IdCategoriaObra } from '@/types/contenido'
import { valorPermitido } from '@/utils/validacion'
import estilos from './Experiencia.module.css'

const CATEGORIAS = FILTROS_OBRAS.opciones.map((opcion) => opcion.valor)

export function Experiencia() {
  const [parametros] = useSearchParams()
  const { hash } = useLocation()
  const navegar = useNavigate()

  // Solo se acepta una categoría de la lista; cualquier otro valor muestra todas.
  const categoria = valorPermitido(parametros.get(FILTROS_OBRAS.parametro), CATEGORIAS)
  const obras = categoria ? OBRAS.filter((obra) => obra.categoria === categoria) : OBRAS

  const cambiarCategoria = (nueva: IdCategoriaObra | null) => {
    const siguientes = new URLSearchParams(parametros)
    if (nueva) siguientes.set(FILTROS_OBRAS.parametro, nueva)
    else siguientes.delete(FILTROS_OBRAS.parametro)
    const busqueda = siguientes.toString()
    // Se conserva el ancla para que el cambio de filtro no mueva la página.
    navegar({ search: busqueda ? `?${busqueda}` : '', hash }, { replace: true })
  }

  return (
    <>
      <title>{SEO_EXPERIENCIA.titulo}</title>
      <meta name="description" content={SEO_EXPERIENCIA.descripcion} />
      <EncabezadoPagina
        etiqueta={ENCABEZADO_EXPERIENCIA.etiqueta}
        titulo={ENCABEZADO_EXPERIENCIA.titulo}
        texto={ENCABEZADO_EXPERIENCIA.texto}
      />

      <section id="obras" className="seccion" aria-label={FILTROS_OBRAS.leyenda}>
        <div className="contenedor">
          <FiltrosObras activa={categoria} onCambiar={cambiarCategoria} />
          <ul className={estilos.obras}>
            {obras.map((obra) => (
              <li key={obra.id} className={estilos.item}>
                <TarjetaObra
                  obra={obra}
                  variante="completa"
                  accion={
                    obra.galeria && <GaleriaObra titulo={obra.titulo} fotos={obra.galeria} />
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CasosExito />
      <TablaContratos />

      <section className={estilos.clientes} aria-labelledby="clientes-experiencia">
        <div className="contenedor">
          <EtiquetaSeccion>{CLIENTES_EXPERIENCIA.etiqueta}</EtiquetaSeccion>
          <h2 id="clientes-experiencia" className="titulo-seccion">
            {CLIENTES_EXPERIENCIA.titulo}
          </h2>
          <FranjaClientes className={estilos.franja} />
        </div>
      </section>

      <section className={estilos.cta} aria-labelledby="cta-experiencia">
        <div className="contenedor">
          <h2 id="cta-experiencia" className="titulo-seccion">
            {CTA_EXPERIENCIA.titulo}
          </h2>
          <Boton to={CTA_EXPERIENCIA.boton.ruta} fondo="oscuro">
            {CTA_EXPERIENCIA.boton.etiqueta}
          </Boton>
        </div>
      </section>
    </>
  )
}
