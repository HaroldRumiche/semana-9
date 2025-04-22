---
id: buenas-practicas
sidebar_position: 5
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Auditoría de Buenas Prácticas en Lighthouse

La categoría "Buenas Prácticas" evalúa si tu sitio web sigue las recomendaciones actuales de desarrollo web seguro, moderno y de calidad. Estas prácticas ayudan a evitar problemas de seguridad, garantizar la compatibilidad entre navegadores y ofrecer una experiencia de usuario óptima.

## Áreas principales

<DocsCards>
  <DocsCard
    header="Seguridad Web"
    href="/lighthouse/buenas-practicas#seguridad"
  >
    <p>Evalúa vulnerabilidades y configuraciones de seguridad para proteger a usuarios y datos.</p>
  </DocsCard>
  
  <DocsCard
    header="Prácticas de Código"
    href="/lighthouse/buenas-practicas#codigo"
  >
    <p>Examina la calidad del código y el seguimiento de mejores prácticas de desarrollo.</p>
  </DocsCard>
  
  <DocsCard
    header="Experiencia de Usuario"
    href="/lighthouse/buenas-practicas#ux"
  >
    <p>Verifica elementos que pueden afectar negativamente la experiencia del usuario.</p>
  </DocsCard>
  
  <DocsCard
    header="Compatibilidad"
    href="/lighthouse/buenas-practicas#compatibilidad"
  >
    <p>Comprueba la adherencia a estándares y compatibilidad entre navegadores.</p>
  </DocsCard>
</DocsCards>

## Seguridad Web {#seguridad}

Lighthouse evalúa aspectos clave de seguridad web para identificar potenciales vulnerabilidades.

**Aspectos evaluados:**

- **HTTPS**: Verifica que el sitio utilice HTTPS y redireccione correctamente desde HTTP
- **Certificados SSL**: Comprueba la validez y configuración de certificados
- **Vulnerabilidades conocidas**: Detecta bibliotecas JavaScript con vulnerabilidades conocidas
- **Políticas de seguridad**: Evalúa la configuración de encabezados como Content Security Policy (CSP)

**Recomendaciones:**
- Implementar HTTPS en todo el sitio
- Mantener actualizadas todas las dependencias
- Configurar correctamente encabezados de seguridad
- Evitar mezclado de contenido HTTP/HTTPS
- Implementar Subresource Integrity (SRI) para recursos externos

## Prácticas de Código {#codigo}

Esta sección evalúa el cumplimiento de prácticas de codificación recomendadas.

**Aspectos evaluados:**

- **Uso de console.log**: Detecta llamadas a console.log en producción
- **Errores JavaScript**: Identifica errores no capturados en el código
- **Deprecaciones**: Alerta sobre uso de APIs obsoletas
- **Tamaño de recursos**: Evalúa si los recursos tienen un tamaño adecuado
- **Estructura documental**: Verifica la correcta estructura del documento HTML

**Recomendaciones:**
- Eliminar declaraciones de console.log en producción
- Implementar manejo adecuado de errores
- Actualizar código para evitar APIs obsoletas
- Optimizar tamaños de recursos para el entorno de producción
- Seguir las especificaciones HTML actuales

## Experiencia de Usuario {#ux}

Lighthouse evalúa prácticas que impactan directamente en la experiencia del usuario.

**Aspectos evaluados:**

- **Diseño responsive**: Verifica la configuración del viewport y el diseño adaptable
- **Popups y anuncios intrusivos**: Detecta elementos que interrumpen la experiencia
- **Geolocalización**: Comprueba permisos adecuados para solicitudes de geolocalización
- **Notificaciones**: Evalúa solicitudes de permisos de notificaciones
- **Autoplay**: Identifica reproducción automática de medios con sonido

**Recomendaciones:**
- Configurar correctamente el viewport para dispositivos móviles
- Evitar interstitials y popups intrusivos
- Solicitar permisos de usuario solo después de una interacción
- No reproducir automáticamente medios con sonido
- Proporcionar controles claros para elementos interactivos

## Compatibilidad {#compatibilidad}

Esta área evalúa la adherencia a estándares web y compatibilidad entre navegadores.

**Aspectos evaluados:**

- **Doctype**: Verifica la presencia de una declaración DOCTYPE adecuada
- **Charset**: Comprueba la correcta definición de charset
- **Compatibilidad con navegadores**: Evalúa el uso de características específicas de navegador
- **CORS**: Identifica configuraciones incorrectas en recursos de origen cruzado

**Recomendaciones:**
- Incluir declaración DOCTYPE HTML5
- Definir correctamente charset en el inicio del documento
- Evitar características específicas de un solo navegador
- Configurar correctamente encabezados CORS para recursos externos
- Probar en múltiples navegadores y plataformas

## Ejemplos de pruebas específicas

### Uso de HTTPS
```
URL uses HTTPS
Passed: The page uses HTTPS.
```

### Evitar librerías con vulnerabilidades conocidas
```
Avoids front-end JavaScript libraries with known security vulnerabilities
Failed: Detected library jQuery@1.12.4 with known vulnerabilities.
```

### Pasando validación de imágenes
```
Serves images with appropriate resolution
Passed: All images have appropriate resolution for their display size.
```

## Impacto en el desarrollo

Seguir las buenas prácticas identificadas por Lighthouse:

1. **Reduce riesgos de seguridad** para usuarios y datos
2. **Mejora la mantenibilidad** del código a largo plazo
3. **Asegura compatibilidad** entre diferentes navegadores y dispositivos
4. **Optimiza la experiencia del usuario** al evitar prácticas intrusivas
5. **Facilita el mantenimiento** al seguir estándares de desarrollo
6. **Prepara el sitio** para futuras actualizaciones de navegadores

## Interpretación de resultados

Las pruebas de Buenas Prácticas en Lighthouse son binarias: pasan o fallan. Cada prueba tiene el mismo peso en la puntuación final, que se calcula como el porcentaje de pruebas aprobadas del total.

A diferencia de otras categorías, no hay criterios intermedios - cada prueba es evaluada como "Aprobada" o "Fallida", con información específica sobre qué se necesita corregir.

## Resolución de problemas comunes

### Problemas de seguridad
- Migrar completamente a HTTPS
- Actualizar dependencias periódicamente
- Implementar políticas de seguridad como Content-Security-Policy

### Problemas de código
- Utilizar herramientas de linting como ESLint
- Implementar pruebas automatizadas
- Revisar código para eliminar console.log antes de producción

### Problemas de UX
- Evitar solicitudes de permisos al cargar la página
- Diseñar notificaciones no intrusivas
- Asegurar que el contenido sea accesible en todos los tamaños de pantalla

Mejorar las puntuaciones en esta categoría no solo beneficia a tu sitio técnicamente, sino que también mejora la percepción de profesionalismo y calidad por parte de los usuarios.

La siguiente sección abordará cómo Lighthouse evalúa tu sitio desde el punto de vista de la optimización para motores de búsqueda (SEO).