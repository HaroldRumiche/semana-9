---
id: introduccion
sidebar_position: 1
slug: /
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Introducción a Lighthouse

Lighthouse es una herramienta automatizada de código abierto diseñada por Google para mejorar la calidad de las páginas web. Esta potente utilidad audita el rendimiento, la accesibilidad, las aplicaciones web progresivas (PWA), las prácticas de desarrollo y el SEO de tu sitio.

## ¿Qué es Lighthouse?

Lighthouse es una herramienta de auditoría integrada en el Inspector de Elementos (DevTools) de Chrome que evalúa sitios web en cinco categorías principales:

- **Rendimiento**: Velocidad de carga y eficiencia
- **Accesibilidad**: Usabilidad para personas con discapacidades
- **Mejores Prácticas**: Adherencia a los estándares modernos de desarrollo web
- **SEO**: Optimización para motores de búsqueda
- **PWA**: Cumplimiento de requisitos para aplicaciones web progresivas

## Importancia para el desarrollo web

Utilizar Lighthouse regularmente permite:

- Identificar y solucionar problemas de rendimiento
- Mejorar la experiencia de usuario
- Aumentar la visibilidad en motores de búsqueda
- Garantizar que tu sitio sigue las mejores prácticas del sector
- Preparar tu aplicación para funcionar como PWA
- Obtener recomendaciones prácticas para mejorar la calidad global

## Categorías principales

<DocsCards>
  <DocsCard
    header="Rendimiento"
    href="/lighthouse/rendimiento"
  >
    <p>Analiza los tiempos de carga, interactividad y estabilidad visual de tu sitio web.</p>
  </DocsCard>
  
  <DocsCard
    header="Accesibilidad"
    href="/lighthouse/accesibilidad"
  >
    <p>Evalúa si tu sitio es utilizable por personas con diferentes capacidades o discapacidades.</p>
  </DocsCard>
  
  <DocsCard
    header="Buenas Prácticas"
    href="/lighthouse/buenas-practicas"
  >
    <p>Comprueba si tu sitio sigue los estándares modernos de calidad en el desarrollo web.</p>
  </DocsCard>
  
  <DocsCard
    header="SEO"
    href="/lighthouse/seo"
  >
    <p>Verifica que tu sitio esté optimizado para el posicionamiento en motores de búsqueda.</p>
  </DocsCard>

  <DocsCard
    header="PWA"
    href="/lighthouse/pwa"
  >
    <p>Evalúa la conformidad con los requisitos de las aplicaciones web progresivas.</p>
  </DocsCard>
</DocsCards>

## Acceso a Lighthouse

Para utilizar Lighthouse en Chrome DevTools:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Lighthouse"
3. Selecciona las categorías a auditar y configura las opciones
4. Haz clic en "Analizar la carga de la página"

## Configuración recomendada

Para obtener resultados óptimos:

- Realiza auditorías en modo incógnito para evitar interferencias de extensiones
- Prueba en diferentes dispositivos y condiciones de red
- Compara resultados antes y después de implementar cambios
- Establece objetivos de puntuación para cada categoría
- Implementa las recomendaciones por orden de prioridad

En las siguientes secciones, analizaremos detalladamente cada categoría de Lighthouse y cómo interpretar y aplicar sus resultados para mejorar tus proyectos web.