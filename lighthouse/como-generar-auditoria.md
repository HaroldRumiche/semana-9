---
id: como-generar-auditoria

sidebar_position: 2
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Cómo Generar una Auditoría con Lighthouse

Lighthouse permite realizar auditorías completas de tu sitio web con solo unos pocos clics. En esta sección aprenderás cómo generar informes y configurar las opciones para obtener resultados relevantes a tus necesidades.

## Métodos para ejecutar Lighthouse

Existen múltiples formas de ejecutar Lighthouse:

### 1. Chrome DevTools

La forma más directa de acceder a Lighthouse:

1. Abre Chrome DevTools (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Selecciona la pestaña "Lighthouse" 
3. Configura las opciones de la auditoría
4. Haz clic en "Analizar la carga de la página"

### 2. Extensión de Chrome

Alternativa mediante extensión dedicada:

1. Instala la [extensión Lighthouse de Chrome](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
2. Haz clic en el icono de la extensión
3. Configura las opciones deseadas
4. Presiona "Generate report"

### 3. Línea de comandos

Para usuarios avanzados o entornos de integración continua:

```bash
# Instalación global de Lighthouse
npm install -g lighthouse

# Ejecución básica
lighthouse https://example.com

# Ejecución con opciones
lighthouse https://example.com --output=json --output-path=./report.json --throttling-method=provided
```

### 4. Lighthouse CI

Para integración continua y monitoreo automático:

```bash
# Instalación
npm install -g @lhci/cli

# Configuración y ejecución
lhci autorun
```

## Opciones de configuración

<DocsCards>
  <DocsCard
    header="Categorías de Auditoría"
    href="/lighthouse/como-generar-auditoria#categorias"
  >
    <p>Selecciona qué aspectos de tu sitio web quieres evaluar: rendimiento, accesibilidad, SEO, etc.</p>
  </DocsCard>
  
  <DocsCard
    header="Dispositivo"
    href="/lighthouse/como-generar-auditoria#dispositivo"
  >
    <p>Configura si la auditoría debe realizarse simulando un dispositivo móvil o un ordenador de escritorio.</p>
  </DocsCard>
  
  <DocsCard
    header="Throttling"
    href="/lighthouse/como-generar-auditoria#throttling"
  >
    <p>Ajusta las condiciones de red y CPU para simular diferentes entornos de usuario.</p>
  </DocsCard>
</DocsCards>

## Categorías de Auditoría {#categorias}

Lighthouse te permite seleccionar qué categorías incluir en cada informe:

- **Rendimiento**: Evalúa la velocidad de carga y respuesta
- **Accesibilidad**: Comprueba las prácticas de accesibilidad
- **Mejores Prácticas**: Revisa si sigues las prácticas recomendadas de desarrollo web
- **SEO**: Analiza factores de optimización para buscadores
- **PWA**: Evalúa el cumplimiento de los requisitos para aplicaciones web progresivas

Puedes seleccionar todas o solo las que te interesen para cada auditoría específica.

## Configuración de Dispositivo {#dispositivo}

Lighthouse puede emular diferentes tipos de dispositivos:

- **Móvil**: Simula un dispositivo móvil promedio con pantalla pequeña y conexión más lenta
- **Escritorio**: Emula un ordenador de escritorio con pantalla grande y mejor conectividad

Esta configuración afecta significativamente los resultados, especialmente en métricas de rendimiento.

## Opciones de Throttling {#throttling}

Puedes ajustar las condiciones de red para simular diferentes escenarios:

- **Simulada**: Lighthouse aplica un throttling simulado (opción predeterminada)
- **Aplicada**: Aplica limitaciones reales a la red y CPU
- **Sin throttling**: Utiliza toda la capacidad de tu conexión actual

## Modo de navegación

Elige el contexto de navegación:

- **Navegación**: Analiza una carga de página inicial (predeterminado)
- **Instantánea**: Analiza el estado actual de la página
- **Secuencia de Usuario**: Audita una serie de interacciones definidas

## Consejos para obtener auditorías precisas

- **Usa el modo incógnito** para evitar que extensiones o caché afecten los resultados
- **Ejecuta múltiples auditorías** para obtener promedios más fiables
- **Prueba en distintos momentos del día** para considerar variaciones en la carga del servidor
- **Compara resultados entre dispositivos** para identificar problemas específicos
- **Documenta las condiciones de cada prueba** para realizar comparaciones válidas

En las siguientes secciones, exploraremos en detalle cada categoría de auditoría y cómo interpretar sus resultados.