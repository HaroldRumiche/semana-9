---
id: accesibilidad
sidebar_position: 4
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Auditoría de Accesibilidad en Lighthouse

La categoría de accesibilidad evalúa si tu sitio web puede ser utilizado por personas con diversas discapacidades o limitaciones. Una buena accesibilidad no solo es una responsabilidad ética, sino que también amplía tu audiencia y puede ser un requisito legal en muchos contextos.

## Áreas de evaluación

<DocsCards>
  <DocsCard
    header="Navegación por Teclado"
    href="/lighthouse/accesibilidad#navegacion-teclado"
  >
    <p>Asegura que el sitio pueda usarse completamente sin ratón, solo con teclado.</p>
  </DocsCard>
  
  <DocsCard
    header="Nombres y Etiquetas"
    href="/lighthouse/accesibilidad#nombres-etiquetas"
  >
    <p>Verifica que todos los elementos interactivos tengan nombres accesibles y descriptivos.</p>
  </DocsCard>
  
  <DocsCard
    header="Contraste de Colores"
    href="/lighthouse/accesibilidad#contraste"
  >
    <p>Evalúa si el contraste entre texto y fondo cumple con los estándares recomendados.</p>
  </DocsCard>
  
  <DocsCard
    header="Atributos ARIA"
    href="/lighthouse/accesibilidad#aria"
  >
    <p>Comprueba el uso correcto de roles, estados y propiedades ARIA.</p>
  </DocsCard>

  <DocsCard
    header="Organización de Contenido"
    href="/lighthouse/accesibilidad#organizacion"
  >
    <p>Evalúa la estructura semántica y la jerarquía del contenido.</p>
  </DocsCard>
</DocsCards>

## Navegación por Teclado {#navegacion-teclado}

La auditoría verifica que los usuarios puedan navegar e interactuar con todos los elementos usando solo el teclado.

**Aspectos evaluados:**
- Visibilidad del foco del teclado
- Orden lógico de tabulación
- Trampas de teclado (elementos donde el foco queda atrapado)
- Funcionalidad completa mediante teclado

**Recomendaciones:**
- Nunca eliminar el indicador visual de foco (outline)
- Usar `tabindex="0"` para elementos no interactivos que deben recibir foco
- Evitar `tabindex` con valores positivos
- Probar personalmente la navegación con teclado (Tab, Enter, Espacio, flechas)

## Nombres y Etiquetas {#nombres-etiquetas}

Lighthouse verifica que todos los elementos interactivos tengan nombres accesibles adecuados para tecnologías asistivas.

**Aspectos evaluados:**
- Etiquetas en campos de formulario
- Textos alternativos en imágenes
- Texto descriptivo en enlaces
- Nombres accesibles en botones

**Recomendaciones:**
- Utilizar elementos `<label>` vinculados a campos de formulario
- Proporcionar `alt` descriptivo y conciso para imágenes
- Evitar textos genéricos como "haz clic aquí" en enlaces
- Asegurar que los botones con iconos tengan texto o `aria-label`

## Contraste de Colores {#contraste}

Esta auditoría evalúa si el contraste entre el texto y su fondo es suficiente para usuarios con visión reducida.

**Estándares evaluados:**
- Texto normal: relación de contraste mínima de 4.5:1
- Texto grande (18pt o 14pt negrita): mínimo 3:1
- Componentes de interfaz y gráficos informativos: mínimo 3:1

**Herramientas recomendadas:**
- Pestaña "Accessibility" en DevTools
- Simuladores de daltonismo
- Verificadores de contraste como WebAIM

## Atributos ARIA {#aria}

Lighthouse analiza el uso de atributos ARIA (Accessible Rich Internet Applications) y su implementación correcta.

**Aspectos evaluados:**
- Roles ARIA válidos
- Atributos ARIA obligatorios
- Valores permitidos
- Relaciones implícitas y explícitas
- Estados y propiedades

**Mejores prácticas:**
- Preferir HTML semántico nativo sobre ARIA cuando sea posible
- Mantener sincronizados los atributos ARIA con el estado de la interfaz
- Probar con lectores de pantalla reales
- Seguir el "no ARIA es mejor que mal ARIA"

## Organización de Contenido {#organizacion}

Evalúa cómo está estructurado el contenido desde una perspectiva semántica y organizativa.

**Elementos evaluados:**
- Uso apropiado de encabezados (h1-h6)
- Estructura lógica y jerárquica
- Landmarks y regiones
- Listas cuando corresponda
- Idioma del documento

**Recomendaciones:**
- Usar una estructura jerárquica clara de encabezados
- Implementar landmarks semánticos (header, nav, main, footer)
- Especificar el idioma con `lang` en HTML
- Marcar cambios de idioma dentro del contenido
- Evitar saltos en los niveles de encabezado

## Pruebas automáticas vs. manuales

La auditoría de accesibilidad de Lighthouse detecta aproximadamente el 30% de los posibles problemas de accesibilidad mediante pruebas automatizadas. Es crucial complementar con:

- Pruebas manuales con teclado
- Evaluaciones con tecnologías asistivas reales
- Pruebas con usuarios con discapacidades
- Revisiones utilizando las Web Content Accessibility Guidelines (WCAG)

## Recursos adicionales

Para profundizar en la accesibilidad web:

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility Guide](https://developer.mozilla.org/es/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)

La siguiente sección cubrirá las Mejores Prácticas que Lighthouse evalúa para garantizar un desarrollo web moderno y seguro.