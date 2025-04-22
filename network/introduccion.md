---
id : introduccion
sidebar_position: 1
slug: /
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Introducción al Panel Network

El panel Network (Red) es una de las herramientas más poderosas del inspector de elementos, permitiendo a los desarrolladores monitorizar, analizar y depurar todo el tráfico de red entre el navegador y los servidores.

## ¿Qué es el panel Network?

El panel Network registra información sobre cada solicitud que el navegador realiza cuando carga o interactúa con un sitio web, incluyendo:

- Solicitudes HTTP/HTTPS
- Archivos HTML, CSS y JavaScript
- Imágenes y otros recursos multimedia
- Peticiones AJAX y Fetch API
- WebSockets
- Eventos de Server-Sent Events (SSE)

## Importancia para el desarrollo web

Utilizar eficientemente el panel Network permite:

- Optimizar el rendimiento de carga de páginas
- Identificar cuellos de botella
- Depurar problemas de comunicación cliente-servidor
- Analizar respuestas de API
- Detectar errores 404 y otros problemas de red
- Verificar la correcta implementación de políticas de caché

## Herramientas principales

<DocsCards>
  <DocsCard
    header="Tabla de Solicitudes"
    href="/network/herramientas-principales#tabla-solicitudes"
  >
    <p>Visualiza y ordena todas las peticiones de red con información detallada sobre cada una.</p>
  </DocsCard>
  
  <DocsCard
    header="Timeline/Cascada"
    href="/network/tiempos-carga#timeline"
  >
    <p>Analiza la secuencia temporal de solicitudes y sus tiempos de carga para optimizar el rendimiento.</p>
  </DocsCard>
  
  <DocsCard
    header="Filtros de Red"
    href="/network/filtros-red"
  >
    <p>Usa filtros avanzados para centrarte solo en los tipos de solicitudes relevantes para tu análisis.</p>
  </DocsCard>
  
  <DocsCard
    header="Panel de Detalles"
    href="/network/detalles-peticiones"
  >
    <p>Examina a fondo los headers, contenido y timing de cada solicitud individual.</p>
  </DocsCard>
</DocsCards>

## Acceso al panel Network

Para abrir el panel Network:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Haz clic en la pestaña "Network"
3. Recarga la página para comenzar a registrar las solicitudes (Ctrl+R / Cmd+R)

## Configuración inicial recomendada

Para aprovechar al máximo esta herramienta:

- Activa la opción "Preserve log" para mantener el registro entre navegaciones
- Habilita "Disable cache" durante el desarrollo para evitar confusiones con contenido en caché
- Ajusta la velocidad de red con el throttling para simular diferentes condiciones
- Activa la captura de screenshots (si está disponible) para correlacionar solicitudes con el estado visual

En las siguientes secciones, exploraremos en detalle cada componente del panel Network y cómo utilizarlo para optimizar tus aplicaciones web.