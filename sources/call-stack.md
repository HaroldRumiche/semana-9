---
id : call-stack
sidebar_position: 6
---

# Call Stack (Pila de llamadas)

El panel Call Stack muestra la secuencia de llamadas a funciones que llevaron al punto actual de ejecución durante la depuración, proporcionando un mapa de la ruta de ejecución del código.

## Fundamentos de la pila de llamadas

### ¿Qué es la pila de llamadas?

La pila de llamadas es una estructura de datos que registra la posición de ejecución actual del programa:

- Cada entrada representa una llamada a función que aún no ha terminado
- La función actual está en la parte superior de la pila
- Cuando una función termina, se elimina de la pila (pop)
- Cuando se llama a una función, se añade a la pila (push)

### Visualización en DevTools

En el panel Sources, la pila de llamadas se muestra como una lista ordenada:

- La función actual aparece en la parte superior
- Debajo se muestran las funciones que la llamaron, en orden descendente
- Cada entrada incluye:
  - Nombre de la función
  - Ubicación del archivo
  - Número de línea donde se realizó la llamada

## Navegación por la pila de llamadas

### Inspección de frames

Para examinar diferentes puntos de la pila:

1. Haz clic en cualquier entrada de la pila
2. El editor saltará al código correspondiente
3. El panel Scope mostrará las variables en ese contexto específico
4. La línea activa se resaltará en el editor

### Funciones anónimas y frames sin nombre

Las funciones sin nombre se muestran como:

- `(anonymous)` para funciones anónimas
- `(anonymous function)` para funciones flecha
- `eval code` para código ejecutado con eval()

### Frames externos o de bibliotecas

Cuando la pila incluye código de bibliotecas:

- Pueden aparecer entradas de scripts de terceros
- Usa el "blackboxing" para ocultar estas entradas y centrarte en tu código

## Características avanzadas

### Async Call Stack

Para ver la pila completa de operaciones asíncronas:

1. Activa "Async" en el panel Call Stack
2. Las operaciones asíncronas aparecerán conectadas a través de "async breaks"
3. Esto permite ver la cadena completa de ejecución, incluso a través de:
   - Promesas
   - Temporizadores (setTimeout/setInterval)
   - Eventos
   - Solicitudes XHR/fetch

### Desbordamiento de pila

Cuando la recursión es demasiado profunda:

- Se produce un error "Maximum call stack size exceeded"
- El panel Call Stack puede ayudar a identificar patrones de recursión infinita
- Observa las repeticiones en las llamadas para diagnosticar el problema

## Casos de uso comunes

### Depuración de errores

Cuando ocurre una excepción:

1. La ejecución se detiene en el punto del error
2. El Call Stack muestra la secuencia exacta de llamadas que llevó al error
3. Navega hacia arriba en la pila para encontrar la fuente del problema

### Comprensión del flujo de ejecución

Para entender cómo se ejecuta tu aplicación:

1. Coloca puntos de interrupción en puntos estratégicos
2. Cuando la ejecución se detenga, examina la pila de llamadas
3. Identifica patrones de llamadas inesperados o redundantes

### Optimización de rendimiento

Para detectar problemas de rendimiento:

1. Observa la profundidad de la pila durante operaciones lentas
2. Identifica funciones que aparecen con frecuencia
3. Busca llamadas redundantes o ciclos innecesarios

## Técnicas de depuración con Call Stack

### Depuración inversa

Para rastrear el origen de un valor inesperado:

1. Coloca un punto de interrupción donde se observa el problema
2. Cuando la ejecución se detenga, examina la pila de llamadas
3. Navega hacia atrás en la pila para encontrar dónde se modificó el valor

### Aislamiento de causas

Para aislar la causa de un comportamiento:

1. Identifica la función problemática en la pila
2. Coloca puntos de interrupción en esa función
3. Reinicia la depuración para capturar el momento exacto del problema
4. Examina los parámetros y el estado cuando se llama a la función

### Comparación de contextos

Para problemas inconsistentes:

1. Coloca puntos de interrupción en la misma función en diferentes situaciones
2. Compara las pilas de llamadas cuando la función se ejecuta correctamente vs. cuando falla
3. Busca diferencias en el orden de llamadas, parámetros o contexto