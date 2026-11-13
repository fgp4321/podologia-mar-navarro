/**
 * Todos los textos de la web en castellano.
 * Para añadir valenciano: copiar este archivo a va.ts, traducir los valores
 * (sin tocar las claves) y registrarlo en src/i18n/index.ts.
 */
export const es = {
  meta: {
    titulo: 'Podología Mar Navarro | Podóloga en Villena (Alicante)',
    descripcion:
      'Podóloga en Villena. Quiropodia, uñas encarnadas, estudio de la pisada, plantillas y pie diabético. Cita por teléfono o WhatsApp: 653 951 941.',
    ogAlt: 'Logotipo de Podología Mar Navarro',
  },

  comun: {
    saltarAlContenido: 'Saltar al contenido',
    llamar: 'Llamar',
    llamarAl: 'Llamar al',
    whatsapp: 'WhatsApp',
    escribirWhatsapp: 'Escribir por WhatsApp',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    nuevaPestana: '(se abre en una pestaña nueva)',
    logoAlt: 'Podología Mar Navarro',
    inicio: 'Ir al inicio',
  },

  nav: {
    etiqueta: 'Navegación principal',
    enlaces: [
      { href: '#servicios', texto: 'Servicios' },
      { href: '#sobre-mar', texto: 'Sobre Mar' },
      { href: '#consulta', texto: 'La consulta' },
      { href: '#contacto', texto: 'Horario y contacto' },
    ],
  },

  portada: {
    titulo: 'Mar Navarro, podóloga en Villena',
    texto:
      'Más de 15 años dedicados al cuidado de la salud de los pies. Quiropodia, uñas encarnadas, estudio de la pisada y pie diabético, en una consulta en la avenida de la Constitución.',
    nota: 'Las citas se piden por teléfono o WhatsApp, de lunes a viernes.',
    fotoAlt: 'Mar Navarro sonriendo, sentada junto al sillón de podología de su consulta',
    datos: [
      { valor: 'Más de 15\u00a0años', texto: 'de trayectoria profesional' },
      { valor: 'Colegiada n.º\u00a02811', texto: 'podóloga colegiada' },
      { valor: 'Mañana y tarde', texto: 'de lunes a viernes' },
    ],
  },

  servicios: {
    titulo: 'En qué podemos ayudarte',
    intro:
      'Desde el cuidado habitual del pie hasta el estudio de cómo caminas. Si no sabes qué necesitas, cuéntanos qué te ocurre y te orientamos.',
    categorias: [
      {
        id: 'quiropodia',
        icono: 'quiropodia',
        titulo: 'Quiropodia',
        texto:
          'El cuidado más habitual en consulta: tratamos la piel y las uñas del pie para aliviar las molestias al caminar.',
        tratamientos: [
          'Durezas',
          'Callosidades',
          'Problemas en las uñas',
          'Hongos en las uñas (onicomicosis)',
          'Corte y fresado especializado de uñas',
        ],
      },
      {
        id: 'unas',
        icono: 'unas',
        titulo: 'Uñas encarnadas y uñeros',
        texto:
          'Atención a la uña que se clava o se inflama, y trabajo sobre su forma cuando hace falta.',
        tratamientos: [
          'Uñas encarnadas',
          'Uñeros',
          'Corrección de la uña',
          'Reconstrucción de la uña',
        ],
      },
      {
        id: 'biomecanica',
        icono: 'biomecanica',
        titulo: 'Biomecánica y estudio de la pisada',
        texto:
          'Analizamos cómo caminas y cómo apoyas el pie. Cuando está indicado, diseñamos plantillas a tu medida.',
        tratamientos: [
          'Estudio biomecánico de la marcha',
          'Evaluación de apoyos',
          'Análisis del reparto de cargas',
          'Plantillas personalizadas (ortesis plantares)',
        ],
      },
      {
        id: 'especificos',
        icono: 'especificos',
        titulo: 'Tratamientos específicos',
        texto:
          'Atención para situaciones concretas que necesitan una técnica o un seguimiento propios.',
        tratamientos: [
          'Atención podológica del pie diabético',
          'Papilomas plantares',
          'Ortesis de silicona',
          'Esterilización de calzado con ozono',
        ],
      },
      {
        id: 'integral',
        icono: 'integral',
        titulo: 'Cuidado integral',
        texto: 'Consejo y cuidados que complementan el tratamiento podológico.',
        tratamientos: ['Asesoramiento sobre el calzado adecuado', 'Estética de pies y manos'],
      },
    ],
    cierre: '¿Tienes dudas sobre tu caso?',
    cierreTexto: 'Llámanos o escríbenos y te decimos cómo podemos atenderte.',
  },

  sobre: {
    titulo: 'Sobre Mar Navarro',
    parrafos: [
      'Mar Navarro es podóloga colegiada (n.º 2811) y lleva más de 15 años dedicada al cuidado de la salud de los pies.',
      'En su consulta de Villena atiende tanto el cuidado habitual —durezas, callosidades, uñas— como los casos que requieren un estudio más detenido: la forma de pisar, las plantillas personalizadas o el seguimiento del pie diabético.',
      'Cada visita empieza por escuchar qué te ocurre y explicarte con palabras claras qué se puede hacer.',
    ],
    fotoAlt: 'Mar Navarro en su consulta, mostrando unas plantillas personalizadas',
    fotoSecundariaAlt: 'Mar Navarro tomando notas en la mesa de su despacho',
  },

  consulta: {
    titulo: 'La consulta',
    intro:
      'Un entresuelo en la avenida de la Constitución, con gabinete de tratamiento, sala para el estudio de la pisada y sala de espera.',
    fotos: [
      { id: 'despacho', alt: 'Despacho de la consulta, con Mar Navarro trabajando en su mesa', pie: 'Despacho' },
      { id: 'biomecanica', alt: 'Sala con cinta de marcha y camilla', pie: 'Sala de estudio de la pisada' },
      { id: 'quiropodia', alt: 'Tratamiento de quiropodia en el sillón de podología', pie: 'Gabinete de tratamiento' },
      { id: 'espera', alt: 'Sala de espera con sillas y gel hidroalcohólico', pie: 'Sala de espera' },
    ],
  },

  contacto: {
    titulo: 'Horario y contacto',
    intro: 'Para pedir cita o resolver una duda, llámanos o escríbenos por WhatsApp.',
    horarioTitulo: 'Horario',
    dias: {
      laborables: 'Lunes a viernes',
      sabado: 'Sábado',
      domingo: 'Domingo',
    },
    cerrado: 'Cerrado',
    y: 'y',
    horarioResumen: 'Horario de atención de la consulta',
    dondeTitulo: 'Dónde estamos',
    comoLlegar: 'Cómo llegar con Google Maps',
    indicacion: 'La consulta está en el entresuelo B del número 14.',
    contactoTitulo: 'Contacto',
    telefonoEtiqueta: 'Teléfono',
    facebook: 'Facebook',
    facebookTexto: 'Podología Mar Navarro en Facebook',
  },

  pie: {
    descripcion: 'Consulta de podología en Villena (Alicante).',
    navTitulo: 'Secciones',
    contactoTitulo: 'Contacto',
    legalTitulo: 'Información legal',
    legal: [
      { href: '/aviso-legal/', texto: 'Aviso legal' },
      { href: '/politica-de-privacidad/', texto: 'Política de privacidad' },
      { href: '/politica-de-cookies/', texto: 'Política de cookies' },
    ],
    derechos: 'Todos los derechos reservados.',
  },

  noEncontrada: {
    titulo: 'No encontramos esta página',
    texto: 'Puede que el enlace esté mal escrito o que la página ya no exista.',
    volver: 'Volver al inicio',
  },
} as const;

export type Textos = typeof es;
