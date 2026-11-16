export const POR_CONFIRMAR = 'Por confirmar'

export const PASOS_INICIO = {
  etiqueta: 'CÓMO EMPEZAMOS',
  titulo: 'Del primer café a la primera piedra.',
  pasos: [
    {
      numero: '1',
      titulo: 'Conversación',
      texto: 'Escuchamos su idea, el lote o el inmueble y su presupuesto.',
    },
    {
      numero: '2',
      titulo: 'Visita técnica',
      texto: 'Revisamos el sitio, la normativa y las restricciones.',
    },
    { numero: '3', titulo: 'Propuesta', texto: 'Alcance, valor estimado y cronograma por escrito.' },
    { numero: '4', titulo: 'Diseño y obra', texto: 'Firmamos y arrancamos con fechas claras.' },
  ],
}

export const DATOS_CONTACTO = {
  titulo: 'Hablemos de su próximo proyecto.',
  texto:
    'Cuéntenos su idea, el lote o el inmueble y su presupuesto. Le respondemos para agendar la visita técnica.',
  ubicacion: { etiqueta: 'UBICACIÓN', valorPorDefecto: 'Quindío · Colombia' },
  telefono: { etiqueta: 'TELÉFONO / WHATSAPP' },
  correo: { etiqueta: 'CORREO' },
}

export const TIPOS_PROYECTO = [
  'Vivienda a la medida',
  'Edificaciones',
  'Adecuaciones',
  'Estructura metálica',
  'Diseño integral',
  'Gerencia de proyectos',
] as const

export const LIMITES = {
  nombre: { min: 3, max: 60 },
  /** Dígitos del teléfono; el campo admite espacios al escribir. */
  telefono: { min: 7, max: 10, maxCaracteres: 14 },
  correo: { max: 80 },
  municipio: { max: 40 },
  descripcion: { min: 10, max: 800 },
}

export const FORMULARIO = {
  campos: {
    nombre: { etiqueta: 'Nombre' },
    telefono: { etiqueta: 'Teléfono' },
    correo: { etiqueta: 'Correo (opcional)' },
    tipo: { etiqueta: 'Tipo de proyecto', textoVacio: 'Seleccione una opción' },
    municipio: { etiqueta: 'Municipio (opcional)', placeholder: 'Armenia, Pereira…' },
    descripcion: {
      etiqueta: 'Cuéntenos su proyecto',
      placeholder: 'Lote, área aproximada, presupuesto, plazos…',
    },
  },
  autorizacion: {
    texto:
      'Autorizo a Constructora del Eje Ingeniería y Proyectos S.A.S. el tratamiento de mis datos personales para responder esta solicitud, según la ',
    enlace: { etiqueta: 'Política de tratamiento de datos', ruta: '/politica-de-datos' },
  },
  enviar: 'Enviar solicitud',
  sinCanal: 'Los datos de contacto están por confirmar.',
  errores: {
    nombre: 'Escriba su nombre: entre 3 y 60 letras, sin números ni símbolos.',
    telefono: 'Escriba un teléfono de 7 a 10 dígitos.',
    correo: 'Revise el correo: debe tener la forma nombre@dominio.com.',
    tipo: 'Seleccione el tipo de proyecto.',
    municipio: 'Revise el municipio: solo letras, espacios, guion y punto (máximo 40).',
    descripcion:
      'Cuéntenos su proyecto en 10 a 800 caracteres, sin los símbolos < > { }.',
    autorizacion: 'Debe autorizar el tratamiento de sus datos para enviar la solicitud.',
  },
}

export const MENSAJE_SOLICITUD = {
  titulo: 'SOLICITUD DE PROYECTO · CONSTRUCTORA DEL EJE',
  prefijoCodigo: 'CDE',
  asunto: 'Solicitud de proyecto · ',
  noIndicado: 'No indicado',
  etiquetas: {
    codigo: 'Código',
    nombre: 'Nombre',
    telefono: 'Teléfono',
    correo: 'Correo',
    tipo: 'Tipo de proyecto',
    municipio: 'Municipio',
    descripcion: 'Descripción',
  },
}

export const SOLICITUD_LISTA = {
  etiqueta: 'ÚLTIMO PASO',
  titulo: 'Envíe el mensaje para completar su solicitud.',
  texto: 'Se abrió WhatsApp (o su correo) con la solicitud escrita. Si no se abrió, use el botón.',
  abrirDeNuevo: 'Abrir de nuevo',
  otraSolicitud: 'Enviar otra solicitud',
}
