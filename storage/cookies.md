---
sidebar_label: 'Cookies'
sidebar_position: 2
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Inspección y Gestión de Cookies

Las cookies son pequeños fragmentos de datos que los sitios web almacenan en el navegador del usuario. Son fundamentales para mantener el estado de la sesión, personalizar la experiencia del usuario y recopilar datos de análisis.

## Acceso al panel de Cookies

Para inspeccionar las cookies almacenadas:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application" (Chrome/Edge) o "Storage" (Firefox)
3. En el panel izquierdo, expande "Cookies" y selecciona el dominio que deseas inspeccionar

## Anatomía de una Cookie

El panel de Cookies muestra la siguiente información para cada cookie:

- **Name**: El identificador único de la cookie
- **Value**: El valor almacenado en la cookie
- **Domain**: El dominio al que pertenece la cookie
- **Path**: La ruta específica a la que se aplica la cookie
- **Expires / Max-Age**: Cuándo expirará la cookie
- **Size**: Tamaño en bytes
- **HTTP**: Si la cookie es accesible solo mediante HTTP (HttpOnly)
- **Secure**: Si la cookie se envía solo a través de conexiones HTTPS
- **SameSite**: Política de envío de cookies en solicitudes cross-site
- **Priority**: Prioridad de la cookie (baja, media, alta)
- **Partitioned**: Si la cookie utiliza el nuevo atributo Partitioned

![Panel de Cookies](https://via.placeholder.com/800x400)

## Filtrado y búsqueda de Cookies

Para encontrar rápidamente cookies específicas:

1. Utiliza el campo de búsqueda en la parte superior del panel
2. Introduce el nombre, valor o cualquier propiedad de la cookie
3. Los resultados se filtrarán automáticamente mientras escribes

## Creación y modificación de Cookies

Para crear o modificar una cookie:

1. Haz clic derecho en el área del panel de cookies
2. Selecciona "Add cookie" para crear una nueva, o haz doble clic en una existente para editarla
3. Completa el formulario con los detalles de la cookie:
   - Nombre y valor
   - Dominio y ruta
   - Fecha de expiración
   - Atributos de seguridad (HttpOnly, Secure, SameSite)

![Formulario de edición de Cookies](https://via.placeholder.com/600x400)

## Eliminación de Cookies

Para eliminar cookies:

- **Eliminar una cookie individual**: Selecciona la cookie y presiona la tecla Delete, o haz clic derecho y selecciona "Delete"
- **Eliminar todas las cookies de un dominio**: Haz clic derecho en el dominio y selecciona "Clear"
- **Eliminar todas las cookies**: Haz clic en el botón "Clear All" en la parte superior del panel

## Cookies de terceros vs. propias

El inspector de elementos distingue entre:
- **Cookies propias**: Pertenecen al dominio que estás visitando actualmente
- **Cookies de terceros**: Pertenecen a dominios externos

Con las restricciones modernas de privacidad, es importante entender la visibilidad de las cookies de terceros en el inspector de elementos.

## Depuración común con Cookies

### Verificar el estado de autenticación

```javascript
// Inspeccionar cookies de sesión
document.cookie
```

### Solucionar problemas de SameSite

Verifica el atributo SameSite en cookies que necesitan ser enviadas en solicitudes cross-site:
- `None`: Permite el envío cross-site (requiere atributo Secure)
- `Lax`: Restringe envíos cross-site excepto al navegar a la URL destino
- `Strict`: No permite envío en ninguna solicitud cross-site

### Comprobar problemas de expiración

Verifica la columna "Expires / Max-Age" para asegurarte de que las cookies no estén expirando prematuramente o persistiendo demasiado tiempo.

## Consideraciones de seguridad y privacidad

Al trabajar con cookies, ten en cuenta:

- **HttpOnly**: Evita el acceso mediante JavaScript, protegiendo contra ataques XSS
- **Secure**: Asegura que la cookie solo se envíe a través de HTTPS
- **SameSite**: Controla cuándo se envían las cookies en solicitudes cross-site
- **Expires**: Define cuánto tiempo persiste la cookie
- **Domain y Path**: Limita el alcance de la cookie

## Consejos para desarrolladores

- Usa el inspector para verificar que las cookies se establecen con los atributos de seguridad correctos
- Comprueba la expiración de las cookies para diagnosticar problemas de sesión
- Utiliza el filtrado para encontrar rápidamente cookies específicas en sitios con muchas cookies
- Modifica cookies para probar diferentes estados de autenticación o preferencias de usuario
- Elimina cookies para simular un primer inicio de sesión o visita al sitio

Con el conocimiento adecuado del panel de Cookies, puedes depurar eficientemente problemas relacionados con la autenticación, personalización y estado del usuario en tus aplicaciones web.