import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const applicationSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '📱 Application',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'manifest', label: '📑 Manifest' },
        { type: 'doc', id: 'service-workers', label: '⚙️ Service Workers' },
        { type: 'doc', id: 'cache', label: '💽 Cache' },
        { type: 'doc', id: 'storage', label: '💾 Storage' },
        { type: 'doc', id: 'localstorage-sessionstorage', label: '📦 LocalStorage & SessionStorage' },
        { type: 'doc', id: 'indexeddb', label: '🔒 IndexedDB' },
        { type: 'doc', id: 'cookies', label: '🍪 Cookies' },
        { type: 'doc', id: 'pwa-inspection', label: '🔍 PWA Inspection' },
        { type: 'doc', id: 'configuraciones-avanzadas', label: '⚙️ Configuraciones Avanzadas' },
        
      ]
    }
  ]
};

export default applicationSidebar;
