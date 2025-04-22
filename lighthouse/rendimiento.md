---
id : rendimiento
sidebar_position: 3
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Auditoría de Rendimiento en Lighthouse

La categoría de rendimiento evalúa qué tan rápido se carga y responde tu sitio web para los usuarios. Un buen rendimiento es fundamental para la experiencia del usuario y tiene un impacto directo en las tasas de conversión y el posicionamiento SEO.

## Métricas principales

<DocsCards>
  <DocsCard
    header="First Contentful Paint (FCP)"
    href="/lighthouse/rendimiento#fcp"
  >
    <p>Mide el tiempo que tarda en renderizarse el primer contenido visible en la pantalla.</p>
  </DocsCard>
  
  <DocsCard
    header="Largest Contentful Paint (LCP)"
    href="/lighthouse/rendimiento#lcp"
  >
    <p>Registra cuándo se renderiza el elemento de contenido más grande visible en la ventana.</p>
  </DocsCard>
  
  <DocsCard
    header="Total Blocking Time (TBT)"
    href="/lighthouse/rendimiento#tbt"
  >
    <p>Suma el tiempo en que el hilo principal está bloqueado, impidiendo la interactividad.</p>
  </DocsCard>
  
  <DocsCard
    header="Cumulative Layout Shift (CLS)"
    href="/lighthouse/rendimiento#cls"
  >
    <p>Mide la estabilidad visual y cuantifica los cambios inesperados en el layout.</p>
  </DocsCard>

  <DocsCard
    header="Speed Index"
    href="/lighthouse/rendimiento#speed-index"
  >
    <p>Indica qué tan rápido se muestra el contenido visualmente durante la carga de la página.</p>
  </DocsCard>

  <DocsCard
    header="Time to Interactive (TTI)"
    href="/lighthouse/rendimiento#tti"
  >
    <p>Mide el tiempo hasta que la página se vuelve completamente interactiva.</p>
  </DocsCard>
</DocsCards>

## First Contentful Paint (FCP) {#fcp}

First Contentful Paint mide el tiempo desde que comienza a cargarse la página hasta que cualquier parte del contenido aparece en la pantalla.

**Objetivos recomendados:**
- Bueno: 0-1.8 segundos
- Necesita mejorar: 1.8-3.0 segundos
- Pobre: Más de 3.0 segundos

**Cómo mejorar FCP:**
- Eliminar recursos que bloqueen el renderizado
- Minificar CSS
- Eliminar CSS no utilizado
- Precargar recursos críticos
- Reducir el tiempo de respuesta del servidor

## Largest Contentful Paint (LCP) {#lcp}

Largest Contentful Paint mide el tiempo que tarda en renderizarse el elemento de contenido más grande visible en la ventana.

**Objetivos recomendados:**
- Bueno: 0-2.5 segundos
- Necesita mejorar: 2.5-4.0 segundos
- Pobre: Más de 4.0 segundos

**Cómo mejorar LCP:**
- Optimizar imágenes y media
- Precargar recursos importantes
- Comprimir archivos de texto
- Entregar HTML crítico mediante streaming
- Implementar caché del lado del servidor

## Total Blocking Time (TBT) {#tbt}

Total Blocking Time suma la duración de todas las tareas largas (que superan los 50 ms) en el hilo principal entre FCP y TTI.

**Objetivos recomendados:**
- Bueno: 0-200 milisegundos
- Necesita mejorar: 200-600 milisegundos
- Pobre: Más de 600 milisegundos

**Cómo mejorar TBT:**
- Minimizar el JavaScript no utilizado
- Dividir código en paquetes más pequeños
- Optimizar el JavaScript de terceros
- Reducir el trabajo en el hilo principal
- Optimizar el uso de polyfills

## Cumulative Layout Shift (CLS) {#cls}

Cumulative Layout Shift cuantifica la cantidad de cambios inesperados en el layout de una página.

**Objetivos recomendados:**
- Bueno: 0-0.1
- Necesita mejorar: 0.1-0.25
- Pobre: Más de 0.25

**Cómo mejorar CLS:**
- Especificar dimensiones para imágenes y videos
- Reservar espacio para anuncios
- No insertar contenido dinámico sobre contenido existente
- Preferir transiciones de animación que no afecten el layout
- Evitar fuentes web que causen FOIT/FOUT

## Speed Index {#speed-index}

Speed Index mide qué tan rápido se muestra el contenido visualmente durante la carga de la página.

**Objetivos recomendados:**
- Bueno: 0-3.4 segundos
- Necesita mejorar: 3.4-5.8 segundos
- Pobre: Más de 5.8 segundos

**Cómo mejorar Speed Index:**
- Optimizar el orden de carga de recursos críticos
- Reducir complejidad del DOM
- Comprimir imágenes y recursos
- Implementar técnicas de carga progresiva

## Time to Interactive (TTI) {#tti}

Time to Interactive mide el tiempo que tarda una página en volverse completamente interactiva.

**Objetivos recomendados:**
- Bueno: 0-3.8 segundos
- Necesita mejorar: 3.8-7.3 segundos
- Pobre: Más de 7.3 segundos

**Cómo mejorar TTI:**
- Minimizar JavaScript principal
- Eliminar JavaScript no utilizado
- Reducir el uso de polyfills
- Adoptar code splitting
- Eliminar bibliotecas innecesarias

## Estrategias generales de optimización

- **Optimización de imágenes**:
  - Utilizar formatos modernos (WebP, AVIF)
  - Implementar carga diferida (lazy loading)
  - Servir imágenes responsive

- **Optimización de JavaScript**:
  - Diferir código no crítico
  - Minificar y comprimir
  - Implementar code splitting
  - Utilizar Web Workers para tareas pesadas

- **Optimización de CSS**:
  - Utilizar Critical CSS
  - Minificar y comprimir
  - Eliminar CSS no utilizado
  - Reducir el uso de CSS bloqueante

- **Optimización del servidor**:
  - Implementar CDN
  - Utilizar caché en el navegador
  - Optimizar TTFB (Time to First Byte)
  - Comprimir recursos (Gzip, Brotli)

En la siguiente sección, exploraremos la auditoría de accesibilidad y cómo Lighthouse evalúa la usabilidad de tu sitio para todos los usuarios.