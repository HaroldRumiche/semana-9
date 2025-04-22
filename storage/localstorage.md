---
id : localstorage
sidebar_position: 3
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# LocalStorage en el Inspector de Elementos

LocalStorage es un mecanismo de almacenamiento web que permite a las aplicaciones guardar datos de forma persistente en el navegador del usuario. A diferencia de las cookies, los datos en LocalStorage no se envían automáticamente al servidor con cada solicitud HTTP.

## Características principales de LocalStorage

- **Persistencia**: Los datos permanecen almacenados incluso después de cerrar el navegador
- **Almacenamiento por origen**: Cada origen (dominio+protocolo+puerto) tiene su propio almacenamiento aislado
- **Capacidad**: Típicamente 5-10 MB dependiendo del navegador
- **API simple**: Basada en pares clave-valor de texto
- **Sincrónico**: Las operaciones bloquean el hilo principal

## Acceso al panel de LocalStorage

Para inspeccionar el contenido de LocalStorage:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application" (Chrome/Edge) o "Storage" (Firefox)
3. En el panel izquierdo, expande "Local Storage" y selecciona el origen que deseas inspeccionar

![Panel de LocalStorage](https://via.placeholder.com/800x400)

## Visualización y navegación

El panel de LocalStorage muestra una tabla con dos columnas principales:
- **Key**: El identificador único del elemento almacenado
- **Value**: El valor asociado a la clave

Para una mejor visualización:
- Puedes hacer clic en cualquier celda para ver y editar su contenido completo
- Para valores JSON, puedes utilizar la consola para parsearlos y visualizarlos de forma estructurada

## Manipulación de datos en LocalStorage

### Crear nuevos elementos

Para agregar un nuevo par clave-valor:

1. Haz clic derecho en el área de la tabla
2. Selecciona "Add Item" (o el equivalente en tu idioma)
3. Introduce la clave y el valor en las celdas correspondientes

También puedes crear elementos programáticamente desde la consola:

```javascript
localStorage.setItem('miClave', 'miValor');
```

### Editar elementos existentes

Para modificar un elemento existente:

1. Haz doble clic en la celda que deseas modificar (Key o Value)
2. Edita el contenido
3. Presiona Enter o haz clic fuera de la celda para guardar

Desde la consola:

```javascript
localStorage.setItem('miClave', 'nuevoValor');
```

### Eliminar elementos

Para eliminar elementos individuales:

1. Selecciona el elemento que deseas eliminar
2. Presiona la tecla Delete, o haz clic derecho y selecciona "Delete"

Para eliminar todos los elementos de un origen:

1. Haz clic derecho en el área de la tabla
2. Selecciona "Clear" o "Clear All"

Desde la consola:

```javascript
// Eliminar un elemento específico
localStorage.removeItem('miClave');

// Eliminar todos los elementos
localStorage.clear();
```

## Búsqueda y filtrado

Para encontrar rápidamente elementos específicos:

1. Utiliza el campo de búsqueda en la parte superior del panel
2. Introduce la clave o valor que deseas encontrar
3. Los resultados se filtrarán automáticamente mientras escribes

## Visualización de objetos JSON

LocalStorage solo admite cadenas de texto, pero es común almacenar objetos JSON serializados:

1. En el panel de LocalStorage, identifica el valor que parece ser JSON
2. Copia la clave del elemento
3. En la consola, ejecuta:

```javascript
JSON.parse(localStorage.getItem('tuClave'));
```

Esto mostrará el objeto JSON formateado y navegable en la consola.

## Casos de uso comunes para depuración

### Verificar el estado de la aplicación

LocalStorage a menudo almacena:
- Preferencias de usuario
- Tokens de autenticación
- Datos en caché
- Estado de la interfaz de usuario

Inspeccionar estos datos puede ayudar a identificar problemas con el estado de la aplicación.

### Modificar el comportamiento de la aplicación

Puedes alterar el comportamiento de la aplicación modificando los valores en LocalStorage:
- Cambiar preferencias
- Simular diferentes estados de autenticación
- Forzar características experimentales

### Depurar problemas de persistencia

Si la aplicación no recuerda la configuración del usuario:
1. Verifica si los datos se están guardando correctamente en LocalStorage
2. Comprueba si se están sobrescribiendo en algún momento
3. Asegúrate de que no haya límites de almacenamiento alcanzados

## Limitaciones y consideraciones

- **Mismo origen**: Solo accesible desde el mismo origen que lo creó
- **No seguro para datos sensibles**: No utilizar para almacenar información confidencial
- **Límite de almacenamiento**: Típicamente 5-10 MB por origen
- **Solo cadenas**: Los valores se convierten automáticamente a cadenas de texto
- **Operaciones sincrónicas**: Pueden bloquear el hilo principal si se manipulan grandes cantidades de datos

## Consejos para desarrolladores

- Utiliza prefijos en las claves para organizar los datos (por ejemplo, `config.tema`, `usuario.preferencias`)
- Comprueba el tamaño de tus datos con:
  ```javascript
  Object.keys(localStorage).reduce((total, key) => total + localStorage[key].length, 0);
  ```
- Considera utilizar IndexedDB para almacenamiento de grandes volúmenes de datos
- Implementa un sistema de expiración para datos que no necesitan ser permanentes
- Encapsula las operaciones de LocalStorage en una clase o módulo para centralizar su gestión

El panel de LocalStorage en el inspector de elementos es una herramienta esencial para entender y depurar el estado cliente de tus aplicaciones web, permitiéndote examinar y manipular fácilmente los datos persistentes almacenados en el navegador.