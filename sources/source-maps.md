---
id : source-maps
sidebar_position: 7
---

# Source Maps

Los Source Maps son archivos que establecen una correlación entre el código fuente original y el código transformado (minificado, transpilado o compilado), permitiendo depurar el código original incluso cuando se ejecuta el código transformado.

## Fundamentos de Source Maps

### ¿Qué son los Source Maps?

Los Source Maps son archivos JSON con extensión `.map` que:

- Mapean el código transformado al código fuente original
- Permiten ver y depurar código legible durante el desarrollo
- Facilitan la depuración de código escrito en lenguajes como TypeScript, SCSS, JSX, etc.
- Contienen información sobre archivos fuente, líneas, columnas y nombres de variables

### Cómo funcionan

1. El compilador/transpilador genera un archivo de código transformado
2. También genera un archivo Source Map (.map)
3. El navegador carga el código transformado y detecta la referencia al Source Map
4. DevTools descarga el Source Map y lo utiliza para mostrar el código original

### Referencia en archivos transformados

Los Source Maps se vinculan al código transformado mediante un comentario especial:

```javascript
//# sourceMappingURL=script.min.js.map
```

## Uso de Source Maps en DevTools

### Activación de Source Maps

Para habilitar Source Maps en DevTools:

1. Abre la configuración de DevTools (F1 o icono de engranaje)
2. En la sección "Sources", asegúrate de que:
   - "Enable JavaScript source maps" esté activado
   - "Enable CSS source maps" esté activado (para CSS)

### Navegación con Source Maps activos

Cuando los Source Maps están funcionando:

1. El panel Sources muestra los archivos originales en lugar de los transformados
2. Los puntos de interrupción se colocan en el código original
3. La pila de llamadas muestra referencias a archivos originales
4. Las variables conservan sus nombres originales

### Sección "Source maps file"

En los detalles de un archivo:

1. La pestaña "Source map URL" muestra la URL del archivo Source Map
2. La pestaña "Parsed source map" muestra su contenido analizado
3. Los archivos originales aparecen en la sección de orígenes

## Configuración y generación de Source Maps

### Herramientas que generan Source Maps

La mayoría de las herramientas modernas de desarrollo generan Source Maps:

- **Webpack**: Configura `devtool: 'source-map'` en el archivo de configuración
- **Babel**: Usa la opción `--source-maps` o `sourceMaps: true` en la configuración
- **TypeScript**: Habilita `"sourceMap": true` en tsconfig.json
- **Sass/SCSS**: Usa la opción `--source-map` o `sourceMap: true`
- **Terser/UglifyJS**: Configura `sourceMap: true` en las opciones

### Niveles de detalle

Los Source Maps pueden configurarse con diferentes niveles de detalle:

- **Inline**: Embebidos en el archivo transformado (mayor tamaño)
- **External**: Archivos separados (mejor rendimiento)
- **Cheap**: Solo mapean líneas, no columnas (más rápidos)
- **Eval**: Generados con la función eval (solo para desarrollo)

### Consideraciones de producción

Para entornos de producción:

- Considera si debes exponer Source Maps (revelan código fuente)
- Opciones comunes:
  - No generar Source Maps en producción
  - Generar Source Maps pero no exponerlos públicamente
  - Exponer Source Maps solo para monitorización de errores

## Solución de problemas con Source Maps

### Source Maps no funcionan

Si los Source Maps no parecen funcionar:

1. Verifica que estén habilitados en la configuración de DevTools
2. Comprueba la consola en busca de errores relacionados con Source Maps
3. Asegúrate de que el archivo Source Map sea accesible (misma política de CORS)
4. Verifica que la URL en el comentario `sourceMappingURL` sea correcta

### Mapeo incorrecto

Si el mapeo parece incorrecto:

1. Regenera los Source Maps para asegurar que estén actualizados
2. Verifica que la estructura de archivos coincida entre el entorno de desarrollo y el servidor
3. Prueba con diferentes opciones de generación de Source Maps

### Optimización de rendimiento

Para mejorar el rendimiento con Source Maps:

1. Usa Source Maps externos en lugar de inline
2. Considera Source Maps "cheap" para compilaciones más rápidas
3. Genera Source Maps solo en desarrollo, no en producción
4. Utiliza un CDN o servidor optimizado para servir los Source Maps

## Casos de uso avanzados

### Depuración de bibliotecas de terceros

Los Source Maps también permiten depurar bibliotecas de terceros:

1. Algunas bibliotecas incluyen Source Maps en sus versiones de desarrollo
2. Puedes localizar y cargar manualmente los Source Maps para bibliotecas populares
3. Utiliza la sección "Sources" para navegar por el código fuente de la biblioteca

### Monitorización de errores en producción

Para capturar errores significativos en producción:

1. Almacena los Source Maps en un servidor seguro
2. Configura herramientas de monitorización de errores para usar estos Source Maps
3. Los errores de usuarios se mapearán automáticamente al código fuente original