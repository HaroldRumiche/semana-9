---
id : tiempos-carga
sidebar_position: 6
---

# Tiempos de Carga

El análisis de los tiempos de carga es crucial para optimizar el rendimiento de un sitio web. El panel Network proporciona herramientas detalladas para medir y analizar estos tiempos.

## Eventos clave de rendimiento

El panel Network muestra líneas verticales que representan eventos importantes:

- **DOMContentLoaded**: Cuando el HTML inicial se ha cargado y analizado completamente (línea azul)
- **Load**: Cuando todos los recursos iniciales de la página se han cargado (línea roja)
- **First Paint**: Primer momento en que algo se muestra en pantalla
- **First Contentful Paint (FCP)**: Primera vez que se muestra contenido del DOM
- **Largest Contentful Paint (LCP)**: Cuando se renderiza el elemento visible más grande

## <a id="timeline"></a>Timeline/Cascada

La visualización en cascada (waterfall) muestra la secuencia temporal de todas las solicitudes:

### Fases de una solicitud

Cada barra de la cascada se divide en segmentos de colores que representan:

1. **Tiempo de espera en cola** (gris claro)
2. **Resolución DNS** (amarillo)
3. **Conexión TCP** (verde oliva)
4. **Negociación SSL/TLS** (verde)
5. **Tiempo hasta el primer byte (TTFB)** (azul claro)
6. **Descarga de contenido** (azul oscuro)

### Interpretación de la cascada

- **Barras horizontales**: Duración de cada solicitud
- **Posición vertical**: Orden en que se iniciaron las solicitudes
- **Espacios horizontales**: Intervalos donde no hay actividad (posibles cuellos de botella)
- **Solicitudes superpuestas**: Peticiones que ocurren en paralelo

## Panel de timing detallado

Al seleccionar una solicitud individual, la pestaña Timing proporciona:

- **Gráfico detallado** de cada fase de la solicitud
- **Valores numéricos precisos** para cada etapa
- **Proporción relativa** entre las diferentes fases

## Métricas globales de tiempos

En la parte inferior del panel Network se muestra un resumen:

- **Número total de solicitudes**
- **Datos transferidos** (y tamaño real sin compresión)
- **Recursos bloqueados** (si los hay)
- **Tiempo de DOMContentLoaded**
- **Tiempo de Load**

## Simulación de conexiones

La función de throttling permite simular diferentes velocidades de conexión:

1. **Fast 3G / Slow 3G**: Emula conexiones móviles
2. **Offline**: Simula ausencia de conexión
3. **Custom**: Define tus propios parámetros de:
   - Latencia (ping)
   - Velocidad de descarga
   - Velocidad de subida

## Análisis de tiempo acumulativo

### Visualización de tiempo acumulado

Para entender el impacto progresivo de las solicitudes:

1. Activa la vista "Timeline" en lugar de "Waterfall"
2. Observa cómo se acumula el tiempo de carga
3. Identifica momentos donde múltiples solicitudes retrasan la carga

### Prioridad de recursos

El inspector muestra la prioridad que el navegador asigna a cada recurso:

- **Highest**: Recursos críticos para el renderizado
- **High**: Recursos importantes como CSS principal
- **Medium**: Scripts y otros recursos
- **Low**: Recursos diferibles
- **Lowest**: Recursos que pueden cargarse después

## Exportación de datos de tiempo

Para análisis detallado o comparativo:

1. Guarda la sesión completa como archivo HAR
2. Usa herramientas externas para análisis comparativo
3. Crea líneas base para medir mejoras futuras

## Análisis de Core Web Vitals

Los navegadores modernos integran métricas de Core Web Vitals:

- **LCP (Largest Contentful Paint)**: Mide la velocidad de carga percibida
- **FID (First Input Delay)**: Mide la interactividad
- **CLS (Cumulative Layout Shift)**: Mide la estabilidad visual

## Mejores prácticas para optimización

Basándote en el análisis de tiempos, implementa estas mejoras:

1. **Reduce solicitudes**: Combina archivos CSS/JS
2. **Optimiza TTFB**: Mejora el rendimiento del servidor
3. **Prioriza contenido visible**: Carga primero los recursos críticos
4. **Implementa carga diferida**: Para recursos no críticos
5. **Optimiza la cascada**: Evita dependencias secuenciales
6. **Implementa preloading**: Para recursos críticos
7. **Reduce el tamaño de transferencia**: Mediante compresión y minificación