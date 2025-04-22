---
id : introduccion
sidebar_position: 1
slug: /
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Introducción al Panel Application

El panel Application es una herramienta fundamental en el inspector de elementos que permite a los desarrolladores examinar, administrar y depurar diversos mecanismos de almacenamiento y recursos del lado del cliente en aplicaciones web.

## ¿Qué es el panel Application?

El panel Application proporciona acceso a las tecnologías de almacenamiento y aplicaciones web progresivas (PWA) que utiliza el sitio, incluyendo:

- Manifiestos de aplicaciones web
- Service Workers
- Almacenamiento en caché
- IndexedDB
- Local Storage y Session Storage
- Cookies
- Funcionalidades de PWA

## Importancia para el desarrollo web

Utilizar eficientemente el panel Application permite:

- Depurar problemas de almacenamiento de datos
- Verificar el funcionamiento correcto de Service Workers
- Analizar y modificar cookies 
- Inspeccionar bases de datos del lado del cliente
- Comprobar el funcionamiento de PWAs
- Simular comportamientos offline

## Herramientas principales

<DocsCards>
  <DocsCard
    header="Manifest"
    href="/application/manifest"
  >
    <p>Inspecciona el manifiesto de la aplicación web y su configuración para PWA.</p>
  </DocsCard>
  
  <DocsCard
    header="Service Workers"
    href="/application/service-workers"
  >
    <p>Administra, inspecciona y depura Service Workers registrados en el sitio.</p>
  </DocsCard>
  
  <DocsCard
    header="Storage"
    href="/application/storage"
  >
    <p>Explora y gestiona todos los mecanismos de almacenamiento del lado del cliente.</p>
  </DocsCard>
  
  <DocsCard
    header="Cache"
    href="/application/cache"
  >
    <p>Examina los recursos almacenados en la API Cache Storage utilizada por Service Workers.</p>
  </DocsCard>
</DocsCards>

## Acceso al panel Application

Para abrir el panel Application:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Haz clic en la pestaña "Application"
3. Navega por las secciones del panel lateral izquierdo para acceder a cada funcionalidad

## Configuración inicial recomendada

Para aprovechar al máximo esta herramienta:

- Habilita las opciones de depuración de Service Workers
- Marca "Preserve log" para mantener el registro entre navegaciones
- Utiliza la opción "Clear site data" cuando necesites un entorno limpio para pruebas
- Familiarízate con la estructura del panel lateral para navegar eficientemente

En las siguientes secciones, exploraremos en detalle cada componente del panel Application y cómo utilizarlo para desarrollar y depurar aplicaciones web modernas.