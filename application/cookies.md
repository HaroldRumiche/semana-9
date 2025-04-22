---
id : cookies
sidebar_position: 7
---

# Cookies

Las cookies son pequeños fragmentos de datos que los sitios web almacenan en el navegador del usuario. Se utilizan para recordar información de estado, preferencias, sesiones de usuario y más.

## Acceso al panel de Cookies

Para inspeccionar y administrar cookies:

1. Abre DevTools (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application"
3. Selecciona "Cookies" en el panel lateral y elige el dominio relevante

## Visualización de cookies

El panel muestra una tabla completa con todas las cookies del sitio actual, incluyendo:

- **Name**: Nombre de la cookie
- **Value**: Valor almacenado
- **Domain**: Dominio asociado a la cookie
- **Path**: Ruta en la que está disponible la cookie
- **Expires / Max-Age**: Fecha de expiración o duración máxima
- **Size**: Tamaño en bytes
- **HttpOnly**: Si la cookie es accesible solo mediante HTTP (no JavaScript)
- **Secure**: Si la cookie solo se envía a través de conexiones HTTPS
- **SameSite**: Política de SameSite (Strict, Lax, None)
- **Priority**: Prioridad de la cookie (si está implementada)
- **Partition Key**: Clave de partición para cookies particionadas (si está disponible)

## Operaciones con cookies

El panel permite varias acciones:

- **Refresh**: Actualiza la lista de cookies
- **Clear all**: Elimina todas las cookies del dominio
- **Delete**: Elimina una cookie específica
- **Filter**: Filtra cookies por nombre o valor

## Tipos de cookies y atributos

### Por duración

- **Session cookies**: Se eliminan al cerrar el navegador (sin Expires/Max-Age)
- **Persistent cookies**: Permanecen hasta su fecha de expiración específica

### Por ámbito

- **First-party cookies**: Pertenecen al dominio que se visita directamente
- **Third-party cookies**: Pertenecen a dominios externos al visitado
- **Partitioned cookies**: Aisladas por contexto (CHIPS)

### Atributos de seguridad

| Atributo | Descripción | Implicación |
|----------|-------------|-------------|
| HttpOnly | No accesible via JavaScript | Protege contra XSS |
| Secure | Solo enviada por HTTPS | Protege contra sniffing |
| SameSite=Strict | Solo enviada en navegación del mismo sitio | Protege contra CSRF |
| SameSite=Lax | Enviada en navegación del mismo sitio y top-level GET | Balance entre seguridad y usabilidad |
| SameSite=None | Enviada en cualquier contexto (requiere Secure) | Necesaria para funcionalidad cross-site |

## Depuración de problemas comunes

### Análisis de cookies

El panel permite identificar:

- Cookies mal configuradas (dominio/path incorrecto)
- Cookies bloqueadas por políticas del navegador
- Conflictos entre cookies
- Cookies que exceden límites de tamaño
- Problemas de expiración

### Simulación de escenarios

Para probar diferentes configuraciones:

1. Elimina cookies específicas para simular primer inicio
2. Modifica valores para probar diferentes estados
3. Verifica el comportamiento de SameSite para flujos cross-origin

## Cookies y regulaciones de privacidad

El panel facilita la verificación de cumplimiento con:

- GDPR/ePrivacy: Consentimiento para cookies no esenciales
- CCPA/CPRA: Opciones de opt-out para venta de datos
- Directivas del navegador sobre cookies de terceros

## Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| Cookie no establecida | Verifica la respuesta HTTP para Set-Cookie |
| Cookie no enviada | Comprueba dominio, path y atributos SameSite |
| Valor incorrecto | Examina la codificación/decodificación de valores |
| Expiración prematura | Verifica la fecha de expiración y zona horaria |
| Cookie bloqueada | Consulta la configuración de privacidad del navegador |

## Mejores prácticas

- Utiliza el prefijo `__Secure-` para cookies que requieren HTTPS
- Implementa SameSite=Lax o Strict cuando sea posible
- Evita almacenar datos sensibles en cookies
- Mantén el tamaño de las cookies al mínimo
- Configura correctamente el dominio para limitar el alcance
- Utiliza HttpOnly para cookies que no necesitan acceso via JavaScript
- Establece fechas de expiración apropiadas según el propósito

## Tendencias y evolución

El panel de Cookies permite seguir la adopción de:

- **Cookies particionadas**: Aislamiento por contexto top-level
- **First-Party Sets**: Agrupación de dominios relacionados
- **Storage Access API**: Solicitud explícita de acceso a cookies cross-site
- **Cookies encriptadas**: Valores protegidos con encriptación

La administración efectiva de cookies es esencial para el funcionamiento de muchas aplicaciones web, y el panel de Cookies en DevTools proporciona todas las herramientas necesarias para inspeccionar, depurar y optimizar su uso.