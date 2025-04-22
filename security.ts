import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const securitySidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🔐 Seguridad',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'certificados', label: '🔒 Certificados' },
        { type: 'doc', id: 'contenido-mixto', label: '⚠️ Contenido Mixto' },
        { type: 'doc', id: 'politicas-contenido', label: '📜 Políticas de Contenido' },
        { type: 'doc', id: 'headers-seguridad', label: '🔑 Headers de Seguridad' },
        { type: 'doc', id: 'advertencias-comunes', label: '⚠️ Advertencias Comunes' },
        { type: 'doc', id: 'recomendaciones-practicas', label: '💡 Recomendaciones Prácticas' },
        { type: 'doc', id: 'configuraciones-avanzadas', label: '⚙️ Configuraciones Avanzadas' },


      ]
    }
  ]
};

export default securitySidebar;
