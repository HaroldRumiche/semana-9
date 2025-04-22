---
id : headers-seguridad
sidebar_position: 5
---

# Headers de Seguridad HTTP

Los headers de seguridad HTTP son directivas que el servidor envía al navegador para mejorar la postura de seguridad de un sitio web. El inspector de elementos permite analizar y verificar estos headers en cada respuesta.

## Headers principales

### Strict-Transport-Security (HSTS)

Fuerza las conexiones HTTPS, incluso antes del primer contacto.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

- **max-age**: Duración en segundos que el navegador recordará usar HTTPS
- **includeSubDomains**: Aplica la política a subdominios
- **preload**: Indica que el sitio puede incluirse en la lista HSTS precompilada

### X-Content-Type-Options

Previene el MIME-sniffing, forzando a los navegadores a utilizar el tipo de contenido declarado.

```
X-Content-Type-Options: nosniff
```

### X-Frame-Options

Controla si una página puede ser embebida en frames, iframes o objetos, protegiendo contra ataques de clickjacking.

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
X-Frame-Options: ALLOW-FROM https://ejemplo.com
```

### X-XSS-Protection

Habilita filtros contra XSS en navegadores antiguos (los modernos utilizan CSP).

```
X-XSS-Protection: 1; mode=block
```

### Referrer-Policy

Controla qué información de referencia se incluye en las solicitudes.

```
Referrer-Policy: no-referrer
Referrer-Policy: strict-origin-when-cross-origin
```

### Permissions-Policy (anteriormente Feature-Policy)

Controla qué características del navegador pueden utilizarse.

```
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
```

### Cache-Control

Gestiona el almacenamiento en caché de recursos sensibles.

```
Cache-Control: no-store, max-age=0
```

## Análisis en el inspector

Para verificar headers de seguridad:

1. Abre el panel Network
2. Selecciona una solicitud
3. Revisa la pestaña Headers
4. Examina los headers en la sección Response Headers

## Evaluación de implementación

El panel Security proporciona una evaluación del conjunto de headers implementados:

- **Implementación completa**: Todos los headers críticos están presentes
- **Implementación parcial**: Faltan algunos headers recomendados
- **Implementación mínima**: Protección básica solamente
- **Implementación insuficiente**: Faltan headers críticos

## Problemas comunes

| Problema | Posible solución |
|----------|------------------|
| Headers inconsistentes entre recursos | Configurar servidor para aplicar headers globalmente |
| Valores débiles o mal configurados | Revisar las recomendaciones actuales de OWASP |
| Headers duplicados | Consolidar configuraciones en el servidor |
| Headers obsoletos | Actualizar a alternativas modernas |

## Configuración por servidor

### Apache

```apache
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Nginx

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### Configuración programática

```javascript
// Express.js
const helmet = require('helmet');
app.use(helmet());
```

## Mejores prácticas

- Implementar todos los headers críticos de seguridad
- Verificar que se apliquen a todos los recursos, no solo HTML
- Comprobar la implementación con herramientas de análisis automático
- Mantener headers actualizados según evolucionen los estándares
- Combinar headers de seguridad con otras medidas como CSP