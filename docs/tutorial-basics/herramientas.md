---
sidebar_position: 1
---

# 🛠️ Herramientas Básicas del Inspector

El panel de herramientas está dividido en diferentes secciones, llamadas **pestañas**. Aquí exploramos las más comunes:

---

## 📁 Elements

Esta pestaña muestra el **DOM** en forma jerárquica, representando la estructura HTML real que se está renderizando.

- Puedes seleccionar cualquier elemento en la página y ver su código.
- Cambia el contenido HTML directamente con doble clic o clic derecho → *Edit as HTML*.
- En la parte derecha, verás los estilos CSS aplicados (heredados y directos), incluyendo las reglas activas/inactivas.

🔧 **Ejemplo práctico:**
Puedes cambiar un título `<h1>` por otro y ver cómo se actualiza en tiempo real en el sitio.

---

## 🎨 Styles (dentro de Elements)

Muestra todos los estilos CSS aplicados al elemento seleccionado. Puedes:
- Cambiar valores (color, tamaño, padding, etc.).
- Desactivar reglas temporalmente.
- Probar nuevas reglas escribiéndolas directamente.

---

## 💬 Console

Aquí puedes:
- Ver errores de JavaScript.
- Ejecutar comandos JS directamente (como si fuera un editor).

✏️ **Ejemplo práctico:**
Escribe `document.body.style.background = 'black'` y observa el cambio inmediato del fondo de la página.

---

## 🌐 Network

Muestra todos los recursos que la página está cargando: imágenes, scripts, hojas de estilo, peticiones HTTP, etc.

Permite:
- Ver el tamaño de cada archivo.
- Cuánto tiempo tardó en cargarse.
- Verificar respuestas de APIs.

🧪 **Ejemplo:**
Filtra por "XHR" y podrás analizar las respuestas de peticiones `fetch` o `axios`.

---

## 🧠 Sources

Permite ver todos los archivos fuente del sitio: HTML, CSS, JS, imágenes y más. También puedes:
- Poner **breakpoints** en el código JavaScript.
- Depurar paso a paso (debugging).
- Ver qué línea produce un error.

---

## 🧪 Performance, Memory, Application

Estas pestañas son más avanzadas. Sirven para:
- Grabar el rendimiento del sitio.
- Medir consumo de memoria.
- Revisar almacenamiento local (localStorage, cookies).
