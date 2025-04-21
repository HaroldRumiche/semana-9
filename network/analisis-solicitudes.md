---
sidebar_label: 'Análisis de Solicitudes'
sidebar_position: 4
---

# Análisis de Solicitudes

El análisis efectivo de las solicitudes de red es fundamental para optimizar el rendimiento y solucionar problemas en aplicaciones web. Esta sección explora técnicas para examinar y entender las solicitudes capturadas en el panel Network.

## Interpretación de la tabla de solicitudes

La tabla del panel Network ofrece una visión general con información clave:

- **Estado de color**: Verde (exitoso), Rojo (error), Amarillo (redirección)
- **Tiempo de solicitud**: La longitud de la barra indica la duración relativa
- **Orden de solicitud**: La secuencia en que ocurrieron las peticiones
- **Dependencias**: Cómo las solicitudes se relacionan entre sí

## Identificar solicitudes problemáticas

Busca estos indicadores de problemas potenciales:

- **Códigos de error** (4xx, 5xx)
- **Solicitudes excesivamente largas** (barras extendidas)
- **Múltiples redirecciones** (códigos 301, 302)
- **Recursos bloqueados** (por CORS, CSP, etc.)
- **Recursos duplicados** (misma URL solicitada múltiples veces)

## Análisis por grupo

Agrupar solicitudes facilita la identificación de patrones:

1. Haz clic en el encabezado de columna para ordenar
   - Por dominio (para identificar servicios de terceros)
   - Por tamaño (para encontrar archivos grandes)
   - Por tiempo (para identificar cuellos de botella)
   - Por tipo (para agrupar recursos similares)

2. Utiliza las vistas especializadas:
   - **Group by frame**: Agrupa por marco/iframe
   - **Group by domain**: Organiza por servidor de origen
   - **Group by initiator**: Agrupa por lo que causó la solicitud

## Análisis de la cascada (waterfall)

La visualización en cascada revela:

- **Bloqueo de renderizado**: Recursos que detienen la carga de la página
- **Paralelización**: Cómo el navegador gestiona solicitudes simultáneas
- **Prioridad**: Qué recursos se cargan primero
- **Interdependencias**: Recursos que esperan a otros

### Patrones comunes en la cascada

- **Patrón escalera**: Solicitudes secuenciales (potencialmente problemático)
- **Patrón paralelo**: Solicitudes simultáneas (eficiente)
- **Patrón de espera**: Largas barras azules claras (problemas de TTFB)
- **Patrón de bloqueo**: Recursos críticos que retrasan otros

## Análisis comparativo

Para entender el impacto de los cambios:

1. Captura un baseline (línea base) de rendimiento
2. Guarda la sesión como archivo HAR
3. Realiza cambios en la aplicación
4. Captura una nueva sesión
5. Compara las dos capturas para identificar mejoras o degradaciones

## Análisis de recursos individuales

Para cada recurso importante:

1. Revisa si es realmente necesario
2. Verifica su tamaño (oportunidades de compresión)
3. Comprueba encabezados de caché (oportunidades de optimización)
4. Evalúa si podría cargarse bajo demanda o de forma asíncrona

## Métricas clave a analizar

- **Número total de solicitudes**: Menos es generalmente mejor
- **Tamaño total transferido**: Impacta directamente en el tiempo de carga
- **Tiempo hasta First Contentful Paint**: Impacta en la percepción de velocidad
- **Tiempo hasta Interactive**: Cuándo el usuario puede interactuar
- **Solicitudes bloqueantes**: Recursos que retrasan la carga inicial

## Herramientas complementarias

El análisis de solicitudes se beneficia de otras herramientas del inspector:

- **Lighthouse**: Para evaluación general del rendimiento
- **Performance**: Para análisis detallado de rendimiento
- **Application**: Para revisar políticas de caché y almacenamiento
- **Security**: Para verificar problemas de certificados y seguridad

## Técnicas de análisis avanzado

- **Comparación A/B**: Analiza el mismo sitio con y sin ciertos recursos
- **Benchmarking competitivo**: Compara con sitios similares
- **Análisis de tendencias**: Monitoriza cambios a lo largo del tiempo
- **Análisis de variabilidad**: Compara cargas repetidas para identificar inconsistencias