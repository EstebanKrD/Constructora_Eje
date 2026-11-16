import { SITIO } from '@/config/sitio'
import { DATOS_CONTACTO } from '@/data/contacto'
import { valorOPorConfirmar } from '@/utils/formato'
import { formatearNumero } from '@/utils/mensajes'
import estilos from './DatosContacto.module.css'

/** Todos los datos salen de `SITIO`; lo que falta se muestra como «Por confirmar». */
const telefono = SITIO.whatsappNumero?.trim() || SITIO.telefono.trim()

const DATOS = [
  {
    etiqueta: DATOS_CONTACTO.ubicacion.etiqueta,
    valor: SITIO.direccion.trim() || DATOS_CONTACTO.ubicacion.valorPorDefecto,
  },
  {
    etiqueta: DATOS_CONTACTO.telefono.etiqueta,
    valor: telefono ? formatearNumero(telefono) : valorOPorConfirmar(''),
  },
  { etiqueta: DATOS_CONTACTO.correo.etiqueta, valor: valorOPorConfirmar(SITIO.correo) },
]

export function DatosContacto() {
  return (
    <div className={estilos.datos}>
      <h2 className="titulo-seccion">{DATOS_CONTACTO.titulo}</h2>
      <p className={estilos.texto}>{DATOS_CONTACTO.texto}</p>
      <dl className={estilos.lista}>
        {DATOS.map((dato) => (
          <div key={dato.etiqueta} className={estilos.fila}>
            <dt className={estilos.etiqueta}>{dato.etiqueta}</dt>
            <dd className={estilos.valor}>{dato.valor}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
