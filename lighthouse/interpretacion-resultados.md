---
id : interpretacion-resultados
sidebar_position: 8
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Interpretación de Resultados de Lighthouse

Una vez que Lighthouse ha generado un informe de auditoría para tu sitio web, es crucial saber cómo interpretar los resultados y establecer prioridades para las mejoras. En esta sección, aprenderás a analizar el informe, comprender las puntuaciones y métricas, y desarrollar un plan de acción eficaz.

## Estructura del informe

<DocsCards>
  <DocsCard
    header="Puntuación global"
    href="/lighthouse/interpretacion-resultados#puntuacion-global"
  >
    <p>Comprende el significado de la puntuación general y cómo se calcula.</p>
  </DocsCard>
  
  <DocsCard
    header="Puntuaciones por categoría"
    href="/lighthouse/interpretacion-resultados#puntuaciones-categoria"
  >
    <p>Analiza en detalle las puntuaciones en cada una de las cinco categorías principales.</p>
  </DocsCard>
  
  <DocsCard
    header="Auditorías individuales"
    href="/lighthouse/interpretacion-resultados#auditorias-individuales"
  >
    <p>Examina los resultados de pruebas específicas y sus recomendaciones.</p>
  </DocsCard>
  
  <DocsCard
    header="Métricas clave"
    href="/lighthouse/interpretacion-resultados#metricas-clave"
  >
    <p>Enfócate en las métricas principales que impactan directamente la experiencia del usuario.</p>
  </DocsCard>
</DocsCards>

## Puntuación global {#puntuacion-global}

La puntuación global de Lighthouse representa un promedio ponderado de las diferentes categorías y se muestra como un valor de 0 a 100 en un medidor circular.

**Interpretación de la puntuación:**

- **0-49 (Rojo)**: Rendimiento pobre, necesita mejoras significativas
- **50-89 (Naranja)**: Rendimiento moderado, hay margen para optimizaciones
- **90-100 (Verde)**: Rendimiento excelente, cumple con las mejores prácticas

**Consideraciones importantes:**

- La puntuación global puede ocultar problemas específicos importantes
- Una puntuación alta no garantiza una experiencia perfecta para todos los usuarios
- Las puntuaciones pueden variar entre ejecuciones debido a factores externos
- Es más útil enfocarse en las categorías individuales y sus métricas

## Puntuaciones por categoría {#puntuaciones-categoria}

Cada categoría recibe una puntuación independiente y tiene un peso diferente en el resultado global.

**Rendimiento (Peso significativo):**
- Relacionado directamente con la velocidad percibida
- Incluye métricas como LCP, FID, CLS, TTI
- Variabilidad alta entre pruebas

**Accesibilidad:**
- Basada en pruebas automatizadas (aproximadamente 30% de WCAG)
- Puntuación = porcentaje de pruebas pasadas

**Buenas Prácticas:**
- Cada prueba tiene el mismo peso
- Puntuación = porcentaje de pruebas pasadas

**SEO:**
- Aspectos técnicos de optimización para buscadores
- No evalúa calidad de contenido, autoridad o backlinks

**PWA:**
- Conjunto específico de requisitos para aplicaciones web progresivas
- Puntuación binaria (pasa/no pasa) para cada prueba

## Auditorías individuales {#auditorias-individuales}

Cada auditoría proporciona información específica sobre un aspecto del sitio web y suele incluir:

**Componentes de la auditoría:**
- **Título**: Descripción breve del test
- **Descripción**: Explicación detallada del problema
- **Estado**: Pasado, fallido o informativo
- **Impacto**: Estimación del efecto en la puntuación
- **Recursos afectados**: Lista de archivos o elementos problemáticos
- **Recomendaciones**: Sugerencias para resolver el problema
- **Documentación**: Enlaces a recursos de ayuda

**Tipos de resultados:**
- **Aprobado (Passed)**: Cumple con los criterios
- **Fallido (Failed)**: No cumple con los requisitos
- **No aplicable (Not applicable)**: No relevante para este sitio
- **Manual (Manual)**: Requiere verificación manual

## Métricas clave {#metricas-clave}

Algunas métricas tienen mayor impacto en la experiencia del usuario y deben priorizarse:

**Core Web Vitals:**
- **Largest Contentful Paint (LCP)**: Tiempo de carga del contenido principal
- **First Input Delay (FID)**: Tiempo de respuesta a interacción
- **Cumulative Layout Shift (CLS)**: Estabilidad visual

**Otras métricas importantes:**
- **Time to Interactive (TTI)**: Tiempo hasta que la página es interactiva
- **Total Blocking Time (TBT)**: Tiempo en que el hilo principal está bloqueado
- **Speed Index**: Velocidad de visualización del contenido

## Estableciendo prioridades

Al interpretar los resultados, sigue estos pasos para establecer prioridades eficaces:

1. **Enfócate primero en Core Web Vitals**
   - LCP, FID/TBT y CLS tienen el mayor impacto en usuarios y SEO

2. **Identifica "quick wins"**
   - Optimizaciones simples con alto impacto:
     - Imágenes sin optimizar
     - Recursos no comprimidos
     - JavaScript no necesario

3. **Balancear esfuerzo vs. impacto**
   - Clasificar problemas por:
     - Impacto en la puntuación
     - Impacto en la experiencia real
     - Dificultad de implementación

4. **Priorizar por audiencia**
   - Considerar dispositivos y conexiones de usuarios reales
   - Enfocarse en problemas que afectan a la mayoría

## Ejemplo de plan de acción basado en resultados

1. **Rendimiento (70/100)**
   - Optimizar imágenes principales (LCP)
   - Diferir JavaScript no crítico
   - Implementar cache eficiente

2. **Accesibilidad (65/100)**
   - Agregar etiquetas a todos los campos de formulario
   - Mejorar contraste de colores
   - Añadir textos alternativos a imágenes

3. **Buenas Prácticas (82/100)**
   - Actualizar librerías con vulnerabilidades
   - Corregir errores de consola
   - Implementar HTTPS para todos los recursos

4. **SEO (95/100)**
   - Añadir meta descripción faltante
   - Ajustar tamaño de fuente en móvil

5. **PWA (40/100)**
   - Implementar Service Worker básico
   - Crear manifest.json completo
   - Configurar página offline

## Factores que afectan los resultados

Al interpretar resultados, considera estos factores que pueden afectar las puntuaciones:

- **Variabilidad de red**: Latencia, ancho de banda
- **Variabilidad de CPU**: Throttling, carga del sistema
- **Extensiones de navegador**: Pueden interferir con mediciones
- **Caché**: Estado de la caché del navegador
- **Servidores de terceros**: Rendimiento de recursos externos
- **Tamaño de laboratorio vs. datos reales**: Las pruebas de Lighthouse son en entorno controlado

## Comparación con datos reales

Para una interpretación completa, compara Lighthouse con datos de usuarios reales:

- **Chrome User Experience Report (CrUX)**
- **Google Analytics**
- **Herramientas RUM (Real User Monitoring)**
- **Field Data en PageSpeed Insights**

## Mejora continua

La interpretación de resultados debe ser parte de un proceso de mejora continua:

1. **Auditar regularmente**: Programar auditorías periódicas
2. **Comparar historial**: Analizar tendencias a lo largo del tiempo
3. **Establecer objetivos**: Definir puntuaciones mínimas por categoría
4. **Documentar cambios**: Mantener registro de optimizaciones y su impacto
5. **Integrar en CI/CD**: Automatizar pruebas en el flujo de desarrollo

Siguiendo estas prácticas de interpretación, podrás transformar los resultados de Lighthouse en mejoras concretas que beneficien tanto a los usuarios como al posicionamiento y rendimiento de tu sitio web.