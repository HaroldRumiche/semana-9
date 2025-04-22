---
id : inspeccionar-estilos
sidebar_position: 2
---

# Inspeccionar Estilos

El primer paso para utilizar el Inspector de Estilos es seleccionar y examinar los elementos HTML de la página. Esta sección te guía a través del proceso de selección e inspección de elementos para analizar sus estilos asociados.

## Seleccionar elementos para inspección

Existen varias formas de seleccionar elementos para inspeccionar sus estilos:

### Usando el selector de elementos

1. Haz clic en el icono de selector de elementos (generalmente un cursor sobre un recuadro) en las DevTools
2. Mueve el cursor sobre la página y verás que los elementos se resaltan
3. Haz clic en el elemento que deseas inspeccionar

![Selector de elementos](https://ejemplo.com/images/element-selector.png)

### Usando el menú contextual

1. Haz clic derecho sobre cualquier elemento en la página web
2. Selecciona "Inspeccionar" o "Inspeccionar elemento" del menú contextual

### Desde el código HTML

1. En el panel "Elementos" o "Inspector", navega por la estructura HTML
2. Haz clic en cualquier elemento para seleccionarlo y ver sus estilos

### Mediante atajos de teclado

- **Chrome/Edge**: Ctrl+Shift+C (Windows/Linux) o Cmd+Option+C (Mac)
- **Firefox**: Ctrl+Shift+C (Windows/Linux) o Cmd+Option+C (Mac)
- **Safari**: Cmd+Option+C

## Navegación por la estructura DOM

Una vez abierto el panel de elementos, puedes navegar por la estructura DOM:

- Usa las flechas para expandir/contraer nodos
- Usa Tab/Shift+Tab para moverse entre elementos
- Busca elementos específicos con Ctrl+F (Cmd+F en Mac)

## Panel de estilos

Cuando seleccionas un elemento, el panel de estilos mostrará toda la información relacionada con CSS:

![Panel de estilos](https://ejemplo.com/images/styles-panel.png)

### Secciones principales del panel de estilos

1. **Estilos en línea**: Muestra los estilos aplicados directamente en el atributo `style` del elemento
2. **Reglas CSS**: Muestra todas las reglas CSS que afectan al elemento seleccionado
3. **Propiedades calculadas**: Muestra los valores finales de todas las propiedades CSS después de aplicar la cascada
4. **Modelo de caja**: Visualización gráfica de las dimensiones, márgenes, bordes y padding

## Visualizar estados de elementos

Los elementos pueden tener diferentes estados (:hover, :active, :focus, etc.) que aplican estilos adicionales:

1. Haz clic en el botón `:hov` o "Toggle Element State"
2. Selecciona el estado que deseas simular
3. Los estilos correspondientes se mostrarán en el panel

![Selector de estados](https://ejemplo.com/images/state-selector.png)

## Filtrar estilos

Para encontrar propiedades específicas rápidamente:

1. Usa el campo de búsqueda en la parte superior del panel de estilos
2. Escribe el nombre de la propiedad o valor que buscas
3. Solo se mostrarán las propiedades que coincidan con tu búsqueda

## Organización de reglas CSS

Las reglas CSS en el panel de estilos se muestran en orden de especificidad:

- Las reglas más específicas aparecen arriba
- Las reglas anuladas aparecen tachadas
- Cada regla muestra su origen (archivo y número de línea)
- Las propiedades heredadas se muestran en una sección separada

## Inspeccionar fuentes y tipografía

Para analizar detalles de fuentes y tipografía:

1. Selecciona cualquier elemento con texto
2. Busca la sección "Computed" o "Propiedades calculadas"
3. Expande la sección "Font" o "Fuente" para ver detalles como familia, tamaño, peso, etc.

## Consejos prácticos

- Usa el botón de pin (si está disponible) para mantener la selección mientras te desplazas por la página
- Activa la opción "Show user agent shadow DOM" para inspeccionar elementos con shadow DOM
- Utiliza el selector de elementos para elementos difíciles de seleccionar con el cursor
- En Chrome, prueba el modo "Pick an element from the page to dock into" para anclar la inspección a un elemento específico

En la siguiente sección, examinaremos cómo interpretar y trabajar con las reglas CSS que se aplican a los elementos.