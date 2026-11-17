import { EncabezadoPagina } from '@/components/secciones/EncabezadoPagina'
import { Boton } from '@/components/ui/Boton'
import { NO_ENCONTRADO, SEO_NO_ENCONTRADO } from '@/data/navegacion'

export function NoEncontrado() {
  return (
    <>
      <title>{SEO_NO_ENCONTRADO.titulo}</title>
      <meta name="description" content={SEO_NO_ENCONTRADO.descripcion} />
      <meta name="robots" content="noindex" />
      <EncabezadoPagina etiqueta={NO_ENCONTRADO.etiqueta} titulo={NO_ENCONTRADO.titulo}>
        <Boton to={NO_ENCONTRADO.boton.ruta} fondo="oscuro">
          {NO_ENCONTRADO.boton.etiqueta}
        </Boton>
      </EncabezadoPagina>
    </>
  )
}
