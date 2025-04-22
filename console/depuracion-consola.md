---
id : depuracion-consola
sidebar_position: 8
---

# Depuración con la Consola

La consola del navegador no solo es una herramienta para mostrar mensajes, sino también un completo entorno de depuración que te permite interactuar con el código de tu aplicación en tiempo real. En esta sección, exploraremos técnicas avanzadas de depuración que te permitirán identificar y resolver problemas de forma eficiente.

## Entorno interactivo de la consola

La consola funciona como un REPL (Read-Eval-Print Loop) completo que te permite ejecutar código JavaScript directamente:

### Evaluación de expresiones

```javascript
// Evaluación simple
3 + 4
// Devuelve: 7

// Evaluación de variables existentes
window.innerHeight
// Devuelve: 722

// Acceso a elementos del DOM
document.querySelector('.mi-clase').textContent
// Devuelve: "Texto del elemento"
```

### Ejecución de sentencias complejas

```javascript
// Estructuras de control completas
for (const elemento of document.querySelectorAll('img')) {
  console.log(elemento.src);
}

// Declaración de funciones
function sumarAtributos(selector, atributo) {
  return Array.from(document.querySelectorAll(selector))
    .reduce((total, el) => total + Number(el.getAttribute(atributo) || 0), 0);
}

// Uso
sumarAtributos('div', 'data-valor');
```

### Histórico de comandos

Puedes navegar por el histórico de comandos utilizando:
- Flecha arriba (↑) para recuperar comandos anteriores
- Flecha abajo (↓) para avanzar en el histórico
- Ctrl+L (Cmd+L en Mac) para limpiar la consola

## Comandos específicos de depuración

La consola ofrece varios comandos especiales que facilitan la depuración:

### Comando `debug()`

```javascript
function calcularTotal() {
  // código a depurar
}

// Establece un punto de interrupción al inicio de la función
debug(calcularTotal);

// Cuando se llame a calcularTotal(), la ejecución se detendrá al inicio
calcularTotal();
```

### Comando `monitor()`

```javascript
// Monitoriza las llamadas a una función
monitor(document.querySelector);

// A partir de ahora, cada vez que se llame a querySelector,
// la consola mostrará los argumentos usados
document.querySelector('.mi-elemento');
// function 'querySelector' called with arguments: .mi-elemento
```

### Comando `monitorEvents()`

```javascript
// Monitorizar todos los eventos de un elemento
const boton = document.querySelector('#mi-boton');
monitorEvents(boton);

// Monitorizar solo ciertos tipos de eventos
monitorEvents(document.body, ['click', 'keydown']);

// Detener monitorización
unmonitorEvents(boton);
```

### Comando `keys()` y `values()`

```javascript
// Ver todas las propiedades de un objeto
keys(document);

// Ver todos los valores de un objeto
values(document.body.style);
```

### Selección rápida con `$` y `$$`

```javascript
// $ actúa como document.querySelector
$('#mi-id');

// $$ actúa como document.querySelectorAll y devuelve un array
$$('.mi-clase').forEach(el => el.style.color = 'red');

// También disponemos de $0 - $4 para los últimos elementos inspeccionados
$0  // Último elemento seleccionado en el panel Elements
$1  // Penúltimo elemento seleccionado
```

## Breakpoints desde la consola

La consola te permite establecer puntos de interrupción en tu código de varias maneras:

### Breakpoints condicionales

```javascript
// En tu código
function procesarItem(item) {
  if (item.id === 'problemático') {
    debugger; // La ejecución se detendrá aquí solo cuando la condición se cumpla
  }
  // resto del procesamiento
}
```

### Interrupciones mediante función `debugger`

```javascript
function funcionCompleja() {
  // Código inicial
  debugger; // La ejecución se detendrá aquí cuando las herramientas estén abiertas
  // Más código
}
```

### Breakpoints de eventos

Desde el panel Sources > Event Listener Breakpoints puedes configurar la detención en:

- Eventos del DOM (click, submit, etc.)
- Eventos de carga (load, DOMContentLoaded)
- Timeout y animaciones
- XMLHttpRequest y Fetch
- Entre muchos otros

## Depuración asíncrona

### Promesas y async/await

```javascript
// Seguimiento de promesas rechazadas
async function obtenerDatos() {
  try {
    const respuesta = await fetch('/api/datos');
    return await respuesta.json();
  } catch (error) {
    console.error('Error en obtenerDatos:', error);
    throw error; // Re-lanzar para seguimiento
  }
}
```

### Depuración de timers

```javascript
// Identificar timers por ID
const timerId = setTimeout(() => {
  console.log('Ejecutando timer');
}, 1000);

// Cancelar si es necesario
clearTimeout(timerId);

// Verificar timers activos
// En Chrome, abre el panel Memory y toma una instantánea para buscar "Timer"
```

## Evaluación en contexto

### Cambio del contexto de ejecución

Durante la depuración con breakpoints, puedes:

1. Cambiar el scope/ámbito en el panel de Scope
2. Evaluar expresiones en el contexto actual
3. Modificar valores de variables en tiempo real
4. Continuar la ejecución con diferentes valores

### Inyección de código

```javascript
// Crear un script en la página actual
const script = document.createElement('script');
script.textContent = `
  window.miHelperDebug = {
    estado: {},
    log: function(mensaje, datos) {
      this.estado[mensaje] = datos;
      console.log('[DEBUG]', mensaje, datos);
    }
  };
`;
document.head.appendChild(script);

// Ahora puedes usar esta utilidad desde cualquier parte
miHelperDebug.log('test', {valor: 42});
```

## Captura y simulación de errores

### Simulación de errores para pruebas

```javascript
// Forzar un error específico
try {
  throw new TypeError('Error de simulación');
} catch (error) {
  console.error('Error capturado:', error);
  // Análisis o procesamiento adicional
}

// Simular error de red
const respuestaOriginal = window.fetch;
window.fetch = function(...args) {
  console.log('Interceptando fetch a:', args[0]);
  if (args[0].includes('/api/test')) {
    console.warn('Simulando error de red');
    return Promise.reject(new Error('Error de red simulado'));
  }
  return respuestaOriginal.apply(this, args);
};
```

### Captura avanzada de errores

```javascript
class ErrorTracker {
  constructor() {
    this.errores = [];
    this.configurar();
  }
  
  configurar() {
    window.addEventListener('error', (evento) => this.capturarError(evento));
    window.addEventListener('unhandledrejection', (evento) => 
      this.capturarRechazo(evento)
    );
  }
  
  capturarError(evento) {
    const error = {
      tipo: 'error',
      mensaje: evento.message,
      origen: evento.filename,
      linea: evento.lineno,
      columna: evento.colno,
      timestamp: new Date(),
      stack: evento.error?.stack,
      contexto: this.obtenerContexto()
    };
    
    this.errores.push(error);
    this.registrarError(error);
  }
  
  capturarRechazo(evento) {
    const error = {
      tipo: 'promesa',
      razon: evento.reason?.message || String(evento.reason),
      timestamp: new Date(),
      stack: evento.reason?.stack,
      contexto: this.obtenerContexto()
    };
    
    this.errores.push(error);
    this.registrarError(error);
  }
  
  obtenerContexto() {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      // Información de estado de la aplicación
      // usuario: miApp.usuario?.id,
      // vista: miApp.vistaActual
    };
  }
  
  registrarError(error) {
    console.group('%cError capturado', 'color: #ff5555; font-weight: bold;');
    console.error(error.mensaje || error.razon);
    console.log('Detalles:', error);
    console.groupEnd();
    
    // Aquí podrías enviar a un servicio de monitoreo
  }
  
  obtenerInforme() {
    return {
      total: this.errores.length,
      errores: this.errores,
      resumen: this.generarResumen()
    };
  }
  
  generarResumen() {
    const conteo = {};
    this.errores.forEach(error => {
      const mensaje = error.mensaje || error.razon;
      conteo[mensaje] = (conteo[mensaje] || 0) + 1;
    });
    return conteo;
  }
}

// Uso
const tracker = new ErrorTracker();

// Más tarde
console.table(tracker.obtenerInforme().resumen);
```

## Manipulación del DOM desde la consola

### Evaluar elementos y modificarlos

```javascript
// Seleccionar y modificar elementos
const titulo = $('h1');
titulo.style.color = 'blue';
titulo.textContent = 'Modificado desde la consola';

// Obtener computedStyle
getComputedStyle(titulo).fontSize
// "32px"

// Generar un informe de todos los estilos
const estilos = getComputedStyle(titulo);
Object.keys(estilos)
  .filter(k => !k.startsWith('webkit'))
  .filter(k => isNaN(parseInt(k)))
  .reduce((obj, k) => { obj[k] = estilos[k]; return obj; }, {})
```

### Ver eventos asociados a elementos

```javascript
// En Chrome, selecciona un elemento en Elements
// Luego ve a la pestaña Event Listeners

// Alternativa desde la consola
function getEventListeners(element) {
  const listeners = [];
  
  if (element && element._events) {
    for (const [type, handlers] of Object.entries(element._events)) {
      handlers.forEach(handler => {
        listeners.push({ type, handler });
      });
    }
  }
  
  return listeners;
}

// Uso
getEventListeners($('#mi-boton'));
```

## Depuración de rendimiento

### Medir tiempo de ejecución

```javascript
// Medir el tiempo que tarda en ejecutarse un bloque de código
console.time('miProceso');

// Código a medir
for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}

console.timeEnd('miProceso');
// Salida: miProceso: 12.345ms
```

### Uso de Performance API

```javascript
// Marcar puntos específicos en el tiempo
performance.mark('inicio');

// Código a medir
for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}

performance.mark('fin');

// Medir la diferencia entre las marcas
performance.measure('miProceso', 'inicio', 'fin');

// Ver resultados
console.log(performance.getEntriesByName('miProceso'));
// Salida: [{name: "miProceso", startTime: 123.456, duration: 12.345}]
```

### Análisis de rendimiento con perfiles

1. Abre las DevTools del navegador.
2. Ve a la pestaña **Performance**.
3. Haz clic en el botón de grabar y realiza las acciones que deseas analizar.
4. Detén la grabación y revisa los resultados, como el tiempo de ejecución de funciones, FPS, y más.

### Optimización de código

```javascript
// Ejemplo de optimización: evitar cálculos redundantes
const elementos = document.querySelectorAll('.mi-clase');
const total = elementos.length;

for (let i = 0; i < total; i++) {
  elementos[i].style.color = 'red';
}

// En lugar de recalcular elementos.length en cada iteración
```

Con estas herramientas y técnicas, puedes identificar cuellos de botella en tu código y optimizarlo para un mejor rendimiento.