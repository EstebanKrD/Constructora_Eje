import { EncabezadoPagina } from '@/components/secciones/EncabezadoPagina'
import { TarjetaServicio } from '@/components/secciones/TarjetaServicio'
import { DETALLES_SERVICIO, ENCABEZADO_SERVICIOS, SERVICIOS } from '@/data/servicios'
import { DetalleServicio } from '@/pages/Servicios/components/DetalleServicio'
import { Pilares } from '@/pages/Servicios/components/Pilares'
import estilos from './Servicios.module.css'

export function Servicios() {
  return (
    <>
      <EncabezadoPagina
        etiqueta={ENCABEZADO_SERVICIOS.etiqueta}
        titulo={ENCABEZADO_SERVICIOS.titulo}
        texto={ENCABEZADO_SERVICIOS.texto}
      />
      <Pilares />
      <div className={estilos.servicios}>
        <div className="contenedor">
          <ul className={estilos.tarjetas}>
            {SERVICIOS.map((servicio) => (
              <li key={servicio.numero} className={estilos.item}>
                <TarjetaServicio servicio={servicio} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {DETALLES_SERVICIO.map((detalle, indice) => (
        <DetalleServicio
          key={detalle.etiqueta}
          detalle={detalle}
          fondo={indice % 2 === 0 ? 'blanco' : 'claro'}
        />
      ))}
    </>
  )
}
