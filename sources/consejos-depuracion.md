---
sidebar_label: 'Consejos de depuración'
sidebar_position: 8
---

# Consejos y buenas prácticas para la depuración

Esta guía recopila consejos, trucos y mejores prácticas para optimizar tu experiencia de depuración utilizando el panel Sources.

## Atajos de teclado esenciales

Domina estos atajos para incrementar tu productividad:

| Acción | Windows/Linux | Mac |
|--------|---------------|-----|
| Abrir DevTools | F12 o Ctrl+Shift+I | Cmd+Option+I |
| Buscar archivo | Ctrl+P | Cmd+P |
| Buscar en todos los archivos | Ctrl+Shift+F | Cmd+Shift+F |
| Ir a línea | Ctrl+G | Cmd+G |
| Reanudar ejecución | F8 | F8 |
| Step over | F10 | F10 |
| Step into | F11 | F11 |
| Step out | Shift+F11 | Shift+F11 |
| Pausar/Continuar | F8 | F8 |
| Activar/desactivar punto de interrupción | F9 | F9 |
| Guardar cambios | Ctrl+S | Cmd+S |

## Estrategias de depuración efectivas

### Depuración sistemática

1. **Identifica el problema**: Define claramente qué comportamiento esperabas y qué sucedió realmente
2. **Reproduce el error**: Encuentra pasos consistentes para reproducir el problema
3. **Aísla el contexto**: Reduce el código a la mínima expresión que reproduce el error
4. **Examina el estado**: Usa puntos de interrupción para inspeccionar variables y flujo
5. **Prueba hipótesis**: Modifica el código para verificar tus teorías
6. **Documenta la solución**: Anota lo aprendido para futuras referencias

### Divide y vencerás

Para problemas complejos:

1. Divide el código en secciones lógicas
2. Utiliza puntos de interrupción para verificar cada sección
3. Confirma qué partes funcionan y cuáles no
4. Enfócate en las secciones problemáticas

## Depuración avanzada

### Depuración de rendimiento

Para identificar cuellos de botella:

1. Usa el panel Performance junto con Sources
2. Coloca puntos de interrupción en funciones sospechosas
3. Examina la duración y frecuencia de las llamadas
4. Busca patrones de llamadas redundantes o ineficientes

### Depuración del DOM

Para problemas de interfaz:

1. Usa puntos de interrupción del DOM para detectar cambios
2. Examina el estado del DOM antes y después de las modificaciones
3. Verifica que los selectores de elementos sean correctos
4. Comprueba si hay conflictos de estilos o comportamientos

### Depuración asíncrona

Para código asíncrono complejo:

1. Activa "Async stack traces" en las opciones de DevTools
2. Usa puntos de interrupción en promesas y callbacks
3. Monitoriza la secuencia de ejecución asíncrona
4. Busca promesas no resueltas o llamadas asíncronas perdidas

### Depuración de frameworks

Consejos específicos para frameworks populares:

#### React
- Instala las DevTools de React para mejor soporte
- Usa puntos de interrupción en métodos de ciclo de vida
- Comprueba el estado y props en cada renderizado

#### Vue
- Utiliza las DevTools de Vue para inspeccionar componentes
- Coloca puntos de interrupción en watchers y computed properties
- Verifica las actualizaciones reactivas

#### Angular
- Usa puntos de interrupción en los lifecycle hooks
- Depura servicios e inyección de dependencias
- Inspecciona el flujo de datos entre componentes

## Optimización del entorno de depuración

### Personalización de DevTools

Configura el panel Sources para mayor comodidad:

1. Ajusta la configuración de formato de código
2. Personaliza los atajos de teclado
3. Guarda snippets reutilizables
4. Organiza los paneles según tu flujo de trabajo

### Configuración de workspace

Para una experiencia de desarrollo más integrada:

1. Configura un workspace con tus archivos locales
2. Habilita el autoguardado de cambios
3. Utiliza control de versiones para rastrear modificaciones
4. Sincroniza configuraciones entre dispositivos

## Solución de problemas comunes

### El código no se pausa en los puntos de interrupción

Posibles soluciones:

1. Verifica que el archivo que ves es el que realmente se ejecuta
2. Comprueba si hay Source Maps correctamente configurados
3. Asegúrate de que los puntos de interrupción no estén desactivados globalmente
4. Verifica que no haya conflictos con minificación o compilación

### Valores de variables incorrectos o inesperados

Estrategias para investigar:

1. Comprueba el ámbito (scope) de las variables
2. Verifica si hay hoisting o closures afectando los valores
3. Usa watch expressions para monitorizar cambios
4. Comprueba si hay sobreescrituras o mutaciones no intencionadas

### Rendimiento lento durante la depuración

Para mejorar la velocidad:

1. Limita el número de puntos de interrupción activos
2. Utiliza puntos de interrupción condicionales en lugar de evaluación manual
3. Aplica blackboxing a bibliotecas de terceros
4. Cierra pestañas y paneles de DevTools no utilizados

## Mejores prácticas

### Código preparado para depuración

Escribe código más fácil de depurar:

1. Usa nombres de variables y funciones descriptivos
2. Divide funciones largas en componentes más pequeños
3. Evita efectos secundarios ocultos
4. Añade logs estratégicos que faciliten el seguimiento

### Depuración colaborativa

Para depurar en equipo:

1. Documenta los puntos de interrupción útiles
2. Comparte snippets de depuración
3. Crea guías de depuración para problemas recurrentes
4. Utiliza herramientas de captura de pantalla y grabación para compartir hallazgos

### Hábitos para el éxito

Desarrolla estos hábitos para convertirte en un mejor depurador:

1. Practica la depuración regular, no solo cuando hay problemas
2. Explora nuevas funcionalidades del panel Sources con cada actualización
3. Aprende un nuevo atajo de teclado cada semana
4. Revisa y refina tu proceso de depuración continuamente

## Recursos adicionales

### Documentación oficial

- [Chrome DevTools Documentation](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
- [Edge DevTools Documentation](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/)

### Cursos y tutoriales recomendados

- Frontend Masters: Debugging and Fixing Common JavaScript Errors
- Google's Debugging JavaScript in Chrome DevTools
- JavaScript Debugging Patterns and Practices

### Herramientas complementarias

- Lighthouse para optimización de rendimiento
- Extensiones de DevTools específicas para tu framework
- Herramientas de monitorización de errores como Sentry o LogRocket