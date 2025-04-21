---
sidebar_label: 'Media Queries'
sidebar_position: 7
---

# Ver Media Queries

Las media queries son fundamentales para el diseño web responsive. El Inspector de Elementos proporciona herramientas específicas para visualizar, probar y depurar media queries, facilitando el desarrollo de sitios que funcionen correctamente en todos los dispositivos.

## Visualización de media queries aplicadas

Para ver las media queries que afectan a un elemento:

1. Selecciona cualquier elemento en la página
2. En el panel de estilos, busca las reglas que están dentro de bloques `@media`
3. Cada media query se mostrará con su condición y las reglas contenidas

![Media queries en el panel de estilos](https://ejemplo.com/images/media-queries-panel.png)

### Iconos y códigos de color

Los navegadores modernos usan códigos visuales para indicar:

- **Icono de pantalla**: Indica una regla dentro de una media query
- **Texto de condición**: Muestra la condición exacta (p.ej., `(max-width: 768px)`)
- **Color o estilo de fuente**: Indica si la media query está activa o inactiva

## Panel dedicado de media queries

Algunos navegadores ofrecen un panel específico para media queries:

1. Busca la pestaña "Media" o "Responsive" en las DevTools
2. Se mostrará una visualización de todas las media queries en la página
3. Las media queries se organizan por puntos de interrupción (breakpoints)

![Panel de media queries](https://ejemplo.com/images/media-queries-view.png)

### Visualización por breakpoints

El panel muestra:

- **Línea de tiempo**: Representa los diferentes anchos de pantalla
- **Barras de color**: Indican los rangos donde se aplica cada media query
- **Puntos de interrupción**: Marcas que señalan dónde cambian las reglas

## Simulación de dispositivos y pantallas

Para probar cómo se comportan las media queries:

1. Activa el modo responsive design (icono de dispositivo)
2. Ajusta las dimensiones de la ventana manualmente o selecciona un dispositivo predefinido
3. Observa cómo se activan y desactivan diferentes media queries

![Modo responsive](https://ejemplo.com/images/responsive-mode.png)

### Opciones de simulación

- **Dimensiones predefinidas**: Presets para dispositivos comunes (iPhone, iPad, etc.)
- **Orientación**: Cambio entre paisaje y retrato
- **Tipo de dispositivo**: Simulación de pantallas táctiles vs. no táctiles
- **Throttling**: Simulación de diferentes condiciones de red

## Inspección de reglas por breakpoint

Para examinar qué reglas se aplican en un breakpoint específico:

1. Ajusta la ventana al tamaño de pantalla deseado
2. Selecciona un elemento
3. Las reglas activas se mostrarán con normalidad, mientras que las inactivas pueden aparecer atenuadas

### Filtrado de reglas por media query

Algunos navegadores permiten:

- Filtrar para ver solo reglas de un breakpoint específico
- Agrupar reglas por media query
- Ordenar reglas por relevancia para el tamaño actual

## Media queries más allá del ancho

El inspector también permite visualizar y probar otros tipos de media queries:

### Por características de pantalla

- `resolution`: DPI/PPI de la pantalla
- `orientation`: Orientación del dispositivo
- `aspect-ratio`: Relación de aspecto de la ventana

### Por características del dispositivo

- `hover`: Capacidad del dispositivo para hover
- `pointer`: Tipo de dispositivo de entrada (coarse, fine)
- `color-gamut`: Gama de colores soportada

### Por preferencias del usuario

- `prefers-color-scheme`: Modo claro vs. oscuro
- `prefers-reduced-motion`: Preferencias de animación reducida
- `prefers-contrast`: Preferencias de contraste

## Depuración de problemas comunes

### Conflictos entre breakpoints

1. Activa la visualización de rango de media queries
2. Identifica breakpoints superpuestos
3. Observa qué reglas tienen prioridad y por qué

### Falta de adaptabilidad

1. Redimensiona la ventana gradualmente
2. Observa si hay saltos bruscos o comportamientos inesperados
3. Identifica los puntos donde faltan breakpoints

### Problemas de especificidad

1. Verifica si las reglas dentro de media queries están siendo anuladas
2. Comprueba el orden de las media queries en el CSS
3. Confirma que la especificidad de los selectores es correcta

## Modificación de media queries

Para experimentar con cambios en las media queries:

1. Edita la condición de una media query existente (p.ej., cambiar `max-width: 768px` a `max-width: 800px`)
2. Añade o modifica reglas dentro de la media query
3. Observa el efecto mientras ajustas el tamaño de la ventana

### Creación de nuevas media queries

Algunos navegadores permiten:

1. Añadir una nueva media query desde el panel de estilos
2. Definir la condición (tamaño, orientación, etc.)
3. Añadir reglas a esta nueva media query

## Exportación y documentación

Para documentar las media queries de un proyecto:

1. Usa la función de captura de todas las media queries
2. Exporta la lista de breakpoints y condiciones
3. Utiliza esta información para documentación o compartir con el equipo

## Consejos para trabajar con media queries

- Observa cómo se comportan los elementos a medida que cruzas los breakpoints
- Prueba en diferentes dispositivos reales, no solo en el simulador
- Considera factores como la densidad de píxeles y la orientación
- Utiliza variables CSS junto con media queries para facilitar los cambios
- Prueba las preferencias del usuario (como el modo oscuro) usando el panel de emulación

En la siguiente sección, exploraremos técnicas avanzadas para depurar estilos CSS.