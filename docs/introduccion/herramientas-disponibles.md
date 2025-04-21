---
sidebar_label: 'Herramientas Disponibles'
sidebar_position: 2
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Herramientas Disponibles en el Inspector de Elementos

El Inspector de Elementos ofrece un conjunto completo de herramientas que facilitan el análisis y modificación de páginas web. Conocer cada una de estas herramientas te permitirá aprovechar al máximo su potencial durante el desarrollo.

## Principales herramientas

<DocsCards>
  <DocsCard header="Panel DOM" href="/dom">
    <p>Visualiza y modifica la estructura HTML de la página en tiempo real.</p>
  </DocsCard>
  <DocsCard header="Panel de Estilos" href="/style">
    <p>Examina y edita las reglas CSS aplicadas a cualquier elemento.</p>
  </DocsCard>
  <DocsCard header="Panel de Layout" href="/storage">
    <p>Visualiza y modifica el modelo de caja, flexbox y grid de los elementos.</p>
  </DocsCard>
  <DocsCard header="Panel de Calculados" href="/console">
    <p>Observa los valores CSS finales después de aplicar cascada y herencia.</p>
  </DocsCard>
</DocsCards>

## Herramientas de selección y visualización

### Selector de elementos
La herramienta de selección (flecha) permite elegir elementos directamente en la página:

- **Activación**: Haz clic en el icono de cursor o presiona Ctrl+Shift+C (Cmd+Shift+C en Mac)
- **Hover**: Al pasar el cursor sobre un elemento, muestra sus dimensiones y composición
- **Selección**: Al hacer clic, selecciona el elemento en el árbol DOM
- **Navegación con teclado**: Usa las flechas para moverte entre elementos relacionados

### Breadcrumbs de navegación
Muestra la ruta jerárquica del elemento seleccionado:

```
html > body > main > section > div > p
```

Permite navegar rápidamente a cualquier elemento padre haciendo clic en su etiqueta.

## Herramientas de análisis CSS

### Color picker
Selector de color integrado que permite:
- Visualizar y modificar valores de color en diferentes formatos (HEX, RGB, HSL)
- Seleccionar colores con una paleta visual
- Ajustar opacidad/transparencia

### Editor de sombras
Permite crear y ajustar visualmente:
- box-shadow
- text-shadow
- drop-shadow

### Visualizadores de layout
Herramientas especializadas para:
- **Flexbox**: Visualización de contenedores flex, dirección, alineación
- **Grid**: Visualización de líneas de cuadrícula, áreas nombradas
- **Modelo de caja**: Visualización de margin, border, padding y content

## Herramientas de accesibilidad

- **Contrast checker**: Verifica si el contraste entre texto y fondo cumple con estándares WCAG
- **Árbol de accesibilidad**: Muestra cómo interpretan los lectores de pantalla tu página

## Opciones de configuración

El Inspector de Elementos ofrece varias opciones de configuración que pueden personalizarse según tus necesidades:

- **Mostrar reglas del usuario/navegador**: Permite ver los estilos predeterminados
- **Mostrar propiedades heredadas**: Muestra u oculta propiedades que vienen de elementos padres
- **Agrupar propiedades**: Organiza las propiedades CSS por categorías
- **Modo oscuro/claro**: Cambia el tema visual del inspector

Conocer estas herramientas te permitirá trabajar más eficientemente cuando necesites analizar o modificar el código de una página web.