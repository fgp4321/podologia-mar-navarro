import { es, type Textos } from './es';

/** Idiomas disponibles. Añadir aquí `va` cuando exista src/i18n/va.ts. */
export const idiomas = { es } as const;
export type Idioma = keyof typeof idiomas;
export const idiomaPorDefecto: Idioma = 'es';

export function textos(idioma: Idioma = idiomaPorDefecto): Textos {
  return idiomas[idioma];
}

/** Prefijo de ruta por idioma: '' para castellano, '/va' para valenciano. */
export function prefijo(idioma: Idioma = idiomaPorDefecto): string {
  return idioma === idiomaPorDefecto ? '' : `/${idioma}`;
}
