---
sidebar_label: 'Estructura del documento'
sidebar_position: 6
---

# Estructura del documento HTML

Comprender la estructura del documento HTML es fundamental para un trabajo efectivo con el inspector de elementos. Esta estructura jerárquica, conocida como DOM (Document Object Model), determina cómo se organizan y relacionan los elementos en una página web.

## Jerarquía básica del DOM

Un documento HTML típico sigue esta estructura básica:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadatos, enlaces a CSS, scripts, etc. -->
  </head>
  <body>
    <!-- Contenido visible de la página -->
  </body>
</html>
```

## Visualización de la estructura en el inspector

El inspector de elementos muestra esta jerarquía como un árbol desplegable:

- **Nodo raíz**: El elemento `<html>`
- **Nodos padre**: Contienen otros elementos
- **Nodos hijo**: Elementos contenidos dentro de un padre
- **Nodos hermanos**: Elementos al mismo nivel jerárquico

## Tipos de nodos en el DOM

En el inspector puedes identificar diferentes tipos de nodos:

1. **Elementos**: Nodos que representan etiquetas HTML (div, p, a, etc.)
2. **Texto**: Contenido textual dentro de elementos
3. **Comentarios**: Notas en el código HTML que no se muestran visualmente
4. **Atributos**: Propiedades de los elementos
5. **Documentos**: El nodo raíz que contiene todo el documento

## Comprensión de la jerarquía visual

El inspector ayuda a visualizar cómo la estructura del DOM afecta a la presentación:

- **Anidamiento**: Define relaciones de contención
- **Orden**: Determina la secuencia de renderizado
- **Herencia**: Propiedades que se transmiten de padres a hijos

## Análisis de la estructura con el inspector

Para analizar efectivamente la estructura:

1. **Expandir/contraer nodos**: Usa las flechas junto a cada elemento
2. **Resaltar jerarquía**: Al pasar el cursor sobre un elemento, se muestra su lugar en la estructura
3. **Breadcrumbs**: La ruta de navegación inferior muestra la jerarquía de forma lineal
4. **Vista de árbol**: Muestra las relaciones padre-hijo claramente

## Identificar problemas estructurales

El inspector permite detectar problemas comunes:

- **Elementos huérfanos**: No están correctamente anidados
- **Estructura inadecuada**: Uso incorrecto de elementos semánticos
- **Profundidad excesiva**: Demasiados niveles de anidamiento
- **Elementos duplicados**: ID duplicados u otros problemas de unicidad

## Manipulación de la estructura

Para modificar la estructura del documento:

1. **Arrastrar y soltar**: Mueve elementos a nuevas posiciones
2. **Insertar elementos**: Añade nuevos nodos en ubicaciones específicas
3. **Eliminar elementos**: Quita nodos no deseados
4. **Editar HTML**: Modifica directamente la estructura con "Edit as HTML"

## Comprensión del flujo del documento

El inspector ayuda a entender:

- **Flow**: Cómo los elementos se distribuyen en el flujo normal
- **Positioning**: Elementos que están fuera del flujo (absolute, fixed)
- **Stacking contexts**: Cómo se apilan los elementos (z-index)
- **Containing blocks**: Qué elementos contienen a otros