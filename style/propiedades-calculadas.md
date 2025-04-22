---
id : propiedades-calculadas
sidebar_position: 4
---

# Propiedades Calculadas

El panel de propiedades calculadas muestra los valores finales de todas las propiedades CSS aplicadas a un elemento después de resolver la cascada, herencia y cálculos. Esta vista es crucial para entender exactamente cómo el navegador está interpretando los estilos aplicados.

## Acceso a las propiedades calculadas

Para ver las propiedades calculadas de un elemento:

1. Selecciona un elemento usando cualquiera de los métodos de inspección
2. En el panel de estilos, busca la pestaña "Computed" o "Calculado"
3. Se mostrará una lista de todas las propiedades con sus valores finales

![Panel de propiedades calculadas](https://ejemplo.com/images/computed-properties.png)

## Características del panel de propiedades calculadas

### Valores resueltos

Las propiedades calculadas muestran:

- Valores absolutos (en px) para dimensiones relativas (%, em, rem, vh, vw)
- Colores en formato RGB/RGBA (incluso si se definieron como nombres o hex)
- Valores computados para propiedades que pueden ser heredadas
- Fuentes y familias de fuentes exactas que se están utilizando

### Organización de propiedades

Las propiedades se organizan alfabéticamente por defecto, pero algunos navegadores permiten agruparlas por categorías:

- **Layout**: Propiedades relacionadas con posicionamiento y dimensiones
- **Text**: Propiedades de texto y tipografía
- **Decoration**: Propiedades visuales como colores y bordes
- **Animation**: Propiedades relacionadas con animaciones y transiciones

## Filtrado de propiedades

Para encontrar rápidamente propiedades específicas:

1. Usa el campo de búsqueda en la parte superior del panel
2. Escribe el nombre de la propiedad o valor que buscas
3. Solo se mostrarán las propiedades que coincidan con tu búsqueda

### Opciones de visualización

- **Mostrar todo**: Muestra todas las propiedades aplicadas
- **Mostrar sólo aplicadas**: Filtra para mostrar sólo las propiedades que tienen un valor diferente al predeterminado

## Trazabilidad de propiedades

Una característica poderosa es la capacidad de ver de dónde proviene cada valor calculado:

1. Haz clic en la flecha junto a cualquier propiedad
2. Se mostrará una lista de todas las reglas que contribuyen a ese valor
3. Las reglas tachadas son las que han sido anuladas
4. Puedes hacer clic en el origen para ir directamente a la definición

![Trazabilidad de propiedades](https://ejemplo.com/images/property-tracing.png)

## Unidades de medida y conversiones

Las propiedades calculadas realizan conversiones automáticas:

- **Unidades relativas a absolutas**:
  - `em` → `px` (basado en el tamaño de fuente del elemento)
  - `rem` → `px` (basado en el tamaño de fuente del elemento raíz)
  - `%` → `px` (basado en el tamaño del contenedor)
  - `vh/vw` → `px` (basado en el tamaño de la ventana)

- **Valores calculados**:
  - Funciones `calc()`, `min()`, `max()` son evaluadas
  - Variables CSS (`--mi-variable`) son reemplazadas por sus valores

## Visualización de propiedades específicas

### Fuentes y tipografía

La sección de fuentes muestra información detallada:

- Familia de fuente exacta que se está usando
- Tamaño de fuente en píxeles
- Peso de la fuente (normal, bold, o valor numérico)
- Estilo de fuente (normal, italic, oblique)
- Altura de línea en píxeles

### Colores y opacidad

Los colores se muestran en formato estándar:

- Todos los colores se convierten a RGB/RGBA
- Se muestra una muestra visual del color
- La opacidad general del elemento se indica

### Posicionamiento y dimensiones

Muestra las coordenadas exactas y dimensiones:

- Valores `top`, `right`, `bottom`, `left` para elementos posicionados
- Ancho y alto exactos en píxeles
- Z-index y contexto de apilamiento

## Casos de uso comunes

### Depuración de diseño responsivo

1. Redimensiona la ventana o usa el modo responsive
2. Inspecciona un elemento para ver cómo cambian sus propiedades calculadas
3. Verifica que las media queries estén funcionando correctamente

### Verificación de herencia y cascada

1. Inspecciona un elemento anidado profundamente
2. Revisa las propiedades heredadas para verificar que provienen del elemento correcto
3. Comprueba que las propiedades con mayor especificidad estén ganando en la cascada

### Detección de problemas de rendimiento

1. Busca propiedades que desencadenan recalculos costosos (como `width: auto` en situaciones complejas)
2. Verifica que no haya demasiadas propiedades calculadas dinámicamente

## Consejos para trabajar con propiedades calculadas

- Usa el filtro para mostrar solo propiedades no predeterminadas y centrarte en los valores importantes
- Compara las propiedades calculadas entre diferentes elementos para detectar inconsistencias
- Verifica las unidades para asegurarte de que las conversiones sean las esperadas
- Utiliza la vista de propiedades calculadas para entender cómo se computa exactamente el layout

En la siguiente sección, examinaremos en detalle el modelo de caja y cómo visualizar y modificar las dimensiones de los elementos.