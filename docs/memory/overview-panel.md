---
id: overview-panel
title: Panel de Visión General de Memoria
sidebar_position: 2
---

# Panel de Visión General de Memoria

El panel de visión general (Overview Panel) es el punto de entrada principal al análisis de memoria en DevTools, ofreciendo una interfaz unificada para acceder a las diferentes herramientas de diagnóstico de memoria.

## Acceso al panel de Memoria

Para acceder al panel de Memoria:

1. Abre DevTools presionando `F12` o `Ctrl+Shift+I` (Windows/Linux) o `Cmd+Option+I` (Mac)
2. Haz clic en la pestaña "Memory" o "Memoria"
3. Si no la encuentras, haz clic en el menú de tres puntos (⋮) y selecciónala en la lista desplegable

## Componentes principales del panel

El panel de Memoria consta de varios elementos esenciales:

### Selector de perfiles

En la parte superior encontrarás opciones para seleccionar el tipo de perfil que deseas crear:

- **Heap snapshot**: Captura una instantánea completa del montón de memoria JavaScript
- **Allocation instrumentation on timeline**: Registra las asignaciones de memoria a lo largo del tiempo
- **Allocation sampling**: Muestrea las asignaciones con un impacto mínimo en el rendimiento

### Barra de herramientas

La barra de herramientas contiene botones para:

- **Record/Stop**: Iniciar o detener la grabación del perfil seleccionado
- **Clear**: Eliminar todos los perfiles guardados en la sesión actual
- **Import/Export**: Guardar o cargar perfiles para análisis posterior

### Lista de perfiles

A la izquierda se muestra una lista de todos los perfiles capturados durante la sesión actual, incluyendo:

- El nombre asignado automáticamente o personalizado
- El tamaño total de memoria capturada
- La hora de captura

### Vista de detalles

La vista principal a la derecha muestra la información detallada del perfil seleccionado, con diferentes visualizaciones según el tipo de perfil:

- Tablas de objetos agrupados por constructores
- Vistas de árbol para explorar la jerarquía de objetos
- Gráficos y timelines para representar visualmente el uso de memoria

## Modos de visualización

Cuando seleccionas un perfil de memoria, puedes alternar entre diferentes modos de visualización:

### Summary View (Vista de resumen)

Muestra los objetos agrupados por nombre de constructor, permitiendo ver qué tipos de objetos ocupan más memoria.

### Comparison View (Vista de comparación)

Aparece cuando seleccionas dos instantáneas, mostrando las diferencias entre ellas para identificar cambios en la asignación de memoria.

### Containment View (Vista de contención)

Permite explorar la estructura del montón de memoria, mostrando qué objetos retienen a otros y cómo se relacionan entre sí.

### Dominators View (Vista de dominadores)

Identifica los objetos "dominadores" que impiden que grandes bloques de memoria sean liberados por el recolector de basura.

## Filtrado y búsqueda

Para facilitar el análisis en aplicaciones complejas, el panel ofrece potentes capacidades de filtrado:

- **Búsqueda por nombre**: Introduce texto en el campo de búsqueda para filtrar objetos
- **Filtro por tamaño**: Utiliza operadores como `>1000` para mostrar solo objetos mayores a 1000 bytes
- **Filtros predefinidos**: Opciones para mostrar solo objetos detached (separados), strings, o arrays

## Buenas prácticas de uso

Para aprovechar al máximo el panel de Memoria:

1. Realiza capturas con la aplicación en un estado conocido (antes y después de una acción sospechosa)
2. Toma múltiples instantáneas para comparar cambios a lo largo del tiempo
3. Utiliza los nombres de instantáneas para identificar fácilmente el contexto de cada captura
4. Limpia la memoria innecesaria antes de capturar perfiles importantes (usa "Collect garbage")
5. Cierra pestañas y extensiones innecesarias para reducir el ruido en tus análisis

En las siguientes secciones, exploraremos en profundidad cada una de las herramientas específicas disponibles en el panel de Memoria.