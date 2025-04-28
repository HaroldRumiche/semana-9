import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Definimos prefijos para los iconos que usaremos
const ICON_PREFIX = 'icon:';
const FOLDER_OPEN_ICON = `${ICON_PREFIX}folder-open`;
const BOOK_ICON = `${ICON_PREFIX}book-open`;
const FOLDER_ICON = `${ICON_PREFIX}folder`;
const PAUSE_ICON = `${ICON_PREFIX}pause`;
const TOOL_ICON = `${ICON_PREFIX}tool`;
const EYE_ICON = `${ICON_PREFIX}eye`;
const REPEAT_ICON = `${ICON_PREFIX}repeat`;
const MAP_ICON = `${ICON_PREFIX}map`;
const BULB_ICON = `${ICON_PREFIX}lightbulb`;
const SPLINE_POINTER_ICON = `${ICON_PREFIX}spline-pointer`;

const sourcesSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: `${FOLDER_OPEN_ICON} Sources`,
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: `${BOOK_ICON} Introducción` },
        { type: 'doc', id: 'estructura-archivos', label: `${FOLDER_ICON} Estructura de Archivos` },
        { type: 'doc', id: 'puntos-interrupcion', label: `${PAUSE_ICON} Puntos de Interrupción` },
        { type: 'doc', id: 'depuracion-paso-a-paso', label: `${SPLINE_POINTER_ICON} Depuración Paso a Paso` },
        { type: 'doc', id: 'watchers-y-scope', label: `${EYE_ICON} Watchers y Scope` },
        { type: 'doc', id: 'call-stack', label: `${REPEAT_ICON} Call Stack` },
        { type: 'doc', id: 'source-maps', label: `${MAP_ICON} Source Maps` },
        { type: 'doc', id: 'consejos-depuracion', label: `${BULB_ICON} Consejos de Depuración` }
      ]
    }
  ]
};

export default sourcesSidebar;