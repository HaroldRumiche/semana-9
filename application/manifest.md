---
sidebar_label: 'Manifest'
sidebar_position: 2
---

# Manifest de Aplicación Web

El manifiesto de aplicación web es un archivo JSON que proporciona información sobre la aplicación para permitir que los usuarios la instalen en sus dispositivos y la ejecuten en modo standalone o fullscreen.

## Acceso al Manifest en DevTools

Para inspeccionar el manifiesto de una aplicación web:

1. Abre DevTools (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application"
3. Selecciona "Manifest" en el panel lateral izquierdo

## Información disponible

La sección de Manifest muestra:

- Visualización del archivo JSON del manifiesto
- Errores y advertencias de validación
- Vista previa de los iconos definidos
- Identidad y presentación de la aplicación
- Estado de instalabilidad con requisitos pendientes

### Vista del Manifest

El panel muestra el contenido del archivo manifest.json con resaltado de sintaxis para facilitar su lectura. Esto incluye todas las propiedades definidas como:

- `name` y `short_name`
- `description`
- `start_url`
- `display` (standalone, fullscreen, minimal-ui, browser)
- `orientation`
- `theme_color` y `background_color`
- `icons`
- `shortcuts`
- `related_applications`

### Iconos

DevTools muestra una vista previa visual de todos los iconos definidos en el manifiesto, con información sobre:

- Dimensiones de cada icono
- Rutas de archivo
- Propósito (any, maskable, monochrome)
- Estado de carga (si está disponible o no)

### Identidad y presentación

Esta sección resume información clave para la identidad visual de la aplicación:

- Nombre para mostrar
- Colores de tema y fondo
- Orientación predeterminada
- Modo de visualización

### Add to Homescreen / Instalabilidad

DevTools proporciona información sobre si la aplicación cumple con los requisitos para ser instalable, incluyendo:

- Criterios cumplidos
- Requisitos pendientes
- Opción para simular el evento "beforeinstallprompt"
- Botón para probar la instalación de la PWA

## Acciones comunes

Desde esta interfaz puedes:

- **Depurar problemas de instalabilidad**: Identificar qué requisitos no se están cumpliendo para hacer tu aplicación instalable.
- **Validar iconos**: Verificar que todos los tamaños de iconos requeridos estén presentes y se carguen correctamente.
- **Simular la instalación**: Probar el flujo de instalación sin necesidad de cumplir todos los requisitos.
- **Copiar como JavaScript**: Obtener una representación en objeto JavaScript del manifiesto.

## Errores comunes y soluciones

| Error | Solución |
|-------|----------|
| Manifest no encontrado | Verifica la etiqueta `<link rel="manifest">` en el HTML |
| Iconos faltantes | Añade iconos de 192x192px y 512x512px como mínimo |
| Service Worker no registrado | Implementa un Service Worker básico para hacer la aplicación instalable |
| HTTPS requerido | Las PWAs requieren conexiones seguras para ser instalables |

## Mejores prácticas

- Proporciona iconos en múltiples tamaños, incluyendo versiones maskable
- Define un `short_name` conciso para mostrar bajo el icono
- Establece colores de tema y fondo para una experiencia visual coherente
- Configura la orientación adecuada para tu aplicación
- Utiliza `start_url` con parámetros de seguimiento para analíticas

La correcta configuración del manifiesto es esencial para crear PWAs efectivas que brinden una experiencia similar a aplicaciones nativas en dispositivos móviles y de escritorio.