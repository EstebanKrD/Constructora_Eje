import { EncabezadoPagina } from '@/components/secciones/EncabezadoPagina'
import { SITIO } from '@/config/sitio'
import { POLITICA, SEO_POLITICA } from '@/data/politica'
import { valorOPorConfirmar } from '@/utils/formato'
import { formatearNumero } from '@/utils/mensajes'
import estilos from './PoliticaDatos.module.css'

const { responsable } = POLITICA
const telefono = SITIO.telefono.trim() || SITIO.whatsappNumero?.trim() || ''

/** Datos del responsable: salen de `SITIO`; lo que falta se muestra como «Por confirmar». */
const DATOS_RESPONSABLE = [
  [responsable.etiquetas.razonSocial, responsable.razonSocial],
  [responsable.etiquetas.nit, valorOPorConfirmar(SITIO.nit)],
  [responsable.etiquetas.direccion, valorOPorConfirmar(SITIO.direccion)],
  [responsable.etiquetas.correo, valorOPorConfirmar(SITIO.correo)],
  [responsable.etiquetas.telefono, telefono ? formatearNumero(telefono) : valorOPorConfirmar('')],
]

export function PoliticaDatos() {
  return (
    <>
      <title>{SEO_POLITICA.titulo}</title>
      <meta name="description" content={SEO_POLITICA.descripcion} />
      <EncabezadoPagina etiqueta={POLITICA.etiqueta} titulo={POLITICA.titulo} />
      <div className="seccion">
        <div className="contenedor">
          <div className={estilos.texto}>
            <p className={estilos.nota} role="note">
              {POLITICA.nota}
            </p>

            <section aria-labelledby="politica-responsable">
              <h2 id="politica-responsable" className={estilos.titulo}>
                {responsable.titulo}
              </h2>
              <dl className={estilos.responsable}>
                {DATOS_RESPONSABLE.map(([etiqueta, valor]) => (
                  <div key={etiqueta} className={estilos.fila}>
                    <dt>{etiqueta}</dt>
                    <dd>{valor}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {POLITICA.secciones.map((seccion) => (
              <section key={seccion.titulo}>
                <h2 className={estilos.titulo}>{seccion.titulo}</h2>
                {seccion.parrafos?.map((parrafo) => (
                  <p key={parrafo} className={estilos.parrafo}>
                    {parrafo}
                  </p>
                ))}
                {seccion.lista && (
                  <ul className={estilos.lista}>
                    {seccion.lista.map((punto) => (
                      <li key={punto}>{punto}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section>
              <h2 className={estilos.titulo}>{POLITICA.vigencia.titulo}</h2>
              <p className={estilos.parrafo}>
                {POLITICA.vigencia.texto}
                {valorOPorConfirmar(POLITICA.fechaPublicacion)}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
