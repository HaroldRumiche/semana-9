---
sidebar_label: 'Service Workers'
sidebar_position: 3
---

# Service Workers

Los Service Workers actúan como proxies entre el navegador y la red, permitiendo interceptar solicitudes, implementar estrategias de caché y proporcionar funcionalidades offline para aplicaciones web progresivas.

## Acceso al panel de Service Workers

Para inspeccionar y administrar Service Workers:

1. Abre DevTools (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application"
3. Expande la sección "Service Workers" en el panel lateral izquierdo

## Funcionalidades principales

El panel de Service Workers ofrece una interfaz completa para monitorizar y controlar los Service Workers registrados:

### Registro y estado

- Lista de todos los Service Workers registrados en el origen actual
- Estado de cada Service Worker (installing, waiting, active, redundant)
- Origen y ámbito (scope) del Service Worker
- ID único y fecha de inicio
- Información sobre el último envío (push) recibido

### Controles y acciones

- **Update**: Fuerza la actualización del Service Worker
- **Unregister**: Elimina el registro del Service Worker
- **Start/Stop**: Activa o detiene el Service Worker
- **Skip waiting**: Promueve un Service Worker en espera al estado activo
- **Focus**: Selecciona un Service Worker específico cuando hay varios

### Opciones de depuración

El panel incluye opciones esenciales para el desarrollo:

- **Update on reload**: Fuerza la actualización del Service Worker en cada recarga
- **Bypass for network**: Ignora el Service Worker para todas las solicitudes de red
- **Offline**: Simula un estado sin conexión
- **Show all**: Muestra Service Workers de todos los orígenes (no solo la página actual)

## Ciclo de vida del Service Worker

DevTools permite observar y depurar las distintas fases del ciclo de vida:

1. **Registration**: Cuando se registra un nuevo Service Worker
2. **Installing**: Durante la instalación del Service Worker
3. **Waiting**: Cuando está esperando activarse (si hay otro activo)
4. **Activating**: Durante el proceso de activación
5. **Activated**: Cuando está completamente operativo
6. **Redundant**: Cuando es reemplazado por un nuevo Service Worker

## Depuración de eventos

El panel permite interceptar y depurar eventos clave:

- `install`
- `activate`
- `fetch`
- `push`
- `sync`
- `message`

### Console y Depuración

Para una depuración más profunda:

- Haz clic en el link "inspect" junto al Service Worker para abrir una consola dedicada
- Usa `console.log()` dentro del Service Worker para ver mensajes en esta consola
- Establece breakpoints en el código del Service Worker
- Inspecciona variables y el estado durante la ejecución

## Estrategias de caché comunes

| Estrategia | Descripción | Uso recomendado |
|------------|-------------|-----------------|
| Cache First | Verifica primero en caché, usa red como respaldo | Recursos estáticos |
| Network First | Intenta la red, usa caché como respaldo | Datos dinámicos |
| Stale-While-Revalidate | Sirve desde caché mientras actualiza en segundo plano | Balance rendimiento/frescura |
| Cache Only | Solo sirve desde caché, nunca usa red | Recursos críticos offline |
| Network Only | Solo usa red, nunca caché | Datos altamente dinámicos |

## Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| El Service Worker no se actualiza | Activa "Update on reload" o usa el botón "Update" |
| Cambios no reflejados | Usa "Skip waiting" para activar inmediatamente la nueva versión |
| Caché persistente no deseada | Utiliza "Clear storage" para eliminar todos los datos almacenados |
| Error en registro | Verifica que el archivo esté servido con el MIME type correcto (text/javascript) |
| Problemas de ámbito | Asegúrate de que el scope del Service Worker cubra las páginas donde debe actuar |

## Mejores prácticas

- Utiliza versiones en los nombres de caché para facilitar la actualización
- Implementa estrategias de caché apropiadas según el tipo de recurso
- Maneja adecuadamente los errores de red y caché
- Proporciona experiencias offline significativas
- Limpia cachés antiguos durante los eventos de activación

La correcta implementación y depuración de Service Workers es fundamental para crear aplicaciones web resistentes y con buen rendimiento que funcionen incluso en condiciones de red inestables.