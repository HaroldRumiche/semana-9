import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Definimos prefijos para los iconos que usaremos
// Estos prefijos serán procesados posteriormente en el tema
const ICON_PREFIX = 'icon:';
const SECURITY_ICON = `${ICON_PREFIX}shield`;
const INTRO_ICON = `${ICON_PREFIX}book-open`;
const CERT_ICON = `${ICON_PREFIX}lock`;
const ALERT_ICON = `${ICON_PREFIX}alert-triangle`;
const FILE_ICON = `${ICON_PREFIX}file-text`;
const KEY_ICON = `${ICON_PREFIX}key`;
const BULB_ICON = `${ICON_PREFIX}lightbulb`;
const SETTINGS_ICON = `${ICON_PREFIX}settings`;

const securitySidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: `${SECURITY_ICON} Seguridad`,
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: `${INTRO_ICON} Introducción` },
        { type: 'doc', id: 'certificados', label: `${CERT_ICON} Certificados` },
        { type: 'doc', id: 'contenido-mixto', label: `${ALERT_ICON} Contenido Mixto` },
        { type: 'doc', id: 'politicas-contenido', label: `${FILE_ICON} Políticas de Contenido` },
        { type: 'doc', id: 'headers-seguridad', label: `${KEY_ICON} Headers de Seguridad` },
        { type: 'doc', id: 'advertencias-comunes', label: `${ALERT_ICON} Advertencias Comunes` },
        { type: 'doc', id: 'recomendaciones-practicas', label: `${BULB_ICON} Recomendaciones Prácticas` },
        { type: 'doc', id: 'configuraciones-avanzadas', label: `${SETTINGS_ICON} Configuraciones Avanzadas` },
      ]
    }
  ]
};

export default securitySidebar;