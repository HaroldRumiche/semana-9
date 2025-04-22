import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const consoleSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🖥️ Console',
      collapsible: false,
      items: [
        { type: 'doc', id: 'introduccion', label: '📘 Introducción' },
        { type: 'doc', id: 'panel-consola', label: '📋 Panel de consola' },
        { type: 'doc', id: 'tipos-mensajes', label: '💬 Tipos de mensajes' },
        { type: 'doc', id: 'comandos-utiles', label: '⌨️ Comandos útiles' },
        { type: 'doc', id: 'errores-excepciones', label: '❌ Errores y excepciones' },
        { type: 'doc', id: 'objetos-y-vistas', label: '🧱 Objetos y vistas' },
        { type: 'doc', id: 'logs-avanzados', label: '📈 Logs avanzados' },
        { type: 'doc', id: 'depuracion-consola', label: '🛠️ Depuración en consola' }
      ]
    }
  ]
};

export default consoleSidebar;
