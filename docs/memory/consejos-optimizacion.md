---
id: consejos-optimizacion
sidebar_position: 9
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Consejos de Optimización de Memoria

La optimización del uso de memoria es crucial para mantener aplicaciones web rápidas y eficientes, especialmente en dispositivos móviles o aplicaciones de larga duración. Esta guía proporciona estrategias prácticas para mejorar la gestión de memoria en tu código JavaScript.

## Principios fundamentales

Para una gestión eficiente de la memoria, ten en cuenta estos principios:

- **Crear solo lo necesario**: Minimiza la creación de objetos nuevos
- **Reutilizar cuando sea posible**: Aprovecha el reciclaje de objetos
- **Liberar cuando termine**: Elimina referencias a objetos que ya no se necesitan
- **Ámbito limitado**: Mantén los datos en el ámbito más reducido posible
- **Medir antes de optimizar**: Utiliza las herramientas de DevTools para identificar problemas reales

## Patrones de código optimizados

### Gestión adecuada de event listeners

```javascript
// Problema: Listener que nunca se elimina
element.addEventListener('click', onClickHandler);

// Solución: Almacenar referencia y eliminar cuando ya no se necesite
const onClickHandler = () => { /* ... */ };
element.addEventListener('click', onClickHandler);
// Cuando ya no sea necesario:
element.removeEventListener('click', onClickHandler);
```

### Evitar closures innecesarios

```javascript
// Problema: Closure que retiene datos grandes
function procesarDatos(datos) {
  // 'datos' puede ser muy grande
  return function() {
    console.log(datos.length); // Retiene todo 'datos'
  };
}

// Solución: Extraer solo lo necesario
function procesarDatos(datos) {
  const longitud = datos.length; // Extraer solo el valor necesario
  return function() {
    console.log(longitud); // No retiene 'datos' completo
  };
}
```

### Reutilización de objetos

```javascript
// Problema: Crear nuevos objetos en cada iteración
function actualizarPosiciones(elementos) {
  elementos.forEach(elemento => {
    const posicion = { x: elemento.offsetLeft, y: elemento.offsetTop };
    actualizarElemento(elemento, posicion);
  });
}

// Solución: Reutilizar un único objeto
function actualizarPosiciones(elementos) {
  const posicion = { x: 0, y: 0 }; // Objeto reutilizado
  elementos.forEach(elemento => {
    posicion.x = elemento.offsetLeft;
    posicion.y = elemento.offsetTop;
    actualizarElemento(elemento, posicion);
  });
}
```

## Gestión óptima de estructuras de datos

### Usar estructuras de datos adecuadas

- **Arrays**: Para datos secuenciales y de longitud variable
- **Sets**: Para colecciones de valores únicos con búsqueda rápida
- **Maps**: Para relaciones clave-valor con claves de cualquier tipo
- **TypedArrays**: Para datos numéricos grandes y operaciones binarias
- **WeakMap/WeakSet**: Para asociar datos a objetos sin evitar su recolección

### Ejemplo con WeakMap para metadatos

```javascript
// Problema: Añadir propiedades directamente a los nodos DOM
function configurarNodo(nodo) {
  nodo._datos = { /* datos específicos */ };
  // Si nodo se elimina del DOM, _datos permanecerá en memoria
}

// Solución: Usar WeakMap
const metadatos = new WeakMap();
function configurarNodo(nodo) {
  metadatos.set(nodo, { /* datos específicos */ });
  // Si nodo se elimina y no tiene otras referencias, 
  // los datos se recolectarán automáticamente
}
```

## Optimización de operaciones DOM

### Reducir manipulaciones DOM

- Minimiza las repaints y reflows utilizando fragmentos
- Modifica elementos desconectados del DOM
- Utiliza batching de operaciones DOM

```javascript
// Problema: Múltiples modificaciones del DOM
function agregarElementos(lista, items) {
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li); // Cada append provoca reflow
  });
}

// Solución: Usar DocumentFragment
function agregarElementos(lista, items) {
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });
  lista.appendChild(fragment); // Un solo reflow
}
```

### Desreferenciación correcta

```javascript
// Problema: Mantener referencias a elementos eliminados
let modalElement = document.getElementById('modal');
function cerrarModal() {
  modalElement.parentNode.removeChild(modalElement);
  // modalElement sigue referenciado y en memoria
}

// Solución: Desreferenciar explícitamente
function cerrarModal() {
  modalElement.parentNode.removeChild(modalElement);
  modalElement = null; // Permitir que se recolecte
}
```

## Manejo de recursos externos

### Liberar recursos de manera proactiva

```javascript
// Crear un worker
const worker = new Worker('procesador.js');
worker.postMessage(datos);

// Cuando ya no se necesite
worker.terminate();
```

### Gestión de timers

```javascript
// Problema: Timers no cancelados
const timer = setInterval(() => {
  actualizarDatos();
}, 1000);

// Solución: Cancelar cuando ya no se necesite
const timer = setInterval(() => {
  actualizarDatos();
}, 1000);

// Al desmontar o finalizar:
clearInterval(timer);
```

## Buenas prácticas con frameworks

### React

- Utiliza `useCallback` y `useMemo` para evitar recreaciones innecesarias
- Implementa `componentWillUnmount` o el retorno de `useEffect` para limpiar recursos
- Considera `React.memo` para evitar renderizados innecesarios

### Vue

- Utiliza `beforeDestroy` o `onUnmounted` para limpiar recursos
- Implementa correctamente `v-once` para contenido estático
- Desvincula event listeners y observables

### Angular

- Implementa `ngOnDestroy` para cancelar suscripciones
- Utiliza `ChangeDetectionStrategy.OnPush` cuando sea posible
- Aprovecha `async pipe` que maneja la limpieza automáticamente

## Lista de verificación de optimización

Para proyectos en producción, verifica:

- [ ] Event listeners se eliminan cuando los componentes se desmontan
- [ ] No hay crecimiento de memoria constante durante el uso normal
- [ ] Los objetos grandes se liberan cuando ya no son necesarios
- [ ] Las referencias circulares se manejan adecuadamente
- [ ] Se implementan límites en cachés y colecciones
- [ ] Se prueba la aplicación en condiciones de uso prolongado
- [ ] Se monitoriza el uso de memoria en entornos de producción

## Herramientas de monitoreo de producción

Para vigilar problemas de memoria en producción:

- Implementa métricas de uso de memoria mediante `performance.memory` (Chrome)
- Considera herramientas como Sentry, LogRocket o New Relic para monitoreo
- Establece alertas para incrementos anormales de memoria
- Captura instantáneas de memoria bajo demanda para análisis

Con estas estrategias, podrás mantener un uso eficiente de memoria en tus aplicaciones web, mejorando tanto el rendimiento como la estabilidad a largo plazo.