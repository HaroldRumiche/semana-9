---
id : editar-datos
sidebar_position: 7
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Edición de Datos en el Storage

El inspector de elementos proporciona poderosas herramientas para modificar los datos almacenados en el navegador durante el desarrollo y la depuración. Esta capacidad es invaluable para probar diferentes estados de la aplicación, recrear condiciones específicas o solucionar problemas sin tener que modificar el código fuente.

## Importancia de la edición de datos

La capacidad de editar datos almacenados en tiempo real permite:

- Probar funcionalidades sin tener que recrear secuencias de acciones complejas
- Simular diferentes estados de usuario o preferencias
- Depurar escenarios específicos que son difíciles de reproducir
- Validar el comportamiento de la aplicación con diferentes conjuntos de datos
- Corregir datos problemáticos sin reiniciar la aplicación

## Métodos de edición por tipo de almacenamiento

### Edición de Cookies

Para editar cookies existentes:

1. En el panel de Cookies, haz doble clic en el valor que deseas modificar
2. Edita el contenido y presiona Enter para guardar
3. La aplicación utilizará inmediatamente el nuevo valor

Para modificar propiedades avanzadas de cookies:

1. Haz doble clic en la cookie o selecciona "Edit Cookie" desde el menú contextual
2. Se abrirá un formulario para editar todas las propiedades:
   - Nombre y valor
   - Dominio y ruta
   - Fecha de expiración
   - Atributos de seguridad (HttpOnly, Secure, SameSite)

![Edición de cookies](https://via.placeholder.com/800x400)

### Edición de LocalStorage y SessionStorage

Para editar valores en LocalStorage o SessionStorage:

1. En el panel correspondiente, haz doble clic en el valor o la clave
2. Modifica el contenido
3. Presiona Enter o haz clic fuera del campo para confirmar

Para editar objetos JSON almacenados como strings:

1. Copia el valor string JSON
2. Utiliza la consola para parsearlo, modificarlo y volver a almacenarlo:

```javascript
// Recuperar el string JSON
const userData = localStorage.getItem('user_data');

// Parsearlo a objeto JavaScript
const userObject = JSON.parse(userData);

// Modificar valores
userObject.premium = true;
userObject.preferences.darkMode = true;

// Guardar los cambios
localStorage.setItem('user_data', JSON.stringify(userObject));
```

### Edición de IndexedDB

Las capacidades de edición directa en la interfaz varían según el navegador:

#### En navegadores con soporte para edición directa:

1. Selecciona el object store y registro que deseas modificar
2. Haz doble clic en el valor del campo a editar
3. Modifica el contenido y confirma los cambios

#### Método alternativo usando la consola:

```javascript
// Abrir conexión
const request = indexedDB.open("miBaseDeDatos");
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(["usuarios"], "readwrite");
  const store = transaction.objectStore("usuarios");
  
  // Obtener el registro para modificar
  const getRequest = store.get(5); // ID del registro
  getRequest.onsuccess = function() {
    const data = getRequest.result;
    
    // Modificar valores
    data.nombre = "Nuevo Nombre";
    data.ultimoAcceso = new Date();
    
    // Guardar cambios
    store.put(data);
  };
};
```

### Edición en Cache Storage

La edición directa de contenido en Cache Storage es limitada, pero puedes:

1. Eliminar entradas individuales para forzar nuevas solicitudes a la red
2. Reemplazar entradas mediante código:

```javascript
// Actualizar una entrada en la caché
caches.open('mi-cache-v1').then(cache => {
  fetch('/mi-recurso.json')
    .then(response => cache.put('/mi-recurso.json', response));
});
```

## Técnicas avanzadas de edición

### Edición masiva de datos

Para modificar múltiples elementos al mismo tiempo:

#### LocalStorage:

```javascript
// Ejemplo: Cambiar prefijo en múltiples claves
Object.keys(localStorage).forEach(key => {
  if (key.startsWith('app_v1_')) {
    const newKey = key.replace('app_v1_', 'app_v2_');
    localStorage.setItem(newKey, localStorage.getItem(key));
    localStorage.removeItem(key);
  }
});
```

#### IndexedDB:

```javascript
// Modificar todos los registros que cumplen cierta condición
const request = indexedDB.open("appDatabase");
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(["productos"], "readwrite");
  const store = transaction.objectStore("productos");
  
  // Usando un cursor para recorrer todos los registros
  store.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      // Modificar registros que cumplen una condición
      if (cursor.value.categoria === "descontinuado") {
        const updateData = cursor.value;
        updateData.visible = false;
        cursor.update(updateData);
      }
      cursor.continue();
    }
  };
};
```

### Importación y exportación de datos

Para realizar cambios complejos o preparar estados específicos:

#### LocalStorage:

```javascript
// Exportar datos
function exportLocalStorage() {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data[key] = localStorage.getItem(key);
  }
  return JSON.stringify(data);
}

// Importar datos
function importLocalStorage(jsonData) {
  const data = JSON.parse(jsonData);
  Object.keys(data).forEach(key => {
    localStorage.setItem(key, data[key]);
  });
}

// Uso
const backup = exportLocalStorage();
// Más tarde...
importLocalStorage(backup);
```

#### Cookies:

```javascript
// Exportar cookies a formato JSON
function exportCookies() {
  return document.cookie.split(';')
    .map(cookie => cookie.trim().split('='))
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
}
```

## Casos de uso para la edición de datos

### Simulación de estados de usuario

Modifica los datos almacenados para probar diferentes escenarios:

- Usuario autenticado vs no autenticado
- Usuario con diferentes niveles de permisos
- Preferencias de usuario específicas
- Estados de finalización de tareas

### Depuración de problemas de persistencia

Si los datos no se guardan o actualizan correctamente:

1. Modifica manualmente los valores para asegurarte de que la aplicación los lee correctamente
2. Verifica que los cambios persisten tras recargar la página
3. Comprueba si hay restricciones o validaciones que impiden guardar ciertos valores

### Recreación de condiciones específicas

Para reproducir errores reportados por usuarios:

1. Configura los valores de almacenamiento para coincidir con el entorno del usuario
2. Simula el estado exacto de la aplicación cuando ocurrió el problema
3. Realiza las acciones que desencadenan el error

### Pruebas A/B manuales

Para probar diferentes configuraciones:

1. Modifica los flags de características almacenados localmente
2. Actualiza preferencias o configuraciones sin cambiar el código
3. Observa cómo responde la aplicación a diferentes valores

## Consejos y mejores prácticas

### Seguridad y precauciones

- Crea copias de seguridad antes de modificar datos críticos
- Utiliza el modo incógnito para probar sin afectar tu sesión principal
- Ten cuidado al modificar tokens de autenticación, pueden invalidar tu sesión

### Optimización del flujo de trabajo

- Crea snippets en la consola para tareas repetitivas de edición de datos
- Utiliza extensiones del navegador para guardar y restaurar estados de almacenamiento
- Documenta los estados de datos útiles para pruebas futuras

### Depuración efectiva

- Establece puntos de interrupción en operaciones de lectura/escritura para observar cómo la aplicación utiliza los datos modificados
- Utiliza `console.log` para verificar los valores antes y después de la edición
- Considera utilizar el panel "Sources" para observar qué código accede a los datos modificados

## Limitaciones conocidas

- **Tipos de datos complejos**: Algunos navegadores tienen dificultades para editar estructuras anidadas directamente
- **Actualizaciones en tiempo real**: Los cambios manuales pueden no desencadenar listeners o eventos de la aplicación
- **Inconsistencias en la interfaz**: Las capacidades de edición varían significativamente entre navegadores
- **Validación de datos**: Los cambios manuales pueden omitir la validación que normalmente se aplica en el código

La capacidad de editar datos almacenados es una herramienta poderosa en el arsenal de cualquier desarrollador web, permitiendo pruebas rápidas, recreación de escenarios y solución de problemas sin necesidad de modificar y reconstruir el código de la aplicación.