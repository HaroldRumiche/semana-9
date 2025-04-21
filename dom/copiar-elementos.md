---
sidebar_label: 'Copiar elementos'
sidebar_position: 7
---

# Copiar elementos del DOM

El inspector de elementos proporciona diversas formas de copiar elementos y su información asociada, lo que resulta extremadamente útil para depuración, documentación y desarrollo.

## Métodos para copiar elementos

### Copiar HTML

Para copiar el código HTML de un elemento:

1. Selecciona el elemento en el inspector
2. Haz clic derecho sobre él
3. Elige una de las siguientes opciones:
   - **Copy > Copy outerHTML**: Copia el elemento completo, incluida su etiqueta y contenido
   - **Copy > Copy innerHTML**: Copia solo el contenido interno del elemento
   - **Copy > Copy element**: Copia una representación simplificada del elemento

### Copiar como selector CSS

Para obtener un selector CSS que apunte al elemento:

1. Selecciona el elemento
2. Haz clic derecho
3. Selecciona **Copy > Copy selector**

Esto generará un selector CSS específico que puede utilizarse para identificar el mismo elemento, como:
```css
#main-container > div.content > p:nth-child(3)
```

### Copiar como XPath

Para obtener la ruta XPath del elemento:

1. Selecciona el elemento
2. Haz clic derecho
3. Selecciona **Copy > Copy XPath**

El resultado será una expresión XPath como:
```
/html/body/div[2]/div[1]/p[3]
```

### Copiar propiedades JavaScript

Para copiar referencias a objetos DOM:

1. Selecciona el elemento
2. Haz clic derecho
3. Selecciona **Copy > Copy JS path**

Esto creará una expresión JavaScript que referencia al elemento:
```javascript
document.querySelector('#main-container > div.content > p:nth-child(3)')
```

## Copiar estilos

### Copiar reglas CSS aplicadas

Para copiar los estilos que afectan al elemento:

1. Selecciona el elemento
2. En el panel de estilos, localiza la regla que te interesa
3. Haz clic derecho sobre la regla
4. Selecciona **Copy rule** o **Copy declaration**

### Copiar estilos computados

Para copiar los valores finales de los estilos:

1. Selecciona el elemento
2. Navega a la pestaña "Computed" (Calculado)
3. Selecciona las propiedades deseadas
4. Haz clic derecho y selecciona **Copy**

## Técnicas avanzadas de copiado

### Capturar estado actual

Para copiar un elemento con sus estados actuales (como :hover, :focus):

1. Activa el estado deseado en la página
2. Usa el inspector para seleccionar el elemento
3. En la pestaña de estilos, verás una sección con el estado activo
4. Copia las reglas de esa sección

### Copiar como imagen

Algunos navegadores permiten:

1. Seleccionar el elemento
2. Hacer clic derecho
3. Seleccionar **Capture node screenshot** o similar

### Exportar a la consola

Para manipular el elemento en la consola:

1. Selecciona el elemento
2. Haz clic derecho
3. Selecciona **Store as global variable**
4. El elemento estará disponible en la consola como `temp1`, `temp2`, etc.

## Consejos para una copia eficiente

1. Selecciona el nivel adecuado de jerarquía antes de copiar
2. Utiliza selectores simplificados cuando sea posible
3. Verifica que el código copiado funciona correctamente
4. Para documentación, considera copiar una versión simplificada