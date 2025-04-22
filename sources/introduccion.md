---
id : introduccion
sidebar_position: 1
slug: /
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Introducción al Panel Sources

El panel Sources es una herramienta fundamental para desarrolladores web que permite examinar, editar y depurar el código fuente de un sitio web directamente desde el navegador.

## ¿Qué es el panel Sources?

El panel Sources proporciona acceso completo a todos los recursos que componen una página web, incluyendo:

- Archivos JavaScript, HTML y CSS
- Recursos cargados desde servidores remotos
- Snippets de código personalizados
- Workers y otros scripts
- Código generado por el navegador

## Importancia para el desarrollo web

Dominar el panel Sources te permite:

- Depurar JavaScript en tiempo real
- Modificar y probar cambios de código sin afectar los archivos originales
- Localizar errores mediante puntos de interrupción estratégicos
- Examinar la ejecución del código paso a paso
- Comprender el flujo de ejecución de aplicaciones complejas

## Herramientas principales

<DocsCards>
  <DocsCard
    header="Editor de Código"
    href="/sources/estructura-archivos#editor"
  >
    <p>Editor integrado con resaltado de sintaxis para modificar archivos en tiempo real.</p>
  </DocsCard>
  
  <DocsCard
    header="Puntos de Interrupción"
    href="/sources/puntos-interrupcion"
  >
    <p>Detén la ejecución del código en puntos específicos para examinar el estado de la aplicación.</p>
  </DocsCard>
  
  <DocsCard
    header="Depuración Paso a Paso"
    href="/sources/depuracion-paso-a-paso"
  >
    <p>Controla la ejecución del código línea por línea para entender su comportamiento.</p>
  </DocsCard>
  
  <DocsCard
    header="Watch y Scope"
    href="/sources/watchers-y-scope"
  >
    <p>Monitoriza variables específicas y examina el alcance de las variables durante la ejecución.</p>
  </DocsCard>
</DocsCards>

## Acceso al panel Sources

Para abrir el panel Sources:

1. Abre las herramientas de desarrollo (F12 o Ctrl+Shift+I / Cmd+Option+I)
2. Haz clic en la pestaña "Sources"
3. Explora los diferentes paneles laterales para acceder a archivos y herramientas de depuración

## Configuración inicial recomendada

Para aprovechar al máximo esta herramienta:

- Activa el autoguardado para ver los cambios inmediatamente
- Familiarízate con los atajos de teclado para depuración (F8 para continuar, F10 para saltar, F11 para entrar)
- Explora las opciones de formateo de código en la configuración
- Considera guardar tus snippets frecuentes en la sección dedicada

En las siguientes secciones, exploraremos en detalle cada componente del panel Sources y cómo utilizarlo para optimizar tu flujo de desarrollo.