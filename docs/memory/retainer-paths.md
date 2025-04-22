---
id: retainer-paths
title: Análisis de Rutas de Retención
sidebar_position: 5
---

# Análisis de Rutas de Retención

Las rutas de retención (retainer paths) son cadenas de referencias que mantienen un objeto en memoria, impidiendo que sea recolectado por el garbage collector. Analizar estas rutas es crucial para identificar la causa raíz de las fugas de memoria.

## Fundamentos de las rutas de retención

Para entender las rutas de retención, es importante comprender:

- **Retainer**: Un objeto que mantiene una referencia a otro, impidiendo su liberación
- **Retaining path**: Secuencia de objetos que conectan las GC roots con un objeto específico
- **GC roots**: Objetos base desde los que el recolector de basura rastrea referencias
- **Strong reference**: Referencia que impide que un objeto sea liberado

## Acceso al análisis de rutas de retención

Para examinar las rutas de retención de un objeto:

1. Captura un heap snapshot
2. Localiza el objeto de interés (usando filtros o navegación)
3. Selecciona el objeto haciendo clic en él
4. En el panel inferior, selecciona la pestaña "Retainers"

## Interpretación de la vista de retainers

La vista de retainers muestra:

### Panel de retención

- **Object**: El objeto retenedor
- **Distance**: Distancia desde el objeto seleccionado
- **Dominador**: Si este objeto es el dominador inmediato
- **Path**: Descripción de la ruta desde el retenedor al objeto

### Tipos de nodos en la ruta

- **window**: El objeto global del navegador
- **document**: El documento DOM actual
- **(GC roots)**: Puntos de partida para el recolector de basura
- **(closure)**: Funciones que capturan variables del entorno
- **(array, string, number, etc.)**: Tipos de datos primitivos y estructuras

## Patrones comunes de retención problemática

Ciertos patrones aparecen frecuentemente en las fugas de memoria:

### Retención desde closures

```javascript
function createProblem() {
  const largeData = new Array(1000000).fill('x');
  return function() {
    // Esta closure retiene largeData en memoria
    console.log(largeData.length);
  };
}
const leak = createProblem();
```

En el snapshot, verás una cadena de retención que incluye "closure" → "largeData".

### Retención de elementos DOM eliminados

```javascript
let deletedNode;

function detachNode() {
  const node = document.createElement('div');
  document.body.appendChild(node);
  // Eliminamos del DOM pero mantenemos referencia
  deletedNode = node;
  document.body.removeChild(node);
}
```

El elemento mostrará "(detached)" pero seguirá en memoria con una ruta que incluye la variable global.

### Retención en event listeners

```javascript
function setupHandler() {
  const data = new Array(1000000).fill('x');
  document.getElementById('button').addEventListener('click', function() {
    console.log(data.length);
  });
}
```

La ruta mostrará una cadena desde el nodo DOM hasta el listener y el objeto data.

## Análisis sistemático de rutas de retención

Para identificar eficazmente la causa de una fuga:

### Método de seguimiento de rutas

1. Identifica objetos sospechosos (grandes o numerosos)
2. Selecciona uno de estos objetos
3. Analiza su ruta de retención hasta la raíz GC
4. Identifica el punto en la cadena donde no debería existir una referencia
5. Examina el código relacionado con ese punto

### Análisis de dominadores

1. Cambia a la vista "Dominators"
2. Encuentra objetos con gran "retained size"
3. Analiza sus rutas de retención
4. Identifica los dominadores clave que retienen grandes bloques de memoria

## Casos de estudio comunes

### Detectar event listeners persistentes

1. Busca objetos de tipo "EventListener" o "Event"
2. Analiza sus rutas para identificar elementos que retienen eventos
3. Verifica si estos elementos ya no deberían estar activos
4. En el código, asegúrate de usar `removeEventListener` donde sea necesario

### Analizar referencias circulares

1. Identifica objetos con referencias cruzadas
2. Las rutas de retención mostrarán patrones como A→B→C→A
3. Busca el punto donde se puede romper el ciclo
4. Implementa técnicas como WeakMap o referencias nulas para solucionar

### Identificar caches sin límites

1. Busca grandes colecciones (Arrays, Maps, Sets)
2. Analiza qué objeto los retiene
3. Verifica si ese objeto implementa algún mecanismo de caducidad o límite
4. Implementa estrategias como LRU cache para evitar crecimiento ilimitado

## Consejos avanzados

- **Filtrado inteligente**: Utiliza búsquedas como "detached" para encontrar nodos DOM desconectados
- **Anotación mental**: Mientras navegas por rutas complejas, toma notas de los puntos clave
- **Uso de WeakMap/WeakSet**: Para referencias que no deberían impedir la recolección de basura
- **Análisis de distancia**: Presta atención a objetos con distancias muy largas desde las raíces GC
- **Patrones de limpieza**: Implementa patrones como `dispose()` en componentes para limpiar referencias

En la siguiente sección, exploraremos la instrumentación de asignación para rastrear la creación de objetos en tiempo real.