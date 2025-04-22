---
id : logs-avanzados
sidebar_position: 7
---

# Logs Avanzados en la Consola

La consola del navegador ofrece capacidades avanzadas de logging que van mucho más allá del simple `console.log()`. Estas técnicas avanzadas te permitirán organizar, dar formato y estructurar tus mensajes para obtener información más clara y útil durante el desarrollo y depuración.

## Formateo de cadenas

La consola admite un sistema de formato similar a printf para crear mensajes más complejos:

### Marcadores de sustitución básicos

```javascript
// %s - String
console.log('Hola, %s!', 'mundo');

// %i o %d - Integer
console.log('Tienes %i mensajes nuevos', 5);

// %f - Float
console.log('El precio es %f euros', 23.5);

// %o - Objeto expandible
console.log('Datos del usuario: %o', {nombre: 'Ana', edad: 28});

// %O - Objeto con formateo mejorado (más detallado que %o)
console.log('Detalles completos: %O', document.body);

// %c - Aplicar estilos CSS
console.log('%cTexto destacado', 'color: red; font-size: 20px;');
```

### Combinación de múltiples marcadores

```javascript
console.log(
  'Usuario: %s, Edad: %i, Premium: %s',
  'Juan',
  34,
  true
);
```

## Estilos visuales avanzados

La consola permite aplicar estilos CSS mediante el marcador `%c`:

### Texto con estilos

```javascript
console.log(
  '%cÉxito!%c Operación completada correctamente',
  'color: white; background: green; padding: 2px 5px; border-radius: 2px; font-weight: bold;',
  'color: green; font-style: italic;'
);
```

### Múltiples segmentos con estilo

```javascript
console.log(
  '%cError %cProcesando %cDatos',
  'color: white; background: red; padding: 2px 5px; border-radius: 2px;',
  'color: black; background: yellow; padding: 2px 5px;',
  'color: white; background: blue; padding: 2px 5px;'
);
```

### Fondos con gradientes

```javascript
console.log(
  '%cTítulo importante',
  'font-size: 20px; font-weight: bold; background: linear-gradient(to right, #ff8a00, #da1b60); color: white; padding: 10px; border-radius: 4px;'
);
```

### Separadores visuales

```javascript
console.log(
  '%c----------------------------------------',
  'color: gray; font-weight: bold;'
);
```

### Emojis e iconos

```javascript
console.log('✅ Tarea completada');
console.log('⚠️ Advertencia importante');
console.log('❌ Error crítico');
```

## Organización jerárquica de logs

### Grupos anidados

```javascript
console.group('Proceso de autenticación');
console.log('Verificando credenciales...');

console.group('Validación de datos');
console.log('Email: válido');
console.log('Contraseña: correcta');
console.groupEnd();

console.log('Generando token...');
console.log('Autenticación completada');
console.groupEnd();
```

### Grupos contraídos por defecto

```javascript
console.groupCollapsed('Detalles técnicos (expandir)');
console.log('Información de depuración extensa...');
console.log('Más información técnica...');
console.groupEnd();
```

### Combinación con estilos

```javascript
console.group('%cResultados del test', 'color: blue; font-weight: bold;');
console.log('Test 1: Pasado');
console.log('Test 2: Pasado');
console.log('%cTest 3: Fallido', 'color: red');
console.groupEnd();
```

## Medición de rendimiento

### Cronometraje básico

```javascript
console.time('operación');
// Código que queremos medir
for (let i = 0; i < 1000000; i++) {
  // Operación costosa
}
console.timeEnd('operación'); // Muestra: operación: 123.45ms
```

### Múltiples cronómetros simultáneos

```javascript
console.time('total');
console.time('parte1');
// Primera operación...
console.timeEnd('parte1');

console.time('parte2');
// Segunda operación...
console.timeEnd('parte2');

console.timeEnd('total');
```

### Puntos intermedios

```javascript
console.time('proceso');
// Primera fase...
console.timeLog('proceso', 'Primera fase completada');
// Segunda fase...
console.timeLog('proceso', 'Segunda fase completada');
// Fase final...
console.timeEnd('proceso');
```

## Conteo y estadísticas

### Contadores básicos

```javascript
for (const usuario of usuarios) {
  procesarDatos(usuario);
  console.count('Usuarios procesados');
}
// Muestra incrementalmente:
// Usuarios procesados: 1
// Usuarios procesados: 2
// ...
```

### Contadores con etiquetas

```javascript
function procesarEvento(tipo) {
  console.count(`Eventos de tipo ${tipo}`);
  // Procesamiento...
}

procesarEvento('click');    // Eventos de tipo click: 1
procesarEvento('submit');   // Eventos de tipo submit: 1
procesarEvento('click');    // Eventos de tipo click: 2
```

### Reinicio de contadores

```javascript
console.countReset('Usuarios procesados');
// Reinicia el contador específico a 0
```

## Aserciones y validaciones

### Comprobaciones condicionales

```javascript
const respuesta = await fetch('/api/datos');
console.assert(
  respuesta.ok, 
  'La solicitud API falló con estado:', 
  respuesta.status
);
```

El mensaje solo aparece cuando la condición es falsa, sin interrumpir la ejecución.

### Validación de datos

```javascript
function validarUsuario(usuario) {
  console.assert(usuario.nombre, 'Nombre de usuario requerido');
  console.assert(usuario.edad >= 18, 'El usuario debe ser mayor de edad');
  console.assert(
    typeof usuario.email === 'string' && usuario.email.includes('@'),
    'Email inválido'
  );
}
```

## Trazas y stack

### Trazas de ejecución

```javascript
function funcionA() { funcionB(); }
function funcionB() { funcionC(); }
function funcionC() { console.trace('Traza de ejecución'); }

funcionA();
// Muestra la pila de llamadas completa hasta funcionC
```

### Trazas personalizadas

```javascript
console.trace('%cPunto de control importante', 'color: orange');
```

## Tablas complejas

### Datos multidimensionales

```javascript
const usuarios = [
  {id: 1, nombre: 'Ana', rol: 'Admin', departamentos: ['IT', 'RRHH']},
  {id: 2, nombre: 'Juan', rol: 'Editor', departamentos: ['Marketing']},
  {id: 3, nombre: 'Elena', rol: 'Usuario', departamentos: ['Ventas', 'Soporte']}
];

console.table(usuarios);
```

### Selección de columnas

```javascript
console.table(usuarios, ['nombre', 'rol']);
```

### Datos indexados personalizados

```javascript
const usuariosPorId = {
  'usr_123': {nombre: 'Ana', conectado: true},
  'usr_456': {nombre: 'Luis', conectado: false},
  'usr_789': {nombre: 'Elena', conectado: true}
};

console.table(usuariosPorId);
```

## Contexto y estado

### Captura de contexto

```javascript
function logContexto(mensaje, contexto = {}) {
  console.groupCollapsed(`${mensaje} - ${new Date().toLocaleTimeString()}`);
  
  if (Object.keys(contexto).length) {
    console.log('Contexto:', contexto);
  }
  
  console.log('URL:', window.location.href);
  console.log('Usuario:', getCurrentUser());
  console.trace('Origen');
  
  console.groupEnd();
}

// Uso
logContexto('Error al procesar pago', {
  idTransaccion: 'TX12345',
  monto: 150.75,
  error: 'Fondos insuficientes'
});
```

### Datos de depuración ricos

```javascript
class Logger {
  static info(mensaje, datos) {
    this._log('info', mensaje, datos);
  }
  
  static error(mensaje, error, datos) {
    this._log('error', mensaje, {
      ...datos,
      errorNombre: error.name,
      errorMensaje: error.message,
      stack: error.stack
    });
  }
  
  static _log(nivel, mensaje, datos = {}) {
    const estilos = {
      info: 'color: blue; font-weight: bold;',
      error: 'color: red; font-weight: bold;'
    };
    
    console.groupCollapsed(
      `%c${nivel.toUpperCase()}: ${mensaje}`,
      estilos[nivel]
    );
    
    if (datos) console.log('Datos:', datos);
    console.trace('Traza');
    console.groupEnd();
  }
}

// Uso
try {
  // Código que puede fallar
  throw new Error('Error al procesar datos');
} catch (error) {
  Logger.error('Fallo en la operación', error, {
    operacion: 'procesarPago',
    idUsuario: 12345
  });
}
```

## Dir y dirxml para objetos especiales

### Exploración estructural

```javascript
// Ver propiedades completas, incluyendo no enumerables
console.dir(document.body);

// Ver como árbol DOM (similar a la vista Elements)
console.dirxml(document.body);
```

### Visualización profunda

```javascript
class ComponenteComplejo {
  constructor() {
    this.estado = { /* ... */ };
    this.props = { /* ... */ };
    // Propiedades privadas
    this._cache = new Map();
    this._listeners = [];
  }
}

const componente = new ComponenteComplejo();
console.dir(componente, { depth: null }); // Muestra todos los niveles anidados
```

## Exportación y compartición de logs

### Copiar al portapapeles

```javascript
const datos = [/* datos complejos */];
console.log('Datos para análisis:', datos);

// En la consola:
// Click derecho > "Store as global variable"
// Obtiene temp1
copy(temp1); // Copia al portapapeles
```

### URLs de depuración

```javascript
console.log(
  'Para reproducir: %cclip%c', 
  'color: blue; text-decoration: underline; cursor: pointer;',
  '',
  {
    url: window.location.href,
    params: new URLSearchParams(window.location.search).toString(),
    estado: obtenerEstadoActual()
  }
);
```

## Logging condicional y personalizado

### Niveles de log configurables

```javascript
const LogLevel = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
  TRACE: 4
};

class LoggerAvanzado {
  constructor(nivel = LogLevel.INFO) {
    this.nivel = nivel;
  }
  
  setNivel(nivel) {
    this.nivel = nivel;
  }
  
  error(...args) {
    if (this.nivel >= LogLevel.ERROR) {
      console.error(...args);
    }
  }
  
  warn(...args) {
    if (this.nivel >= LogLevel.WARN) {
      console.warn(...args);
    }
  }
  
  info(...args) {
    if (this.nivel >= LogLevel.INFO) {
      console.info(...args);
    }
  }
  
  debug(...args) {
    if (this.nivel >= LogLevel.DEBUG) {
      console.debug(...args);
    }
  }
  
  trace(...args) {
    if (this.nivel >= LogLevel.TRACE) {
      console.trace(...args);
    }
  }
}

// Uso
const logger = new LoggerAvanzado();

// En desarrollo
if (process.env.NODE_ENV === 'development') {
  logger.setNivel(LogLevel.DEBUG);
}

logger.debug('Información detallada solo visible en desarrollo');
```

### Logging contextual

```javascript
function crearLoggerContextual(componente) {
  return {
    log: (...args) => console.log(`[${componente}]`, ...args),
    warn: (...args) => console.warn(`[${componente}]`, ...args),
    error: (...args) => console.error(`[${componente}]`, ...args),
    info: (...args) => console.info(`[${componente}]`, ...args),
    debug: (...args) => console.debug(`[${componente}]`, ...args)
  };
}

// Uso
const loggerAuth = crearLoggerContextual('Autenticación');
loggerAuth.log('Usuario iniciando sesión');
loggerAuth.error('Error de autenticación', new Error('Credenciales inválidas'));
```

## Integración con errores de la aplicación

### Captura global de errores

```javascript
window.addEventListener('error', (evento) => {
  console.group('%cError no capturado', 'color: red; font-weight: bold;');
  console.error('Mensaje:', evento.message);
  console.error('Origen:', evento.filename);
  console.error('Línea:', evento.lineno, 'Columna:', evento.colno);
  console.error('Error:', evento.error);
  console.groupEnd();
  
  // Opcional: enviar a servicio de monitoreo
});
```

### Captura de promesas rechazadas

```javascript
window.addEventListener('unhandledrejection', (evento) => {
  console.group('%cPromesa rechazada no capturada', 'color: #ff6b00; font-weight: bold;');
  console.error('Razón:', evento.reason);
  console.trace('Origen');
  console.groupEnd();
});
```

## Técnicas avanzadas para desarrollo

### Hooks de depuración

```javascript
// Agregar un hook antes de una función para depurar
const funcionOriginal = miObjeto.funcionImportante;

miObjeto.funcionImportante = function(...args) {
  console.group('Llamada a funcionImportante');
  console.log('Argumentos:', ...args);
  console.time('Duración');
  
  const resultado = funcionOriginal.apply(this, args);
  
  console.log('Resultado:', resultado);
  console.timeEnd('Duración');
  console.groupEnd();
  
  return resultado;
};
```

### Live expressions

En Chrome DevTools, puedes usar "Create live expression" (ojo + símbolo) para monitorear valores en tiempo real:

```javascript
// Expresión de monitoreo constante
// document.querySelectorAll('.item').length
// miAplicacion.estado.usuarios.length
// performance.now()
```

## Mejores prácticas para logging productivo

### Prevención de fugas de información

```javascript
// Evitar logging de información sensible
function logUsuario(usuario) {
  console.log('Usuario:', {
    id: usuario.id,
    nombre: usuario.nombre,
    // NO incluir: contraseña, tokens, datos personales
    rol: usuario.rol,
    ultimoAcceso: usuario.ultimoAcceso
  });
}
```

### Desactivación condicional

```javascript
// Solo activar logs detallados en desarrollo
if (process.env.NODE_ENV !== 'production') {
  window.DEBUG = true;
}

function logDebug(...args) {
  if (window.DEBUG) {
    console.debug(...args);
  }
}

// Uso
logDebug('Información detallada de depuración', datos);
```

### Exportación a servicios externos

```javascript
class LoggerRemoto {
  constructor(endpoint, nivelMinimo = 'error') {
    this.endpoint = endpoint;
    this.niveles = ['debug', 'info', 'warn', 'error'];
    this.nivelMinimo = this.niveles.indexOf(nivelMinimo);
  }
  
  log(nivel, mensaje, datos = {}) {
    const nivelIndice = this.niveles.indexOf(nivel);
    
    // Solo enviar logs del nivel configurado o superior
    if (nivelIndice >= this.nivelMinimo) {
      // Log local para desarrollo
      console[nivel](mensaje, datos);
      
      // Envío a servicio remoto
      fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nivel,
          mensaje,
          datos,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(e => console.error('Error enviando log remoto:', e));
    }
  }
  
  // Métodos de conveniencia
  debug(msg, datos) { this.log('debug', msg, datos); }
  info(msg, datos) { this.log('info', msg, datos); }
  warn(msg, datos) { this.log('warn', msg, datos); }
  error(msg, datos) { this.log('error', msg, datos); }
}

// Uso
const logger = new LoggerRemoto('/api/logs', 'warn');
logger.error('Error crítico', { codigo: 500, detalles: '...' });
```

## Conclusión

Las técnicas avanzadas de logging en la consola del navegador permiten:

- Crear sistemas de logs estructurados y visualmente útiles
- Facilitar la detección y diagnóstico de problemas
- Medir y optimizar el rendimiento de aplicaciones
- Crear sistemas de logs adaptados a las necesidades de cada proyecto

La combinación de estas técnicas con otros paneles de las herramientas de desarrollo proporciona una base sólida para el desarrollo y mantenimiento de aplicaciones web de alta calidad.