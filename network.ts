import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const networkSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🌐 Network',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'herramientas-principales', label: '🧰 Herramientas principales' },
        { type: 'doc', id: 'filtros-red', label: '🔎 Filtros de red' },
        { type: 'doc', id: 'analisis-solicitudes', label: '📡 Análisis de solicitudes' },
        { type: 'doc', id: 'detalles-peticiones', label: '📄 Detalles de peticiones' },
        { type: 'doc', id: 'tiempos-carga', label: '⏱️ Tiempos de carga' },
        { type: 'doc', id: 'errores-comunes', label: '⚠️ Errores comunes' },
        { type: 'doc', id: 'casos-practicos', label: '🧪 Casos prácticos' }
      ]
    }
  ]
};

export default networkSidebar;
