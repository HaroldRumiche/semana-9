---
id : detalles-peticiones
sidebar_position: 5
---

# Detalles de Peticiones

Al seleccionar cualquier solicitud en el panel Network, se abre un panel de detalles con información exhaustiva sobre esa petición específica. Entender estos detalles es crucial para depurar problemas de red y optimizar las comunicaciones.

## Panel de Headers

La pestaña Headers muestra todos los encabezados HTTP intercambiados:

### Request Headers (Encabezados de solicitud)

Información enviada por el navegador al servidor:

- **Method & URL**: Método HTTP y URL completa
- **User-Agent**: Identificación del navegador/cliente
- **Accept**: Tipos de contenido que el cliente acepta
- **Cookie**: Cookies enviadas al servidor
- **Authorization**: Credenciales de autenticación (si existen)
- **Referer**: Página desde la que se originó la solicitud
- **Origin**: Origen para solicitudes CORS

### Response Headers (Encabezados de respuesta)

Información enviada por el servidor al navegador:

- **Status Code & Text**: Código de estado HTTP y descripción
- **Content-Type**: Tipo MIME del contenido
- **Content-Length**: Tamaño del contenido
- **Cache-Control**: Directivas de caché
- **Set-Cookie**: Cookies que el servidor establece
- **Access-Control-Allow-***: Configuración CORS
- **Content-Encoding**: Método de compresión utilizado

### Visión general

- **General**: Muestra la URL, método y código de estado
- **View source**: Ver encabezados en formato raw
- **Filter**: Filtrar por nombre de encabezado

## Panel de Preview

Ofrece una vista previa formateada de la respuesta:

- **HTML**: Vista renderizada para documentos HTML
- **JSON**: Estructura formateada y navegable para datos JSON
- **XML**: Estructura formateada para XML
- **Imágenes**: Vista previa de imágenes
- **Fuentes**: Información sobre tipografías
- **CSS**: Estilos formateados

## Panel de Response

Muestra el contenido completo de la respuesta:

- **Raw**: Datos sin procesar
- **Formateado**: Con sintaxis destacada para código
- **Search**: Búsqueda dentro del contenido
- **Copy**: Opciones para copiar el contenido
- **Pretty Print**: Formatea código minificado (botón {})

## Panel de Timing

Ofrece un desglose detallado de los tiempos de la solicitud:

- **Queuing**: Tiempo en cola antes de iniciar
- **DNS Lookup**: Resolución del nombre de dominio
- **Initial Connection**: Establecimiento de conexión TCP
- **SSL**: Negociación TLS/SSL
- **Request Sent**: Envío de la solicitud
- **Waiting (TTFB)**: Tiempo hasta el primer byte
- **Content Download**: Descarga del contenido

### Gráfico de tiempo

Visualización gráfica que muestra:
- Colores diferentes para cada fase
- Proporción relativa de tiempo en cada etapa
- Duración total de la solicitud

## Panel de Initiator

Muestra qué causó la solicitud:

- **Parser**: Generada por el análisis HTML
- **Script**: Provocada por código JavaScript
- **Pila de llamadas**: Secuencia de funciones que llevaron a la solicitud
- **Redirects**: Cadena de redirecciones (si aplica)

## Panel de Cookies

Muestra las cookies relacionadas con la solicitud:

- **Request Cookies**: Enviadas al servidor
- **Response Cookies**: Recibidas del servidor
- **Valores**: Nombre, valor, dominio, expiración, etc.

## Panel de WebSocket

Para conexiones WebSocket, muestra:

- **Mensajes enviados y recibidos**
- **Datos en formato de texto o binario**
- **Cronología de la comunicación**

## Panel de EventStream

Para Server-Sent Events (SSE):

- **Mensajes recibidos**
- **ID de eventos**
- **Tipos de eventos**
- **Secuencia temporal**

## Acciones adicionales

Desde el panel de detalles, puedes:

- **Copiar como cURL**: Para reproducir la solicitud en terminal
- **Guardar contenido**: Descargar la respuesta como archivo
- **Reenviar solicitud**: Repetir la petición
- **Bloquear URL**: Prevenir futuras solicitudes a esta URL
- **Copy value**: Copiar valores específicos de encabezados o parámetros

## Análisis de parámetros

Para solicitudes con parámetros (GET/POST):

- **URL params**: Parámetros en la URL (query string)
- **Form data**: Datos enviados como formulario
- **Request payload**: Datos enviados como JSON u otro formato