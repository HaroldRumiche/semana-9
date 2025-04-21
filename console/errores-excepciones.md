---
sidebar_label: 'Errores y Excepciones'
sidebar_position: 5
---

# Errores y Excepciones en la Consola

La consola del navegador es la primera línea de defensa para identificar y solucionar problemas en aplicaciones web. Comprender los diferentes tipos de errores y excepciones que aparecen en la consola te permitirá diagnosticar y resolver problemas de manera más eficiente.

## Tipos de errores comunes

Los errores en JavaScript se pueden categorizar en varios tipos principales:

### 1. Errores de sintaxis (SyntaxError)

Ocurren cuando el código no cumple con las reglas gramaticales del lenguaje:

```
Uncaught SyntaxError: Unexpected token ')'
```

Características:
- Impiden la ejecución del script completo
- Se detectan durante la fase de análisis (antes de la ejecución)
- Ejemplos: paréntesis desbalanceados, punto y coma faltantes, comillas sin cerrar

Formas de solucionar:
- Revisa la línea indicada y sus alrededores
- Verifica el balance de paréntesis, llaves y corchetes
- Comprueba la validez de tu código con linters o formateadores

### 2. Errores de referencia (ReferenceError)

Ocurren al intentar acceder a variables o funciones no definidas:

```
Uncaught ReferenceError: miVariable is not defined
```

Características:
- Se producen al intentar usar identificadores inexistentes
- Comunes en errores de escritura o problemas de alcance
- Pueden ocurrir con variables no declaradas o utilizadas antes de su declaración

Formas de solucionar:
- Verifica la ortografía de las variables y funciones
- Asegúrate de que las variables están declaradas antes de usarlas
- Comprueba el alcance (scope) de las variables

### 3. Errores de tipo (TypeError)

Ocurren al realizar operaciones incompatibles con el tipo de un valor:

```
Uncaught TypeError: Cannot read property 'length' of undefined
```

Características:
- Muy comunes en operaciones con objetos y arrays
- Ocurren cuando se intenta usar métodos en tipos inadecuados
- Frecuentes al acceder a propiedades de valores `null` o `undefined`

Formas de solucionar:
- Utiliza validaciones antes de acceder a propiedades anidadas
- Implementa operadores de encadenamiento opcional (`?.`)
- Usa valores predeterminados con el operador nullish coalescing (`??`)

### 4. Errores de rango (RangeError)

Ocurren cuando un valor numérico está fuera del rango permitido:

```
Uncaught RangeError: Maximum call stack size exceeded
```

Características:
- Menos comunes que otros tipos de errores
- Suelen aparecer en recursiones infinitas o arrays con tamaño inválido
- También ocurren con valores numéricos fuera de los límites aceptables

Formas de solucionar:
- Revisa condiciones de terminación en funciones recursivas
- Verifica operaciones que manipulan tamaños de arrays
- Comprueba parámetros numéricos en funciones sensibles

### 5. Errores de URI (URIError)

Ocurren cuando se utilizan incorrectamente funciones de codificación/decodificación de URI:

```
Uncaught URIError: URI malformed
```

Características:
- Raros en la mayoría de aplicaciones
- Relacionados con `encodeURI()`, `decodeURI()` y funciones similares
- Suelen aparecer al procesar cadenas con caracteres especiales

### 6. Errores de evaluación (EvalError)

Ocurren con problemas relacionados con la función `eval()`:

```
Uncaught EvalError: Refused to evaluate in page
```

Características:
- Extremadamente raros en código moderno
- Se desaconseja el uso de `eval()` por motivos de seguridad y rendimiento

### 7. Errores personalizados

Creados por el programador usando `throw`:

```
Uncaught Error: El valor debe ser positivo
```

Características:
- Mensajes personalizados que explican claramente el problema
- Pueden extender la clase Error o sus subclases
- Útiles para validaciones y manejo de casos excepcionales

## Anatomía de un mensaje de error

Los mensajes de error en la consola contienen información valiosa:

```
Uncaught TypeError: Cannot read property 'name' of undefined
    at getUserDetails (app.js:42)
    at processForm (app.js:108)
    at HTMLFormElement.submitHandler (app.js:157)
```

Componentes principales:
- **Tipo de error**: Indica la categoría del problema (TypeError, SyntaxError, etc.)
- **Mensaje descriptivo**: Explica la naturaleza del error
- **Stack trace**: Muestra la secuencia de llamadas a funciones hasta el error
- **Ubicación**: Archivo y número de línea donde ocurrió el problema

## Errores asíncronos

Los errores en código asíncrono requieren atención especial:

### Promesas rechazadas no manejadas

```
Uncaught (in promise) TypeError: Cannot read property 'data' of undefined
    at fetchUserData (app.js:78)
    at async loadUserProfile (app.js:124)
```

Características:
- Aparecen cuando una promesa es rechazada sin un `catch()`
- Pueden ocurrir en un contexto temporal diferente al de la llamada original
- Más difíciles de rastrear que los errores síncronos

Formas de solucionar:
- Siempre incluye bloques `.catch()` en cadenas de promesas
- Usa `try/catch` con funciones `async/await`
- Implementa un manejador global de errores para promesas no capturadas:

```javascript
window.addEventListener('unhandledrejection', event => {
  console.error('Promesa rechazada no manejada:', event.reason);
  // Registro o notificación del error
});
```

## Errores de red y recursos

La consola también muestra errores relacionados con la carga de recursos:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
net::ERR_ABORTED 404 (Not Found)
```

Características:
- Indican problemas con solicitudes HTTP
- Incluyen códigos de estado y descripciones
- A menudo relacionados con rutas incorrectas, CORS o problemas de servidor

Formas de solucionar:
- Verifica las URLs de los recursos
- Revisa la configuración CORS en solicitudes entre dominios
- Consulta el panel Network para más detalles sobre la solicitud fallida

## Advertencias del navegador

No todos los mensajes rojos son errores críticos. La consola también muestra advertencias:

```
[Deprecation] 'window.webkitStorageInfo' is deprecated. Please use 'navigator.storage' instead.
```

```
[Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event.
```

Características:
- Indican prácticas desaconsejadas o potencialmente problemáticas
- No impiden la ejecución del código, pero pueden afectar al rendimiento o comportamiento
- A menudo incluyen enlaces a documentación o sugerencias de mejora

## Técnicas avanzadas de depuración

### 1. Puntos de interrupción condicionales

La consola permite establecer condiciones para los breakpoints:

```javascript
// En el código
if (condición) { debugger; }

// O en el panel Sources, establecer un breakpoint condicional
// con una expresión que evalúe a true para activarlo
```

### 2. Captura de errores con try/catch

```javascript
try {
  // Código potencialmente problemático
} catch (error) {
  console.error('Error controlado:', error.message);
  // Lógica de manejo del error
} finally {
  // Código que se ejecuta independientemente del resultado
}
```

### 3. Logging de errores personalizado

```javascript
function errorLogger(error, contexto = {}) {
  console.group('%cError Detectado', 'color:red; font-size:14px;');
  console.error(error.message);
  console.log('Tipo:', error.name);
  console.log('Ubicación:', error.fileName || 'N/A', 'línea:', error.lineNumber || 'N/A');
  console.log('Stack:', error.stack);
  console.log('Contexto:', contexto);
  console.groupEnd();
  
  // Opcionalmente, enviar a un servicio de tracking
}
```

### 4. Monitoreo global de errores

```javascript
window.onerror = function(mensaje, fuente, linea, columna, error) {
  console.error({
    mensaje,
    fuente,
    linea,
    columna,
    error
  });
  
  // Opcional: enviar a un servicio de análisis
  return false; // Permite que el error se muestre también en la consola
};
```

## Mejores prácticas para manejar errores

1. **Sé específico**: Captura errores de tipos específicos para manejarlos apropiadamente
2. **Valida temprano**: Verifica la existencia y tipo de variables antes de usarlas
3. **Mensajes claros**: Crea errores con mensajes descriptivos que ayuden a la depuración
4. **Degrada elegantemente**: Diseña tu aplicación para fallar de forma predecible y controlada
5. **Registra contexto**: Incluye información relevante al registrar errores (usuario, estado, etc.)
6. **No silencies errores**: Evita bloques `catch` vacíos o que oculten problemas
7. **Centraliza el manejo**: Implementa una estrategia consistente para toda la aplicación

## Herramientas complementarias

Además de la consola, considera estas herramientas para mejorar la detección y manejo de errores:

- **Linters** (ESLint, JSHint): Detectan problemas potenciales antes de ejecutar el código
- **Servicios de monitoreo** (Sentry, LogRocket): Capturan y analizan errores en producción
- **Frameworks de testing** (Jest, Mocha): Ayudan a prevenir errores con pruebas automatizadas
- **TypeScript**: Añade verificación de tipos estática para prevenir errores de tipo

Dominar la interpretación y solución de errores en la consola es una habilidad fundamental para cualquier desarrollador web, permitiéndote crear aplicaciones más robustas y ofrecer una mejor experiencia de usuario.