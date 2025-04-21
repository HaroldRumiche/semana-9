---
sidebar_label: 'Tips Rápidos'
sidebar_position: 5
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Tips Rápidos para el Inspector de Elementos

Esta sección recopila consejos prácticos y atajos que te ayudarán a maximizar la eficiencia cuando trabajes con el inspector de elementos durante el desarrollo web.

## Selección de elementos

<DocsCards>
  <DocsCard
    header="Selección precisa"
    href="/acceso-navegacion/navegacion-general#seleccion-elementos"
  >
    <p>Usa la tecla <code>Ctrl</code> al navegar por el DOM para seleccionar elementos específicos incluso dentro de contenedores complejos.</p>
  </DocsCard>
  
  <DocsCard
    header="Navegación rápida"
    href="/acceso-navegacion/atajos-teclado#navegacion-dom"
  >
    <p>Utiliza <code>Arriba/Abajo</code> para navegar entre elementos hermanos y <code>Izquierda/Derecha</code> para expandir/contraer nodos.</p>
  </DocsCard>
</DocsCards>

## Manipulación del DOM

- **Duplicación rápida**: Selecciona un elemento y presiona Ctrl+D / Cmd+D para duplicarlo
- **Arrastrar y soltar**: Reordena elementos simplemente arrastrándolos en el árbol DOM
- **Ocultar elementos**: Presiona H con un elemento seleccionado para ocultarlo temporalmente (añade `display: none`)
- **Desactivar**: Usa el atajo Ctrl+/ para comentar/descomentar elementos HTML rápidamente

## Consejos de CSS

- **Copiar selector óptimo**: Haz clic derecho > "Copy" > "Copy selector" para obtener el selector CSS más eficiente
- **Toggle de estados**: Usa ":hov" en el panel Styles para simular :hover, :active, :focus sin cambiar el código
- **Edición en vivo**: Haz doble clic en cualquier valor CSS para editarlo, utiliza las flechas arriba/abajo para incrementar/decrementar valores
- **Estilos calculados**: Revisa el panel "Computed" para ver los valores finales aplicados después de todas las reglas CSS

## Inspección rápida

- **Buscar referencias**: Utiliza Ctrl+F / Cmd+F para encontrar texto o selectores en la página actual
- **Inspeccionar eventos**: En la pestaña "Event Listeners" puedes ver todos los eventos asociados a un elemento
- **Breakpoints DOM**: Establece puntos de interrupción cuando un elemento cambia, se elimina o se añaden hijos

## Accesos directos avanzados

- **Tomar screenshots**: Selecciona un elemento y usa Ctrl+Shift+P / Cmd+Shift+P, escribe "screenshot" y selecciona "Capture node screenshot"
- **Copiar como HTML**: Haz clic derecho en un elemento y selecciona "Copy" > "Copy outerHTML" para obtener todo el código
- **Edición en bloque**: Usa Alt+clic / Option+clic para crear múltiples cursores en el editor de texto del panel Elements

## Optimización de flujo de trabajo

- **Guarda cambios**: Utiliza local overrides para que tus cambios persistan entre recargas de página
- **Snippets personalizados**: Crea fragmentos de código reutilizables en el panel Sources > Snippets
- **Workspace**: Configura un workspace local para editar directamente archivos del disco y guardar cambios automáticamente

## Trucos CSS avanzados

- **Visualización de cambios**: Mantén abierto el panel de Animations para ver cambios CSS en tiempo real
- **Inspección de Grid/Flexbox**: Activa las herramientas de visualización de Grid y Flexbox para depurar layouts complejos
- **Color picker avanzado**: Haz clic en cualquier valor de color para acceder al selector de color con muestras, paletas y formatos

## Depuración avanzada

- **Copiar cambios**: Usa "Copy all declarations" para copiar todos los cambios CSS que has realizado
- **Forzar estados**: Usa el menú ":hov" para combinar varios estados (:hover + :focus) simultáneamente
- **Monitor de cambios**: Usa el panel Changes para ver un resumen de todas las modificaciones que has realizado