---
id : cache
sidebar_position: 4
---

# Cache Storage

Cache Storage es una API que permite a los Service Workers y aplicaciones web almacenar pares de solicitud/respuesta HTTP para su uso posterior, especialmente en escenarios offline o con conexiones lentas.

## Acceso al panel de Cache Storage

Para inspeccionar y administrar los cachés:

1. Abre DevTools (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application"
3. Expande la sección "Cache Storage" en el panel de almacenamiento

## Estructura y organización

Cache Storage está organizado en:

- **Cachés**: Contenedores nombrados que agrupan recursos relacionados
- **Entradas**: Pares de solicitud/respuesta almacenados dentro de cada caché

### Interfaz del panel Cache

La interfaz muestra:

- Lista de cachés disponibles en el dominio actual
- Número total de entradas en cada caché
- Vista detallada de los recursos almacenados en el caché seleccionado
- Tamaño y tipo de cada recurso

## Gestión de cachés

El panel permite realizar varias operaciones:

### Visualización de recursos

Para cada entrada en el caché, puedes ver:

- URL del recurso
- Tipo de contenido
- Tamaño
- Tiempo de creación/actualización
- Headers de la respuesta

### Acciones disponibles

- **Refresh**: Actualiza la lista de cachés y entradas
- **Delete Cache**: Elimina un caché completo
- **Delete Entry**: Elimina una entrada específica del caché
- **Preview**: Previsualiza el contenido de una respuesta almacenada

## Uso con Service Workers

Cache Storage está estrechamente relacionado con los Service Workers, y el panel permite:

- Observar qué recursos están siendo almacenados por los Service Workers
- Verificar estrategias de precarga de caché implementadas en el evento `install`
- Comprobar si las respuestas servidas coinciden con las almacenadas en caché
- Depurar problemas relacionados con el almacenamiento en caché

## Estrategias comunes de caché

| Estrategia | Implementación en Cache Storage |
|------------|--------------------------------|
| Cache First | Verifica primero en `caches.match()`, luego usa `fetch()` |
| Network First | Usa `fetch()` primero, almacena en caché con `cache.put()` |
| Stale-While-Revalidate | Sirve desde caché mientras actualiza en segundo plano |
| Cache Only | Usa exclusivamente `caches.match()` sin recurrir a la red |
| Network Only | Solo utiliza `fetch()` sin interactuar con Cache Storage |

## Versiones de caché

Una práctica común es versionar los cachés para facilitar actualizaciones:

```javascript
// Ejemplo de versionado de caché
const CACHE_VERSION = 'v1';
const CACHE_NAME = `my-app-${CACHE_VERSION}`;

// En evento activate, eliminar cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name.startsWith('my-app-') && name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});
```

## Límites y consideraciones

- **Cuota de almacenamiento**: Varía según el navegador y el espacio disponible
- **Persistencia**: Puede ser eliminado por el navegador si el espacio es limitado
- **Política de mismo origen**: Solo puede almacenar recursos del mismo origen o con CORS habilitado
- **Tipos de solicitud**: No todas las solicitudes son cacheables (como POST)

## Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| Caché no se actualiza | Verifica la lógica de actualización en el Service Worker |
| Recursos antiguos persistentes | Implementa una estrategia de versiones de caché |
| Espacio insuficiente | Utiliza `navigator.storage.estimate()` para verificar el uso |
| Recursos no cacheados | Verifica si las URLs son exactamente iguales (incluyendo parámetros) |
| Caché corrupto | Elimina y recrea el caché utilizando el panel |

## Buenas prácticas

- Versiona tus cachés para facilitar actualizaciones
- Limpia cachés antiguos durante la activación del Service Worker
- Establece un tiempo de vida (TTL) para recursos dinámicos
- Almacena en caché respuestas de red exitosas (status 200)
- Proporciona respuestas de fallback para cuando un recurso no está en caché ni disponible en la red

Cache Storage es una herramienta fundamental para implementar experiencias offline robustas y mejorar significativamente el rendimiento de aplicaciones web, especialmente en conexiones lentas o inestables.