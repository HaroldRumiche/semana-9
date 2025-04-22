---
id: tomar-snapshot
title: Cómo Tomar Snapshots de Memoria
sidebar_position: 3
---

# Cómo Tomar Snapshots de Memoria

Los snapshots (instantáneas) de memoria son capturas del estado completo del montón de memoria JavaScript en un momento específico. Permiten analizar qué objetos están ocupando espacio y cómo se relacionan entre sí.

## ¿Qué es un Heap Snapshot?

Un heap snapshot (instantánea del montón) captura:

- Todos los objetos JavaScript en memoria
- Sus propiedades y valores
- Las relaciones entre objetos (quién referencia a quién)
- El tamaño ocupado por cada objeto
- Información sobre los constructores utilizados

## Procedimiento para tomar un snapshot

Para capturar una instantánea del montón de memoria:

1. Abre el panel de Memoria en DevTools
2. Selecciona la opción "Heap snapshot" en el selector de tipo de perfil
3. Haz clic en el botón "Take snapshot" (el botón circular de grabación)
4. Espera a que se complete el proceso de captura y análisis

El proceso puede tardar desde unos segundos hasta varios minutos, dependiendo de la cantidad de memoria utilizada por la aplicación.

## Preparación previa a la captura

Para obtener resultados óptimos, antes de tomar un snapshot:

1. **Limpia la memoria**: Haz clic en el botón "Collect garbage" (icono de papelera) para forzar la recolección de basura
2. **Establece un estado conocido**: Coloca tu aplicación en el estado específico que deseas analizar
3. **Cierra pestañas innecesarias**: Minimiza la interferencia de otras páginas abiertas
4. **Deshabilita extensiones**: Las extensiones del navegador pueden afectar los resultados
5. **Considera usar el modo incógnito**: Para un entorno más limpio

## Estrategias para múltiples snapshots

Para detectar problemas de memoria efectivamente:

### Técnica de los tres snapshots

1. **Snapshot inicial**: Captura el estado base de la aplicación
2. **Snapshot tras la acción**: Realiza la acción sospechosa y captura otro snapshot
3. **Snapshot tras limpieza**: Fuerza la recolección de basura y captura un tercer snapshot

Si hay una fuga de memoria, verás objetos que permanecen en el tercer snapshot que deberían haber sido liberados.

### Snapshot durante ciclos de uso

1. **Snapshot de base**: Captura al iniciar la aplicación
2. **Snapshots intermedios**: Captura después de completar ciclos de uso
3. **Snapshot final**: Captura después de varios ciclos y limpieza

Esta técnica es útil para detectar acumulación gradual de memoria durante el uso normal.

## Interpretación de un snapshot

Una vez capturado, el snapshot mostrará:

### Vista Summary (Resumen)

- **Constructor**: Nombre del constructor del objeto
- **Distance**: Distancia desde la raíz del árbol de objetos
- **Shallow Size**: Tamaño directo del objeto (sin incluir referencias)
- **Retained Size**: Tamaño total incluyendo todos los objetos que solo este objeto mantiene en memoria

### Vista Comparison (Comparación)

Aparece al seleccionar dos snapshots y muestra:

- **New**: Objetos nuevos en el segundo snapshot
- **Deleted**: Objetos eliminados desde el primer snapshot
- **Delta**: Cambio en el número de instancias o tamaño

### Vista Containment (Contención)

Muestra la estructura jerárquica de objetos:

- **Window**: El objeto global
- **GC roots**: Referencias directas desde el recolector de basura
- **Native objects**: Objetos del navegador que no son directamente JavaScript

### Vista Dominators (Dominadores)

Muestra objetos ordenados por tamaño retenido, ayudando a identificar los objetos que impiden la liberación de grandes bloques de memoria.

## Consejos prácticos

- **Nombres significativos**: Al tomar múltiples snapshots, haz clic derecho sobre ellos para renombrarlos con nombres descriptivos
- **Uso de filtros**: Utiliza el campo de búsqueda para filtrar objetos por nombre o por tamaño utilizando operadores (>1000)
- **Análisis por constructores**: Comienza analizando los objetos agrupados por constructor para identificar patrones
- **Exportación para análisis offline**: Puedes guardar tus snapshots para análisis posterior usando el menú contextual
- **Tamaño de referencia**: Una aplicación típica puede ocupar entre 5-50MB de memoria; valores muy superiores podrían indicar problemas

En la siguiente sección, exploraremos cómo comparar snapshots para identificar fugas de memoria de manera eficiente.