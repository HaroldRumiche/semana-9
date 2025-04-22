---
id : pwa
sidebar_position: 7
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Auditoría de PWA en Lighthouse

La categoría PWA (Progressive Web App) evalúa si tu sitio web cumple con los estándares y requisitos para funcionar como una aplicación web progresiva. Las PWAs combinan lo mejor de las experiencias web y móviles, permitiendo a los usuarios instalar tu sitio como una aplicación con funcionalidades avanzadas como trabajo offline, notificaciones push y acceso a hardware del dispositivo.

## Áreas de evaluación

<DocsCards>
  <DocsCard
    header="Instalabilidad"
    href="/lighthouse/pwa#instalabilidad"
  >
    <p>Verifica si la aplicación cumple los requisitos para ser instalada en dispositivos.</p>
  </DocsCard>
  
  <DocsCard
    header="Service Worker"
    href="/lighthouse/pwa#service-worker"
  >
    <p>Evalúa la implementación del Service Worker para funcionalidades offline y carga rápida.</p>
  </DocsCard>
  
  <DocsCard
    header="Web App Manifest"
    href="/lighthouse/pwa#manifest"
  >
    <p>Comprueba la correcta configuración del archivo manifest para personalizar la experiencia de instalación.</p>
  </DocsCard>
  
  <DocsCard
    header="Optimizaciones PWA"
    href="/lighthouse/pwa#optimizaciones"
  >
    <p>Analiza características adicionales que mejoran la experiencia como PWA.</p>
  </DocsCard>
</DocsCards>

## Instalabilidad {#instalabilidad}

Lighthouse evalúa si tu sitio cumple los requisitos básicos para ser instalable como una aplicación.

**Aspectos evaluados:**

- **HTTPS**: Verifica que el sitio se sirva a través de conexión segura
- **Service Worker**: Comprueba el registro de un Service Worker
- **Web App Manifest**: Evalúa la presencia y configuración del archivo manifest
- **Iconos**: Verifica la disponibilidad de iconos en diferentes tamaños
- **Respuesta offline**: Comprueba si la aplicación puede funcionar sin conexión

**Recomendaciones:**
- Implementar HTTPS en todo el sitio
- Registrar un Service Worker para control de caché y funcionalidad offline
- Crear un Web App Manifest completo
- Proporcionar iconos en múltiples tamaños (al menos 192x192 y 512x512)
- Configurar una página offline personalizada

## Service Worker {#service-worker}

El Service Worker es una pieza fundamental de las PWAs que permite funcionalidad offline, actualizaciones en segundo plano y experiencias de carga instantánea.

**Aspectos evaluados:**

- **Registro**: Verifica si existe un Service Worker registrado
- **Alcance**: Evalúa si el alcance es apropiado
- **Gestión de caché**: Comprueba estrategias de almacenamiento en caché
- **Navegación offline**: Analiza el comportamiento sin conexión
- **Actualización**: Verifica mecanismos de actualización

**Recomendaciones:**
- Registrar el Service Worker en todas las páginas relevantes
- Implementar estrategias de caché apropiadas (Network First, Cache First, Stale-While-Revalidate)
- Proporcionar experiencia offline significativa
- Gestionar correctamente ciclos de actualización
- Usar bibliotecas como Workbox para simplificar implementación

**Ejemplo básico de registro:**

```javascript
// En tu archivo principal
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration.scope);
      })
      .catch(error => {
        console.error('Error al registrar Service Worker:', error);
      });
  });
}
```

## Web App Manifest {#manifest}

El Web App Manifest es un archivo JSON que proporciona información sobre la aplicación, controlando cómo se presenta al usuario durante la instalación y uso.

**Aspectos evaluados:**

- **Presencia**: Verifica si existe un archivo manifest vinculado
- **Campos obligatorios**: Comprueba que contenga campos esenciales
- **Iconos**: Evalúa la disponibilidad de iconos adecuados
- **Pantalla de inicio**: Analiza la configuración de display y colores
- **Orientación**: Verifica configuración de orientación preferida

**Campos clave del manifest:**

```json
{
  "name": "Mi Aplicación PWA",
  "short_name": "Mi PWA",
  "description": "Descripción de mi aplicación PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4285f4",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Recomendaciones:**
- Incluir un nombre descriptivo y short_name conciso
- Configurar start_url con tracking para medir instalaciones
- Establecer display en "standalone" o "fullscreen"
- Proporcionar theme_color consistente con tu marca
- Incluir múltiples tamaños de iconos (mínimo 192px y 512px)

## Optimizaciones PWA {#optimizaciones}

Lighthouse evalúa características adicionales que mejoran la experiencia de usuario de la PWA.

**Aspectos evaluados:**

- **Splash Screen**: Verifica configuración para pantalla de carga personalizada
- **Contenido seguro**: Comprueba que todo el contenido sea servido por HTTPS
- **Viewport**: Evalúa configuración para diferentes dispositivos
- **Color de tema**: Analiza personalización de la barra de dirección
- **Notificaciones**: Verifica implementación adecuada de notificaciones push

**Recomendaciones:**
- Personalizar la pantalla de carga con colores e iconos de marca
- Garantizar que todos los recursos se carguen por HTTPS
- Configurar correctamente el viewport para experiencia móvil
- Utilizar theme_color para integración visual con el SO
- Implementar notificaciones push con patrones de solicitud de permiso no intrusivos

## Pruebas de auditoría principales

### Instalabilidad
```
Web app manifest meets the installability requirements
Passed: Manifest meets the installability requirements.
```

### Service Worker
```
Registers a service worker that controls page and start_url
Passed: Service worker found that controls page and start_url.
```

### Respuesta offline
```
Current page responds with a 200 when offline
Failed: Page does not respond with a 200 when offline.
```

## Beneficios de implementar PWA

Las auditorías de PWA en Lighthouse te ayudan a crear aplicaciones web que ofrecen:

1. **Experiencia offline**: Funcionamiento incluso sin conexión a internet
2. **Instalación**: Acceso desde el escritorio o pantalla de inicio sin tiendas de aplicaciones
3. **Carga rápida**: Rendimiento mejorado con estrategias de caché inteligentes
4. **Compromiso**: Mayor retención mediante notificaciones push
5. **Experiencia nativa**: Interfaz inmersiva similar a aplicaciones nativas

## Limitaciones de la auditoría PWA

Lighthouse evalúa aspectos técnicos, pero no puede determinar:

- Calidad de la experiencia offline (solo que existe)
- Utilidad real de la PWA para los usuarios
- Estrategias de notificación push efectivas
- Optimización de la experiencia de instalación
- Patrones de uso específicos del sector

Para una evaluación completa, complementa Lighthouse con pruebas de usuario reales y análisis de comportamiento.

En la siguiente sección, exploraremos cómo interpretar los resultados generales de Lighthouse y aplicar las recomendaciones para mejorar tu sitio web.