---
id : editar-html-vivo
sidebar_position: 3
---

# Editar HTML en vivo

Uno de los aspectos más poderosos del inspector de elementos es la capacidad de modificar el HTML directamente en el navegador y ver los cambios instantáneamente, sin necesidad de recargar la página.

## Modificar el contenido HTML

Para editar un elemento HTML:

1. Selecciona el elemento en el panel del inspector
2. Haz doble clic en la etiqueta o contenido que deseas modificar
3. Realiza los cambios necesarios
4. Presiona **Enter** para confirmar o **Esc** para cancelar

## Añadir nuevos elementos

Puedes insertar elementos HTML directamente en el DOM:

1. Haz clic derecho en el elemento padre donde quieres añadir contenido
2. Selecciona una de las opciones:
   - **Edit as HTML**: Para editar todo el contenido HTML del elemento
   - **Add attribute**: Para añadir un nuevo atributo
   - **Add child**: Para añadir un elemento hijo
   - **Insert before/after**: Para insertar un elemento hermano

## Eliminar elementos

Para eliminar un elemento del DOM:

1. Selecciona el elemento
2. Presiona la tecla **Delete** o **Backspace**
3. También puedes hacer clic derecho y seleccionar **Delete element**

## Mover elementos

Para reorganizar la estructura del DOM:

1. Haz clic y mantén presionado el elemento que deseas mover
2. Arrástralo a su nueva ubicación en el árbol DOM
3. Observa la línea guía azul que indica dónde se colocará el elemento

## Ver cambios en tiempo real

Mientras editas el HTML:

- Los cambios se aplican inmediatamente en la página
- Puedes observar cómo afectan al diseño y funcionalidad
- Los cambios son temporales y se perderán al recargar la página

## Guardar los cambios

Para conservar tus modificaciones:

1. Una vez realizados los cambios, puedes copiar el HTML modificado
2. Selecciona el elemento padre y usa la opción **Edit as HTML**
3. Copia el código generado (**Ctrl+C** o clic derecho > **Copy > Copy outerHTML**)
4. Pega estos cambios en tu editor de código fuente

## Limitaciones

Es importante tener en cuenta:

- Los cambios realizados son temporales y locales
- No se guardan en los archivos fuente
- Se perderán al recargar la página
- No afectan a otros usuarios que visiten el sitio