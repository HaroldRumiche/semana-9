---
id : pwa-inspection
sidebar_position: 8
---

# Inspección de PWA (Progressive Web Apps)

Las Progressive Web Apps combinan lo mejor de las aplicaciones web y nativas. El panel Application proporciona herramientas específicas para inspeccionar, depurar y optimizar PWAs.

## Acceso a las herramientas de PWA

Las herramientas de inspección de PWA están distribuidas en varias secciones del panel Application:

1. **Manifest**: Para inspeccionar el manifiesto de la aplicación web
2. **Service Workers**: Para administrar service workers
3. **Storage**: Para examinar datos almacenados localmente
4. **Background Services**: Para monitorear actividades en segundo plano

## Verificación de instalabilidad

El panel ofrece una lista de criterios de instalabilidad:

### Sección Manifest

- Indicador de si la aplicación es instalable
- Lista de requisitos satisfechos y pendientes
- Botón para simular eventos de instalación

### Criterios comunes verificados

- Manifiesto válido con propiedades requeridas
- Service Worker registrado con evento fetch
- Servido a través de HTTPS
- Iconos de tamaños adecuados
- Propiedades name/short_name definidas
- display diferente a "browser"
- start_url válida

## Simulación de instalación

El panel permite:

- Desencadenar el diálogo de instalación manualmente
- Simular el evento "beforeinstallprompt"
- Probar la implementación de gestores de eventos

```javascript
// Código que se puede probar desde el panel
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevenir mostrar el prompt automáticamente
  event.preventDefault();
  
  // Guardar el evento para usarlo más tarde
  deferredPrompt = event;
  
  // Mostrar botón personalizado de instalación
  installButton.style.display = 'block';
});
```

## Background Services

La sección Background Services permite monitorear APIs que funcionan en segundo plano:

- **Background Fetch**: Descargas en segundo plano
- **Background Sync**: Sincronización diferida
- **Notifications**: Notificaciones push y locales
- **Push Messaging**: Mensajes desde servidores push
- **Periodic Background Sync**: Sincronización periódica programada

### Registro de eventos

Para cada servicio puedes:

- Iniciar/detener la grabación de eventos
- Ver registro temporal de actividades
- Examinar detalles completos de cada evento
- Filtrar eventos por tipo o contenido

### Notificaciones

El panel de notificaciones permite:

- Ver todas las notificaciones enviadas
- Simular eventos de notificación
- Verificar permisos de notificación
- Depurar interacciones con notificaciones

## AppShell y estrategias offline

### Comprobación de AppShell

Para verificar la implementación correcta del AppShell:

1. Activa el modo offline en la pestaña Network o Service Workers
2. Recarga la página para verificar la carga desde caché
3. Inspecciona qué recursos se cargan correctamente
4. Identifica posibles fallos en la estrategia de caché

### Estrategias de contenido offline

| Estrategia | Implementación | Verificación |
|------------|----------------|--------------|
| AppShell | Caché de UI básica | Ver recursos servidos desde Cache Storage |
| Precaching | Almacenamiento anticipado | Examinar Cache Storage tras instalación |
| Runtime caching | Caché bajo demanda | Monitorear eventos fetch interceptados |
| Sincronización diferida | Background Sync | Verificar cola de sincronización |

## Herramientas de emulación

Para probar comportamientos específicos de PWA:

### Emulación de red

- Simular conexiones offline
- Probar conexiones lentas o inestables
- Verificar manejo de errores de red

### Emulación de dispositivo

- Probar interacción en diferentes tamaños de pantalla
- Verificar comportamiento responsive
- Simular interacciones táctiles

## Lighthouse para PWA

Aunque no está directamente en el panel Application, la herramienta Lighthouse (disponible en la pestaña "Lighthouse") complementa la inspección de PWA:

- Audita automáticamente la implementación de PWA
- Proporciona puntuación de calidad
- Ofrece sugerencias de mejora
- Verifica mejores prácticas

## Depuración avanzada

### Estado de sincronización

- Verificar registros de Background Sync
- Comprobar intentos de sincronización
- Examinar errores de sincronización

### Estado de push

- Verificar suscripciones push activas
- Comprobar permisos de notificación
- Simular eventos push

### Depuración de permisos

- Ver estado actual de permisos
- Simular diferentes estados de permiso
- Probar flujos de solicitud de permisos

## Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| PWA no instalable | Verificar requisitos de instalación en panel Manifest |
| Contenido no disponible offline | Comprobar estrategias de caché en Service Workers |
| Notificaciones no recibidas | Examinar registro de eventos en Background Services |
| Service Worker no actualizado | Utilizar "Update on reload" o "Skip waiting" |
| Problemas de almacenamiento | Verificar cuotas y uso en Storage |

## Mejores prácticas

- Implementar estrategias de caché apropiadas para diferentes tipos de recursos
- Proporcionar feedback claro sobre el estado de conexión
- Utilizar Background Sync para operaciones que pueden fallar offline
- Diseñar una experiencia offline significativa
- Mantener el manifiesto actualizado con iconos adecuados
- Implementar estrategias de actualización para Service Workers

Las herramientas de inspección de PWA en DevTools son esenciales para desarrollar, depurar y optimizar aplicaciones web progresivas que ofrezcan una experiencia confiable y de alta calidad independientemente de las condiciones de red o dispositivo.