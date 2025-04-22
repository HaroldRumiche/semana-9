---
id : estructura-archivos
sidebar_position: 2
---

# Estructura de archivos en el panel Sources

El panel Sources organiza los archivos y recursos que componen una página web en una estructura jerárquica para facilitar su navegación y acceso.

## Panel de navegación

El panel de navegación (lado izquierdo) está dividido en varias secciones principales:

### Página
Lista todos los recursos cargados por la página web actual, organizados según su origen:

- **Dominio principal**: Archivos del dominio de la página actual
- **Dominios de terceros**: Recursos cargados desde CDNs y otros dominios
- **Frames**: Recursos organizados por frame/iframe
- **Extensiones**: Código proveniente de extensiones instaladas en el navegador

### Filesystem
Proporciona acceso a archivos locales que has abierto o mapeado al workspace:

- Carpetas sincronizadas con el sistema de archivos local
- Recursos mapeados para edición persistente
- Cambios guardados directamente en los archivos originales

### Snippets
Fragmentos de código JavaScript personalizados que puedes crear y ejecutar:

- Reutilizables entre diferentes sitios web
- Almacenados en el navegador
- Útiles para pruebas y tareas repetitivas

### Content scripts
Scripts inyectados por extensiones del navegador.

## Editor de código

El editor de código (panel central) ofrece funcionalidades avanzadas:

- **Resaltado de sintaxis** para diferentes lenguajes
- **Numeración de líneas** para fácil referencia
- **Plegado de código** para ocultar bloques
- **Formato automático** con Pretty Print (botón `{}`)
- **Búsqueda en archivo** (Ctrl+F / Cmd+F)
- **Búsqueda en todos los archivos** (Ctrl+Shift+F / Cmd+Shift+F)
- **Ir a línea** (Ctrl+G / Cmd+G)
- **Edición en tiempo real** para probar cambios

## Panel de depuración

El panel de depuración (lado derecho) muestra información contextual durante la depuración:

- **Watch**: Variables que deseas monitorizar
- **Call Stack**: La pila de llamadas actual
- **Scope**: Variables accesibles en el contexto actual
- **Breakpoints**: Lista de todos los puntos de interrupción configurados
- **XHR/fetch Breakpoints**: Puntos de interrupción para solicitudes de red
- **DOM Breakpoints**: Puntos de interrupción basados en cambios del DOM
- **Global Listeners**: Eventos registrados globalmente
- **Event Listener Breakpoints**: Puntos de interrupción basados en eventos

## Trabajando con la estructura de archivos

### Navegación rápida entre archivos

1. Presiona Ctrl+P / Cmd+P para abrir el buscador de archivos
2. Comienza a escribir el nombre del archivo deseado
3. Usa las flechas para navegar entre los resultados
4. Presiona Enter para abrir el archivo seleccionado

### Creación de workspaces

Los workspaces permiten editar y guardar cambios directamente en los archivos locales:

1. Haz clic derecho en el panel de navegación y selecciona "Add folder to workspace"
2. Selecciona la carpeta de tu proyecto
3. Autoriza el acceso cuando el navegador lo solicite
4. Los archivos ahora pueden editarse y guardarse permanentemente

### Creación y gestión de snippets

1. Navega a la sección "Snippets"
2. Haz clic derecho y selecciona "New snippet"
3. Escribe o pega tu código
4. Guárdalo con Ctrl+S / Cmd+S
5. Ejecútalo con Ctrl+Enter / Cmd+Enter

Los snippets son especialmente útiles para tareas de automatización, pruebas rápidas de código o manipulación del DOM.