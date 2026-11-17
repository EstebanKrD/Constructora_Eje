import { EncabezadoPagina } from '@/components/secciones/EncabezadoPagina'
import { ENCABEZADO_METODO, SEO_METODO } from '@/data/metodo'
import { ControlCalidad } from '@/pages/ComoTrabajamos/components/ControlCalidad'
import { CriteriosAsg } from '@/pages/ComoTrabajamos/components/CriteriosAsg'
import { Estandares } from '@/pages/ComoTrabajamos/components/Estandares'
import { Fases } from '@/pages/ComoTrabajamos/components/Fases'
import { Herramientas } from '@/pages/ComoTrabajamos/components/Herramientas'
import { Indicadores } from '@/pages/ComoTrabajamos/components/Indicadores'
import { ValorAgregado } from '@/pages/ComoTrabajamos/components/ValorAgregado'

export function ComoTrabajamos() {
  return (
    <>
      <title>{SEO_METODO.titulo}</title>
      <meta name="description" content={SEO_METODO.descripcion} />
      <EncabezadoPagina
        etiqueta={ENCABEZADO_METODO.etiqueta}
        titulo={ENCABEZADO_METODO.titulo}
        texto={ENCABEZADO_METODO.texto}
      />
      <Fases />
      <Herramientas />
      <Indicadores />
      <ControlCalidad />
      <Estandares />
      <ValorAgregado />
      <CriteriosAsg />
    </>
  )
}
