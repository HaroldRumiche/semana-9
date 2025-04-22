---
id : watchers-y-scope
sidebar_position: 5
---

# Watchers y Scope

Los paneles Watch y Scope son herramientas esenciales para monitorizar y examinar el estado de las variables durante la depuración.

## Panel Scope

El panel Scope muestra todas las variables disponibles en el contexto de ejecución actual cuando el código está pausado.

### Niveles de Scope

El panel organiza las variables en diferentes niveles de alcance:

- **Local**: Variables definidas dentro de la función actual
- **Closure**: Variables capturadas de ámbitos externos
- **Script**: Variables definidas a nivel de script
- **Global**: Variables del objeto global (window)

### Características principales

- **Vista en árbol**: Las variables complejas (objetos, arrays) pueden expandirse
- **Edición en tiempo real**: Haz doble clic en un valor para modificarlo
- **Resaltado de cambios**: Los valores que cambian se destacan en púrpura
- **Filtrado**: Usa el campo de búsqueda para filtrar variables por nombre

### Visualización de propiedades

Para cada variable se muestra:

- Nombre de la variable
- Valor actual
- Tipo de datos
- Propiedades no enumerables (en gris)
- Propiedades heredadas (expandiendo `__proto__`)

## Panel Watch

El panel Watch permite monitorizar expresiones específicas durante la depuración.

### Funcionamiento básico

1. Haz clic en el botón "+" para añadir una nueva expresión
2. Ingresa cualquier expresión JavaScript válida
3. La expresión se evaluará automáticamente cada vez que el código se pause
4. Los resultados se muestran junto a cada expresión

### Usos comunes

- **Seguimiento de variables**: Monitorizar el valor de variables específicas
- **Expresiones combinadas**: Evaluar expresiones como `user.name + ' ' + user.lastName`
- **Conversiones**: Mostrar valores en formatos específicos, como `JSON.stringify(obj, null, 2)`
- **Cálculos dinámicos**: Realizar operaciones sobre los valores actuales

### Gestión de expresiones

- **Edición**: Haz doble clic en una expresión para modificarla
- **Eliminación**: Usa el botón X o haz clic derecho y selecciona "Delete watch expression"
- **Desactivación temporal**: Desmarca la casilla junto a la expresión
- **Reordenación**: Arrastra y suelta para cambiar el orden

## Integración entre Scope y Watch

### Añadir desde Scope a Watch

Para monitorizar una variable específica:

1. Localiza la variable en el panel Scope
2. Haz clic derecho sobre ella
3. Selecciona "Add to watch"

### Evaluar expresiones complejas

Mientras estás detenido en un punto de interrupción:

1. Selecciona una variable en el panel Scope
2. Observa su valor y estructura
3. Crea expresiones en Watch que utilicen esa variable
4. Las expresiones se actualizan automáticamente al avanzar en la depuración

## Técnicas avanzadas

### Formateo personalizado

Para visualizar objetos de forma más legible:

```javascript
// En el panel Watch:
JSON.stringify(miObjeto, null, 2)
```

### Monitorización de propiedades anidadas

Para observar propiedades específicas dentro de objetos complejos:

```javascript
// En el panel Watch:
usuario.direccion.ciudad
```

### Evaluación condicional

Para evaluar expresiones solo bajo ciertas condiciones:

```javascript
// En el panel Watch:
i > 10 ? 'Valor alto: ' + i : 'Valor bajo: ' + i
```

### Visualización de colecciones

Para transformar colecciones en formatos más útiles:

```javascript
// En el panel Watch:
Array.from(nodeList)
Object.keys(miObjeto)
```

## Consejos prácticos

- **Mantén las expresiones Watch simples** para facilitar la lectura
- **Usa la consola para pruebas** antes de añadir expresiones complejas al Watch
- **Combina con puntos de interrupción condicionales** para depuración avanzada
- **Reorganiza las expresiones Watch** según su importancia para el problema actual
- **Limpia regularmente** las expresiones Watch obsoletas para mantener la claridad