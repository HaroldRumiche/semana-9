---
sidebar_label: 'Certificados'
sidebar_position: 2
---

# Certificados SSL/TLS

Los certificados son componentes fundamentales para establecer conexiones seguras HTTPS. El inspector de elementos proporciona herramientas para analizar y verificar certificados.

## Visualización de certificados

Para examinar un certificado:

1. Abre el panel Security/Seguridad
2. Selecciona "View certificate" en la sección de información del sitio
3. Revisa los detalles del certificado en la ventana emergente

## Detalles importantes a verificar

- **Emisor**: Entidad que expidió el certificado
- **Periodo de validez**: Fechas de emisión y expiración
- **Nombre del sujeto**: Dominio(s) para el que se emitió
- **Algoritmo de firma**: Método criptográfico utilizado
- **Cadena de confianza**: Relación con autoridades certificadoras (CA)

## Análisis de problemas comunes

### Certificados caducados
Los certificados con fecha de expiración vencida generan advertencias de seguridad.

```
Error: NET::ERR_CERT_DATE_INVALID
Causa: El certificado ha superado su fecha de caducidad
Solución: Renovar el certificado con el proveedor
```

### Certificados no confiables
```
Error: NET::ERR_CERT_AUTHORITY_INVALID
Causa: El certificado no está firmado por una CA reconocida
Solución: Obtener un certificado de una autoridad confiable
```

### Desajuste de nombres de dominio
```
Error: NET::ERR_CERT_COMMON_NAME_INVALID
Causa: El dominio no coincide con el indicado en el certificado
Solución: Obtener un certificado para el dominio correcto o configurar un certificado wildcard
```

## Herramientas de diagnóstico

- **Estado de conexión**: Muestra un icono verde si la conexión es segura
- **Protocol/Cipher**: Muestra el protocolo (TLS 1.2, 1.3) y los algoritmos de cifrado
- **Subject Alternative Names (SAN)**: Lista de dominios adicionales protegidos por el certificado

## Mejores prácticas

- Utilizar certificados con validación extendida (EV) para mayor confianza
- Implementar HSTS para forzar conexiones HTTPS
- Configurar Certificate Transparency para detectar certificados maliciosos
- Verificar la resistencia a ataques (TLS downgrade, Heartbleed)
- Renovar certificados con suficiente antelación

## Herramientas complementarias

El panel Security puede complementarse con herramientas externas como:

- SSLLabs Server Test
- Qualys SSL Scanner
- OpenSSL (línea de comandos)

Para una inspección más detallada, utiliza estas herramientas junto con el análisis del panel Security.