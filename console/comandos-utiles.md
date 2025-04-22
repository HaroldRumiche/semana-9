---
id : comandos-utiles
sidebar_position: 4
---

# Comandos Útiles en la Consola

El panel de Consola ofrece comandos especiales y funciones integradas que potencian significativamente tus capacidades de depuración e interacción con la página web. Estos comandos van más allá del API estándar de `console` y proporcionan accesos directos a funcionalidades avanzadas.

## Variables de referencia rápida

La consola proporciona variables predefinidas para acceder rápidamente a elementos importantes:

### $, $$ y otros selectores

```javascript
// Equivalente a document.querySelector()
$('h1'); // Devuelve el primer elemento h1

// Equivalente a document.querySelectorAll() pero devuelve array
$$('p'); // Devuelve array con todos los párrafos

// Último elemento seleccionado en el panel Elements
$0

// Penúltimo elemento seleccionado en el panel Elements
$1

// Hasta $4 para los 5 elementos seleccionados más recientes
```

Estas variables facilitan la interacción con elementos DOM sin escribir selectores completos.

### $_

Proporciona acceso al resultado de la última expresión evaluada:

```javascript
[1, 2, 3, 4].filter(n => n % 2 === 0)
// [2, 4]

$_.length
// 2
```

Útil para continuar trabajando con resultados previos sin necesidad de almacenarlos en variables.

## Comandos de utilidad global

### clear()

Limpia el contenido del panel de consola:

```javascript
clear(); // Equivalente a console.clear() o al ícono de papelera
```

### copy()

Copia el argumento proporcionado al portapapeles:

```javascript
// Copia el HTML del primer párrafo al portapapeles
copy($('p').innerHTML);

// Copia un objeto como JSON formateado
copy({nombre: "Juan", edad: 30});
```

Extremadamente útil para transferir datos entre la consola y editores de código.

### debug() y undebug()

Establece un punto de interrupción en una función:

```javascript
function calcularTotal() {
  // Código de la función
}

debug(calcularTotal); // Se detendrá cada vez que se llame a esta función
undebug(calcularTotal); // Elimina el punto de interrupción
```

Alternativa rápida a establecer breakpoints en el panel Sources.

### monitor() y unmonitor()

Registra las llamadas a una función específica:

```javascript
function enviarDatos(datos) {
  // Código de la función
}

monitor(enviarDatos); // Muestra cuando se llama y con qué argumentos
unmonitor(enviarDatos); // Detiene el monitoreo
```

Útil para rastrear cuándo y cómo se invoca una función sin modificar su código.

### dir() y dirxml()

Muestra una representación interactiva del objeto o elemento DOM:

```javascript
// Vista de propiedades del objeto
dir(document.body);

// Vista de la estructura DOM como XML
dirxml(document.body);
```

Proporciona diferentes perspectivas para examinar objetos complejos.

## Comandos para eventos

### monitorEvents() y unmonitorEvents()

Registra eventos específicos en un elemento:

```javascript
// Monitorear todos los eventos de clic en el body
monitorEvents(document.body, 'click');

// Monitorear múltiples tipos de eventos
monitorEvents(document.getElementById('miInput'), ['focus', 'blur', 'input']);

// Monitorear categorías de eventos
monitorEvents(window, ['mouse', 'key']);

// Detener monitoreo
unmonitorEvents(document.body);
```

Categorías disponibles:
- `mouse`: click, dblclick, mousedown, mouseup, etc.
- `key`: keydown, keyup, keypress
- `touch`: touchstart, touchend, touchmove
- `control`: scroll, resize, zoom, focus, blur

## Comandos de inspección

### inspect()

Navega directamente al elemento en el panel Elements:

```javascript
inspect($('header')); // Selecciona el header en el panel Elements
```

También funciona con objetos JavaScript para inspeccionarlos en el panel Sources.

### getEventListeners()

Muestra todos los event listeners asociados a un elemento:

```javascript
getEventListeners(document.getElementById('miBoton'));
// Muestra {click: Array(2), mouseover: Array(1)}
```

Invaluable para depurar interacciones complejas y encontrar handlers duplicados.

## Comandos de manipulación DOM

### $(selector, [startNode])

Versión mejorada de `document.querySelector()`:

```javascript
// Seleccionar dentro de un contexto específico
$('a', $('.content'));
```

### $x(path)

Ejecuta una consulta XPath:

```javascript
// Encontrar todos los párrafos que contienen la palabra "importante"
$x("//p[contains(text(),'importante')]");
```

Útil para selecciones DOM basadas en contenido o estructura jerárquica.

## Comandos de tabla

### table()

Muestra datos en formato tabular:

```javascript
// Datos completos
table(documet.querySelectorAll('img'));

// Especificando columnas
table(users, ['name', 'email']);
```

Mejora la visibilidad de conjuntos de datos y objetos similares.

## Comandos para almacenamiento

### queryObjects(Constructor)

Encuentra instancias de una clase específica:

```javascript
// Encontrar todas las instancias de Map
queryObjects(Map);

// Encontrar elementos DOM de un tipo específico
queryObjects(HTMLImageElement);
```

### queryStorage() y clearStorage()

Interactúa con localStorage y sessionStorage:

```javascript
// Consultar almacenamiento
queryLocalStorage();
querySessionStorage();

// Limpiar almacenamiento
clearLocalStorage();
clearSessionStorage();
```

## Comandos de rendimiento

### profile() y profileEnd()

Inicia y detiene el perfilador de CPU:

```javascript
profile('Optimización');
// Código a perfilar
profileEnd('Optimización');
```

Los resultados aparecen en el panel Performance.

### keys() y values()

Obtiene las claves o valores de un objeto:

```javascript
keys(objeto);
values(objeto);
```

Alternativa concisa a `Object.keys()` y `Object.values()`.

## Comandos de depuración asíncrona

### monitorAsync() y unmonitorAsync()

Rastrea la ejecución de funciones asincrónicas:

```javascript
async function cargarDatos() {
  // Código asíncrono
}

monitorAsync(cargarDatos);
unmonitorAsync(cargarDatos);
```

Particularmente útil para depurar cadenas de promesas y funciones async/await.

## Comandos avanzados

### $_

Además de proporcionar el último resultado, puedes sobrescribirlo:

```javascript
$_ = {miDato: "personalizado"};
$_
// {miDato: "personalizado"}
```

### $i

En algunos navegadores, proporciona acceso a APIs de extensión para la consola:

```javascript
$i.functionalities
// Muestra las capacidades adicionales disponibles
```

## Comandos personalizados

Puedes definir tus propios comandos de consola:

```javascript
// Crear un comando personalizado para contar elementos
function contarElementos(selector) {
  return document.querySelectorAll(selector).length;
}

// Usar en la consola
contarElementos('div');
// 42
```

Estos comandos personalizados estarán disponibles durante toda la sesión, a menos que recargues la página sin conservar los logs.

Dominar estos comandos útiles de la consola mejorará significativamente tu eficiencia como desarrollador, permitiéndote interactuar con la página web de manera más directa y resolver problemas con mayor rapidez.