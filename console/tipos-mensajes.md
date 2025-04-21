---
sidebar_label: 'Tipos de Mensajes'
sidebar_position: 3
---

# Tipos de Mensajes en la Consola

La consola del navegador muestra diferentes tipos de mensajes, cada uno con un propósito específico, formato visual y nivel de severidad. Conocer estos tipos te permitirá depurar de manera más efectiva y comunicar información de forma adecuada en tus aplicaciones.

## Mensajes estándar

La API `console` ofrece varios métodos para mostrar diferentes tipos de mensajes:

### console.log()

El método más común para mostrar información general:

```javascript
console.log('Usuario autenticado');
console.log('Datos cargados:', datosUsuario);
```

Características:
- Aparece en texto normal (generalmente negro o blanco según el tema)
- Permite múltiples argumentos separados por coma
- Útil para mensajes informativos sin énfasis especial

### console.info()

Similar a `log()` pero destinado a información destacada:

```javascript
console.info('Versión 2.3.1 cargada correctamente');
```

Características:
- En muchos navegadores aparece con un ícono ℹ️ (azul)
- Semánticamente indica información importante pero no crítica
- Filtrable mediante la opción "Info" en los controles de la consola

### console.warn()

Para advertencias y alertas no críticas:

```javascript
console.warn('La API está obsoleta, se eliminará en la próxima versión');
```

Características:
- Aparece en amarillo con ícono ⚠️
- Indica problemas potenciales que no impiden la ejecución
- Filtrable mediante la opción "Warnings"

### console.error()

Para errores y excepciones:

```javascript
console.error('Error al cargar el módulo', error);
```

Características:
- Aparece en rojo con ícono ❌
- Incluye automáticamente el stack trace si se pasa un objeto Error
- Indica problemas críticos que necesitan atención inmediata
- Filtrable mediante la opción "Errors"

### console.debug()

Para información de depuración detallada:

```javascript
console.debug('Valor intermedio:', valor);
```

Características:
- Similar a `log()` pero con menor nivel de prioridad
- Útil para información que solo es relevante durante la depuración
- A menudo oculto por defecto en producción

## Mensajes con formato avanzado

### console.table()

Muestra datos tabulares de forma estructurada:

```javascript
console.table([
  { nombre: 'Ana', edad: 28, rol: 'Desarrolladora' },
  { nombre: 'Juan', edad: 32, rol: 'Diseñador' }
]);
```

Características:
- Formatea arrays y objetos como tablas navegables
- Permite ordenar por columnas
- Facilita la visualización de conjuntos de datos estructurados

### console.dir()

Muestra una representación interactiva de las propiedades de un objeto:

```javascript
console.dir(document.body);
```

Características:
- Muestra la estructura completa del objeto de forma expandible
- Ideal para explorar objetos DOM complejos
- Revela propiedades no enumerables y prototipos

### Estilos personalizados con %c

Permite aplicar estilos CSS a los mensajes:

```javascript
console.log(
  '%cAtención! %cEsta es una sección importante',
  'color: red; font-size: 20px; font-weight: bold',
  'color: blue; font-style: italic'
);
```

Características:
- Usa el marcador `%c` seguido de una cadena CSS
- Permite múltiples estilos en el mismo mensaje
- Útil para destacar información crítica o crear separadores visuales

## Agrupación de mensajes

### console.group() y console.groupEnd()

Agrupa mensajes relacionados de forma jerárquica:

```javascript
console.group('Proceso de autenticación');
console.log('Validando credenciales...');
console.log('Generando token...');
console.groupCollapsed('Detalles del token');
console.log('Tipo: JWT');
console.log('Caducidad: 24h');
console.groupEnd();
console.log('Autenticación completada');
console.groupEnd();
```

Características:
- `group()` inicia un grupo expandido
- `groupCollapsed()` inicia un grupo contraído
- `groupEnd()` cierra el grupo actual
- Los grupos pueden anidarse para representar jerarquías

## Medición y rendimiento

### console.time() y console.timeEnd()

Mide el tiempo transcurrido entre dos puntos:

```javascript
console.time('tiempo-carga');
// Operación que queremos medir
console.timeEnd('tiempo-carga'); // Muestra: tiempo-carga: 1234ms
```

Características:
- Requiere un identificador único como parámetro
- Muestra el tiempo en milisegundos
- Útil para análisis básicos de rendimiento

### console.count()

Cuenta el número de veces que se ejecuta una sección:

```javascript
function procesarItem(item) {
  console.count('Items procesados');
  // Lógica del procesamiento
}
```

Características:
- Incrementa y muestra un contador con cada llamada
- Acepta una etiqueta como parámetro
- `console.countReset('etiqueta')` reinicia el contador

## Aserciones y trazas

### console.assert()

Muestra un error cuando la condición evaluada es falsa:

```javascript
console.assert(respuesta.status === 200, 'La API no respondió correctamente', respuesta);
```

Características:
- No hace nada si la condición es verdadera
- Genera un error (sin interrumpir la ejecución) si es falsa
- Útil para verificaciones durante el desarrollo

### console.trace()

Muestra la pila de llamadas hasta el punto actual:

```javascript
function funcionA() {
  funcionB();
}
function funcionB() {
  console.trace('Traza de ejecución');
}
```

Características:
- Muestra la secuencia de llamadas a funciones
- Incluye números de línea y archivos
- Útil para entender el flujo de ejecución

## Mensajes del sistema

Además de los mensajes generados por `console`, la consola muestra:

### Errores de JavaScript

```
Uncaught TypeError: Cannot read property 'length' of undefined
```

Características:
- Aparecen automáticamente al producirse excepciones no capturadas
- Incluyen el tipo de error, mensaje y ubicación
- Ofrecen stack trace expandible

### Advertencias del navegador

```
[Deprecation] 'window.webkitStorageInfo' is deprecated. Please use 'navigator.storage' instead.
```

Características:
- Generadas por el navegador al detectar prácticas desaconsejadas
- Informan sobre APIs obsoletas o problemas de seguridad
- A menudo incluyen enlaces a documentación

### Mensajes de red

```
Failed to load resource: the server responded with a status of 404 (Not Found)
```

Características:
- Relacionados con solicitudes HTTP fallidas
- Muestran códigos de estado y errores de carga
- Vinculados al panel Network para más detalles

Dominar los diferentes tipos de mensajes de la consola te permitirá implementar estrategias de logging efectivas y mejorar significativamente tu capacidad para depurar aplicaciones web.