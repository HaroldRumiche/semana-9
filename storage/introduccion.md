---
sidebar_label: 'Introducción'
sidebar_position: 1
slug: /
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Introducción al Panel Storage

El panel Storage es una herramienta fundamental para desarrolladores web que permite inspeccionar, gestionar y manipular los datos almacenados localmente por una aplicación web. Esta sección te guiará a través de las diferentes tecnologías de almacenamiento disponibles en los navegadores modernos.

## ¿Qué es el panel Storage?

El panel Storage en el Inspector de Elementos permite acceder y manipular diversos mecanismos de almacenamiento del lado del cliente, incluyendo:

- Cookies
- LocalStorage
- SessionStorage
- IndexedDB
- Cache Storage
- Y otros métodos de persistencia de datos

## Importancia para el desarrollo web

Utilizar eficientemente el panel Storage permite:

- Depurar problemas relacionados con datos persistentes
- Verificar que los datos se estén guardando correctamente
- Entender cómo tu aplicación maneja el estado del cliente
- Identificar problemas de seguridad relacionados con el almacenamiento
- Optimizar el uso de la memoria y el rendimiento del almacenamiento
- Simular diferentes estados de la aplicación modificando los datos almacenados

## Tecnologías de almacenamiento disponibles

<DocsCards>
  <DocsCard
    header="Cookies"
    href="/storage/cookies"
  >
    <p>Pequeños fragmentos de datos enviados desde un sitio web y almacenados en el navegador del usuario.</p>
  </DocsCard>
  
  <DocsCard
    header="LocalStorage"
    href="/storage/localstorage"
  >
    <p>Almacenamiento persistente de datos clave-valor que no expiran al cerrar el navegador.</p>
  </DocsCard>
  
  <DocsCard
    header="SessionStorage"
    href="/storage/sessionstorage"
  >
    <p>Almacenamiento temporal de datos clave-valor que se eliminan al cerrar la pestaña o ventana.</p>
  </DocsCard>
  
  <DocsCard
    header="IndexedDB"
    href="/storage/indexeddb"
  >
    <p>Base de datos NoSQL de alto rendimiento para almacenar grandes cantidades de datos estructurados.</p>
  </DocsCard>

  <DocsCard
    header="Cache Storage"
    href="/storage/cache-storage"
  >
    <p>API para almacenar recursos de red para acceso sin conexión y mejora de rendimiento.</p>
  </DocsCard>
</DocsCards>

## Acceso al panel Storage

Para abrir el panel Storage:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Haz clic en la pestaña "Application" (en Chrome/Edge) o "Storage" (en Firefox)
3. En el panel izquierdo, expande la sección "Storage" para ver todas las opciones disponibles

## Consideraciones de seguridad y privacidad

Al trabajar con datos almacenados localmente, recuerda:

- No almacenar información sensible o tokens de autenticación en LocalStorage o SessionStorage
- Establecer los atributos de seguridad apropiados para las cookies (HttpOnly, Secure, SameSite)
- Respetar las políticas de Same-Origin y CORS
- Ser consciente de los límites de almacenamiento de cada tecnología
- Considerar el impacto en la privacidad del usuario

En las siguientes secciones, exploraremos en detalle cada tecnología de almacenamiento y cómo utilizarla eficientemente durante el desarrollo de aplicaciones web.