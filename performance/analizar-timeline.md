---
sidebar_label: 'Analizar Timeline'
sidebar_position: 3
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Análisis de la Timeline de Performance

La timeline (línea de tiempo) es el componente central del panel Performance, mostrando una representación visual de todas las actividades del navegador. Aprender a interpretarla es esencial para identificar y resolver problemas de rendimiento.

## Estructura de la Timeline

La timeline se divide en varias secciones horizontales que representan diferentes aspectos del rendimiento:

### 1. Vista general (Overview)

- Ubicada en la parte superior
- Muestra un resumen compacto de toda la actividad
- Permite seleccionar períodos específicos para un análisis más detallado
- Incluye gráficos de FPS, CPU y red

### 2. Marcadores (Frames)

- Muestra los fotogramas renderizados
- Los marcadores verdes indican un rendimiento fluido
- Los marcadores amarillos o rojos indican problemas de rendimiento (caídas de FPS)

### 3. Secciones principales

<DocsCards>
  <DocsCard
    header="Network"
    href="/performance/analizar-timeline#network"
  >
    <p>Muestra todas las solicitudes de red y sus tiempos.</p>
  </DocsCard>
  
  <DocsCard
    header="Main"
    href="/performance/analizar-timeline#main"
  >
    <p>Registra todas las actividades en el hilo principal, incluyendo JavaScript, estilo y layout.</p>
  </DocsCard>
  
  <DocsCard
    header="Compositor"
    href="/performance/analizar-timeline#compositor"
  >
    <p>Muestra las actividades del hilo de composición que combina capas para crear frames.</p>
  </DocsCard>
  
  <DocsCard
    header="GPU"
    href="/performance/analizar-timeline#gpu"
  >
    <p>Indica la actividad de la GPU durante el renderizado.</p>
  </DocsCard>
</DocsCards>

## Interpretación de la Timeline

### Código de colores

Las actividades en la timeline se distinguen por colores:

- **Amarillo**: JavaScript
- **Púrpura**: Estilo (Recalculate Style)
- **Azul**: Layout
- **Verde**: Paint
- **Verde oscuro**: Composite
- **Gris**: Idle (inactividad)

### Identificando problemas comunes

#### 1. Long Tasks

- Barras largas amarillas (>50ms) indican tareas de JavaScript que bloquean el hilo principal
- Busca estos bloques para identificar código JavaScript ineficiente
- Examina los detalles para ver la pila de llamadas (call stack)

#### 2. Cascadas de layout forzado

- Secuencias de purple-blue repetitivas (recalculate style → layout)
- Indican reflow forzado, donde el JavaScript lee propiedades que requieren cálculos de layout
- Optimiza el código para agrupar lecturas y escrituras DOM

#### 3. Paint storms

- Múltiples eventos de paint (verde) consecutivos
- Sugieren cambios frecuentes en elementos visuales
- Considera técnicas como GPU acceleration o will-change para reducir repintados

## Navegación y zoom

Para analizar secciones específicas:

1. Usa el área de overview para seleccionar un rango de tiempo
2. Amplía con la rueda del ratón o gestos de pinza
3. Navega arrastrando la vista mientras mantienes pulsado
4. Utiliza las teclas W, A, S, D para navegar (W/S para zoom, A/D para desplazamiento)

## Panel de detalles

Al seleccionar cualquier evento en la timeline:

1. Se muestra un panel de detalles en la parte inferior
2. El panel incluye:
   - Duración del evento
   - Pila de llamadas (call stack)
   - Ubicación en el código fuente
   - Eventos relacionados

## Filtrado y búsqueda

Para centrarse en tipos específicos de eventos:

1. Usa el campo de búsqueda en la parte superior
2. Filtra por:
   - Nombre de función
   - Categoría de evento
   - Duración (e.g., ">50ms")

## Análisis de métricas clave

En la parte superior del panel Performance, encontrarás resúmenes de métricas importantes:

- **FPS**: Frames por segundo (60 FPS es el objetivo ideal)
- **CPU**: Distribución del uso de CPU por categorías
- **NET**: Actividad de red durante la grabación

## Consejos para un análisis efectivo

- Enfócate en las barras más largas primero (principio de Pareto)
- Busca patrones repetitivos que indiquen problemas sistemáticos
- Compara grabaciones antes y después de optimizaciones
- Analiza específicamente las animaciones o interacciones con bajo FPS
- Examina la sincronización entre eventos de red y actividad del DOM

En la siguiente sección, profundizaremos en el análisis de Frames por Segundo (FPS) y cómo optimizar la fluidez visual de tu aplicación.