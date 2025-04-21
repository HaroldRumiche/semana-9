---
sidebar_label: 'Atributos de nodos'
sidebar_position: 5
---

# Atributos de nodos en el DOM

Cada elemento en el DOM tiene atributos que definen su comportamiento, apariencia y funcionalidad. El inspector de elementos permite examinar y modificar estos atributos de forma dinámica.

## Tipos de atributos

Los atributos de los elementos HTML se pueden clasificar en:

- **Atributos estándar**: Como `id`, `class`, `src`, `href`, etc.
- **Atributos de datos**: Con prefijo `data-`, utilizados para almacenar información personalizada
- **Atributos de evento**: Como `onclick`, `onmouseover`, etc.
- **Atributos ARIA**: Para accesibilidad, con prefijo `aria-`
- **Atributos personalizados**: Definidos por frameworks o bibliotecas

## Visualizar atributos en el inspector

Al seleccionar un elemento en el inspector, puedes ver sus atributos de varias formas:

1. **Directamente en la etiqueta HTML**: Aparecen dentro de la etiqueta como `nombre="valor"`
2. **Panel de propiedades**: Algunos navegadores muestran un panel dedicado con todos los atributos
3. **Panel de estilos**: Atributos que afectan al estilo visual

## Modificar atributos

Para editar un atributo existente:

1. Haz doble clic en el nombre o valor del atributo en la etiqueta HTML
2. Modifica el valor según sea necesario
3. Presiona **Enter** para confirmar

Para añadir un nuevo atributo:

1. Haz clic derecho en el elemento
2. Selecciona "Add attribute"
3. Ingresa el nombre y valor del atributo

Para eliminar un atributo:

1. Haz clic derecho en el atributo
2. Selecciona "Delete attribute" o simplemente elimina todo el texto del atributo

## Atributos calculados y heredados

El inspector muestra:

- **Atributos directos**: Definidos específicamente en el elemento
- **Atributos calculados**: Resultado de la aplicación de estilos y herencia
- **Atributos heredados**: Provenientes de elementos padres

## Atributos especiales

### Atributos de datos (data attributes)

Los atributos de datos permiten almacenar información privada en la página:

```html
<div data-user-id="123" data-role="admin">Contenido</div>
```

### Atributos de accesibilidad (ARIA)

Mejoran la accesibilidad para tecnologías asistivas:

```html
<button aria-label="Cerrar" aria-expanded="false">×</button>
```

## Observar cambios en atributos

El inspector permite:

1. Ver cómo cambian los atributos en tiempo real durante interacciones
2. Depurar comportamientos relacionados con cambios de atributos
3. Probar diferentes valores para optimizar el comportamiento

## Métodos JavaScript para manipular atributos

Desde la consola del inspector, puedes manipular atributos programáticamente:

```javascript
// Obtener un atributo
elemento.getAttribute('nombre');

// Establecer un atributo
elemento.setAttribute('nombre', 'valor');

// Verificar si existe un atributo
elemento.hasAttribute('nombre');

// Eliminar un atributo
elemento.removeAttribute('nombre');
```