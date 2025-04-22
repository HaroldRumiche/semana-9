import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const styleSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🎨 Estilos',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'inspeccionar-estilos', label: '🔍 Inspeccionar Estilos' },
        { type: 'doc', id: 'reglas-css', label: '📜 Reglas CSS' },
        { type: 'doc', id: 'propiedades-calculadas', label: '🧮 Propiedades Calculadas' },
        { type: 'doc', id: 'cajas-modelo', label: '📦 Cajas y Modelo' },
        { type: 'doc', id: 'modificar-estilos', label: '✏️ Modificar Estilos' },
        { type: 'doc', id: 'ver-medias-queries', label: '📱 Media Queries' },
        { type: 'doc', id: 'depurar-estilos', label: '🛠️ Depurar Estilos' }
      ]
    }
  ]
};

export default styleSidebar;
