---
id : eventos-importantes
sidebar_position: 5
---

# Métricas Clave y Eventos Importantes

Las métricas clave y eventos importantes en el panel Performance proporcionan información crucial sobre momentos críticos en el ciclo de vida de carga y ejecución de tu página web. Estas métricas ayudan a cuantificar la experiencia del usuario y establecer objetivos medibles para optimizaciones.

## Métricas Web Vitals

Las Web Vitals son un conjunto de métricas estandarizadas por Google que miden aspectos fundamentales de la experiencia del usuario:

### LCP (Largest Contentful Paint)

- **Definición**: Mide el tiempo que tarda en renderizarse el elemento de contenido más grande visible en la ventana.
- **Objetivo**: < 2.5 segundos
- **Identificación**: Marcado con una bandera azul en la timeline del panel Performance
- **Importancia**: Indica cuándo el usuario percibe que la mayor parte del contenido está cargado

### FID (First Input Delay)

- **Definición**: Mide el tiempo desde que un usuario interactúa por primera vez con la página hasta que el navegador puede responder a esa interacción.
- **Objetivo**: < 100ms
- **Identificación**: En Performance, aparece como eventos de input en la sección "Interactions"
- **Importancia**: Refleja la capacidad de respuesta percibida de tu sitio

### CLS (Cumulative Layout Shift)

- **Definición**: Mide la suma de todos los cambios inesperados en el layout de la página.
- **Objetivo**: < 0.1
- **Identificación**: Visible en la sección "Experience" como barras rojas
- **Importancia**: Cuantifica la estabilidad visual durante la carga

## Eventos del Ciclo de Vida

El panel Performance registra eventos clave que marcan etapas importantes en la carga de la página:

### DCL (DOMContentLoaded)

- **Definición**: Se dispara cuando el HTML inicial ha sido completamente cargado y analizado.
- **Visualización**: Línea azul vertical en la timeline
- **Análisis**: Un DCL rápido indica HTML eficiente y pocos scripts bloqueantes

### L (Load)

- **Definición**: Se dispara cuando toda la página y sus recursos dependientes (imágenes, estilos, scripts) han terminado de cargar.
- **Visualización**: Línea roja vertical en la timeline
- **Análisis**: La diferencia entre DCL y Load indica tiempo gastado en recursos externos

### FP (First Paint)

- **Definición**: Momento en que el navegador renderiza cualquier pixel diferente al estado previo a la navegación.
- **Visualización**: Marcador verde en la timeline
- **Importancia**: Primera señal visual para el usuario de que algo está ocurriendo

### FCP (First Contentful Paint)

- **Definición**: Momento en que el navegador renderiza el primer texto, imagen, canvas o SVG.
- **Objetivo**: < 1.8 segundos
- **Visualización**: Marcador en la timeline de color verde claro
- **Importancia**: Indica cuándo el usuario ve contenido real por primera vez

## Analizando Eventos Importantes

Para analizar eficazmente estos eventos en el panel Performance:

1. **Línea de tiempo**: Los eventos importantes aparecen como marcadores de colores en la parte superior
2. **Sección Experience**: Contiene métricas detalladas sobre CLS, FID y otras interacciones
3. **Detalles de tiempo**: Pasa el cursor sobre cualquier evento para ver el tiempo exacto

## Interpretación y mejora de métricas

### Patrones problemáticos comunes:

- **FCP tardío**: Generalmente indica problemas con CSS bloqueante o JavaScript excesivo
- **DCL retrasado**: Suele ser causado por scripts síncronos o HTML muy grande
- **Gran brecha entre FCP y LCP**: Indica carga ineficiente de recursos principales

### Estrategias de optimización:

| Métrica | Estrategias de mejora |
|---------|------------------------|
| LCP | - Optimizar imágenes principales<br />- Implementar lazy loading<br />- Utilizar CDN para recursos clave |
| FID | - Romper tareas JS largas<br />- Diferir JavaScript no crítico<br />- Minimizar trabajo en el hilo principal |
| CLS | - Establecer dimensiones para imágenes y medios<br />- Evitar insertar contenido dinámico sobre contenido existente<br />- Reservar espacio para anuncios y embebidos |


## Exportando métricas para análisis

Para un análisis detallado y documentación:

1. Haz clic en "Save profile" en el panel Performance
2. Comparte los archivos JSON con tu equipo para análisis colaborativo
3. Considera integrar estas métricas en tu CI/CD para monitoreo continuo

## Conclusión

Comprender y optimizar estos eventos importantes es fundamental para crear experiencias web rápidas y fluidas. Utiliza estas métricas como KPIs para establecer objetivos medibles en tus esfuerzos de optimización de rendimiento.