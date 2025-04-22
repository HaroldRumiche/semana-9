---
id : reglas-css
sidebar_position: 3
---

# Reglas CSS

El panel de reglas CSS en el Inspector de Elementos muestra todas las reglas de estilo que afectan al elemento seleccionado. Comprender cómo interpretar esta información es fundamental para desarrollar y depurar CSS de manera efectiva.

## Visualización de reglas CSS

Cuando seleccionas un elemento, el panel de estilos muestra todas las reglas CSS aplicadas, organizadas por especificidad:

![Panel de reglas CSS](https://ejemplo.com/images/css-rules-panel.png)

### Jerarquía de reglas

Las reglas se muestran en el siguiente orden:

1. **Estilos en línea** (`style="..."` en el HTML)
2. **Selectores ID** (p.ej., `#header`)
3. **Selectores de clase, atributo y pseudo-clase** (p.ej., `.button`, `[type="text"]`, `:hover`)
4. **Selectores de elemento y pseudo-elemento** (p.ej., `div`, `::before`)
5. **Estilos heredados** (propiedades que se heredan de elementos padres)
6. **Estilos de agente de usuario** (estilos predeterminados del navegador)

## Información de cada regla

Cada bloque de reglas CSS muestra:

- **Selector**: El selector CSS que hace que la regla se aplique
- **Origen**: El archivo y número de línea donde se define la regla
- **Propiedades**: Las declaraciones CSS dentro de la regla

### Códigos de color y notación

- **Propiedades tachadas**: Propiedades anuladas por reglas más específicas
- **Propiedades con signo de advertencia**: Propiedades con problemas o no soportadas
- **Propiedades con punto de interrupción**: Propiedades con un breakpoint para depuración

## Analizando la cascada CSS

La cascada determina qué estilos tienen prioridad cuando hay conflictos:

### Factores de prioridad (orden descendente)

1. **Importancia** (`!important` > normal)
2. **Especificidad** (inline > id > clase > elemento)
3. **Orden de aparición** (última regla definida)

### Indicadores de especificidad

Algunos navegadores muestran la especificidad numérica junto a los selectores:

- **Firefox**: Muestra valores como `(1,0,0)` para selectores ID
- **Chrome/Edge**: En versiones recientes, muestra información de especificidad al hacer hover sobre el selector

## Filtrado de reglas

Para encontrar rápidamente reglas específicas:

1. Usa el campo de filtro en la parte superior del panel
2. Escribe nombres de propiedades, valores o selectores
3. Solo se mostrarán las reglas que coincidan con el filtro

### Opciones de filtrado avanzadas

- **Usar expresiones regulares**: Activa el modo regex para búsquedas más complejas
- **Filtro negativo**: Usa `-` antes del término para excluir coincidencias
- **Filtro por categoría**: En algunos navegadores, puedes filtrar por categoría de propiedad

## Reglas @ (at-rules)

Las reglas @ como `@media`, `@supports`, `@keyframes` se muestran de forma especial:

### Media Queries

1. Las reglas dentro de media queries se muestran con su condición
2. Solo se aplican cuando la condición se cumple
3. Puedes hacer clic en la condición para ir a la definición

### Keyframes y animaciones

1. Las animaciones aplicadas se muestran con un indicador
2. Puedes hacer clic para ver los keyframes definidos
3. Algunos navegadores permiten editar y ver una vista previa de la animación

## Pseudo-elementos y pseudo-clases

Para inspeccionar reglas de pseudo-elementos y pseudo-clases:

1. Selecciona el elemento base
2. Busca las reglas de pseudo-elementos (`:before`, `:after`) en el panel
3. Usa el selector de estados (`:hov`) para simular estados como `:hover`, `:active`, etc.

## Reglas CSS generadas por JavaScript

Las reglas creadas dinámicamente por JavaScript aparecen como:

- Estilos en línea si se aplican mediante `element.style`
- Reglas de hoja de estilo con origen "inspector-stylesheet" si se crean mediante `CSSStyleSheet`

## Consejos para trabajar con reglas CSS

- **Expandir propiedades abreviadas**: Haz clic en la flecha junto a propiedades como `margin` o `font` para ver todas las propiedades individuales
- **Examinar herencia**: Revisa la sección "Inherited from..." para ver qué propiedades se heredan de elementos padres
- **Usar las pestañas de filtro**: Algunos navegadores ofrecen pestañas para filtrar entre "All", "Layout", "Fonts", etc.
- **Ver reglas deshabilitadas**: Activa la opción para ver reglas que no se aplican actualmente

En la siguiente sección, examinaremos las propiedades calculadas que muestran los valores finales después de aplicar toda la cascada CSS.