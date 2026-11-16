export const ENCABEZADO_METODO = {
  etiqueta: '02 · CÓMO TRABAJAMOS',
  titulo: 'Planear con detalle. Construir con transparencia.',
  texto:
    'Trabajamos de la mano con arquitectos, diseñadores y propietarios, y mostramos cada semana el avance real de la obra.',
}

export const FASES = {
  etiqueta: 'MÉTODO',
  titulo: 'Cinco fases, cada una con un entregable.',
  fases: [
    {
      numero: '01',
      titulo: 'Diagnóstico',
      texto: 'Visita, escaneo láser del lote o inmueble y definición del programa.',
      entregable: 'Levantamiento 3D',
    },
    {
      numero: '02',
      titulo: 'Diseño',
      texto: 'Arquitectura e ingenierías coordinadas en un modelo BIM.',
      entregable: 'Planos y renders',
    },
    {
      numero: '03',
      titulo: 'Presupuesto',
      texto: 'Cantidades medidas en el modelo, precios unitarios y cronograma.',
      entregable: 'Precio y plazo',
    },
    {
      numero: '04',
      titulo: 'Construcción',
      texto: 'Obra con planeación semanal, control de calidad y seguridad.',
      entregable: 'Informe semanal',
    },
    {
      numero: '05',
      titulo: 'Entrega',
      texto: 'Pruebas, planos récord, manual de uso y garantía.',
      entregable: 'Llaves y garantía',
    },
  ],
}

export const HERRAMIENTAS = {
  etiqueta: 'TECNOLOGÍA',
  titulo: 'Su obra, visible en tiempo real.',
  herramientas: [
    {
      titulo: 'Escaneo láser 3D',
      texto: 'Medimos el estado real del inmueble con nube de puntos antes de diseñar.',
    },
    {
      titulo: 'Modelado BIM en Revit',
      texto:
        'Todas las disciplinas en un solo modelo: los cruces se resuelven en pantalla, no en obra.',
    },
    {
      titulo: 'Coordinación en Navisworks',
      texto:
        'Cada red se cruza con las demás buscando choques antes de instalar el primer perfil.',
    },
    {
      titulo: 'Modelo 4D',
      texto:
        'Cada actividad del cronograma se vincula al modelo: usted ve, semana a semana, qué se construye y dónde.',
    },
    {
      titulo: 'Renders y recorrido 360',
      texto:
        'Recorra su proyecto antes de que exista, en el celular, el computador o gafas de realidad virtual.',
    },
    {
      titulo: 'Programación en MS Project',
      texto: 'Cronograma con ruta crítica y planeación semanal Last Planner.',
    },
    {
      titulo: 'Autodesk Construction Cloud',
      texto:
        'Planos vigentes, bitácora diaria con fotos, listas de chequeo y actas firmadas en una sola plataforma.',
    },
    {
      titulo: 'Tablero en Power BI',
      texto: 'Avance físico, costo y plazo en un tablero que usted consulta cuando quiera.',
    },
    {
      titulo: 'Alertas tempranas',
      texto: 'Plataforma propia que avisa desviaciones antes de que cuesten dinero.',
    },
    {
      titulo: 'Listas de chequeo digitales',
      texto: 'La calidad queda registrada con foto, ubicación y firma.',
    },
  ],
}

export const INDICADORES = {
  etiqueta: 'SEGUIMIENTO Y CONTROL',
  titulo: 'Un ritmo fijo de control y seis indicadores a la vista.',
  ritmo: [
    { periodo: 'Diario', texto: 'Reunión de 15 minutos y bitácora digital con fotos' },
    { periodo: 'Semanal', texto: 'Plan semanal, comité técnico e informe al cliente' },
    { periodo: 'Quincenal', texto: 'Corte de cantidades y actualización de la curva S' },
    { periodo: 'Mensual', texto: 'Comité de seguimiento con el director y el cliente' },
    { periodo: 'Siempre', texto: 'Tablero en línea con alertas tempranas' },
  ],
  /* Espacio no separable (\u00a0) para que el símbolo y la cifra no se separen */
  indicadores: [
    { valor: '≥\u00a00,95', etiqueta: 'SPI', texto: 'avance frente a lo programado' },
    { valor: '≥\u00a01,00', etiqueta: 'CPI', texto: 'costo frente a lo presupuestado' },
    { valor: '≥\u00a080\u00a0%', etiqueta: 'PPC', texto: 'compromisos semanales cumplidos' },
    { valor: '<\u00a024\u00a0h', etiqueta: 'Consultas', texto: 'respuesta a dudas técnicas' },
    { valor: '<\u00a05\u00a0días', etiqueta: 'Calidad', texto: 'cierre de no conformidades' },
    { valor: '0', etiqueta: 'Seguridad', texto: 'accidentes con incapacidad' },
  ],
  nota: 'SPI y CPI: índices de desempeño de cronograma y de costo (valor ganado). PPC: porcentaje de plan completado.',
}

export const CONTROL_CALIDAD = {
  etiqueta: 'CONTROL DE CALIDAD',
  titulo: 'Nada se tapa sin haberse probado.',
  columnas: {
    sistema: 'Sistema',
    prueba: 'Prueba o inspección',
    criterio: 'Criterio de aceptación',
  },
  filas: [
    {
      sistema: 'Red hidráulica',
      prueba: 'Prueba de presión',
      criterio: '1,5 veces la presión de trabajo, sin pérdidas',
    },
    {
      sistema: 'Red sanitaria',
      prueba: 'Prueba de estanqueidad',
      criterio: 'Sin fugas antes de cerrar muros',
    },
    {
      sistema: 'Red contra incendio',
      prueba: 'Prueba hidrostática NFPA 13',
      criterio: '200 psi durante 2 horas',
    },
    {
      sistema: 'Detección y alarma',
      prueba: 'Prueba funcional NFPA 72',
      criterio: '100 % de los dispositivos',
    },
    {
      sistema: 'Cableado estructurado',
      prueba: 'Certificación Cat 6A',
      criterio: '100 % de los puntos certificados',
    },
    {
      sistema: 'Instalaciones eléctricas',
      prueba: 'Inspección RETIE',
      criterio: 'Dictamen de conformidad',
    },
    {
      sistema: 'Aire acondicionado',
      prueba: 'Balanceo y pruebas (TAB)',
      criterio: 'Caudales de diseño ± 10 %',
    },
    {
      sistema: 'Acabados y carpintería',
      prueba: 'Lista de chequeo digital',
      criterio: 'Planitud, juntas, color y funcionamiento',
    },
  ],
  nota: 'Cada prueba queda registrada con fotos y firma en la plataforma de obra.',
}

export const ESTANDARES = {
  etiqueta: 'ESTÁNDARES',
  titulo: 'Calidad, seguridad y cuidado del entorno.',
  estandares: [
    {
      titulo: 'Calidad',
      texto:
        'Plan de calidad por proyecto, inspección de cada actividad antes de cerrarla y pruebas de redes antes de cubrir muros y cielos.',
      normas: 'NSR-10 · RETIE · RETILAP · NTC',
    },
    {
      titulo: 'Seguridad',
      texto:
        'Profesional SST en obra, permisos para trabajo en alturas y equipos certificados para todo el personal.',
      normas: 'SG-SST · Resolución 4272 de 2021',
    },
    {
      titulo: 'Entorno',
      texto:
        'Manejo de escombros con disposición certificada, control de polvo y ruido y buena vecindad con quienes viven alrededor.',
      normas: 'Plan de manejo ambiental y social',
    },
  ],
}

export const VALOR_AGREGADO = {
  etiqueta: 'VALOR AGREGADO',
  titulo: 'Nueve beneficios incluidos sin costo adicional.',
  beneficios: [
    { titulo: 'Equipo de diseño propio*' },
    { titulo: 'Coordinación BIM*', texto: 'Interferencias resueltas antes de construir' },
    { titulo: 'Escaneo láser 3D', texto: 'Modelo del estado real del inmueble' },
    { titulo: 'Renders y recorrido 360', texto: 'Aprobación visual de acabados y muebles' },
    { titulo: 'Modelo 4D', texto: 'La secuencia de obra, semana a semana' },
    { titulo: 'Tablero en Power BI', texto: 'Avance, indicadores y alertas en vivo' },
    { titulo: 'Modelo BIM final', texto: 'Lo construido, listo para el mantenimiento' },
    { titulo: 'Manual digital con QR', texto: 'Fichas, garantías y mantenimiento por equipo' },
    { titulo: 'Capacitación y posentrega', texto: 'Al equipo del cliente y 3 meses de seguimiento' },
  ],
  nota: '*El acompañamiento y consultoría por parte de los profesionales será sin costo adicional. El diseño y entregables tendrá costo según alcance del proyecto.',
}

export const CRITERIOS_ASG = {
  etiqueta: 'CRITERIOS ASG',
  titulo: 'Una obra que cuida el ambiente, a las personas y la confianza.',
  criterios: [
    {
      titulo: 'Ambiental',
      puntos: [
        'Iluminación LED con sensores de ocupación',
        'Aire acondicionado inverter de alta eficiencia',
        'Pinturas y adhesivos de bajas emisiones',
        'Separación de residuos en la obra',
      ],
    },
    {
      titulo: 'Social',
      puntos: [
        'Mano de obra y proveedores locales',
        'Accesibilidad universal: baño accesible, guía podotáctil y barras de apoyo',
        'Seguridad y salud de todo el personal',
        'Respeto por los vecinos de cada obra',
      ],
    },
    {
      titulo: 'Gobierno',
      puntos: [
        'Información abierta para el cliente en tiempo real',
        'Control de cambios formal y trazable',
        'Cumplimiento de RETIE, RETILAP, NSR-10 y NFPA',
        'Ética y transparencia con proveedores',
      ],
    },
  ],
}

export const SEO_METODO = {
  titulo: 'Cómo trabajamos · Constructora del Eje',
  descripcion:
    'Cinco fases con entregables, modelado BIM, tablero en línea, indicadores de avance y costo, pruebas de calidad y criterios ASG en cada obra que hacemos.',
}
