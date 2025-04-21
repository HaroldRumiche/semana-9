---
sidebar_label: 'Filtros de Red'
sidebar_position: 3
---

# Filtros de Red

Los filtros son una parte esencial del panel Network, permitiéndote concentrarte en las solicitudes relevantes para tu análisis y eliminando el ruido visual causado por otras peticiones.

## Filtro de búsqueda rápida

En la parte superior del panel Network encontrarás un campo de búsqueda que permite:

- Filtrar por **URL** o fragmentos de ruta
- Filtrar por **tipo de contenido**
- Filtrar por **código de estado**
- Combinar varios criterios de búsqueda

### Sintaxis de búsqueda avanzada

El campo de búsqueda acepta operadores especiales:

```
status-code:200       // Solicitudes con código 200
method:POST          // Solicitudes POST
-status-code:200     // Excluir solicitudes con código 200
larger-than:100kb    // Solicitudes mayores a 100KB
```

## Filtros de tipo de contenido

La barra de filtros proporciona botones para mostrar/ocultar solicitudes según su tipo:

- **All**: Muestra todas las solicitudes
- **XHR/Fetch**: Solicitudes XMLHttpRequest y Fetch API
- **JS**: Archivos JavaScript
- **CSS**: Hojas de estilo
- **Img**: Imágenes
- **Media**: Audio y video
- **Font**: Tipografías web
- **Doc**: Documentos HTML, XML, etc.
- **WS**: WebSockets
- **Manifest**: Archivos de manifiesto
- **Other**: Otros tipos no categorizados

### Personalización de filtros

Algunos navegadores permiten personalizar esta barra:
1. Haz clic en el menú desplegable "More"
2. Selecciona los tipos de filtro que deseas mostrar u ocultar

## Filtros por propiedades

Puedes filtrar solicitudes basándote en diversas propiedades:

### Por tamaño
```
larger-than:10kb
smaller-than:1mb
```

### Por tiempo
```
time-taken-greater-than:500
time-taken-less-than:100
```

### Por estado
```
status-code:404
status-code:200-399  // Rango de códigos
```

### Por método HTTP
```
method:GET
method:POST
```

### Por origen
```
domain:cdn.example.com
has-response-header:cache-control
```

## Filtros de bloqueo (Block requests)

Para simular fallos o probar la resiliencia:

1. En el panel Network, activa la pestaña "Blocking"
2. Añade patrones de URL que deseas bloquear
3. El navegador simulará fallos en estas solicitudes

## Filtrado por colores (color coding)

Algunas versiones del inspector permiten:

1. Hacer clic en el círculo de color junto a un dominio
2. Asignar un color específico a todas las solicitudes de ese dominio
3. Facilitar la identificación visual de recursos por origen

## Guardar y cargar configuraciones de filtros

Para análisis frecuentes:

1. Configura tus filtros deseados
2. Guarda el perfil o workspace en las herramientas de desarrollo
3. Carga esta configuración en sesiones futuras

## Filtros temporales

La línea temporal permite filtrar por tiempo:

1. Haz clic y arrastra en la vista general para seleccionar un rango de tiempo
2. Solo se mostrarán las solicitudes que ocurrieron en ese período
3. Útil para analizar problemas específicos durante la carga de la página

## Mejores prácticas

- **Combina filtros**: Usa múltiples criterios para un análisis preciso
- **Guarda configuraciones**: Para análisis repetitivos
- **Usa filtros negativos**: Excluye el ruido con el prefijo `-`
- **Filtra por dominios terceros**: Para evaluar dependencias externas
- **Alterna entre vistas**: Usa filtros para comparar comportamientos