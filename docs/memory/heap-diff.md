---
id: heap-diff
title: Comparación de Heap Snapshots (Heap Diff)
sidebar_position: 4
---

# Comparación de Heap Snapshots (Heap Diff)

La comparación de snapshots del montón de memoria (Heap Diff) es una técnica poderosa para identificar fugas de memoria y patrones de asignación anómalos mediante el análisis de las diferencias entre dos instantáneas de memoria.

## Fundamentos de la comparación de snapshots

La comparación de snapshots permite:

- Detectar objetos que no fueron liberados cuando deberían haberlo sido
- Identificar acumulación progresiva de objetos específicos
- Cuantificar el impacto de determinadas operaciones en la memoria
- Verificar si las acciones de limpieza funcionan correctamente

## Procedimiento para comparar snapshots

Para realizar una comparación efectiva:

1. Captura un snapshot inicial (estado base)
2. Realiza la acción o secuencia de acciones que sospechas que causa problemas de memoria
3. Captura un segundo snapshot (estado posterior)
4. Selecciona el segundo snapshot en la lista de perfiles
5. Cambia al modo "Comparison" en el selector de visualización
6. Selecciona el primer snapshot como base de comparación

## Interpretación de los resultados de comparación

La vista de comparación muestra los siguientes datos:

### Columnas principales

- **Constructor**: Tipo de objeto JavaScript
- **# New**: Número de nuevas instancias creadas
- **# Deleted**: Número de instancias eliminadas
- **# Delta**: Diferencia neta entre creadas y eliminadas
- **Alloc. Size**: Tamaño de los nuevos objetos
- **Freed Size**: Tamaño de los objetos liberados
- **Size Delta**: Diferencia neta en el tamaño de memoria

### Indicadores de color

- **Rojo**: Valores positivos (nuevos objetos o aumento de memoria)
- **Azul**: Valores negativos (objetos eliminados o disminución de memoria)

## Estrategias de comparación efectivas

### Comparación de ciclos completos

Para detectar fugas en ciclos de interacción:

1. Snapshot A: Estado inicial
2. Realizar una acción (ej. abrir un modal)
3. Snapshot B: Estado intermedio
4. Deshacer la acción (ej. cerrar el modal)
5. Forzar recolección de basura
6. Snapshot C: Estado final
7. Comparar A con C para verificar que se regresa al estado inicial

Si la comparación entre A y C muestra objetos remanentes, probablemente hay una fuga.

### Análisis de incrementos

Para identificar acumulaciones progresivas:

1. Snapshot tras cargar la aplicación
2. Realizar una operación repetitiva varias veces (ej. 10 navegaciones)
3. Snapshot posterior
4. Comprobar si hay un aumento lineal en objetos que deberían ser temporales

## Patrones comunes que indican problemas

Al analizar las diferencias, busca estos indicadores:

### Detección de fugas de memoria

- **Closures acumuladas**: Incremento constante en el número de closures
- **Elementos DOM desconectados**: Aumento de "Detached DOM Tree" o elementos "(detached)"
- **Objetos de evento**: Acumulación de listeners de eventos
- **Arrays o colecciones crecientes**: Arrays u objetos Map/Set que solo aumentan de tamaño
- **Caches sin límite**: Objetos utilizados como caché que nunca se limpian

### Análisis de constructores sospechosos

Presta especial atención a:

- **Constructores personalizados**: Tus propias clases que muestran un delta positivo constante
- **Event listeners**: Acumulación de objetos como MouseEvent, EventListener
- **Timers**: Incremento en objetos Timer que sugiere callbacks no eliminados
- **XHR y Fetch**: Solicitudes que no se están completando o liberando correctamente

## Técnicas avanzadas de comparación

### Comparación Multi-Snapshot

Compara varios snapshots secuenciales para identificar tendencias:

1. Snapshot A: Estado base
2. Realizar operación 1
3. Snapshot B
4. Realizar operación 2
5. Snapshot C
6. Comparar A→B, B→C y A→C para analizar el impacto incremental

### Análisis de retención específica

Para objetos sospechosos identificados en la comparación:

1. Encuentra instancias del constructor en la vista de comparación
2. Expande para ver objetos individuales
3. Selecciona un objeto específico
4. Cambia a la vista "Retainers" para ver qué está impidiendo su liberación

## Consejos prácticos de uso

- **Minimiza el ruido**: Realiza acciones específicas entre snapshots para aislar problemas
- **Recolección de basura manual**: Utiliza el botón "Collect garbage" antes del snapshot final
- **Nombres descriptivos**: Renombra los snapshots para identificar fácilmente su contexto
- **Filtrado por constructor**: Usa búsquedas para centrarte en tipos de objetos específicos
- **Considera la optimización del navegador**: Algunas estructuras pueden permanecer en memoria por optimización; enfócate en tendencias crecientes

En la siguiente sección, exploraremos en profundidad el análisis de rutas de retención para entender por qué determinados objetos permanecen en memoria.