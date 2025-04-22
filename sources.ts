import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sourcesSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🗂️ Sources',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'estructura-archivos', label: '📂 Estructura de Archivos' },
        { type: 'doc', id: 'puntos-interrupcion', label: '⏸️ Puntos de Interrupción' },
        { type: 'doc', id: 'depuracion-paso-a-paso', label: '🛠️ Depuración Paso a Paso' },
        { type: 'doc', id: 'watchers-y-scope', label: '👀 Watchers y Scope' },
        { type: 'doc', id: 'call-stack', label: '🔄 Call Stack' },
        { type: 'doc', id: 'source-maps', label: '🗺️ Source Maps' },
        { type: 'doc', id: 'consejos-depuracion', label: '💡 Consejos de Depuración' }
      ]
    }
  ]
};

export default sourcesSidebar;
