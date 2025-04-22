---
sidebar_label: 'Puntos de interrupción'
sidebar_position: 3
---

# Puntos de interrupción (Breakpoints)

Los puntos de interrupción son una herramienta fundamental para la depuración que permite detener la ejecución del código en momentos específicos para examinar el estado de la aplicación.

## Tipos de puntos de interrupción

### Puntos de interrupción de línea

Detienen la ejecución en una línea específica del código:

1. Haz clic en el número de línea en el editor de código
2. Alternativamente, añade la declaración `debugger;` directamente en tu código

### Puntos de interrupción condicionales

Se activan solo cuando una condición específica es verdadera:

1. Haz clic derecho sobre un número de línea
2. Selecciona "Add conditional breakpoint"
3. Ingresa una expresión JavaScript que debe evaluarse como verdadera para activar el punto de interrupción

### Puntos de interrupción logpoint

Imprimen información en la consola sin detener la ejecución:

1. Haz clic derecho sobre un número de línea
2. Selecciona "Add logpoint"
3. Ingresa el mensaje a mostrar en la consola (puedes usar `{variable}` para incluir valores)

### Puntos de interrupción de DOM

Se activan cuando el DOM es modificado de maneras específicas:

1. En el panel Elements, haz clic derecho en un elemento
2. Navega a "Break on" y selecciona:
   - Subtree modifications (cambios en el elemento o sus hijos)
   - Attribute modifications (cambios en los atributos)
   - Node removal (eliminación del nodo)

### Puntos de interrupción de XHR/Fetch

Se activan cuando se realizan solicitudes de red que coinciden con un patrón:

1. En el panel de depuración, expande "XHR/fetch Breakpoints"
2. Haz clic en "+" para añadir un nuevo punto de interrupción
3. Ingresa un patrón de URL que desees interceptar

### Puntos de interrupción de eventos

Se activan cuando ocurren eventos específicos:

1. En el panel de depuración, expande "Event Listener Breakpoints"
2. Marca las categorías o eventos específicos que quieres interceptar

## Gestión de puntos de interrupción

### Panel de puntos de interrupción

El panel "Breakpoints" en la sección de depuración muestra todos los puntos de interrupción configurados:

- Marca/desmarca casillas para activar/desactivar puntos de interrupción individuales
- Haz clic derecho para editar o eliminar puntos de interrupción
- Usa el botón de activación/desactivación global para habilitar/deshabilitar todos los puntos de interrupción

### Puntos de interrupción persistentes

Por defecto, los puntos de interrupción se pierden al recargar la página. Para hacerlos persistentes:

1. Configura un workspace asociando los archivos locales
2. Los puntos de interrupción ahora se conservarán entre sesiones

### Exportación e importación

Puedes guardar y restaurar tu configuración de depuración:

1. Haz clic derecho en el panel "Breakpoints"
2. Selecciona "Export breakpoints" para guardar o "Import breakpoints" para restaurar

## Técnicas avanzadas

### Patrones de puntos de interrupción

Estrategias efectivas para colocar puntos de interrupción:

- **Puntos de entrada**: Coloca puntos de interrupción en los manejadores de eventos principales
- **Puntos de salida**: Coloca puntos de interrupción justo antes de que las funciones retornen valores
- **Puntos de error**: Usa puntos de interrupción condicionales para capturar estados de error
- **Puntos de mutación**: Usa puntos de interrupción del DOM para detectar cambios específicos

### Depuración asíncrona

Para depurar código asíncrono:

- Usa "Async stack traces" para ver la pila de llamadas completa
- Configura "Pause on caught/uncaught exceptions" para detectar errores en callbacks
- Usa puntos de interrupción de XHR para depurar el flujo de datos asíncrono

### Blackboxing

Excluye bibliotecas y código de terceros de la depuración:

1. Haz clic derecho en un archivo en el panel Sources
2. Selecciona "Blackbox script" para ignorar ese archivo durante la depuración
3. Configura patrones de blackbox en la configuración de DevTools para múltiples archivos