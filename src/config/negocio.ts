/**
 * Datos del negocio, independientes del idioma.
 * Única fuente de verdad: si cambia el teléfono o el horario, se cambia solo aquí.
 */
export const negocio = {
  nombre: 'Podología Mar Navarro',
  profesional: 'Mar Navarro',
  numeroColegiada: '2811',
  telefono: {
    visible: '653 951 941',
    e164: '+34653951941',
    whatsapp: '34653951941',
  },
  direccion: {
    calle: 'Avda. Constitución, 14',
    piso: 'Entresuelo B',
    codigoPostal: '03400',
    localidad: 'Villena',
    provincia: 'Alicante',
    pais: 'ES',
  },
  /** Búsqueda en Google Maps por nombre y dirección (no requiere clave ni incrusta nada). */
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Podolog%C3%ADa+Mar+Navarro%2C+Av.+Constituci%C3%B3n+14%2C+03400+Villena',
  facebookUrl: 'https://www.facebook.com/podologiamarnavarro/',
  /** Horario de lunes (1) a viernes (5). Sábado y domingo, cerrado. */
  horario: {
    diasAbiertos: [1, 2, 3, 4, 5],
    tramos: [
      { abre: '09:00', cierra: '13:00' },
      { abre: '15:30', cierra: '20:00' },
    ],
  },
  /** Datos del titular para los textos legales. */
  titular: {
    nombreLegal: 'María del Mar Navarro Sánchez',
    nif: '47061803P',
    /** Solo se muestra en las páginas legales (no en la portada, para limitar el spam). */
    email: 'podmarvic@gmail.com',
    colegio: 'Ilustre Colegio Oficial de Podología de la Comunidad Valenciana (ICOPCV)',
    titulo: 'Diplomatura en Podología',
    tituloExpedidoEn: 'España',
  },
  /** Proveedor de alojamiento previsto. Si cambia, basta con editar estos tres datos. */
  alojamiento: {
    nombre: 'Vercel Inc.',
    pais: 'Estados Unidos',
    privacidadUrl: 'https://vercel.com/legal/privacy-policy',
  },
} as const;

export const enlaces = {
  tel: `tel:${negocio.telefono.e164}`,
  whatsapp: `https://wa.me/${negocio.telefono.whatsapp}`,
};
