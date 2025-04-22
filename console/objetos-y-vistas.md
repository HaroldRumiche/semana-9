---
id : objetos-y-vistas
sidebar_position: 6
---

# Objetos y Vistas en la Consola

La consola del navegador proporciona potentes herramientas para inspeccionar y manipular objetos JavaScript. Conocer cómo la consola representa diferentes tipos de datos y las distintas vistas disponibles te permitirá analizar estructuras de datos complejas con mayor eficacia.

## Representación de objetos en la consola

La consola muestra los objetos de forma interactiva, permitiendo explorar sus propiedades y valores:

### Visualización expandible

Cuando imprimes un objeto en la consola:

```javascript
console.log(document.body);
```

La salida se muestra como una estructura expandible:
- Inicialmente contraída: `▶ HTMLBodyElement`
- Al expandirla: muestra todas las propiedades y métodos organizados

Esta representación jerárquica facilita la exploración de objetos complejos sin sobrecargar la vista.

### Visualización en línea vs expandida

La consola ofrece dos formas de visualizar objetos:

1. **Vista en línea**: Muestra una representación compacta
   ```javascript
   console.log({nombre: "Ana", edad: 28});
   // {nombre: "Ana", edad: 28}
   ```

2. **Vista expandida**: Al hacer clic en la representación en línea
   ```
   ▼ Object
     ▶ edad: 28
     ▶ nombre: "Ana"
     ▶ [[Prototype]]: Object
   ```

### Métodos especializados de visualización

#### console.dir()

Muestra una representación orientada a objetos, enfocada en propiedades:

```javascript
console.dir(document.body);
```

Características:
- Enfatiza la estructura de objeto JavaScript
- Muestra propiedades no enumerables
- Ideal para explorar la API de un objeto

#### console.dirxml()

Muestra una representación orientada al DOM:

```javascript
console.dirxml(document.body);
```

Características:
- Enfatiza la estructura de árbol HTML
- Similar a la vista en el panel Elements
- Ideal para explorar la estructura del DOM

## Inspección de tipos específicos

### Arrays

Los arrays se muestran con un formato especial:

```javascript
console.log([1, 2, 3, {nombre: "Ana"}]);
// ▼ (4) [1, 2, 3, {…}]
```

Características:
- Muestra la longitud del array entre paréntesis
- Permite expandir para ver índices y elementos
- Proporciona acceso a métodos de prototype

### DOM Elements

Los elementos DOM muestran información relevante:

```javascript
console.log(document.querySelector('h1'));
// ▼ <h1>Título de la página</h1>
```

Características:
- Muestra la representación HTML del elemento
- Al expandir, revela propiedades, atributos y eventos
- Proporciona vínculos para inspeccionar en el panel Elements

### Funciones

Las funciones muestran su definición:

```javascript
function sumar(a, b) { return a + b; }
console.log(sumar);
// ▼ ƒ sumar(a, b) { return a + b; }
```

Características:
- Para funciones cortas, muestra el código completo
- Para funciones largas, muestra una versión truncada
- Al expandir, revela propiedades como `name`, `length` y `prototype`

### Promesas

Las promesas muestran su estado:

```javascript
const promesa = new Promise(resolve => setTimeout(() => resolve("Completado"), 1000));
console.log(promesa);
// ▶ Promise {<pending>}
// (Después de 1 segundo)
// ▶ Promise {<fulfilled>: "Completado"}
```

Características:
- Muestra el estado actual (`pending`, `fulfilled`, `rejected`)
- Al expandir, revela el valor resuelto o la razón del rechazo
- Útil para depurar código asíncrono

### Map y Set

Estructuras de datos modernas con representación especializada:

```javascript
const mapa = new Map([["clave1", "valor1"], ["clave2", "valor2"]]);
console.log(mapa);
// ▼ Map(2) {"clave1" => "valor1", "clave2" => "valor2"}
```

```javascript
const conjunto = new Set([1, 2, 3, 3]);
console.log(conjunto);
// ▼ Set(3) {1, 2, 3}
```

## Vistas especializadas

### Formatted Table View

La vista de tabla formatea arrays de objetos de manera tabular:

```javascript
console.table([
  {nombre: "Ana", edad: 28, rol: "Desarrolladora"},
  {nombre: "Juan", edad: 34, rol: "Diseñador"},
  {nombre: "Elena", edad: 41, rol: "Gerente"}
]);
```

Características:
- Muestra datos en columnas y filas
- Permite ordenar haciendo clic en los encabezados
- Soporta filtrado de columnas específicas:

```javascript
console.table(usuarios, ["nombre", "edad"]);
```

### Vista de árbol expandible

Para objetos anidados:

```javascript
console.log({
  usuario: {
    datos: {
      nombre: "Ana",
      contacto: {
        email: "ana@ejemplo.com",
        telefono: "123456789"
      }
    },
    preferencias: {
      tema: "oscuro",
      notificaciones: true
    }
  }
});
```

Características:
- Permite expandir y contraer nodos
- Muestra la profundidad de anidamiento
- Facilita la navegación por estructuras complejas

## Técnicas avanzadas de inspección

### Inspección de prototipos

La consola muestra la cadena de prototipos:

```javascript
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() { return `Hola, soy ${this.nombre}`; }
}

const ana = new Persona("Ana");
console.log(ana);
```

Al expandir, verás:
```
▼ Persona {nombre: "Ana"}
  ▶ nombre: "Ana"
  ▼ [[Prototype]]: Object
    ▶ constructor: class Persona
    ▶ saludar: ƒ saludar()
    ▶ [[Prototype]]: Object
```

### Inspección de getters y setters

La consola diferencia entre valores normales y propiedades computadas:

```javascript
const objeto = {
  _valor: 42,
  get valor() { return this._valor; },
  set valor(nuevo) { this._valor = nuevo; }
};

console.log(objeto);
```

Al expandir, verás:
```
▼ Object
  ▶ _valor: 42
  ▶ valor: 42
  ▶ [[Prototype]]: Object
```

Los getters se evalúan automáticamente, mostrando su valor actual.

### Inspección de propiedades no enumerables

Por defecto, algunas propiedades pueden estar ocultas:

```javascript
const obj = Object.defineProperty({}, "oculta", {
  value: "valor secreto",
  enumerable: false
});

console.log(obj);
// {} (parece vacío)

console.dir(obj);
// Muestra la propiedad oculta
```

### Inspección de objetos proxy

Los proxies son transparentes en la consola:

```javascript
const original = {valor: 42};
const proxy = new Proxy(original, {
  get(target, prop) {
    console.log(`Accediendo a ${prop}`);
    return target[prop];
  }
});

console.log(proxy);
// Similar a un objeto normal, pero captará los accesos al expandirlo
```

## Manipulación de objetos desde la consola

### Referencias a objetos impresos

Los objetos mostrados en la consola mantienen referencias activas:

```javascript
const usuario = {nombre: "Ana", edad: 28};
console.log(usuario);

// Más tarde en la consola:
usuario.edad = 29;
console.log(usuario); // Muestra la edad actualizada
```

### Modificación directa en la vista

Puedes editar propiedades directamente en la interfaz:
1. Haz doble clic en el valor de una propiedad en la vista expandida
2. Edita el valor
3. Presiona Enter para confirmar

Esta funcionalidad permite experimentar con cambios sin modificar el código fuente.

### Store as global variable

Para objetos complejos que necesitas manipular:
1. Haz clic derecho en el objeto en la consola
2. Selecciona "Store as global variable"
3. Se creará una variable temporal (temp1, temp2, etc.)

```javascript
// Objeto original mostrado en la consola
const objetoComplejo = {/* ... muchas propiedades ... */};
console.log(objetoComplejo);

// Después de usar "Store as global variable"
temp1.nuevaPropiedad = "valor de prueba";
console.log(temp1.nuevaPropiedad);
```

## Buenas prácticas

### 1. Serialización personalizada

Controla la representación de tus objetos implementando `toJSON`:

```javascript
class Usuario {
  constructor(nombre, email, contraseña) {
    this.nombre = nombre;
    this.email = email;
    this._contraseña = contraseña;
  }
  
  toJSON() {
    return {
      nombre: this.nombre,
      email: this.email
      // No incluye _contraseña por seguridad
    };
  }
}

const usuario = new Usuario("Ana", "ana@ejemplo.com", "secreto123");
console.log(usuario);
// Muestra solo nombre y email, ocultando la contraseña
```

### 2. Agrupación lógica

Utiliza grupos para organizar la inspección de objetos relacionados:

```javascript
console.group('Datos de usuario');
console.log('Perfil:', perfil);
console.log('Preferencias:', preferencias);
console.log('Historial:', historial);
console.groupEnd();
```

### 3. Etiquetado de objetos

Proporciona contexto a los objetos que imprimes:

```javascript
console.log('Estado inicial:', {...estado});
// Realiza cambios
console.log('Estado final:', {...estado});
```

### 4. Custom formatters

Los navegadores modernos permiten definir formateadores personalizados para tipos específicos:

```javascript
// En el panel Sources o al inicio de tu aplicación
console.formatter.register('MyClass', (obj) => {
  if (obj instanceof MyClass) {
    return ['div', {}, `MyClass: ${obj.id} - ${obj.name}`];
  }
  return null;
});
```

Dominar la inspección y manipulación de objetos en la consola te permitirá comprender mejor la estructura de tus datos y realizar depuraciones más eficientes durante el desarrollo de aplicaciones web.