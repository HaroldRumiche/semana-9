---
id : contenido-mixto
sidebar_position: 3
---

# Contenido Mixto

El contenido mixto ocurre cuando una página HTTPS carga recursos (scripts, imágenes, hojas de estilo) a través de conexiones HTTP inseguras, comprometiendo la seguridad del sitio.

## Tipos de contenido mixto

### Contenido mixto pasivo
Recursos que no interactúan directamente con la página:
- Imágenes
- Audio/vídeo
- Fuentes tipográficas

Este tipo genera advertencias pero normalmente el navegador permite cargarlos.

### Contenido mixto activo
Recursos que pueden modificar el comportamiento de la página:
- JavaScript
- CSS
- iframes
- XMLHttpRequest
- Fetch API

Este tipo es bloqueado por los navegadores modernos debido a su alto riesgo.

## Detección en el inspector de elementos

Para identificar contenido mixto:

1. Abre el panel Security/Seguridad
2. Busca la sección "Mixed Content"
3. Revisa el listado de recursos con problemas

### Indicadores visuales

- Icono de candado roto o con advertencia en la barra de URL
- Mensajes de consola indicando recursos bloqueados
- Marcadores en el panel Network para recursos inseguros

## Resolución de problemas

### Soluciones comunes

1. **Actualizar URLs**
   ```html
   <!-- Incorrecto -->
   <img src="http://ejemplo.com/imagen.jpg">
   
   <!-- Correcto -->
   <img src="https://ejemplo.com/imagen.jpg">
   ```

2. **Usar URLs relativas al protocolo**
   ```html
   <script src="//cdn.ejemplo.com/script.js"></script>
   ```

3. **Implementar Content-Security-Policy**
   ```
   Content-Security-Policy: upgrade-insecure-requests
   ```

4. **Revisar redirecciones HTTP a HTTPS**

## Herramientas de análisis

- **Filtro de red**: Utiliza "mixed-content:" en el panel Network para filtrar solicitudes
- **Consola**: Muestra advertencias detalladas sobre contenido bloqueado
- **Modo incógnito**: Prueba sin influencia de caché o extensiones

## Impacto en seguridad

El contenido mixto puede provocar:

- Vulnerabilidad a ataques Man-in-the-Middle
- Robo de cookies y credenciales
- Modificación de contenido en tránsito
- Pérdida del indicador de seguridad HTTPS
- Reducción de la confianza del usuario

## Mejores prácticas

- Auditar periódicamente todo el sitio en busca de contenido mixto
- Configurar redirecciones 301 de HTTP a HTTPS
- Actualizar CMS y plugins a versiones que soporten HTTPS
- Implementar CSP con upgrade-insecure-requests o block-all-mixed-content
- Utilizar HSTS para prevenir conexiones HTTP iniciales