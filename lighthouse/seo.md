---
id : seo
sidebar_position: 6
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Auditoría de SEO en Lighthouse

La categoría SEO (Search Engine Optimization) evalúa si tu sitio web está optimizado para ser rastreado e indexado correctamente por los motores de búsqueda. Mejorar estos aspectos puede aumentar la visibilidad de tu sitio en los resultados de búsqueda, atraer más tráfico orgánico y mejorar la experiencia de usuario.

## Áreas de evaluación

<DocsCards>
  <DocsCard
    header="Rastreabilidad"
    href="/lighthouse/seo#rastreabilidad"
  >
    <p>Verifica que tu sitio pueda ser descubierto y recorrido por los motores de búsqueda.</p>
  </DocsCard>
  
  <DocsCard
    header="Contenido"
    href="/lighthouse/seo#contenido"
  >
    <p>Evalúa si el contenido está estructurado para favorecer el posicionamiento en buscadores.</p>
  </DocsCard>
  
  <DocsCard
    header="Móvil"
    href="/lighthouse/seo#movil"
  >
    <p>Comprueba la adaptabilidad de tu sitio para dispositivos móviles.</p>
  </DocsCard>
  
  <DocsCard
    header="Elementos estructurados"
    href="/lighthouse/seo#estructurados"
  >
    <p>Analiza elementos técnicos que afectan la indexación y presentación en resultados de búsqueda.</p>
  </DocsCard>
</DocsCards>

## Rastreabilidad {#rastreabilidad}

Lighthouse evalúa si los robots de los motores de búsqueda pueden acceder y rastrear tu sitio web eficientemente.

**Aspectos evaluados:**

- **robots.txt**: Verifica que el archivo robots.txt sea válido y no bloquee rastreo
- **Enlaces internos**: Comprueba que los enlaces sean rastreables
- **HTTP status**: Evalúa si la página devuelve códigos de estado HTTP apropiados
- **Bloqueos de indexación**: Detecta meta tags que bloquean la indexación

**Recomendaciones:**
- Mantener un archivo robots.txt correctamente configurado
- Evitar el uso de `noindex` en páginas que deberían ser indexadas
- Asegurar que la página devuelva código 200 OK
- No bloquear recursos JS y CSS para rastreadores
- Implementar un mapa del sitio XML y declararlo en robots.txt

## Contenido {#contenido}

Esta sección evalúa si el contenido está estructurado y descrito correctamente para los motores de búsqueda.

**Aspectos evaluados:**

- **Título de la página**: Verifica que exista un título descriptivo y único
- **Meta-descripción**: Comprueba la presencia de meta-descripción
- **Etiquetas de encabezado**: Evalúa la estructura de encabezados
- **Enlaces descriptivos**: Analiza si los textos de enlace son descriptivos
- **hreflang**: Verifica el uso correcto para sitios multilingües

**Recomendaciones:**
- Crear títulos únicos de 50-60 caracteres
- Escribir meta-descripciones de 120-158 caracteres
- Estructurar contenido con jerarquía lógica de encabezados (h1-h6)
- Usar textos descriptivos en enlaces (evitar "haz clic aquí")
- Implementar hreflang correctamente para contenido en múltiples idiomas

## Móvil {#movil}

Lighthouse evalúa si tu sitio está optimizado para dispositivos móviles, un factor crucial para el SEO moderno.

**Aspectos evaluados:**

- **Viewport**: Verifica configuración adecuada del viewport
- **Tamaño de contenido**: Comprueba que el contenido se ajuste al viewport
- **Legibilidad**: Evalúa si el tamaño de texto es adecuado
- **Táctil**: Analiza espaciado entre elementos táctiles

**Recomendaciones:**
- Configurar correctamente la meta etiqueta viewport
- Diseñar con enfoque "mobile-first"
- Usar tamaños de fuente legibles (mínimo 16px)
- Asegurar espaciado adecuado entre elementos táctiles (mínimo 8mm)
- Implementar diseño responsive

## Elementos estructurados {#estructurados}

Esta área evalúa características técnicas que mejoran cómo los motores de búsqueda entienden e indexan tu contenido.

**Aspectos evaluados:**

- **Datos estructurados**: Verifica la implementación de Schema.org
- **Enlaces canónicos**: Comprueba el uso correcto de URLs canónicas
- **HTTP/HTTPS**: Evalúa redirecciones y seguridad
- **Plug-ins**: Detecta el uso de contenido que requiere plug-ins

**Recomendaciones:**
- Implementar datos estructurados (Schema.org) para rich snippets
- Configurar correctamente URLs canónicas para evitar contenido duplicado
- Asegurar redirecciones adecuadas de HTTP a HTTPS
- Evitar tecnologías que requieran plugins como Flash

## Auditando más allá de Lighthouse

Aunque Lighthouse proporciona una excelente base para el SEO técnico, existen aspectos que no puede evaluar automáticamente:

- **Calidad del contenido**: Relevancia, originalidad y profundidad
- **Experiencia de usuario**: Comportamiento real de los usuarios en el sitio
- **Autoridad del dominio**: Perfil de enlaces externos
- **Factores locales**: Optimización para búsquedas locales
- **Intención de búsqueda**: Alineación con lo que buscan los usuarios

## Herramientas complementarias

Para un análisis SEO completo, considera complementar Lighthouse con:

- Google Search Console
- Bing Webmaster Tools
- SEMrush o Ahrefs
- Google Analytics
- PageSpeed Insights
- Mobile-Friendly Test

## Impacto en el posicionamiento

Mejorar las puntuaciones de SEO en Lighthouse puede contribuir positivamente a:

1. **Mayor visibilidad** en resultados de búsqueda
2. **Mejor experiencia de usuario**, lo que reduce tasas de rebote
3. **Incremento del tráfico orgánico**
4. **Mayor accesibilidad** para usuarios con discapacidades
5. **Mejor rendimiento** en dispositivos móviles

Recuerda que el SEO es un proceso continuo que va más allá de solucionar los problemas técnicos identificados por Lighthouse. Combina estos resultados con estrategias de contenido y análisis del comportamiento de usuarios para maximizar tu posicionamiento en buscadores.

En la siguiente sección, exploraremos la auditoría de Aplicaciones Web Progresivas (PWA) y cómo Lighthouse evalúa la capacidad de tu sitio para funcionar como una aplicación.