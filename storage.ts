import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const storageSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '💾 Storage',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'cookies', label: '🍪 Cookies' },
        { type: 'doc', id: 'localstorage', label: '📦 LocalStorage' },
        { type: 'doc', id: 'sessionstorage', label: '🔐 SessionStorage' },
        { type: 'doc', id: 'indexeddb', label: '🗄️ IndexedDB' },
        { type: 'doc', id: 'cache-storage', label: '📂 Cache Storage' },
        { type: 'doc', id: 'editar-datos', label: '✏️ Editar Datos' },
        { type: 'doc', id: 'depurar-storage', label: '🐞 Depurar Storage' }
      ]
    }
  ]
};

export default storageSidebar;
