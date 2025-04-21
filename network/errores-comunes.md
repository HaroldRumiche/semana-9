---
sidebar_label: 'Errores Comunes'
sidebar_position: 7
---

# Errores Comunes de Red

Los errores de red son inevitables durante el desarrollo web. El panel Network facilita la identificación y solución de estos problemas. Esta sección cubre los errores más frecuentes y cómo diagnosticarlos.

## Códigos de estado HTTP

### Errores 4xx (Cliente)

- **400 Bad Request**: Solicitud malformada
  - Causas comunes: Parámetros incorrectos, JSON inválido, cabeceras malformadas
  - Diagnóstico: Revisar payload y cabeceras en la pestaña Headers

- **401 Unauthorized**: Falta autenticación
  - Causas comunes: Token expirado, credenciales incorrectas
  - Diagnóstico: Verificar cabeceras de autenticación y estado de sesión

- **403 Forbidden**: Sin permisos suficientes
  - Causas comunes: Permisos insuficientes, IP bloqueada
  - Diagnóstico: Verificar roles de usuario y políticas de acceso

- **404 Not Found**: Recurso no encontrado
  - Causas comunes: URL incorrecta, recurso eliminado
  - Diagnóstico: Verificar ruta en encabezados de solicitud

- **408 Request Timeout**: La solicitud tardó demasiado
  - Causas comunes: Sobrecarga del servidor, problemas de red
  - Diagnóstico: Verificar tiempos en la pestaña Timing

- **413 Payload Too Large**: Datos enviados excesivos
  - Causas comunes: Subida de archivos demasiado grandes
  - Diagnóstico: Revisar tamaño de payload en Headers

- **429 Too Many Requests**: Límite de tasa excedido
  - Causas comunes: Demasiadas solicitudes en poco tiempo
  - Diagnóstico: Revisar cabeceras de límite de tasa y patrones de solicitud

### Errores 5xx (Servidor)

- **500 Internal Server Error**: Error general del servidor
  - Causas comunes: Excepciones no controladas, bugs en servidor
  - Diagnóstico: Examinar respuesta para mensajes de error, revisar logs del servidor

- **502 Bad Gateway**: Error en servidor proxy
  - Causas comunes: Servidor upstream caído, respuesta incorrecta
  - Diagnóstico: Verificar estado de servicios backend

- **503 Service Unavailable**: Servidor temporalmente no disponible
  - Causas comunes: Mantenimiento, sobrecarga
  - Diagnóstico: Revisar disponibilidad del servicio, retry-after header

- **504 Gateway Timeout**: Timeout en servidor proxy
  - Causas comunes: Backend demasiado lento
  - Diagnóstico: Verificar rendimiento de servicios internos

## Errores de CORS (Cross-Origin Resource Sharing)

- **Solicitudes bloqueadas por CORS**
  - Síntoma: Error en consola "Access to fetch at X from origin Y has been blocked by CORS policy"
  - Diagnóstico: Revisar cabeceras de respuesta para Access-Control-Allow-* 
  - Solución: Configurar correctamente CORS en el servidor

- **Preflight failures**
  - Síntoma: Error en solicitud OPTIONS previa
  - Diagnóstico: Verificar que el servidor responda correctamente a solicitudes OPTIONS
  - Solución: Implementar manejo de preflight en servidor

## Errores de contenido mixto

- **Mixed content blocked**
  - Síntoma: Contenido HTTP bloqueado en página HTTPS
  - Diagnóstico: Buscar recursos cargados vía HTTP en página segura
  - Solución: Actualizar todas las URLs a HTTPS

## Errores de certificado SSL/TLS

- **Certificado no válido/expirado**
  - Síntoma: Error de seguridad del navegador
  - Diagnóstico: Examinar detalles del certificado en pestaña Security
  - Solución: Renovar/corregir certificado

## Errores de DNS

- **DNS resolution failed**
  - Síntoma: No se puede resolver el nombre de host
  - Diagnóstico: Verificar que el dominio esté bien escrito y que el DNS funcione
  - Solución: Corregir configuración DNS, verificar conectividad

## Errores de conexión (continuación)

- **Connection refused/reset**
  - Síntoma: La conexión es rechazada por el servidor
  - Diagnóstico: Verificar que el servidor esté en funcionamiento y acepte conexiones
  - Solución: Reiniciar servidor, verificar firewall

- **Connection timed out**
  - Síntoma: La conexión no se establece en el tiempo esperado
  - Diagnóstico: Comprobar conectividad de red y estado del servidor
  - Solución: Verificar problemas de red, aumentar timeouts

## Errores de caché

- **Uso de recurso en caché obsoleto**
  - Síntoma: Los cambios no se reflejan después de actualizar
  - Diagnóstico: Verificar cabeceras Cache-Control y ETag en Response Headers
  - Solución: Usar Hard Reload (Ctrl+Shift+R), activar "Disable cache"

- **Validación de caché innecesaria**
  - Síntoma: Solicitudes 304 frecuentes para recursos estáticos
  - Diagnóstico: Revisar política de caché en Response Headers
  - Solución: Implementar caché de larga duración con fingerprinting

## Errores de WebSocket

- **WebSocket handshake failure**
  - Síntoma: La conexión WebSocket no se establece
  - Diagnóstico: Revisar negociación inicial HTTP y códigos de error
  - Solución: Verificar protocolos, compatibilidad de proxy/firewall

- **WebSocket disconnection**
  - Síntoma: La conexión se cierra inesperadamente
  - Diagnóstico: Examinar códigos de cierre y mensajes
  - Solución: Implementar reconexión automática, resolver problemas de timeout

## Problemas de rendimiento

- **Waterfall en escalera**
  - Síntoma: Recursos cargados secuencialmente en lugar de en paralelo
  - Diagnóstico: Revisar dependencias en la cascada de solicitudes
  - Solución: Optimizar orden de carga, implementar preloading

- **TTFB (Time To First Byte) excesivo**
  - Síntoma: Barra azul clara larga en la visualización de tiempos
  - Diagnóstico: Verificar tiempo de procesamiento del servidor
  - Solución: Optimizar backend, implementar caching, CDN

## Depuración efectiva de errores

### Herramientas integradas

1. **Preserve log**: Mantener registro entre navegaciones
2. **Disable cache**: Evitar problemas de caché
3. **Block requests**: Simular fallos de recursos específicos
4. **Throttling**: Probar bajo diferentes condiciones de red

### Técnicas de diagnóstico

1. **Comparación**: Contrastar solicitudes exitosas vs. fallidas
2. **Aislamiento**: Reproducir el error en un entorno simplificado
3. **Reproductibilidad**: Determinar si el error es consistente o intermitente
4. **Análisis de secuencia**: Identificar patrones o dependencias en errores

### Documentación de errores

Al reportar problemas:
1. Captura el archivo HAR completo
2. Incluye capturas de pantalla del error
3. Documenta los pasos exactos para reproducir
4. Registra información contextual (navegador, sistema operativo, red)