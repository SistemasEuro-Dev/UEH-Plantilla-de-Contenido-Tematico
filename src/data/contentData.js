/*  src/data/contentData.js
    Provee utilidades para UnitPage.                     */

import * as modules from './index';          // <- dentro de /data, no "../index"

/* ——— 1 · obtener objeto del módulo ——— */
export const getUnitData = (moduleId) => modules[moduleId];

/* ——— 2 · encontrar un tema recursivamente ——— */
export const findThemeById = (themes, id) => {
  for (const t of themes) {
    if (t.id === id) return t;
    if (t.subthemes) {
      const found = findThemeById(t.subthemes, id);
      if (found) return found;
    }
  }
  return null;
};

/* ——— 3 · aplanar jerarquía de temas ——— */
export const flattenThemes = (themes) => {
  let flat = [];
  themes.forEach((t) => {
    flat.push(t);
    if (t.subthemes?.length) flat = flat.concat(flattenThemes(t.subthemes));
  });
  return flat;
};