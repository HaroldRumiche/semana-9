---
id : sessionstorage
sidebar_position: 4
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# SessionStorage en el Inspector de Elementos

SessionStorage es un mecanismo de almacenamiento web que permite a las aplicaciones guardar datos temporalmente mientras dura una sesión del navegador. Es ideal para datos que solo necesitan persistir durante la interacción del usuario con el sitio web.

## Características principales de SessionStorage

- **Duración limitada**: Los datos se eliminan al cerrar la pestaña o ventana
- **Ámbito de sesión**: Cada pestaña/ventana tiene su propia sesión independiente
- **Almacenamiento por origen**: Cada origen (dominio+protocolo+puerto) tiene su propio espacio aislado
- **Capacidad**: Típicamente 5-10 MB dependiendo del navegador
- **API simple**: Basada en pares clave-valor de texto
- **Sincrónico**: Las operaciones bloquean el hilo principal

## Diferencias entre SessionStorage y LocalStorage

| Característica | SessionStorage | LocalStorage |
|----------------|----------------|--------------|
| Persistencia | Temporal (duración de la sesión) | Permanente (hasta que se elimine) |
| Ámbito | Limitado a la pestaña/ventana | Compartido en todas las pestañas/ventanas del mismo origen |
| API | Idéntica (setItem, getItem, etc.) | Idéntica (setItem, getItem, etc.) |
| Capacidad | ~5-10 MB | ~5-10 MB |
| Uso típico | Estado temporal, datos de formularios | Preferencias, configuración, tokens |

## Acceso al panel de SessionStorage

Para inspeccionar el contenido de SessionStorage:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Navega a la pestaña "Application" (Chrome/Edge) o "Storage" (Firefox)
3. En el panel izquierdo, expande "Session Storage" y selecciona el origen que deseas inspeccionar

![Panel de SessionStorage](https://via.placeholder.com/800x400)

## Visualización y navegación

El panel de SessionStorage muestra una tabla con dos columnas principales:
- **Key**: El identificador único del elemento almacenado
- **Value**: El valor asociado a la clave

Para una mejor visualización:
- Puedes hacer clic en cualquier celda para ver y editar su contenido completo
- Los valores largos se truncan en la vista principal pero se pueden ver completos al seleccionarlos

## Manipulación de datos en SessionStorage

### Crear nuevos elementos

Para agregar un nuevo par clave-valor:

1. Haz clic derecho en el área de la tabla
2. Selecciona "Add Item" (o el equivalente en tu idioma)
3. Introduce la clave y el valor en las celdas correspondientes

También puedes crear elementos programáticamente desde la consola:

```javascript
sessionStorage.setItem('miClave', 'miValor');
```

### Editar elementos existentes

Para modificar un elemento existente:

1. Haz doble clic en la celda que deseas modificar (Key o Value)
2. Edita el contenido
3. Presiona Enter o haz clic fuera de la celda para guardar

Desde la consola:

```javascript
sessionStorage.setItem('miClave', 'nuevoValor');
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
sessionStorage.removeItem('miClave');

// Eliminar todos los elementos
sessionStorage.clear();
```

## Casos de uso comunes para SessionStorage

### Estado temporal de formularios

SessionStorage es ideal para guardar el progreso en formularios multi-paso:

```javascript
// Guardar datos del paso actual
function guardarPaso(numeroPaso, datos) {
  sessionStorage.setItem(`formulario_paso${numeroPaso}`, JSON.stringify(datos));
}

// Recuperar datos de un paso anterior
function recuperarPaso(numeroPaso) {
  const datos = sessionStorage.getItem(`formulario_paso${numeroPaso}`);
  return datos ? JSON.parse(datos) : null;
}
```

### Historial de navegación en la aplicación

Para mantener un historial de páginas visitadas dentro de la aplicación:

```javascript
// Añadir página al historial
function agregarAlHistorial(pagina) {
  const historial = JSON.parse(sessionStorage.getItem('historial_navegacion') || '[]');
  historial.push({ pagina, timestamp: Date.now() });
  sessionStorage.setItem('historial_navegacion', JSON.stringify(historial));
}
```

### Restauración de estado en recarga de página

Para preservar el estado de la interfaz cuando el usuario recarga la página:

```javascript
// Al cargar la página
window.addEventListener('load', () => {
  const estadoUI = sessionStorage.getItem('estado_ui');
  if (estadoUI) {
    const { pestañaActiva, posicionScroll, filtrosAplicados } = JSON.parse(estadoUI);
    // Restaurar estado...
  }
});

// Antes de recargar/salir
window.addEventListener('beforeunload', () => {
  const estadoActual = {
    pestañaActiva: obtenerPestañaActiva(),
    posicionScroll: window.scrollY,
    filtrosAplicados: obtenerFiltros()
  };
  sessionStorage.setItem('estado_ui', JSON.stringify(estadoActual));
});
```

## Depuración común con SessionStorage

### Verificar datos de sesión

Para comprobar si los datos se están guardando correctamente:

1. Realiza la acción que debería guardar datos en SessionStorage
2. Examina el panel de SessionStorage para verificar que los datos aparecen
3. Si no aparecen, utiliza puntos de interrupción (breakpoints) en el código JavaScript que interactúa con SessionStorage

### Problemas con objetos complejos

Si los datos no se guardan correctamente:

1. Recuerda que SessionStorage solo almacena cadenas de texto
2. Verifica que estés utilizando `JSON.stringify()` al guardar objetos
3. Asegúrate de usar `JSON.parse()` al recuperarlos

```javascript
// Incorrecta manipulación de objetos
sessionStorage.setItem('usuario', { nombre: 'Ana', id: 123 }); // ¡Error! Se guardará "[object Object]"

// Forma correcta
sessionStorage.setItem('usuario', JSON.stringify({ nombre: 'Ana', id: 123 }));
const usuario = JSON.parse(sessionStorage.getItem('usuario'));
```

### Aislamiento entre pestañas

Para comprobar el aislamiento:

1. Abre dos pestañas con la misma página
2. En la primera pestaña, modifica un valor en SessionStorage
3. Verifica en la segunda pestaña que el valor no ha cambiado (a diferencia de LocalStorage)

## Consejos para desarrolladores

- Utiliza SessionStorage para datos temporales que no necesitan persistir entre sesiones
- Implementa mecanismos de respaldo para recuperar datos importantes si el usuario cierra accidentalmente la pestaña
- Considera combinar SessionStorage con LocalStorage: los datos temporales en SessionStorage y las preferencias persistentes en LocalStorage
- Para aplicaciones SPA (Single Page Application), SessionStorage puede ser más útil que las cookies para datos que no necesitan ser enviados al servidor
- Ten cuidado con almacenar grandes cantidades de datos, ya que las operaciones son sincrónicas y pueden bloquear la interfaz de usuario

El panel de SessionStorage en el inspector de elementos es una herramienta valiosa para depurar problemas relacionados con el estado temporal de las aplicaciones web, permitiéndote examinar y manipular datos que solo necesitan persistir durante la sesión actual del usuario.