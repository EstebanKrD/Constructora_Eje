import { EncabezadoPagina } from '@/components/secciones/EncabezadoPagina'
import { Boton } from '@/components/ui/Boton'
import { NO_ENCONTRADO } from '@/data/navegacion'

export function NoEncontrado() {
  return (
    <EncabezadoPagina etiqueta={NO_ENCONTRADO.etiqueta} titulo={NO_ENCONTRADO.titulo}>
      <Boton to={NO_ENCONTRADO.boton.ruta} fondo="oscuro">
        {NO_ENCONTRADO.boton.etiqueta}
      </Boton>
    </EncabezadoPagina>
  )
}
