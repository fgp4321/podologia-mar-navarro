# Podología Mar Navarro — sitio web

Web corporativa de **Podología Mar Navarro** (Villena, Alicante). Sitio estático, sin backend, sin cookies y sin herramientas de seguimiento.

## Tecnología

| Pieza | Elección | Motivo |
|---|---|---|
| Generador | [Astro](https://astro.build) (salida estática) | HTML sin JavaScript de framework, componentes, imágenes optimizadas, sitemap y rutas por idioma |
| Estilos | CSS propio con variables (`src/styles/global.css`) + estilos por componente | Sin dependencias de interfaz |
| Tipografías | Fraunces (titulares) y Source Sans 3 (texto), alojadas en el propio sitio | Sin llamadas a Google Fonts |
| Iconos | Lucide y Simple Icons, incrustados como SVG en la compilación | Sin peticiones de red |
| JavaScript | Solo el menú móvil (≈20 líneas, en `Cabecera.astro`) | |

## Puesta en marcha

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera el sitio en dist/
npm run preview    # sirve dist/ para revisarlo
npm run pendientes # lista los datos marcados como PENDIENTE
```

## Estructura

```
public/                  Favicon, imagen para redes, manifest y cabeceras HTTP (_headers)
src/
  assets/images/         Logotipo y fotografías originales (Astro las optimiza al compilar)
  components/            Cabecera, Portada, Servicios, SobreMar, Consulta, Contacto, Pie…
  config/
    negocio.ts           Teléfono, dirección, horario, enlaces y datos del titular
    site-url.mjs         Dominio del sitio (PENDIENTE de confirmar)
  i18n/
    es.ts                Todos los textos de la web en castellano
    index.ts             Registro de idiomas
  layouts/               Base (cabeceras SEO) y Legal
  pages/                 index, aviso-legal, politica-de-privacidad, politica-de-cookies, 404, robots.txt
  styles/global.css      Variables de diseño y estilos base
```

### Cómo cambiar…

- **Teléfono, dirección u horario:** `src/config/negocio.ts`. Se actualizan a la vez la web y los datos estructurados.
- **Cualquier texto:** `src/i18n/es.ts`.
- **Una fotografía:** sustituir el archivo en `src/assets/images/` manteniendo el nombre.
- **Colores o tipografías:** variables al inicio de `src/styles/global.css`.

### Añadir el valenciano

1. Copiar `src/i18n/es.ts` a `src/i18n/va.ts` y traducir los valores.
2. Registrarlo en `src/i18n/index.ts` (`idiomas = { es, va }`) y en `astro.config.mjs` (`locales: ['es', 'va']`).
3. Crear `src/pages/va/index.astro` copiando `src/pages/index.astro` con `const idioma = 'va'`.
4. Traducir las tres páginas legales en `src/pages/va/` y añadir el selector de idioma y las etiquetas `hreflang` en `Base.astro`.

## SEO

- Título, descripción, URL canónica, Open Graph y favicon en `src/layouts/Base.astro`.
- Datos estructurados `MedicalClinic` (JSON-LD) en `src/pages/index.astro`: nombre, dirección, teléfono, horario y especialidad. No incluyen valoraciones ni reseñas.
- `sitemap-index.xml` y `robots.txt` se generan al compilar a partir del dominio de `site-url.mjs`.
- **Google Search Console:** al darlo de alta, pegar la metaetiqueta de verificación en el `<head>` de `Base.astro` (hay un comentario que indica dónde) y enviar el sitemap.
- **Analítica:** no hay ninguna instalada. Si se añade, hay que actualizar antes la política de cookies y, según la herramienta, incorporar un aviso de consentimiento.

## Despliegue (Cloudflare Pages)

Recomendado por ser gratuito, admitir uso comercial y ofrecer HTTPS automático. Netlify funciona igual con los mismos valores.

1. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elegir este repositorio.
2. Configuración de compilación: *Framework preset* **Astro**, *Build command* `npm run build`, *Output directory* `dist`.
3. Cada `git push` a `main` publica una versión nueva; las demás ramas generan una vista previa.

### Dominio propio

1. Registrar el dominio (por ejemplo, un `.es`) en cualquier registrador.
2. En el proyecto de Pages: **Custom domains → Set up a domain** y añadir `www.dominio.es` y `dominio.es`.
3. Si el DNS está en Cloudflare, los registros se crean solos. Si está en otro proveedor, crear un `CNAME` de `www` hacia `<proyecto>.pages.dev`.
4. El certificado HTTPS se emite automáticamente.
5. Actualizar `src/config/site-url.mjs` con el dominio definitivo y publicar.

## Antes de publicar

- [ ] Confirmar el dominio en `src/config/site-url.mjs`.
- [ ] Completar los datos marcados como **PENDIENTE** en las páginas legales (`npm run pendientes`): correo electrónico, colegio profesional, título académico, normas profesionales, proveedor de alojamiento y plazos de conservación.
- [ ] Revisión de los textos legales por un profesional (son un borrador técnico, no asesoramiento jurídico).
- [ ] Revisión por parte de Mar de los textos de servicios y de «Sobre Mar».
- [ ] Probar en un móvil real los botones de llamada y WhatsApp.
- [ ] Añadir la URL de la web en la ficha de Google y en Facebook.
- [ ] Dar de alta el sitio en Google Search Console y enviar el sitemap.

## Créditos y licencias

Logotipo y fotografías: © Podología Mar Navarro. Tipografías Fraunces y Source Sans 3 (SIL OFL). Iconos Lucide (ISC) y Simple Icons (CC0).
