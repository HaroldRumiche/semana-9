---
id : optimizar-renderizado
sidebar_position: 7
---

# Optimizar el Proceso de Renderizado

El renderizado eficiente es crítico para el rendimiento de aplicaciones web modernas. El panel Performance permite identificar y resolver problemas en el pipeline de renderizado para lograr experiencias visuales fluidas y responsivas.

## Comprendiendo el Pipeline de Renderizado

El navegador sigue un proceso específico para renderizar contenido:

1. **JavaScript**: Ejecuta código JS que puede modificar el DOM
2. **Style**: Calcula qué reglas CSS se aplican a qué elementos
3. **Layout**: Calcula posición y tamaño de cada elemento
4. **Paint**: Rellena píxeles para cada elemento visual
5. **Composite**: Combina capas pintadas para mostrar en pantalla


## Identificando Problemas de Renderizado

### Visualización en el Panel Performance

Para identificar problemas de renderizado:

1. Graba una sesión de rendimiento durante una interacción problemática
2. Examina la sección "Frames" para ver qué frames toman más tiempo
3. Expande un frame lento para ver sus actividades en detalle
4. Observa el tiempo dedicado a cada fase (Layout, Paint, Composite)

### Señales de Problemas Comunes

| Fase | Señales de Problema | Visible en Performance como |
|------|---------------------|----------------------------|
| Layout | Layout forzado, múltiples layouts secuenciales | Barras púrpuras largas o frecuentes |
| Paint | Repintados frecuentes o de áreas grandes | Barras verdes frecuentes o largas |
| Composite | Muchas capas o cambios frecuentes | Actividad excesiva en threads de compositor |

## Técnicas de Optimización por Fase

### 1. Optimización de Layout

El layout (o reflow) recalcula geometrías y posiciones de elementos y es costoso cuando se desencadena frecuentemente.

**Problemas detectables**:
- Layout forzado: Cuando JavaScript lee propiedades que requieren cálculo actualizado de geometrías
- Layout thrashing: Múltiples lecturas/escrituras que causan recálculos repetidos

**Soluciones**:
```javascript
// Problema: Layout thrashing
for (let i = 0; i < items.length; i++) {
  items[i].style.width = items[i].offsetWidth + 10 + 'px'; // Lee, luego escribe
}

// Solución: Leer primero, escribir después
const widths = [];
for (let i = 0; i < items.length; i++) {
  widths[i] = items[i].offsetWidth; // Leer todo primero
}
for (let i = 0; i < items.length; i++) {
  items[i].style.width = widths[i] + 10 + 'px'; // Escribir después
}
```

**Mejores prácticas**:
- Modificar clases en el elemento raíz cuando sea posible
- Evitar cambiar estilos de muchos elementos individualmente
- Usar `requestAnimationFrame` para sincronizar cambios visuales
- Considerar `position: absolute/fixed` para elementos que cambian frecuentemente

### 2. Optimización de Paint

El paint es el proceso de rellenar píxeles y puede ser costoso con elementos complejos.

**Identificación en Performance**:
- Selecciona un evento de Paint y usa "Paint Profiler" para ver áreas repintadas

**Soluciones**:
- Promover elementos con animaciones a su propia capa:
  ```css
  .moving-element {
    transform: translateZ(0);
    will-change: transform;
  }
  ```
- Evitar propiedades que desencadenan paint completo (como `box-shadow`)
- Simplificar estilos para elementos complejos

### 3. Optimización de Composite

El compositor combina capas para crear la imagen final.

**Mejores prácticas**:
- Animar solo propiedades que el compositor puede manejar directamente:
  - `transform` (para movimiento, escala, rotación)
  - `opacity` (para fadeIn/fadeOut)
- Limitar número de capas (demasiadas capas consumen memoria)

## Casos de Estudio y Soluciones

### 1. Animaciones entrecortadas

**Síntoma**: FPS bajo durante animaciones
**Análisis en Performance**: 
- Buscar actividad de Layout durante la animación
- Comprobar si las animaciones usan propiedades no óptimas

**Solución**:
```css
/* Problema */
@keyframes move {
  from { left: 0; top: 0; }
  to { left: 100px; top: 100px; }
}

/* Solución */
@keyframes move {
  from { transform: translate(0, 0); }
  to { transform: translate(100px, 100px); }
}
```

### 2. Scroll lento

**Síntoma**: Caídas de FPS durante scroll
**Análisis**:
- Comprobar eventos scroll en la timeline
- Buscar layouts o paints frecuentes durante scroll

**Solución**:
- Implementar throttling en manejadores de scroll
- Pre-calcular layouts cuando sea posible
- Considerar virtualización para listas largas

```javascript
// Problema
window.addEventListener('scroll', updateElements);

// Solución
let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      updateElements();
      ticking = false;
    });
    ticking = true;
  }
});
```

## Herramientas Complementarias

### Paint Flashing

Para visualizar repintados mientras ocurren:

1. Abre DevTools > ... > More tools > Rendering
2. Activa "Paint Flashing"
3. Interactúa con la página para ver áreas que se repintan (destacadas en verde)

### Layers Panel

Para inspeccionar capas del compositor:

1. Abre DevTools > ... > More tools > Layers
2. Observa todas las capas creadas y su consumo de memoria
3. Identifica capas innecesarias que pueden ser optimizadas

## Flujo de Trabajo de Optimización

1. **Medir**: Establece una línea base de rendimiento de renderizado
2. **Identificar**: Usa el panel Performance para encontrar cuellos de botella
3. **Optimizar**: Aplica técnicas específicas para la fase problemática
4. **Validar**: Vuelve a medir para confirmar mejoras

Al dominar la optimización del proceso de renderizado, podrás crear interfaces más fluidas y responsivas que ofrezcan una excelente experiencia de usuario incluso en dispositivos de gama baja.