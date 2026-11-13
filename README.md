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
public/                  Favicon, imagen para redes y manifest
vercel.json              Cabeceras de seguridad y de caché para Vercel
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

## Despliegue (Vercel)

> **Plan necesario:** las condiciones de Vercel limitan el plan gratuito (Hobby) a uso personal no comercial.
> La web de un negocio se considera uso comercial, así que corresponde el plan Pro. Conviene confirmarlo en
> https://vercel.com/docs/limits/fair-use-guidelines antes de publicar. Si se prefiere una opción gratuita que
> admita uso comercial, Cloudflare Pages o Netlify sirven este mismo proyecto sin cambios
> (comando `npm run build`, carpeta `dist`); en ese caso las cabeceras de `vercel.json` habría que pasarlas a
> un archivo `public/_headers` y actualizar el proveedor en `src/config/negocio.ts`.

1. En Vercel: **Add New → Project** e importar este repositorio de GitHub.
2. Vercel detecta Astro automáticamente (*Build command* `npm run build`, *Output directory* `dist`). No hace falta ninguna variable de entorno.
3. Cada `git push` a `main` publica una versión nueva; las demás ramas y los pull requests generan una vista previa.

Las cabeceras de seguridad y de caché están en `vercel.json`.

### Dominio propio (Nominalia)

1. Registrar el dominio en Nominalia.
2. En Vercel: **Project → Settings → Domains**, añadir `www.dominio.es` y `dominio.es`, y elegir cuál redirige al otro (el proyecto asume `www`).
3. Vercel muestra los registros DNS exactos que hay que crear. En el panel de Nominalia (**Dominios → DNS**), crearlos tal cual: normalmente un registro `A` para el dominio raíz y un `CNAME` para `www`. Usar siempre los valores que indique Vercel en ese momento.
4. Cuando el DNS se propague (de minutos a unas horas), Vercel emite el certificado HTTPS automáticamente.
5. Actualizar `src/config/site-url.mjs` con el dominio definitivo y hacer `git push`.

## Antes de publicar

- [ ] Confirmar el dominio en `src/config/site-url.mjs`.
- [ ] Confirmar el plan de Vercel (ver nota en «Despliegue»).
- [ ] Comprobar que no queda nada marcado como PENDIENTE (`npm run pendientes`).
- [ ] Revisión de los textos legales por un profesional (son un borrador técnico, no asesoramiento jurídico).
- [ ] Revisión por parte de Mar de los textos de servicios y de «Sobre Mar».
- [ ] Probar en un móvil real los botones de llamada y WhatsApp.
- [ ] Añadir la URL de la web en la ficha de Google y en Facebook.
- [ ] Dar de alta el sitio en Google Search Console y enviar el sitemap.

## Créditos y licencias

Logotipo y fotografías: © Podología Mar Navarro. Tipografías Fraunces y Source Sans 3 (SIL OFL). Iconos Lucide (ISC) y Simple Icons (CC0).
