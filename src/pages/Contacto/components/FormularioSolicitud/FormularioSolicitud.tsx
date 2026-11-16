import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Boton } from '@/components/ui/Boton'
import { CampoFormulario } from '@/components/ui/CampoFormulario'
import { CampoSeleccion } from '@/components/ui/CampoSeleccion'
import { CampoTexto } from '@/components/ui/CampoTexto'
import { CasillaAutorizacion } from '@/components/ui/CasillaAutorizacion'
import { FORMULARIO, LIMITES, TIPOS_PROYECTO } from '@/data/contacto'
import type { useSolicitud } from '@/pages/Contacto/hooks/useSolicitud'
import type { CampoSolicitud } from '@/types/solicitud'
import estilos from './FormularioSolicitud.module.css'

type FormularioSolicitudProps = Omit<ReturnType<typeof useSolicitud>, 'preparada' | 'reiniciar'>

const OPCIONES_TIPO = TIPOS_PROYECTO.map((tipo) => ({ valor: tipo, etiqueta: tipo }))
const { campos } = FORMULARIO
const id = (campo: CampoSolicitud) => `solicitud-${campo}`

export function FormularioSolicitud({
  datos,
  errores,
  hayCanal,
  cambiar,
  salir,
  enviar,
}: FormularioSolicitudProps) {
  const alEnviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (!hayCanal) return
    const primero = enviar()
    if (primero) document.getElementById(id(primero))?.focus()
  }

  return (
    <form className={estilos.formulario} noValidate onSubmit={alEnviar}>
      <CampoFormulario
        id={id('nombre')}
        etiqueta={campos.nombre.etiqueta}
        value={datos.nombre}
        onChange={(e) => cambiar('nombre', e.target.value)}
        onBlur={() => salir('nombre')}
        error={errores.nombre}
        maxLength={LIMITES.nombre.max}
        autoComplete="name"
        aria-required="true"
      />
      <CampoFormulario
        id={id('telefono')}
        etiqueta={campos.telefono.etiqueta}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={datos.telefono}
        onChange={(e) => cambiar('telefono', e.target.value)}
        onBlur={() => salir('telefono')}
        error={errores.telefono}
        maxLength={LIMITES.telefono.maxCaracteres}
        aria-required="true"
      />
      <CampoFormulario
        id={id('correo')}
        etiqueta={campos.correo.etiqueta}
        type="email"
        inputMode="email"
        autoComplete="email"
        value={datos.correo}
        onChange={(e) => cambiar('correo', e.target.value)}
        onBlur={() => salir('correo')}
        error={errores.correo}
        maxLength={LIMITES.correo.max}
      />
      <CampoSeleccion
        id={id('tipo')}
        etiqueta={campos.tipo.etiqueta}
        textoVacio={campos.tipo.textoVacio}
        opciones={OPCIONES_TIPO}
        value={datos.tipo}
        onChange={(e) => cambiar('tipo', e.target.value)}
        onBlur={() => salir('tipo')}
        error={errores.tipo}
        aria-required="true"
      />
      <CampoFormulario
        id={id('municipio')}
        etiqueta={campos.municipio.etiqueta}
        placeholder={campos.municipio.placeholder}
        autoComplete="address-level2"
        value={datos.municipio}
        onChange={(e) => cambiar('municipio', e.target.value)}
        onBlur={() => salir('municipio')}
        error={errores.municipio}
        maxLength={LIMITES.municipio.max}
      />
      <CampoTexto
        id={id('descripcion')}
        etiqueta={campos.descripcion.etiqueta}
        placeholder={campos.descripcion.placeholder}
        value={datos.descripcion}
        onChange={(e) => cambiar('descripcion', e.target.value)}
        onBlur={() => salir('descripcion')}
        error={errores.descripcion}
        maxLength={LIMITES.descripcion.max}
        mostrarContador
        aria-required="true"
      />
      <CasillaAutorizacion
        id={id('autorizacion')}
        checked={datos.autorizacion}
        onChange={(e) => cambiar('autorizacion', e.target.checked)}
        error={errores.autorizacion}
        aria-required="true"
      >
        {FORMULARIO.autorizacion.texto}
        <Link to={FORMULARIO.autorizacion.enlace.ruta}>{FORMULARIO.autorizacion.enlace.etiqueta}</Link>
      </CasillaAutorizacion>
      <div className={estilos.envio}>
        <Boton
          type="submit"
          aria-disabled={hayCanal ? undefined : 'true'}
          aria-describedby={hayCanal ? undefined : 'solicitud-sin-canal'}
        >
          {FORMULARIO.enviar}
        </Boton>
        {!hayCanal && (
          <p id="solicitud-sin-canal" className={estilos.aviso}>
            {FORMULARIO.sinCanal}
          </p>
        )}
      </div>
    </form>
  )
}
