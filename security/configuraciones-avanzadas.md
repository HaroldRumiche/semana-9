---
sidebar_label: 'Configuraciones Avanzadas'
sidebar_position: 8
---

# Configuraciones Avanzadas de Seguridad

Esta sección cubre técnicas y configuraciones avanzadas para mejorar la seguridad de aplicaciones web utilizando el inspector de elementos como herramienta de análisis y verificación.

## Configuración avanzada de HTTPS

### OCSP Stapling

Mejora la privacidad y rendimiento de la verificación de certificados.

```nginx
# Ejemplo en Nginx
ssl_stapling on;
ssl_stapling_verify on;
ssl_trusted_certificate /path/to/ca-certs.pem;
resolver 8.8.8.8 8.8.4.4 valid=300s;
```

### Certificate Transparency

Implementa registros CT para detectar certificados fraudulentos:

```
Expect-CT: max-age=86400, enforce, report-uri="https://example.com/report-ct"
```

### HPKP (con precaución)

HTTP Public Key Pinning protege contra certificados falsificados:

```
Public-Key-Pins: pin-sha256="base64=="; pin-sha256="base64=="; max-age=5184000; includeSubDomains
```

**Nota**: Implementar HPKP con extrema precaución, pues puede bloquear acceso al sitio si se configura incorrectamente.

## CSP avanzada

### Nonces y hashes

Para permitir scripts inline específicos sin 'unsafe-inline':

```html
<script nonce="2726c7f26c">
  // Script seguro
</script>
```

```
Content-Security-Policy: script-src 'self' 'nonce-2726c7f26c'
```

Para scripts estáticos:

```
Content-Security-Policy: script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='
```

### Directivas modernas

```
Content-Security-Policy:
  script-src 'self';
  style-src 'self';
  img-src 'self';
  font-src 'self';
  connect-src 'self';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
  require-trusted-types-for 'script';
  trusted-types default;
  upgrade-insecure-requests;
```

### CSP en meta tags

Para sitios sin acceso a configuración de servidor:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

## Subresource Integrity (SRI)

Verifica la integridad de recursos externos:

```html
<script src="https://cdn.example.com/script.js" 
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC" 
  crossorigin="anonymous">
</script>
```

Verifica la implementación con el inspector:

1. Panel Elements > Ver atributos del elemento script
2. Panel Network > Ver si la integridad se verificó correctamente

## Configuración de Fetch Metadata

Protección contra ataques CSRF y abuso de recursos:

```
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
```

Implementación con políticas en el servidor:

```
# Ejemplo de política de aislamiento
if (request.headers['sec-fetch-site'] != 'same-origin' &&
    (request.headers['sec-fetch-dest'] == 'document' ||
     request.method == 'POST')) {
  return forbidden();
}
```

## Cross-Origin Resource Policy (CORP)

Protección contra ataques de filtración de información:

```
Cross-Origin-Resource-Policy: same-origin
```

## Cross-Origin Opener Policy (COOP)

Aislamiento de sitios cruzados:

```
Cross-Origin-Opener-Policy: same-origin
```

## Cross-Origin Embedder Policy (COEP)

Controla qué recursos pueden incrustarse:

```
Cross-Origin-Embedder-Policy: require-corp
```

## Análisis avanzado con el inspector

### Depuración de Trusted Types

1. Habilitar CSP con require-trusted-types-for
2. Usar la consola para depurar violaciones de Trusted Types
3. Verificar la creación de políticas de confianza

### Análisis de WebAssembly

1. Examinar módulos WASM cargados en la aplicación
2. Verificar fuentes e integridad de estos módulos
3. Comprobar que solo se cargan desde orígenes confiables

### Inspección de Service Workers

1. Abrir la pestaña Application
2. Examinar Service Workers registrados
3. Verificar el origen y alcance de cada Service Worker
4. Comprobar las políticas de actualización

## Hardening adicional

### Secure DevTools

Configura el servidor para detectar y bloquear intentos de manipulación vía DevTools:

```javascript
// Detección de DevTools abiertos (implementar con precaución)
const devToolsOpen = () => {
  const threshold = 160;
  return window.outerWidth - window.innerWidth > threshold ||
         window.outerHeight - window.innerHeight > threshold;
};

// Acción al detectar DevTools
if (devToolsOpen()) {
  // Registro de evento o acción defensiva
}
```

### Ofuscación selectiva

Protege código sensible con ofuscación, verificable con el inspector:

```javascript
// Antes de ofuscación
function validateToken(token) {
  return token === storedToken;
}

// Después de ofuscación (ejemplo simplificado)
eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9 8(7){6 7===5}',10,10,'|||||storedToken|return|token|validateToken|function'.split('|'),0,{}))
```

## Verificación de seguridad con el inspector

### Auditoría de seguridad con Lighthouse

1. Abre el inspector y navega a la pestaña Lighthouse
2. Selecciona la categoría "Best Practices"
3. Ejecuta la auditoría y revisa las recomendaciones de seguridad
4. Implementa las mejoras sugeridas y vuelve a verificar

### Análisis de vulnerabilidades con la consola

1. Monitorea la consola en busca de advertencias de seguridad
2. Verifica errores relacionados con CSP, CORS o SRI
3. Utiliza `console.table()` para registrar y analizar intentos de acceso sospechosos:

```javascript
// Implementación de monitoreo de seguridad
function securityMonitor() {
  const events = [];
  document.addEventListener('submit', e => {
    events.push({
      type: 'form-submit',
      target: e.target.action,
      timestamp: new Date().toISOString()
    });
    console.table(events);
  });
}
```

### Verificación de cookies seguras

1. Abre la pestaña Application > Storage > Cookies
2. Verifica que las cookies sensibles tengan los flags:
   - HttpOnly
   - Secure
   - SameSite (Strict o Lax)
3. Comprueba fechas de expiración adecuadas

## Detección de ataques con el inspector

### Identificación de XSS

Utiliza el inspector para verificar la correcta sanitización de datos:

1. Inserta datos de prueba en formularios
2. Observa cómo se renderizan en el DOM
3. Verifica que los caracteres especiales estén correctamente codificados

### Detección de clickjacking

1. Inspecciona los headers de respuesta para verificar:
   ```
   X-Frame-Options: DENY
   Content-Security-Policy: frame-ancestors 'none'
   ```
2. Prueba la carga del sitio en un iframe para confirmar la protección

### Análisis de CSRF

1. Examina los tokens CSRF en formularios
2. Verifica que los tokens sean:
   - Únicos por sesión
   - Validados en cada solicitud
   - No expuestos en URLs

## Conclusión

El inspector de elementos es una herramienta fundamental para verificar la implementación correcta de configuraciones avanzadas de seguridad. Utilizándolo sistemáticamente, los desarrolladores pueden detectar y corregir vulnerabilidades antes de que sean explotadas.

Recuerda que la seguridad es un proceso continuo que requiere monitoreo constante y adaptación a nuevas amenazas y técnicas de protección.
