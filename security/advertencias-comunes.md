---
sidebar_label: 'Advertencias Comunes'
sidebar_position: 6
---

# Advertencias Comunes de Seguridad

El inspector de elementos genera diversas advertencias relacionadas con la seguridad que los desarrolladores deben identificar y resolver. Esta sección cubre las más frecuentes y sus soluciones.

## Problemas de certificados

### Certificado autofirmado

```
Error: NET::ERR_CERT_AUTHORITY_INVALID
Causa: Certificado no emitido por una autoridad confiable
```

**Solución**: Reemplazar por un certificado emitido por una CA reconocida como Let's Encrypt, Comodo o DigiCert.

### Nombre incorrecto en certificado

```
Error: NET::ERR_CERT_COMMON_NAME_INVALID
Causa: El dominio accedido no coincide con el certificado
```

**Solución**: Obtener un certificado que incluya explícitamente todos los nombres de dominio necesarios o usar un certificado wildcard.

### Certificado caducado

```
Error: NET::ERR_CERT_DATE_INVALID
Causa: El certificado ha superado su fecha de validez
```

**Solución**: Renovar el certificado inmediatamente y configurar alertas de renovación.

## Problemas de contenido mixto

### Bloqueado: Contenido mixto activo

```
Mixed Content: The page was loaded over HTTPS, but requested an insecure script/stylesheet/iframe
```

**Solución**: Actualizar todas las URLs a HTTPS o implementar el header `Content-Security-Policy: upgrade-insecure-requests`

### Advertencia: Contenido mixto pasivo

```
Mixed Content: The page includes content that was loaded over HTTP
```

**Solución**: Actualizar todas las URLs de recursos a HTTPS, incluidas imágenes y medios.

## Advertencias de cookies

### Cookies sin flags de seguridad

```
Cookie "session_id" does not have the "secure" attribute
Cookie "user_data" does not have the "HttpOnly" attribute
```

**Solución**: Configurar cookies sensibles con los atributos Secure, HttpOnly y SameSite=Strict.

```javascript
// Ejemplo de configuración correcta
document.cookie = "session_id=abc123; Secure; HttpOnly; SameSite=Strict";
```

### Cookies SameSite

```
A cookie is being set without the "SameSite" attribute
```

**Solución**: Especificar el atributo SameSite apropiado para cada cookie (Strict, Lax o None).

## Problemas de CSP

### Violaciones de CSP

```
Refused to load the script 'https://example.com/script.js' because it violates the Content Security Policy
```

**Solución**: Actualizar la política CSP para incluir los orígenes legítimos necesarios.

### Directivas obsoletas

```
The Content Security Policy 'referrer' directive is deprecated
```

**Solución**: Actualizar a las directivas actuales según la especificación CSP.

## Problemas de permisos

### Solicitudes de permisos bloqueadas

```
Permission request for geolocation was automatically denied because it was not requested from a secure origin
```

**Solución**: Asegurar que todas las solicitudes de permisos provengan de contextos seguros (HTTPS).

## Problemas de CORS

### Errores de CORS

```
Access to fetch at 'https://api.example.com' from origin 'https://app.example.com' has been blocked by CORS policy
```

**Solución**: Configurar los headers CORS adecuados en el servidor:

```
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## Depuración efectiva

### Herramientas incorporadas

- **Filtros de consola**: Utiliza el nivel "Security" para filtrar solo advertencias de seguridad
- **Preservar registro**: Activa "Preserve log" para mantener mensajes entre navegaciones
- **Código de origen**: Ubica rápidamente el origen de las advertencias mediante los enlaces en consola

### Pasos de resolución

1. Identificar el tipo exacto de advertencia
2. Localizar el recurso o configuración problemática
3. Aplicar la solución recomendada
4. Volver a probar para verificar que se ha resuelto
5. Documentar la solución para futuros desarrollos

## Herramientas complementarias

- Escáneres de vulnerabilidades web
- Analizadores de headers de seguridad
- Pruebas de penetración automatizadas
- Verificadores de configuración SSL/TLS

Utilizar estas herramientas junto con el inspector de elementos para una protección más completa.