---
id : introduccion
sidebar_position: 1
slug: /
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Introducción al Panel Performance

El panel Performance es una herramienta esencial para desarrolladores web que permite analizar, medir y optimizar el rendimiento de aplicaciones web. Te ayuda a identificar cuellos de botella, problemas de renderizado y optimizar la experiencia del usuario.

## ¿Qué es el panel Performance?

El panel Performance registra y analiza todas las actividades que ocurren mientras se carga y ejecuta una página web, incluyendo:

- Tiempos de carga y renderizado
- Ejecución de JavaScript
- Operaciones de layout y paint
- Uso de CPU y memoria
- Frames por segundo (FPS)
- Eventos del ciclo de vida de la página

## Importancia para el desarrollo web

Utilizar eficientemente el panel Performance permite:

- Identificar y corregir problemas de rendimiento
- Optimizar animaciones y transiciones
- Reducir el tiempo de carga de la página
- Mejorar la interactividad y capacidad de respuesta
- Identificar código ineficiente
- Optimizar la experiencia de usuario en diferentes dispositivos

## Herramientas principales

<DocsCards>
  <DocsCard
    header="Timeline/Cascada"
    href="/performance/analizar-timeline"
  >
    <p>Visualiza todas las actividades ordenadas cronológicamente para identificar problemas de rendimiento.</p>
  </DocsCard>
  
  <DocsCard
    header="Grabación de Rendimiento"
    href="/performance/grabar-sesion"
  >
    <p>Captura datos de rendimiento mientras interactúas con tu aplicación para análisis detallado.</p>
  </DocsCard>
  
  <DocsCard
    header="Monitor de FPS"
    href="/performance/fps-frames"
  >
    <p>Analiza los frames por segundo para identificar caídas que afectan la fluidez de animaciones y transiciones.</p>
  </DocsCard>
  
  <DocsCard
    header="Métricas Clave"
    href="/performance/eventos-importantes"
  >
    <p>Comprende los eventos importantes que afectan la percepción de velocidad de tu aplicación.</p>
  </DocsCard>
</DocsCards>

## Acceso al panel Performance

Para abrir el panel Performance:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Haz clic en la pestaña "Performance"
3. Usa el botón circular de grabación para comenzar a capturar datos

## Configuración inicial recomendada

Para obtener los mejores resultados:

- Ajusta la CPU para simular dispositivos menos potentes (4x slowdown para móviles)
- Habilita "Screenshots" para correlacionar eventos con el estado visual
- Cierra pestañas y aplicaciones innecesarias para reducir interferencias
- Considera usar el modo incógnito para evitar extensiones que afecten los resultados

En las siguientes secciones, exploraremos en detalle cada componente del panel Performance y cómo utilizarlo para optimizar tus aplicaciones web.