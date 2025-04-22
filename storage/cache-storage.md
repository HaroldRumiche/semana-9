---
id : cache-storage
sidebar_position: 6
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Cache Storage en el Inspector de Elementos

Cache Storage es una API moderna que forma parte de la tecnología de Service Workers, diseñada específicamente para almacenar respuestas de red. Es un componente esencial para crear aplicaciones web progresivas (PWAs) que funcionen offline y proporcionen una experiencia de usuario mejorada incluso con conexiones lentas o inestables.

## Características principales de Cache Storage

- **Almacenamiento de respuestas HTTP**: Guarda pares de solicitud-respuesta completos
- **API asíncrona**: No bloquea el hilo principal durante las operaciones
- **Control granular**: Permite definir estrategias personalizadas de almacenamiento en caché
- **Integración con Service Workers**: Complementa la funcionalidad offline de las PWAs
- **Sin límite de tiempo**: Las respuestas persisten hasta que son eliminadas explícitamente
- **Espacio independiente**: No comparte límites con otras APIs de almacenamiento

## Acceso al panel de Cache Storage

Para inspeccionar el contenido de Cache Storage:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application" (Chrome/Edge) o "Storage" (Firefox)
3. En el panel izquierdo, expande "Cache Storage" para ver las cachés disponibles

![Panel de Cache Storage](https://via.placeholder.com/800x400)

## Estructura de Cache Storage

En el panel de Cache Storage verás:

1. **Cachés**: Contenedores principales identificados por nombre (como "static-assets-v1" o "api-responses")
2. **Entradas**: Pares de solicitud-respuesta almacenados en cada caché

## Navegación y visualización de Cache Storage

Para explorar el contenido de Cache Storage:

1. Expande Cache Storage en el panel izquierdo
2. Selecciona una caché específica para ver sus entradas en el panel derecho
3. Cada entrada muestra:
   - URL de la solicitud
   - Método HTTP
   - Estado de la respuesta
   - Tipo de contenido

Para ver detalles adicionales de una entrada:

1. Selecciona la entrada específica
2. El panel de detalles mostrará:
   - Headers de solicitud y respuesta
   - Vista previa del contenido (para tipos compatibles)
   - Tamaño y tiempo de almacenamiento

## Manipulación de Cache Storage

### Crear nuevas cachés

Normalmente, las cachés se crean mediante código JavaScript:

```javascript
// Crear o abrir una caché
caches.open('mi-cache-v1').then(cache => {
  console.log('Caché creada/abierta');
});
```

Algunos navegadores permiten crear cachés desde la interfaz de las herramientas de desarrollo, pero esta funcionalidad puede variar.

### Añadir entradas a la caché

Las entradas se añaden principalmente mediante código:

```javascript
caches.open('mi-cache-v1').then(cache => {
  return cache.add('/estilos/main.css');
  // O añadir múltiples recursos
  // return cache.addAll(['/index.html', '/estilos/main.css', '/scripts/app.js']);
});
```

### Eliminar entradas y cachés

Para eliminar una entrada individual:

1. Selecciona la entrada que deseas eliminar
2. Haz clic derecho y selecciona "Delete" o busca el botón de eliminación en la interfaz

Para eliminar una caché completa:

1. Selecciona la caché en el panel izquierdo
2. Haz clic derecho y selecciona "Delete Cache" o el equivalente en tu navegador

También puedes utilizar el botón "Clear Storage" que normalmente se encuentra en la parte superior del panel Application/Storage para eliminar todos los datos de almacenamiento, incluido Cache Storage.

Desde código:

```javascript
// Eliminar una entrada específica
caches.open('mi-cache-v1').then(cache => {
  cache.delete('/recursos/obsoleto.jpg');
});

// Eliminar una caché completa
caches.delete('mi-cache-v1');
```

## Casos de uso comunes para depuración

### Verificar recursos almacenados para modo offline

Para comprobar si tu aplicación tiene los recursos necesarios para funcionar sin conexión:

1. Examina la caché que contiene los recursos estáticos (HTML, CSS, JS, imágenes)
2. Verifica que todos los archivos críticos estén presentes
3. Comprueba sus respuestas para asegurarte de que se han almacenado correctamente (código 200)

### Diagnosticar problemas de actualización de contenido

Si los usuarios no ven contenido actualizado:

1. Busca entradas obsoletas en Cache Storage
2. Verifica las estrategias de actualización de caché en tu Service Worker
3. Comprueba la versión de la caché (muchas aplicaciones añaden un sufijo de versión al nombre de la caché)

```javascript
// Ejemplo de estrategia de versiones de caché
const CACHE_VERSION = 'v2';
const CACHE_NAME = `static-assets-${CACHE_VERSION}`;

// Eliminar cachés antiguas en la activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName.startsWith('static-assets-') && cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

### Inspeccionar respuestas de API en caché

Para depurar problemas relacionados con datos de API:

1. Busca la caché que almacena respuestas de API
2. Examina las respuestas para verificar que contienen los datos correctos
3. Comprueba las cabeceras HTTP para entender políticas de caché y expiración

## Estrategias comunes de Cache Storage

El panel de Cache Storage te permite verificar diferentes estrategias de caché:

### Cache First (Caché primero)
- Busca primero en la caché
- Recurre a la red solo si no está en caché
- Verifica que los recursos críticos estén almacenados correctamente

### Network First (Red primero)
- Intenta obtener la última versión de la red
- Utiliza la caché solo como respaldo
- Comprueba que las versiones en caché no están demasiado desactualizadas

### Stale While Revalidate
- Sirve la versión en caché (incluso si está "obsoleta")
- Actualiza la caché en segundo plano
- Verifica que tanto las respuestas en caché como las actualizaciones funcionan

### Cache Only / Network Only
- Exclusivamente caché o exclusivamente red
- Útil para recursos estáticos (cache only) o datos críticos (network only)

## Depuración avanzada de Cache Storage

### Combinación con otras herramientas

Para una depuración más efectiva, combina Cache Storage con:

1. **Panel Network**:
   - Activa "Disable cache" para ver solicitudes sin caché
   - Observa el header `X-From-Service-Worker` en respuestas provenientes del Service Worker

2. **Panel Application > Service Workers**:
   - Verifica el estado de tus Service Workers
   - Usa "Update on reload" para forzar actualizaciones
   - Observa los registros de consola del Service Worker

### Filtrado y búsqueda

Para encontrar recursos específicos:

1. Utiliza el campo de búsqueda en la parte superior del panel de Cache Storage
2. Filtra por tipo de recurso o parte de la URL
3. Examina los recursos por orden de URL para encontrar patrones o problemas

### Comparación con solicitudes de red

Para verificar si una respuesta proviene de Cache Storage:

1. Abre el panel Network
2. Realiza la acción que debería usar recursos en caché
3. Busca "from ServiceWorker" o "from cache" en la columna "Size" o "Source"

## Limitaciones y consideraciones

- **Acceso solo a cachés activas**: Solo puedes inspeccionar cachés del origen actual
- **Sin visualización de blobs grandes**: Puede haber limitaciones al mostrar imágenes o archivos grandes
- **Sincronización**: Los cambios realizados mediante código no siempre se reflejan inmediatamente en la interfaz
- **Compatibilidad entre navegadores**: Las herramientas varían significativamente entre navegadores

## Consejos para desarrolladores

- Utiliza nombres descriptivos para tus cachés, idealmente con números de versión (ej: "static-assets-v1")
- Organiza los recursos en cachés separadas según su tipo o estrategia de caché
- Implementa una estrategia de limpieza para eliminar cachés obsoletas
- Considera limitar el tamaño total de tus cachés para evitar problemas de almacenamiento
- Utiliza las herramientas de desarrollador para verificar regularmente el contenido de tus cachés

El panel de Cache Storage en el inspector de elementos es esencial para desarrollar y depurar aplicaciones web progresivas que ofrezcan una experiencia offline fiable y un rendimiento optimizado incluso en condiciones de red variables.