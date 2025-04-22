import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const performanceSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🚀 Performance',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'grabar-sesion', label: '🎥 Grabar Sesión' },
        { type: 'doc', id: 'analizar-timeline', label: '⏱️ Analizar Timeline' },
        { type: 'doc', id: 'fps-frames', label: '🖼️ FPS/Frames' },
        { type: 'doc', id: 'eventos-importantes', label: '⚠️ Eventos Importantes' },
        { type: 'doc', id: 'analizar-lentitud', label: '🐢 Analizar Lentitud' },
        { type: 'doc', id: 'optimizar-renderizado', label: '⚡ Optimizar Renderizado' },
        { type: 'doc', id: 'ejemplos-practicos', label: '💡 Ejemplos Prácticos' }
      ]
    }
  ]
};

export default performanceSidebar;
