---
sidebar_label: 'Grabar Sesión'
sidebar_position: 2
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Cómo Grabar una Sesión de Rendimiento

La grabación de sesiones en el panel Performance es el primer paso para analizar y optimizar el rendimiento de tu aplicación web. Este proceso captura todos los eventos y actividades que ocurren durante la carga o interacción con la página.

## Métodos de grabación

Existen dos enfoques principales para grabar el rendimiento:

### 1. Grabación de carga de página

Captura el rendimiento desde el momento en que se carga una página:

1. Navega al panel Performance
2. Haz clic en el botón circular de grabación (⚫)
3. Recarga la página utilizando:
   - El botón de recarga en el panel (🔄)
   - Ctrl+R / Cmd+R en el teclado
4. Espera a que la página termine de cargar completamente
5. Haz clic en "Stop" para finalizar la grabación

### 2. Grabación de interacciones

Captura el rendimiento durante la interacción con una página ya cargada:

1. Navega a la página que deseas analizar
2. Abre las herramientas de desarrollo y ve al panel Performance
3. Haz clic en el botón circular de grabación (⚫)
4. Realiza las interacciones que deseas analizar (clics, desplazamientos, etc.)
5. Haz clic en "Stop" para finalizar la grabación

## Configuración de grabación

<DocsCards>
  <DocsCard
    header="Throttling de CPU"
    href="/performance/grabar-sesion#throttling-de-cpu"
  >
    <p>Simula dispositivos menos potentes para identificar problemas de rendimiento en condiciones reales.</p>
  </DocsCard>
  
  <DocsCard
    header="Throttling de Red"
    href="/performance/grabar-sesion#throttling-de-red"
  >
    <p>Emula diferentes velocidades de conexión para evaluar el rendimiento bajo distintas condiciones de red.</p>
  </DocsCard>
</DocsCards>

### Throttling de CPU

Para simular dispositivos menos potentes:

1. Localiza el menú desplegable de throttling (por defecto en "No throttling")
2. Selecciona una opción predefinida:
   - No throttling (sin limitación)
   - 2x slowdown (simula un dispositivo moderadamente menos potente)
   - 4x slowdown (simula un dispositivo móvil típico)
   - 6x slowdown (simula un dispositivo de gama baja)
3. Alternativamente, puedes configurar un valor personalizado en la opción "Advanced"

### Throttling de Red

Para simular diferentes condiciones de red:

1. Habilita el throttling de red en la configuración
2. Selecciona una opción predefinida:
   - Online (sin limitación)
   - Fast 3G
   - Slow 3G
   - Offline
3. También puedes configurar valores personalizados de latencia y velocidad

## Opciones adicionales de grabación

### Capturas de pantalla

La opción "Screenshots" captura el estado visual de la página a lo largo del tiempo:

1. Marca la casilla "Screenshots" antes de iniciar la grabación
2. Las capturas aparecerán en la parte superior de la línea de tiempo
3. Útil para correlacionar eventos con cambios visuales

### Memoria

Para analizar el uso de memoria:

1. Activa la casilla "Memory" antes de iniciar la grabación
2. Se mostrará un gráfico adicional con el uso de memoria a lo largo del tiempo
3. Ayuda a identificar fugas de memoria y problemas de gestión de recursos

## Guardado y carga de grabaciones

Para guardar una grabación para análisis posterior:

1. Haz clic derecho sobre la línea de tiempo
2. Selecciona "Save profile..."
3. Elige una ubicación y nombre para el archivo .json

Para cargar una grabación guardada:

1. Haz clic en "Load profile..." o arrastra el archivo .json al panel
2. La grabación se cargará con todos sus datos para análisis

## Prácticas recomendadas

- **Modo incógnito**: Graba en modo incógnito para evitar la interferencia de extensiones
- **Múltiples grabaciones**: Realiza varias grabaciones para obtener resultados más consistentes
- **Enfoque específico**: Concéntrate en un solo problema o interacción por grabación
- **Limpieza previa**: Cierra pestañas y aplicaciones innecesarias antes de grabar
- **Anotaciones**: Utiliza marcadores de rendimiento (`performance.mark()`) en tu código para identificar secciones específicas

En la siguiente sección, aprenderemos a interpretar los datos en la línea de tiempo para identificar problemas de rendimiento.