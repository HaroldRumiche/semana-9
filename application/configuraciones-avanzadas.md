---
id : configuraciones-avanzadas
sidebar_position: 8
---

# Configuraciones Avanzadas

El panel Application ofrece configuraciones y herramientas avanzadas para escenarios de desarrollo y depuración especializados. Esta sección cubre las opciones menos conocidas pero potentes para casos de uso avanzados.

## Administración de almacenamiento

### Clear Site Data

La sección "Clear storage" (en algunos navegadores) proporciona un panel de control centralizado para eliminar datos del sitio:

- Permite seleccionar tipos específicos de almacenamiento para borrar
- Ofrece un botón "Clear site data" para eliminar todos los datos seleccionados
- Muestra estadísticas de uso de almacenamiento
- Permite simular condiciones de "primer uso" rápidamente

### Storage Quotas

Para verificar y administrar cuotas de almacenamiento:

```javascript
// Código que se puede probar desde la consola
async function checkStorageEstimate() {
  try {
    const estimate = await navigator.storage.estimate();
    console.log(`
      Uso total: ${estimate.usage / 1024 / 1024} MB
      Cuota: ${estimate.quota / 1024 / 1024} MB
      Utilizado: ${(estimate.usage / estimate.quota * 100).toFixed(2)}%
    `);
    console.log('Desglose por tipo:', estimate.usageDetails);
  } catch (error) {
    console.error('Error al obtener estimación de almacenamiento:', error);
  }
}
```

### Persistencia de almacenamiento

Opciones para solicitar almacenamiento persistente que el navegador no borrará automáticamente:

```javascript
// Solicitar persistencia de almacenamiento
async function requestPersistence() {
  if (navigator.storage && navigator.storage.persist) {
    const isPersisted = await navigator.storage.persist();
    console.log(`Persistencia ${isPersisted ? 'concedida' : 'denegada'}`);
  }
}

// Verificar estado de persistencia
async function checkPersistence() {
  if (navigator.storage && navigator.storage.persisted) {
    const isPersisted = await navigator.storage.persisted();
    console.log(`El almacenamiento ${isPersisted ? 'es' : 'no es'} persistente`);
  }
}
```

## Web SQL y herramientas de base de datos heredadas

> Nota: Web SQL está obsoleto, pero aún se incluye en DevTools para compatibilidad.

Si trabajas con aplicaciones que utilizan Web SQL:

- Expande la sección "Web SQL" para ver las bases de datos
- Ejecuta consultas SQL para inspeccionar o modificar datos
- Visualiza tablas y sus estructuras
- Exporta datos para migración a tecnologías modernas

## Frames y iframe

Para sitios con contenido en iframes:

- Navegación estructurada por marcos
- Acceso al almacenamiento específico de cada iframe
- Inspección de cookies por contexto de navegación
- Verificación de políticas de aislamiento (COEP, COOP, CORP)

## Shared Workers

Si la aplicación utiliza Shared Workers:

- Lista de todos los Shared Workers activos
- Inspección del estado y conexiones
- Depuración similar a Service Workers
- Visualización de mensajes entre contextos

## Content Security Policy (CSP)

Herramientas para verificar políticas de seguridad:

- Visualización de violaciones de CSP
- Simulación de políticas diferentes
- Depuración de configuraciones restrictivas
- Validación de compatibilidad con requisitos de seguridad

## Trusted Web Activities (TWA)

Para aplicaciones Android basadas en PWA:

- Verificación de requisitos de TWA
- Validación de Digital Asset Links
- Comprobación de coincidencia de manifiesto
- Pruebas de experiencia sin bordes

## Storage Access API

Para casos donde se necesita acceso cross-origin a almacenamiento:

```javascript
// Solicitar acceso a almacenamiento cross-origin
async function requestStorageAccess() {
  try {
    // Verificar si ya tenemos acceso
    const hasAccess = await document.hasStorageAccess();
    
    if (!hasAccess) {
      // Solicitar acceso (requiere interacción del usuario)
      await document.requestStorageAccess();
      console.log('Acceso concedido');
    } else {
      console.log('Ya tenemos acceso al almacenamiento');
    }
  } catch (error) {
    console.error('Error al solicitar acceso:', error);
  }
}
```

## Origin Trials

Para experimentar con API nuevas o experimentales:

- Verificación de tokens de Origin Trials
- Validación de configuración
- Depuración de características experimentales
- Gestión de fechas de caducidad

## Back-Forward Cache (bfcache)

Herramientas para optimizar experiencia de navegación:

- Verificación de elegibilidad para bfcache
- Identificación de bloqueos (eventos unload, etc)
- Pruebas de restauración de estado
- Optimización para navegación instantánea

## FileSystem Access API

Para aplicaciones que utilizan acceso al sistema de archivos:

```javascript
// Ejemplo de uso de FileSystem Access API
async function openAndReadFile() {
  try {
    // Mostrar selector de archivos
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    
    console.log('Contenido del archivo:', contents);
    
    // Verificar permisos
    const options = { mode: 'readwrite' };
    const permission = await fileHandle.queryPermission(options);
    
    console.log('Permiso actual:', permission);
  } catch (error) {
    console.error('Error accediendo al archivo:', error);
  }
}
```

## Comandos y atajos útiles

| Comando | Descripción |
|---------|-------------|
| Shift+F5 | Recarga con caché vacío |
| Ctrl+Shift+P > "Show Storage" | Abre rápidamente el panel Storage |
| Ctrl+Shift+P > "Clear site data" | Borra todos los datos del sitio |
| Application > ⚙️ (Gear icon) | Configuraciones específicas del panel |
| F1 > Application | Documentación de ayuda relacionada con Application |

## Automatización y extensibilidad

### Protocol Handlers

Depuración de manipuladores de protocolo:

```javascript
// Registro de manipulador de protocolo personalizado
navigator.registerProtocolHandler(
  "web+app",
  "https://example.com/handler?command=%s",
  "Ejemplo de manipulador"
);
```

### Intents y Share Target

Para aplicaciones que implementan Web Share Target:

- Verificación de configuración en el manifiesto
- Pruebas de recepción de compartidos
- Simulación de compartidos entrantes
- Validación de tipos de contenido soportados

## Consideraciones de rendimiento

### Impacto en rendimiento

| Mecanismo | Impacto en rendimiento | Alternativas |
|-----------|------------------------|--------------|
| localStorage | Bloqueante, síncrono | IndexedDB con wrapper síncrono |
| sessionStorage | Menor impacto, limitado a sesión | - |
| IndexedDB | Asíncrono, mínimo impacto | - |
| Cache API | Óptimo para recursos web | - |
| Web SQL | Obsoleto, potencial bloqueo | IndexedDB |

### Prácticas recomendadas

- Utilizar Workers para operaciones intensivas de almacenamiento
- Implementar estrategias de caché apropiadas para cada tipo de recurso
- Mantener un esquema de datos eficiente en IndexedDB
- Minimizar el uso de almacenamiento síncrono
- Implementar control de versiones para todas las estructuras de datos
- Aplicar límites razonables al tamaño de datos almacenados
- Manejar adecuadamente errores y situaciones de cuota excedida

## Compatibilidad entre navegadores

El panel Application puede variar significativamente entre navegadores:

| Navegador | Características únicas | Limitaciones |
|-----------|------------------------|-------------|
| Chrome | Set completo de herramientas PWA | - |
| Edge | Similar a Chrome con algunas adiciones | - |
| Firefox | Panel "Storage" en lugar de "Application" | Menos herramientas para PWA |
| Safari | Panel "Storage" con funcionalidades limitadas | Menos opciones para Service Workers |

Estas configuraciones y herramientas avanzadas permiten a los desarrolladores abordar casos de uso complejos y optimizar sus aplicaciones para ofrecer la mejor experiencia posible a los usuarios en diferentes contextos y condiciones.