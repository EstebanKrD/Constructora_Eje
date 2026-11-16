export interface SeccionPolitica {
  titulo: string
  parrafos?: string[]
  lista?: string[]
}

export const POLITICA = {
  etiqueta: 'LEY 1581 DE 2012 · DECRETO 1377 DE 2013',
  titulo: 'Política de tratamiento de datos personales',
  nota: 'Este texto es una base y debe ser revisado por la empresa antes de publicar.',
  /** Fecha de publicación de la política (p. ej. "1 de marzo de 2027"). Vacía = «Por confirmar». */
  fechaPublicacion: '',

  responsable: {
    titulo: '1. Responsable del tratamiento',
    razonSocial: 'Constructora del Eje Ingeniería y Proyectos S.A.S.',
    etiquetas: {
      razonSocial: 'Razón social',
      nit: 'NIT',
      direccion: 'Dirección',
      correo: 'Correo',
      telefono: 'Teléfono',
    },
  },

  secciones: [
    {
      titulo: '2. Datos que se recogen',
      parrafos: [
        'A través del formulario de contacto de este sitio se recogen únicamente los datos que la persona escribe para solicitar información sobre un proyecto:',
      ],
      lista: [
        'Nombre.',
        'Teléfono.',
        'Correo electrónico (opcional).',
        'Tipo de proyecto.',
        'Municipio (opcional).',
        'Descripción del proyecto.',
      ],
    },
    {
      titulo: '3. Finalidad',
      parrafos: [
        'Los datos se usan solo para responder la solicitud y agendar la visita técnica del proyecto. No se usan para otros fines ni se venden o ceden a terceros.',
      ],
    },
    {
      titulo: '4. Cómo llegan los datos a la empresa',
      parrafos: [
        'Este sitio no guarda los datos del formulario: no tiene base de datos ni los almacena en el navegador. Al enviar la solicitud, el sitio prepara un mensaje que la misma persona envía por WhatsApp o por correo electrónico. Los datos llegan a la empresa únicamente por ese canal.',
      ],
    },
    {
      titulo: '5. Derechos del titular',
      parrafos: ['Como titular de los datos, usted tiene derecho a:'],
      lista: [
        'Conocer los datos personales que la empresa tiene sobre usted.',
        'Actualizar sus datos.',
        'Rectificar los datos inexactos o incompletos.',
        'Solicitar la supresión de sus datos.',
        'Revocar la autorización otorgada para el tratamiento.',
        'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.',
      ],
    },
    {
      titulo: '6. Cómo ejercer sus derechos',
      parrafos: [
        'Escriba al correo o comuníquese al teléfono del responsable indicados en el punto 1, con su nombre, un dato de contacto y la petición concreta.',
        'Consultas (artículo 14 de la Ley 1581 de 2012): se atienden en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo. Cuando no sea posible atenderlas dentro de ese término, se informarán al interesado los motivos de la demora y la fecha en que se atenderá la consulta, que en ningún caso superará los cinco (5) días hábiles siguientes al vencimiento del primer término.',
        'Reclamos (artículo 15 de la Ley 1581 de 2012): se atienden en un término máximo de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no sea posible atenderlos dentro de ese término, se informarán al interesado los motivos de la demora y la fecha en que se atenderá el reclamo, que en ningún caso superará los ocho (8) días hábiles siguientes al vencimiento del primer término.',
      ],
    },
  ] satisfies SeccionPolitica[],

  vigencia: {
    titulo: '7. Vigencia',
    texto: 'Esta política rige a partir de su fecha de publicación: ',
  },
}

export const SEO_POLITICA = {
  titulo: 'Política de tratamiento de datos · Constructora del Eje',
  descripcion:
    'Política de tratamiento de datos personales de Constructora del Eje según la Ley 1581 de 2012: datos que se recogen, finalidad y derechos del titular.',
}
