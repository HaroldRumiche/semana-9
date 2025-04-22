---
id : indexeddb
sidebar_position: 5
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# IndexedDB en el Inspector de Elementos

IndexedDB es una API de bajo nivel para el almacenamiento cliente de grandes cantidades de datos estructurados, incluyendo archivos y blobs. A diferencia de LocalStorage y SessionStorage, IndexedDB ofrece capacidades de búsqueda avanzadas y puede manejar volúmenes de datos significativamente mayores.

## Características principales de IndexedDB

- **Alta capacidad**: Permite almacenar cantidades de datos mucho mayores que LocalStorage (hasta gigabytes)
- **API asíncrona**: No bloquea el hilo principal durante operaciones
- **Soporte para transacciones**: Garantiza la integridad de los datos
- **Almacenamiento estructurado**: Organiza datos en bases de datos, almacenes de objetos e índices
- **Búsqueda por índices**: Permite consultas eficientes por diferentes campos
- **Soporte para tipos de datos complejos**: Objetos, arrays, blobs, fechas, etc.

## Acceso al panel de IndexedDB

Para inspeccionar el contenido de IndexedDB:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application" (Chrome/Edge) o "Storage" (Firefox)
3. En el panel izquierdo, expande "IndexedDB" para ver las bases de datos disponibles

![Panel de IndexedDB](https://via.placeholder.com/800x400)

## Estructura jerárquica de IndexedDB

En el panel de IndexedDB verás una estructura jerárquica:

1. **Base de datos**: El contenedor principal, asociado a un origen específico
2. **Object stores** (Almacenes de objetos): Similar a tablas en bases de datos relacionales
3. **Índices**: Campos indexados para búsquedas optimizadas
4. **Datos**: Los registros almacenados en cada object store

## Navegación por la estructura de IndexedDB

Para explorar los datos:

1. Expande una base de datos para ver sus object stores
2. Haz clic en un object store para ver sus contenidos en el panel derecho
3. Utiliza los controles de navegación para explorar registros e índices

![Estructura de IndexedDB](https://via.placeholder.com/700x500)

## Visualización de datos

El panel de IndexedDB ofrece dos vistas principales:

### Vista de tabla
- Muestra registros en formato tabular
- Columnas basadas en las propiedades de los objetos
- Útil para conjuntos de datos homogéneos

### Vista de árbol
- Muestra cada registro como un objeto expandible
- Permite explorar objetos anidados
- Mejor para estructuras de datos complejas

Para cambiar entre vistas, busca los iconos de vista de tabla/árbol en la barra de herramientas (la ubicación exacta depende del navegador).

## Inspección de metadatos

Para ver los metadatos de IndexedDB:

1. Selecciona una base de datos en el panel izquierdo
2. Observa el panel de información que muestra:
   - Nombre y versión de la base de datos
   - Tamaño aproximado en disco
   - Lista de object stores

Para detalles de un object store:
1. Selecciona el object store
2. Observa información sobre:
   - Nombre del object store
   - Configuración de clave (keyPath o autoIncrement)
   - Índices disponibles

## Manipulación de datos en IndexedDB

### Actualización de valores

Para editar un registro existente:

1. Selecciona el registro en la vista de datos
2. Haz doble clic en el campo que deseas modificar (en navegadores que lo soporten)
3. Edita el valor y confirma

Nota: No todos los navegadores permiten la edición directa de valores en IndexedDB desde las herramientas de desarrollo.

### Eliminación de datos

Para eliminar registros o estructuras:

1. Selecciona el elemento a eliminar (registro, object store o base de datos)
2. Haz clic derecho y selecciona la opción "Delete" o "Delete Database"
3. Confirma la acción si se solicita

### Creación y modificación mediante consola

Debido a las limitaciones de la interfaz gráfica, a menudo es más eficiente usar la consola para manipular IndexedDB:

```javascript
// Abrir conexión a la base de datos
const request = indexedDB.open('miBaseDeDatos', 1);

// Manipular datos en el callback de éxito
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(['miAlmacen'], 'readwrite');
  const store = transaction.objectStore('miAlmacen');
  
  // Añadir o modificar un registro
  store.put({ id: 1, nombre: 'Nuevo valor', fecha: new Date() });
  
  // Eliminar un registro
  store.delete(2);
};
```

## Depuración común con IndexedDB

### Verificar la estructura de la base de datos

Si la aplicación no está funcionando correctamente:

1. Comprueba que la base de datos existe y tiene la versión esperada
2. Verifica que todos los object stores necesarios están presentes
3. Asegúrate de que los índices están configurados correctamente

### Inspeccionar registros específicos

Para encontrar un registro específico:

1. Selecciona el object store relevante
2. Utiliza la función de búsqueda/filtrado en la parte superior de la vista de datos
3. Si el registro tiene un índice, puedes utilizarlo para búsquedas más eficientes

También puedes utilizar la consola para búsquedas más específicas:

```javascript
// Buscar un registro por su clave primaria
const request = indexedDB.open('miBaseDeDatos');
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(['miAlmacen']);
  const store = transaction.objectStore('miAlmacen');
  
  const getRequest = store.get(5); // Buscar el registro con clave primaria = 5
  getRequest.onsuccess = function() {
    console.log('Registro encontrado:', getRequest.result);
  };
};
```

### Comprobar transacciones y eventos

Si las operaciones de IndexedDB no se completan correctamente:

1. Utiliza el panel "Network" para ver si hay solicitudes fallidas
2. Añade puntos de interrupción en los manejadores de eventos (`onsuccess`, `onerror`, `oncomplete`)
3. Comprueba los registros de errores en la consola

### Depurar problemas de versión

Los problemas de versión son comunes con IndexedDB:

1. Verifica la versión actual de la base de datos en el panel de IndexedDB
2. Asegúrate de que el código está utilizando la versión correcta en `indexedDB.open()`
3. Comprueba que tu manejador `onupgradeneeded` está correctamente implementado

```javascript
// Depurar problema de versión
const request = indexedDB.open('miBaseDeDatos');
request.onsuccess = function(event) {
  const db = event.target.result;
  console.log('Versión actual de la BD:', db.version);
};
```

## Herramientas avanzadas para IndexedDB

### Exportación e importación de datos

Algunos navegadores permiten exportar los datos para análisis posterior:

1. En Chrome/Edge: Haz clic derecho en la base de datos y busca una opción como "Export"
2. El formato de exportación puede variar según el navegador

Para bases de datos grandes, es mejor usar código personalizado:

```javascript
// Exportar datos a JSON
function exportarAlmacen(nombreBD, nombreAlmacen) {
  const request = indexedDB.open(nombreBD);
  request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction([nombreAlmacen]);
    const store = transaction.objectStore(nombreAlmacen);
    const getAllRequest = store.getAll();
    
    getAllRequest.onsuccess = function() {
      const datos = getAllRequest.result;
      console.log(JSON.stringify(datos, null, 2));
      // Aquí podrías descargar los datos como archivo
    };
  };
}
```

### Monitorización de cambios

Para depurar problemas complejos, puedes monitorear los cambios en IndexedDB:

1. Establece puntos de interrupción en operaciones de IndexedDB
2. Utiliza la consola para registrar todas las operaciones

```javascript
// Ejemplo simple de monitoreo
(function() {
  const originalOpen = indexedDB.open;
  indexedDB.open = function(name, version) {
    console.log(`IndexedDB: Abriendo ${name} v${version}`);
    return originalOpen.apply(this, arguments);
  };
})();
```

## Casos de uso comunes para depuración

### Aplicaciones offline-first

Verifica que los datos se están almacenando correctamente para uso sin conexión:
- Comprueba que todos los recursos necesarios están en IndexedDB
- Verifica la sincronización cuando la conexión se restablece

### Problemas de rendimiento

Si la aplicación es lenta al interactuar con IndexedDB:
- Verifica el tamaño total de la base de datos
- Comprueba si hay índices adecuados para las consultas frecuentes
- Examina si las transacciones se están usando eficientemente

### Alcance del límite de almacenamiento

Si la aplicación recibe errores de cuota:
1. Verifica el tamaño actual de la base de datos
2. Comprueba la configuración de almacenamiento del navegador
3. Implementa una estrategia de limpieza para datos antiguos

## Limitaciones y consideraciones

- **Depuración entre navegadores**: Las herramientas de desarrollo para IndexedDB varían significativamente entre navegadores
- **Edición de datos**: No todos los navegadores permiten editar directamente los datos de IndexedDB
- **Visualización de blobs/archivos**: Puede ser limitada para archivos grandes
- **Rendimiento**: La inspección de bases de datos muy grandes puede ralentizar las herramientas de desarrollo

## Consejos para desarrolladores

- Utiliza nombres descriptivos para bases de datos y object stores para facilitar la depuración
- Implementa versiones de base de datos incrementales con migraciones claras
- Considera usar una biblioteca wrapper para IndexedDB (como Dexie.js o idb) que simplifique el código y la depuración
- Mantén un esquema de base de datos actualizado como referencia durante la depuración
- Usa transacciones de solo lectura para consultas para mejorar el rendimiento

El panel de IndexedDB en el inspector de elementos es una herramienta poderosa para depurar aplicaciones web que requieren almacenamiento estructurado a gran escala, especialmente para aplicaciones que necesitan funcionar sin conexión o manejar grandes volúmenes de datos del lado del cliente.