---
id : analizar-lentitud
sidebar_position: 6
---

# Analizar Causas de Lentitud

El análisis de las causas de lentitud es una habilidad fundamental para cualquier desarrollador web. El panel Performance proporciona herramientas específicas para identificar y diagnosticar problemas que afectan la velocidad y capacidad de respuesta de tu aplicación.

## Identificación de cuellos de botella

Los cuellos de botella suelen aparecer en áreas específicas que el panel Performance ayuda a identificar:

### 1. Bloqueo del hilo principal

El hilo principal es responsable de la mayoría de tareas del navegador, incluyendo JavaScript, styling, layout y paint.

**Cómo identificarlo**:
- Observa la sección "Main" en la grabación de Performance
- Busca barras largas de color que indican tareas que tardan más de 50ms
- Presta atención a las áreas rojas en la parte superior del gráfico FPS

**Causas comunes**:
- JavaScript intensivo o ineficiente
- Operaciones de layout forzado (reflow)
- Manipulación excesiva del DOM
- Event handlers pesados

### 2. Cascadas de renderizado ineficientes

**Cómo identificarlo**:
- En la vista de cascada, busca patrones repetitivos de actividades Layout → Paint → Composite
- Identifica múltiples operaciones de layout causadas por cambios incrementales

### 3. Uso excesivo de CPU

**Cómo identificarlo**:
- Observa el gráfico de CPU en la parte superior del panel
- Uso de CPU cercano al 100% durante períodos prolongados indica sobrecarga

## Análisis por categorías

### Problemas de JavaScript

1. **Tareas largas**
   - **Identificación**: Bloques JavaScript de más de 50ms en el hilo principal
   - **Solución**: Divide tareas grandes usando `setTimeout`, `requestAnimationFrame` o Web Workers

2. **Garbage Collection frecuente**
   - **Identificación**: Busca marcadores de "GC" en la timeline
   - **Solución**: Reduce creación de objetos, reutiliza objetos cuando sea posible

### Problemas de renderizado

1. **Layout Thrashing (trashing)**
   - **Identificación**: Patrones de lectura/escritura de propiedades que causan múltiples recálculos de layout
   - **Solución**: Agrupa lecturas y escrituras DOM, usa `requestAnimationFrame` para sincronizar cambios

2. **Paint áreas grandes**
   - **Identificación**: Eventos de paint que cubren áreas extensas (visibles en Paint Profiler)
   - **Solución**: Usa capas para aislar elementos animados, evita cambiar propiedades que desencadenan paint completo

## Herramientas de análisis avanzado

### Bottom-Up View

La vista Bottom-Up muestra funciones ordenadas por tiempo de ejecución:

1. Haz clic en la pestaña "Bottom-Up" en la sección inferior
2. Ordena por "Self Time" o "Total Time"
3. Identifica las funciones más costosas en términos de rendimiento

### Call Tree

La vista Call Tree muestra la pila de llamadas y tiempo de ejecución:

1. Haz clic en la pestaña "Call Tree"
2. Expande las llamadas para ver cómo las funciones se invocan entre sí
3. Identifica caminos que consumen más tiempo

### JavaScript Profiler

Para análisis detallado de JavaScript:

1. En la sección "JavaScript Profiler", activa la casilla antes de grabar
2. Analiza tiempos de ejecución por función y ubicación en el código

## Proceso sistemático de análisis

Para diagnosticar problemas de rendimiento eficazmente:

1. **Identifica el síntoma**: Lentitud al cargar, animaciones entrecortadas, retrasos en respuesta
2. **Correlaciona con timeline**: Ubica dónde ocurre el problema en la grabación
3. **Analiza actividades**: Examina qué sucede durante ese período
4. **Profundiza en detalles**: Usa vistas Bottom-Up o Call Tree para encontrar la causa raíz
5. **Valida la solución**: Implementa cambios y vuelve a medir para confirmar la mejora

## Problemas comunes y soluciones

| Problema | Síntomas | Solución |
|----------|----------|----------|
| JS bloqueante | DCL retrasado, interactividad reducida | Diferir scripts no críticos, dividir en chunks |
| Layout forzado | Múltiples recálculos de layout en secuencia | Agrupar lecturas/escrituras DOM |
| Memoria excesiva | GC frecuente, rendimiento degradado con el tiempo | Investigar memory leaks, limitar cache |
| Assets grandes | Tiempo de carga inicial largo | Optimizar imágenes, implementar lazy loading |
| Event handlers pesados | Lentitud en respuesta a interacciones | Implementar debouncing/throttling |

## Ejercicio práctico de diagnóstico

1. Graba un perfil de rendimiento en tu aplicación
2. Identifica la sección con FPS más bajos
3. Examina qué tareas están ocurriendo en ese momento
4. Usa la vista Bottom-Up para encontrar las funciones más costosas
5. Implementa una optimización específica para ese problema

Al dominar el análisis de causas de lentitud con el panel Performance, podrás identificar sistemáticamente los problemas de rendimiento y aplicar soluciones efectivas para mejorar la experiencia del usuario.