---
id: garbage-collection
sidebar_position: 7
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Recolección de Basura

La recolección de basura (Garbage Collection) es un proceso automático en JavaScript que libera la memoria ocupada por objetos que ya no son accesibles. Comprender cómo funciona y cómo monitorizarla es esencial para optimizar el rendimiento de memoria en aplicaciones web.

## ¿Qué es la recolección de basura?

La recolección de basura es un mecanismo utilizado por JavaScript para administrar automáticamente la memoria:

- Identifica objetos que ya no son referenciados (alcanzables) en el código
- Libera la memoria ocupada por estos objetos
- Ejecuta este proceso periódicamente sin intervención explícita del desarrollador

A diferencia de lenguajes como C++, JavaScript no requiere liberación manual de memoria, pero entender este proceso ayuda a evitar problemas como fugas de memoria.

## Visualización de la recolección de basura en DevTools

Chrome DevTools ofrece varias formas de observar y analizar la recolección de basura:

1. **Panel Memory > Timeline**: 
   - Muestra los eventos de recolección de basura como caídas en la gráfica de uso de memoria
   - Identifica visualmente cuándo ocurre la recolección y cuánta memoria se libera

2. **Forzar recolección de basura**:
   - En el panel Memory, haz clic en el icono de papelera 🗑️
   - Esto fuerza una recolección de basura para análisis inmediato

3. **Marcar generaciones de objetos**:
   - Toma una instantánea antes y después de forzar la recolección
   - Compara para identificar objetos persistentes

## Tipos de recolección de basura en V8

El motor V8 de Chrome utiliza diferentes estrategias de recolección:

- **Recolección menor (Scavenge)**: 
  - Rápida, frecuente
  - Procesa objetos jóvenes en el "espacio nuevo"
  - Visible como pequeñas caídas en el gráfico de memoria

- **Recolección mayor (Mark-and-Sweep)**:
  - Más lenta, menos frecuente
  - Procesa todo el heap de memoria
  - Visible como grandes caídas en el gráfico de memoria
  - Puede causar pausas perceptibles en la aplicación

## Monitoreo efectivo de la recolección de basura

Para analizar eficazmente la recolección de basura:

1. Habilita la grabación de memoria en la pestaña Performance
2. Realiza acciones específicas en tu aplicación
3. Observa cuándo ocurren las recolecciones y cuánta memoria se libera
4. Busca patrones de "dientes de sierra" que indican ciclos saludables de asignación y liberación
5. Identifica objetos que persisten después de múltiples recolecciones

## Patrones y señales de alerta

Al analizar la recolección de basura, presta atención a:

- **Patrón normal**: Incrementos graduales seguidos por caídas abruptas cuando ocurre la recolección
- **Señales de problemas**: 
  - Línea de memoria constantemente creciente sin caídas significativas
  - Recolecciones muy frecuentes que indican presión de memoria
  - Liberaciones de memoria menores de lo esperado después de operaciones

## Optimización para la recolección de basura

Para mejorar la eficiencia de la recolección de basura:

- Reutiliza objetos en lugar de crear nuevos cuando sea posible
- Utiliza patrones de agrupación (object pooling) para objetos de uso frecuente
- Libera referencias explícitamente cuando un objeto ya no es necesario
- Evita crear excesivos objetos temporales en bucles críticos
- Considera utilizar estructuras de datos como `TypedArray` para datos numéricos grandes

## Relación con el rendimiento de la aplicación

La recolección de basura puede afectar el rendimiento de tu aplicación:

- Las pausas de recolección pueden causar detenimientos (jank) en animaciones
- Las recolecciones frecuentes indican presión de memoria y pueden degradar el rendimiento
- El análisis de recolección ayuda a identificar cuándo optimizar patrones de asignación

En la siguiente sección, exploraremos cómo detectar fugas de memoria, un problema común relacionado con objetos que nunca llegan a ser recolectados.