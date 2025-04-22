import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const domSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🌐 DOM',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'navegar-dom', label: '🌍 Navegar por el DOM' },
        { type: 'doc', id: 'editar-html-vivo', label: '✏️ Editar HTML en Vivo' },
        { type: 'doc', id: 'buscar-elementos', label: '🔍 Buscar Elementos' },
        { type: 'doc', id: 'atributos-nodos', label: '🔑 Atributos y Nodos' },
        { type: 'doc', id: 'estructura-documento', label: '📄 Estructura del Documento' },
        { type: 'doc', id: 'copiar-elementos', label: '📋 Copiar Elementos' },
        { type: 'doc', id: 'resaltar-elementos', label: '✨ Resaltar Elementos' }
      ]
    }
  ]
};

export default domSidebar;
