---
id : herramientas-principales
sidebar_position: 2
---

# Herramientas Principales del Panel Network

El panel Network contiene varias herramientas y controles esenciales que te permiten capturar, analizar y manipular el tráfico de red de tu aplicación web.

## Barra de control principal

En la parte superior del panel Network encontrarás:

- **Botón de registro (Record)**: Inicia o detiene la captura de solicitudes de red
- **Botón de limpieza (Clear)**: Elimina todas las solicitudes actuales del registro
- **Filtro de búsqueda**: Permite filtrar solicitudes por texto
- **Preserve log**: Mantiene las solicitudes entre navegaciones de página
- **Disable cache**: Evita el uso del caché del navegador durante las pruebas
- **Throttling**: Simula diferentes velocidades de conexión

## <a id="tabla-solicitudes"></a>Tabla de solicitudes

La tabla principal muestra todas las solicitudes de red capturadas con las siguientes columnas (personalizables):

- **Name**: Nombre del recurso solicitado
- **Status**: Código de estado HTTP (200, 404, 500, etc.)
- **Type**: Tipo MIME del recurso (text/html, image/png, etc.)
- **Initiator**: Qué causó la solicitud (parser, script, etc.)
- **Size**: Tamaño de la respuesta
- **Time**: Tiempo total para completar la solicitud
- **Waterfall**: Representación visual del tiempo de la solicitud

### Personalización de columnas

Para modificar las columnas visibles:
1. Haz clic derecho en el encabezado de la tabla
2. Selecciona o deselecciona las columnas que deseas mostrar
3. Las opciones incluyen: Protocol, Method, Domain, Priority, etc.

## Barra de resumen

En la parte inferior del panel se muestra un resumen de la actividad de red:

- **Número total de solicitudes**
- **Cantidad de datos transferidos**
- **Tiempo de carga (DOMContentLoaded y Load)**
- **Métricas de rendimiento como First Paint y LCP**

## Panel de detalles

Al hacer clic en cualquier solicitud, se abre un panel con pestañas detalladas:

- **Headers**: Encabezados HTTP de solicitud y respuesta
- **Preview**: Vista previa del contenido de la respuesta
- **Response**: Contenido completo de la respuesta
- **Timing**: Desglose detallado de los tiempos de la solicitud
- **Cookies**: Cookies enviadas o recibidas con la solicitud
- **Initiator**: Pila de llamadas que inició la solicitud

## Línea de tiempo / Cascada

La visualización cascada (waterfall) muestra:

- **Barras de tiempo**: Representación visual de cada fase de la solicitud
- **Eventos de carga**: Marcadores para eventos como DOMContentLoaded y Load
- **Línea temporal**: Escala de tiempo para medir duraciones

### Código de colores en la cascada

Las barras de la cascada utilizan colores para indicar:
- **Azul claro**: Tiempo de espera (Waiting/TTFB)
- **Azul oscuro**: Tiempo de descarga de contenido
- **Gris**: Tiempo de conexión y DNS
- **Rojo**: Errores o solicitudes bloqueadas

## Exportación y guardado

Para guardar los datos capturados:
1. Haz clic derecho en la tabla de solicitudes
2. Selecciona "Save all as HAR with content"
3. El archivo HAR (HTTP Archive) puede compartirse o analizarse posteriormente

## Menú contextual de solicitudes

Al hacer clic derecho en una solicitud, puedes:
- Copiar los valores de diferentes campos
- Bloquear URL específicas
- Reenviar la solicitud
- Abrir en una nueva pestaña
- Copiar como cURL para pruebas en terminal

## Modo de grabación continua

Para situaciones de depuración prolongada:
1. Activa "Preserve log"
2. Utiliza el botón de grabación para pausar/reanudar la captura
3. Usa filtros para centrarte en solicitudes relevantes mientras la aplicación funciona