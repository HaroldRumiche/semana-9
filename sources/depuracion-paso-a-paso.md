---
id : depuracion-paso-a-paso
sidebar_position: 4
---

# Depuración paso a paso

La depuración paso a paso es una técnica que permite ejecutar el código línea por línea, examinando su comportamiento y el estado de las variables en cada momento.

## Controles de depuración

Los controles de depuración se encuentran en la parte superior del panel Sources:

### Botones principales

- **Reanudar/Pausar** (F8): Continúa la ejecución hasta el siguiente punto de interrupción
- **Step over** (F10): Ejecuta la línea actual y pasa a la siguiente línea
- **Step into** (F11): Entra en la función que se está llamando
- **Step out** (Shift+F11): Sale de la función actual
- **Step** (F9): Pasa a la siguiente expresión

### Opciones adicionales

- **Deactivate breakpoints**: Deshabilita temporalmente todos los puntos de interrupción
- **Pause on exceptions**: Configura el comportamiento ante excepciones:
  - No pausar
  - Pausar en excepciones no capturadas
  - Pausar en todas las excepciones

## Flujo de trabajo de depuración

### 1. Preparación

1. Abre el panel Sources
2. Localiza el archivo a depurar
3. Establece puntos de interrupción en lugares estratégicos

### 2. Iniciación de la depuración

1. Recarga la página o realiza la acción que desencadena el código
2. La ejecución se detendrá cuando se active un punto de interrupción
3. El panel Sources resaltará la línea donde se detuvo la ejecución

### 3. Análisis paso a paso

1. Observa el panel de depuración para ver el estado actual:
   - **Scope**: Variables locales y globales
   - **Watch**: Variables monitorizadas
   - **Call Stack**: Secuencia de llamadas
2. Utiliza los controles para avanzar en la ejecución:
   - Usa "Step over" para ejecutar una línea completa
   - Usa "Step into" para profundizar en las funciones
   - Usa "Step out" cuando quieras salir de una función

### 4. Interacción durante la depuración

Mientras el código está pausado:

1. Puedes evaluar expresiones en la consola
2. Modificar variables directamente desde el panel Scope
3. Continuar hasta otro punto de interrupción
4. Observar la pila de llamadas para entender cómo se llegó a ese punto

## Técnicas avanzadas de depuración

### Modificación de código en tiempo real

Durante la depuración, puedes:

1. Editar el código en el editor
2. Presionar Ctrl+S / Cmd+S para guardar
3. Los cambios se aplicarán en la próxima ejecución

### Depuración remota

Para depurar dispositivos móviles o remotos:

1. Conecta el dispositivo a tu computadora
2. Activa la depuración remota en ambos dispositivos
3. Usa el menú de dispositivos en DevTools para seleccionar el dispositivo remoto
4. Los controles de depuración funcionan igual que en la depuración local

### Puntos de interrupción temporales

Para una depuración rápida sin configurar puntos de interrupción permanentes:

1. Presiona Ctrl+B / Cmd+B con el cursor en una línea
2. La ejecución se detendrá en esa línea solo durante la siguiente ejecución

### Monitoreando valores

Durante la depuración:

1. Selecciona una variable en el código
2. Haz clic derecho y selecciona "Add to watch"
3. La variable aparecerá en el panel Watch
4. Puedes evaluar expresiones complejas en el panel Watch
5. Los valores se actualizan automáticamente durante la ejecución paso a paso

## Consejos prácticos

- **Usa logpoints** cuando solo necesites ver valores sin interrumpir el flujo de ejecución
- **Aprovecha los puntos de interrupción condicionales** para casos específicos
- **Utiliza el blackboxing** para ignorar código de bibliotecas al depurar
- **Examina la consola** mientras depuras para ver logs y ejecutar código
- **Activa la opción "Async stack traces"** para depurar mejor código asíncrono