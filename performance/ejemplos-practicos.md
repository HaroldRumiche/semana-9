---
sidebar_label: 'Ejemplos Prácticos'
sidebar_position: 8
---

# Ejemplos Prácticos de Análisis de Rendimiento

Esta sección presenta casos de estudio reales y ejemplos prácticos para aplicar los conocimientos adquiridos sobre el panel Performance. A través de situaciones comunes, aprenderás a diagnosticar y solucionar problemas específicos de rendimiento.

## Caso 1: Optimización de Carga Inicial

### Escenario
Una página de comercio electrónico tarda más de 5 segundos en mostrar productos al usuario.

### Análisis con el Panel Performance

1. **Grabación inicial**:
   - Simular conexión 3G (en el dropdown Network)
   - Activar CPU throttling (4x slowdown)
   - Grabar carga de página desde navegación

2. **Observaciones clave**:

   - FCP ocurre a los 2.8s
   - LCP ocurre a los 4.5s
   - Gran actividad de JavaScript bloqueando el hilo principal

3. **Diagnóstico mediante Bottom-Up**:
   - JavaScript de un script de terceros (analytics) consume 1.2s
   - Múltiples peticiones de imágenes no optimizadas
   - CSS bloqueante en el `<head>`

### Soluciones implementadas

1. **Carga diferida de scripts no críticos**:
   ```html
   <!-- Antes -->
   <script src="analytics.js"></script>
   
   <!-- Después -->
   <script src="analytics.js" defer></script>
   ```

2. **Optimización de imágenes principales**:
   ```html
   <!-- Antes -->
   <img src="hero.jpg">
   
   <!-- Después -->
   <img src="hero.jpg" width="800" height="400" loading="eager" fetchpriority="high">
   <img src="secondary.jpg" loading="lazy">
   ```

3. **CSS crítico inline**:
   ```html
   <head>
     <style>
       /* CSS crítico para contenido above-the-fold */
     </style>
     <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
   </head>
   ```

### Resultados
- FCP mejorado a 1.4s (50% de mejora)
- LCP mejorado a 2.2s (51% de mejora)
- Tiempo para interactividad reducido en 40%

## Caso 2: Optimización de Lista de Desplazamiento

### Escenario
Una aplicación de feed social muestra caídas significativas de FPS durante el desplazamiento.

### Análisis con el Panel Performance

1. **Grabación del problema**:
   - Grabar mientras se hace scroll por la lista
   - Enfocar en secciones con caídas de FPS por debajo de 30

2. **Observaciones**:
   - Eventos de scroll causan múltiples layouts
   - Nuevos elementos siendo añadidos al DOM durante scroll
   - Imágenes causando layout shifts al cargarse

3. **Raíz del problema** (visto en Call Tree):
   - Función `updateVisibleItems()` llamada múltiples veces
   - Recalculo de alturas durante scroll
   - Carga no optimizada de imágenes

### Soluciones implementadas

1. **Throttling de eventos de scroll**:
   ```javascript
   // Antes
   document.addEventListener('scroll', updateVisibleItems);
   
   // Después
   document.addEventListener('scroll', _.throttle(updateVisibleItems, 100));
   ```

2. **Implementación de virtualización**:
   ```javascript
   function renderVisibleItems() {
     const visibleStart = Math.floor(scrollTop / itemHeight);
     const visibleEnd = Math.min(
       items.length - 1,
       Math.ceil((scrollTop + viewportHeight) / itemHeight)
     );
     
     // Solo renderizar elementos visibles y buffer
     const buffer = 5;
     for (let i = Math.max(0, visibleStart - buffer); 
          i <= Math.min(items.length - 1, visibleEnd + buffer); i++) {
       // Renderizar o reciclar elemento i
     }
   }
   ```

3. **Reservar espacio para imágenes**:
   ```css
   .image-container {
     aspect-ratio: 16/9;
     background: #f0f0f0; /* Placeholder */
   }
   ```

### Resultados
- FPS durante scroll mejorado de 25-30 a 55-60
- Uso de memoria reducido en 30%
- CLS reducido a 0.05 (excelente)

## Caso 3: Depuración de Animaciones

### Escenario
Una animación de transición entre páginas se ejecuta de forma entrecortada en dispositivos móviles.

### Análisis con el Panel Performance

1. **Configuración**:
   - CPU throttling 6x (para simular dispositivo de gama baja)
   - Activar Screenshots para correlacionar rendimiento visual

2. **Hallazgos**:
   - Múltiples eventos de Layout y Paint durante la animación
   - La animación utiliza propiedades `width`, `height` y `top`
   - JavaScript ejecutándose durante la animación

3. **Problema principal**:
   - Animación no optimizada para compositor
   - Scripts ejecutándose en paralelo con la animación

### Soluciones implementadas

1. **Optimización de propiedades animadas**:
   ```css
   /* Antes */
   @keyframes slide-in {
     from { left: -100%; opacity: 0; }
     to { left: 0; opacity: 1; }
   }
   
   /* Después */
   @keyframes slide-in {
     from { transform: translateX(-100%); opacity: 0; }
     to { transform: translateX(0); opacity: 1; }
   }
   ```

2. **Promoción a capa separada**:
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```

3. **Optimización de JavaScript**:
   ```javascript
   // Diferir cálculos no críticos hasta después de la animación
   element.addEventListener('animationend', performHeavyCalculations);
   ```

### Resultados
- FPS durante la animación mejorado de 15-20 a 58-60
- Eliminación total de Layout y Paint durante la animación
- Animación fluida incluso en dispositivos de gama baja

## Caso 4: Optimización de Interactividad en Formulario

### Escenario
Un formulario de registro muestra retrasos significativos al escribir en campos y cambiar entre ellos.

### Análisis con el Panel Performance

1. **Grabación del problema**:
   - Grabar mientras se escribe en diferentes campos
   - Enfocar en retrasos entre input y actualización visual

2. **Hallazgos clave**:
   - Eventos de validación ejecutados en cada pulsación de tecla
   - Re-renderizado de todo el formulario con cada cambio
   - Cálculos de layout forzados por lecturas de propiedades

### Soluciones implementadas

1. **Debounce en validación**:
   ```javascript
   // Antes
   inputField.addEventListener('input', validateField);
   
   // Después
   inputField.addEventListener('input', _.debounce(validateField, 300));
   ```

2. **Optimización de lecturas/escrituras DOM**:
   ```javascript
   // Antes - Causa layout thrashing
   fields.forEach(field => {
     const height = field.offsetHeight;
     field.style.height = (height + 5) + 'px';
   });
   
   // Después - Batch de lecturas, luego escrituras
   const heights = fields.map(field => field.offsetHeight);
   fields.forEach((field, i) => {
     field.style.height = (heights[i] + 5) + 'px';
   });
   ```

3. **Actualización selectiva**:
   ```javascript
   // Antes - Re-renderizar todo el formulario
   function updateForm() {
     renderEntireForm();
   }
   
   // Después - Actualizar solo los elementos necesarios
   function updateForm(changedFieldId) {
     const field = document.getElementById(changedFieldId);
     const dependentFields = getDependentFields(changedFieldId);
     updateFieldUI(field);
     dependentFields.forEach(updateFieldUI);
   }
   ```

### Resultados
- Tiempo de respuesta reducido de 300ms a &lt;50ms
- Eliminación de jank durante la escritura
- CPU utilization reducido en 70% durante interacción con formulario

## Caso 5: Optimización de Carga Progresiva de Datos

### Escenario
Una aplicación de dashboard carga y procesa un conjunto de datos grande antes de mostrar visualizaciones, causando una experiencia de carga deficiente.

### Análisis con el Panel Performance

1. **Grabación del problema**:
   - Tiempo hasta interactividad > 5s
   - Hilo principal bloqueado durante procesamiento de datos
   - Visualizaciones aparecen todas al mismo tiempo

2. **Análisis en detalle**:
   - JSON parsing consume 800ms
   - Procesamiento de datos toma 2.3s
   - Creación de múltiples gráficos en secuencia

### Soluciones implementadas

1. **Carga progresiva y priorizada**:
   ```javascript
   // Antes
   async function loadDashboard() {
     const data = await fetchAllData();
     processAllData(data);
     renderAllCharts();
   }
   
   // Después
   async function loadDashboard() {
     // Cargar y mostrar datos críticos primero
     const criticalData = await fetchCriticalData();
     renderPrimaryChart(criticalData);
     
     // Cargar el resto progresivamente
     requestIdleCallback(async () => {
       const secondaryData = await fetchSecondaryData();
       renderSecondaryCharts(secondaryData);
       
       requestIdleCallback(() => {
         loadDetailData();
       });
     });
   }
   ```

2. **Procesamiento en Web Worker**:
   ```javascript
   // En el hilo principal
   const dataWorker = new Worker('data-processor.js');
   
   dataWorker.postMessage({
     type: 'PROCESS_DATA',
     rawData: jsonData
   });
   
   dataWorker.addEventListener('message', event => {
     const { processedData } = event.data;
     renderCharts(processedData);
   });
   
   // En data-processor.js (Web Worker)
   self.addEventListener('message', event => {
     const { type, rawData } = event.data;
     
     if (type === 'PROCESS_DATA') {
       const processedData = heavyDataProcessing(rawData);
       self.postMessage({ processedData });
     }
   });
   ```

3. **Feedback visual durante la carga**:
   ```javascript
   function initializeDashboard() {
     // Mostrar esqueletos o placeholders inmediatamente
     showChartSkeletons();
     
     // Cargar datos con indicadores de progreso
     loadDataWithProgress(progress => {
       updateLoadingIndicator(progress);
     });
   }
   ```

### Resultados
- Primera visualización visible en 1.2s (mejora del 76%)
- Dashboard completamente interactivo en 2.5s
- CPU main thread usage reducido en 65%

## Herramientas para Reportes de Rendimiento

Para documentar y compartir tus optimizaciones:

### 1. Exportar grabaciones del panel Performance

1. Una vez completada la grabación, haz clic en "Save profile..."
2. Guarda el archivo JSON para compartir o analizar más tarde
3. Para importar: Arrastra el archivo a la pantalla del panel Performance

### 2. Documentar mejoras con capturas comparativas

Crea una tabla de resultados con métricas "antes y después":

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| FCP     | 2.8s  | 1.4s    | 50%    |
| LCP     | 4.5s  | 2.2s    | 51%    |
| TTI     | 5.2s  | 3.1s    | 40%    |
| FPS durante scroll | 25 | 58 | 132% |

### 3. Crear lista de verificación de optimizaciones

Documenta las técnicas aplicadas para futuras referencias:

- [ ] Optimización de carga de recursos críticos
- [ ] Diferimiento de JavaScript no esencial
- [ ] Promoción adecuada de elementos a capas
- [ ] Implementación de virtualización para listas largas
- [ ] Uso de propiedades óptimas para animaciones
- [ ] Implementación de debounce/throttle para eventos frecuentes

## Conclusión

Estos ejemplos prácticos demuestran cómo aplicar el análisis de rendimiento a situaciones reales. Al dominar estas técnicas podrás:

1. Identificar cuellos de botella específicos en tu aplicación
2. Seleccionar las técnicas de optimización más efectivas
3. Validar las mejoras con métricas cuantificables
4. Documentar el proceso para establecer mejores prácticas

La optimización de rendimiento no es un evento único sino un proceso continuo. El panel Performance es tu herramienta más valiosa para mantener las aplicaciones web rápidas y responsivas en todas las condiciones.