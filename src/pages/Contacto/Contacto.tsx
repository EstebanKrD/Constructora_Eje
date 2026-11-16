import { useSolicitud } from '@/pages/Contacto/hooks/useSolicitud'
import { DatosContacto } from '@/pages/Contacto/components/DatosContacto'
import { FormularioSolicitud } from '@/pages/Contacto/components/FormularioSolicitud'
import { PasosInicio } from '@/pages/Contacto/components/PasosInicio'
import { SolicitudLista } from '@/pages/Contacto/components/SolicitudLista'
import { clases } from '@/utils/clases'
import estilos from './Contacto.module.css'

export function Contacto() {
  const { preparada, reiniciar, ...formulario } = useSolicitud()

  const otraSolicitud = () => {
    reiniciar()
    // Tras reiniciar, el foco vuelve al primer campo del formulario.
    requestAnimationFrame(() => document.getElementById('solicitud-nombre')?.focus())
  }

  return (
    <>
      <PasosInicio />
      <section className="seccion">
        <div className={clases('contenedor', estilos.columnas)}>
          <DatosContacto />
          {preparada ? (
            <SolicitudLista
              solicitud={preparada}
              datos={formulario.datos}
              onReiniciar={otraSolicitud}
            />
          ) : (
            <FormularioSolicitud {...formulario} />
          )}
        </div>
      </section>
    </>
  )
}
