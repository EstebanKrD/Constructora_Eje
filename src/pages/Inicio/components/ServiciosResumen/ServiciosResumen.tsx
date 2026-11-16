import { TarjetaServicio } from '@/components/secciones/TarjetaServicio'
import { Boton } from '@/components/ui/Boton'
import { EtiquetaSeccion } from '@/components/ui/EtiquetaSeccion'
import { SERVICIOS_INICIO } from '@/data/inicio'
import { SERVICIOS } from '@/data/servicios'
import estilos from './ServiciosResumen.module.css'

export function ServiciosResumen() {
  return (
    <section className="seccion" aria-labelledby="servicios-inicio">
      <div className="contenedor">
        <div className={estilos.encabezado}>
          <div>
            <EtiquetaSeccion>{SERVICIOS_INICIO.etiqueta}</EtiquetaSeccion>
            <h2 id="servicios-inicio" className="titulo-seccion">
              {SERVICIOS_INICIO.titulo}
            </h2>
          </div>
          <Boton to={SERVICIOS_INICIO.enlace.ruta} variante="enlace">
            {SERVICIOS_INICIO.enlace.etiqueta}
          </Boton>
        </div>
        <ul className={estilos.tarjetas}>
          {SERVICIOS.map((servicio) => (
            <li key={servicio.numero} className={estilos.item}>
              <TarjetaServicio servicio={servicio} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
