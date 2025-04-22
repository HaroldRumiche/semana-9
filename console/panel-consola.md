---
id : panel-consola
sidebar_position: 2
---

# Panel de Consola

El panel de Consola ofrece una interfaz versátil que combina un área de visualización de mensajes con un entorno de ejecución interactivo. Conocer su estructura y opciones de configuración te ayudará a utilizar esta herramienta de manera eficiente.

## Estructura del panel de Consola

El panel de Consola consta de dos áreas principales:

### 1. Área de visualización de mensajes
Esta sección muestra:
- Mensajes de registro generados por el código (console.log, console.error, etc.)
- Errores y advertencias generados durante la ejecución
- Resultados de expresiones evaluadas
- Salida de comandos ejecutados

### 2. Prompt de línea de comandos
En la parte inferior del panel encontrarás:
- Un cursor interactivo para ingresar comandos
- Indicador `>` que señala dónde escribir el código
- Autocompletado al presionar Tab
- Acceso al historial de comandos con flechas arriba/abajo

## Barra de herramientas y configuración

La barra de herramientas superior del panel ofrece diversas opciones para personalizar la consola:

### Filtros de mensajes
Permite mostrar u ocultar diferentes tipos de mensajes:
- **All**: Muestra todos los mensajes
- **Errors**: Solo muestra errores (rojo)
- **Warnings**: Solo muestra advertencias (amarillo)
- **Info**: Solo muestra mensajes informativos (azul)
- **Verbose**: Incluye mensajes detallados (gris)
- **Custom level**: Permite crear filtros personalizados

### Opciones adicionales
- **Clear console** (🗑️): Limpia todos los mensajes actuales
- **Preserve log**: Mantiene los mensajes al navegar entre páginas
- **Hide network**: Oculta mensajes relacionados con solicitudes de red
- **Group similar**: Agrupa mensajes idénticos repetidos
- **Settings** (⚙️): Acceso a configuración avanzada

## Modos de consola

El panel de Consola puede utilizarse en diferentes modos según tus necesidades:

### 1. Modo independiente
- Abre la consola como panel principal (Ctrl+Shift+J / Cmd+Option+J)
- Maximiza el espacio para ver mensajes y ejecutar comandos
- Ideal para sesiones extensas de depuración

### 2. Modo integrado (Drawer)
- Abre la consola como panel secundario mientras usas otras herramientas
- Útil para monitorear mensajes mientras trabajas en Elements, Sources, etc.
- Accesible desde cualquier panel presionando Esc

## Personalización avanzada

Para adaptar la consola a tus preferencias:

### Ajustes de visualización
- **Tamaño de texto**: Modifica el zoom para ajustar el tamaño del texto
- **Tema**: Cambia entre modo claro y oscuro
- **Monospace**: Activa la fuente monoespaciada para mejor visualización de código

### Preferencias de comportamiento
- **Autocomplete**: Activa/desactiva sugerencias automáticas
- **Eager evaluation**: Muestra resultados de expresiones mientras escribes
- **History**: Conserva o limpia el historial de comandos entre sesiones

## Atajos de teclado útiles

| Atajo | Función |
|-------|---------|
| Ctrl+L / Cmd+K | Limpiar la consola |
| Flecha arriba/abajo | Navegar por el historial de comandos |
| Tab | Autocompletar nombres de propiedades y métodos |
| Shift+Enter | Nueva línea sin ejecutar el comando |
| Ctrl+Shift+L / Cmd+Shift+L | Limpiar sin preservar historial |
| Ctrl+U / Cmd+U | Limpiar la línea actual |

## Ajustes de persistencia

La consola ofrece opciones para controlar qué información se conserva:

- **Preserve Log Upon Navigation**: Mantiene los mensajes al cambiar de página
- **Selected Context Only**: Muestra solo mensajes del contexto seleccionado (iframe/worker)
- **Log XMLHttpRequests**: Registra automáticamente solicitudes AJAX
- **Store Log**: Guarda el historial de la consola entre sesiones del navegador

Entender estas opciones de configuración te permitirá adaptar el panel de Consola a tu flujo de trabajo y maximizar su utilidad durante el desarrollo y depuración de aplicaciones web.