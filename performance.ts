import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Definimos prefijos para los iconos que usaremos
const ICON_PREFIX = 'icon:';
const ROCKET_ICON = `${ICON_PREFIX}rocket`;
const BOOK_ICON = `${ICON_PREFIX}book-open`;
const VIDEO_ICON = `${ICON_PREFIX}video`;
const TIMER_ICON = `${ICON_PREFIX}timer`;
const LAYERS_ICON = `${ICON_PREFIX}layers`;
const ALERT_ICON = `${ICON_PREFIX}alert-triangle`;
const SNAIL_ICON = `${ICON_PREFIX}clock`; // Usamos clock como alternativa para "lentitud"
const ZAP_ICON = `${ICON_PREFIX}zap`;
const BULB_ICON = `${ICON_PREFIX}lightbulb`;

const performanceSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: `${ROCKET_ICON} Performance`,
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: `${BOOK_ICON} Introducción` },
        { type: 'doc', id: 'grabar-sesion', label: `${VIDEO_ICON} Grabar Sesión` },
        { type: 'doc', id: 'analizar-timeline', label: `${TIMER_ICON} Analizar Timeline` },
        { type: 'doc', id: 'fps-frames', label: `${LAYERS_ICON} FPS/Frames` },
        { type: 'doc', id: 'eventos-importantes', label: `${ALERT_ICON} Eventos Importantes` },
        { type: 'doc', id: 'analizar-lentitud', label: `${SNAIL_ICON} Analizar Lentitud` },
        { type: 'doc', id: 'optimizar-renderizado', label: `${ZAP_ICON} Optimizar Renderizado` },
        { type: 'doc', id: 'ejemplos-practicos', label: `${BULB_ICON} Ejemplos Prácticos` }
      ]
    }
  ]
};

export default performanceSidebar;