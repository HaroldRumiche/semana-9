---
id : politicas-contenido
sidebar_position: 4
---

# Políticas de Seguridad de Contenido

Las políticas de seguridad de contenido (CSP) proporcionan una capa adicional de seguridad para detectar y mitigar ciertos tipos de ataques, incluyendo Cross-Site Scripting (XSS) e inyecciones de datos.

## Fundamentos de CSP

Content Security Policy funciona declarando qué recursos pueden ser cargados y ejecutados en una página web. Estas directivas se envían mediante:

- Headers HTTP
- Meta tags HTML

## Configuración y análisis en el inspector

Para verificar las políticas CSP de un sitio:

1. Abre el panel Security/Seguridad
2. Selecciona la sección "Content Security Policy"
3. Revisa las directivas implementadas y sus efectos

## Directivas principales

| Directiva | Descripción | Ejemplo |
|-----------|-------------|---------|
| `default-src` | Directiva comodín para recursos no especificados | `default-src 'self'` |
| `script-src` | Controla scripts válidos | `script-src 'self' https://apis.google.com` |
| `style-src` | Controla hojas de estilo | `style-src 'self' https://fonts.googleapis.com` |
| `img-src` | Controla imágenes | `img-src 'self' https://img.ejemplo.com` |
| `connect-src` | Controla destinos de conexiones | `connect-src 'self' https://api.ejemplo.com` |
| `font-src` | Controla fuentes web | `font-src 'self' https://fonts.gstatic.com` |
| `frame-src` | Controla iframes | `frame-src 'self' https://youtube.com` |
| `report-uri` | Endpoint para informes de violaciones | `report-uri /csp-report-endpoint` |

## Valores comunes

- `'self'`: Permite recursos del mismo origen
- `'none'`: No permite ningún recurso
- `'unsafe-inline'`: Permite código inline (evitar si es posible)
- `'unsafe-eval'`: Permite eval() (evitar si es posible)
- `'nonce-{random}'`: Permite scripts con nonce específico
- `'sha256-{hash}'`: Permite contenido con hash específico

## Modo de reporte

El "Report-Only" permite probar políticas sin bloquear contenido:

```
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report-endpoint
```

## Análisis de violaciones

Utiliza el inspector para:

1. Detectar violaciones de CSP en la consola
2. Analizar detalles de bloqueos
3. Verificar los informes enviados a endpoints

## Depuración de problemas comunes

| Problema | Solución |
|----------|----------|
| Scripts bloqueados | Verificar directiva `script-src` e incluir orígenes necesarios |
| Estilos inline bloqueados | Migrar a archivos CSS o usar nonces/hashes |
| Imágenes no cargadas | Comprobar `img-src` e incluir CDNs utilizados |
| Errores de conexión API | Actualizar `connect-src` con endpoints de API |

## Implementación gradual

1. Comenzar con Report-Only
2. Analizar los informes de violaciones
3. Ajustar las directivas según sea necesario
4. Implementar la política en modo de aplicación

## Herramientas de diagnóstico

- **Consola de desarrollador**: Muestra infracciones detalladas
- **Panel Network**: Verifica headers CSP enviados
- **Generadores de políticas**: CSP Evaluator, Report-URI CSP Builder
- **Laboratorios de pruebas**: CSP Playground

## Mejores prácticas

- Evitar 'unsafe-inline' y 'unsafe-eval'
- Utilizar nonces o hashes para contenido inline necesario
- Implementar CSP junto con otros headers de seguridad
- Mantener actualizada la política conforme evoluciona el sitio
- Usar report-uri para monitorizar violaciones