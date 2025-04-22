import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const lighthouseSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🚦 Lighthouse',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'como-generar-auditoria', label: '🧪 Cómo generar auditoría' },
        { type: 'doc', id: 'rendimiento', label: '⚡ Rendimiento' },
        { type: 'doc', id: 'accesibilidad', label: '♿ Accesibilidad' },
        { type: 'doc', id: 'buenas-practicas', label: '✅ Buenas Prácticas' },
        { type: 'doc', id: 'seo', label: '🔍 SEO' },
        { type: 'doc', id: 'pwa', label: '📱 PWA' },
        { type: 'doc', id: 'interpretacion-resultados', label: '📊 Interpretación de resultados' }
      ]
    }
  ]
};

export default lighthouseSidebar;
