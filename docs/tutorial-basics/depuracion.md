---
sidebar_position: 3
---

# 🐞 Depuración de JavaScript con el Inspector

La depuración de código JavaScript es esencial para encontrar y solucionar errores de lógica o comportamiento en una aplicación web. El Inspector del navegador nos permite ver cómo se ejecuta nuestro código paso a paso y analizar valores en tiempo real.

---

## 🧭 ¿Dónde lo hago?

Ve a la pestaña `Sources` en el panel de herramientas del navegador. Aquí encontrarás los archivos `.js` que se están utilizando en la página.

---

## 🧱 ¿Qué es un breakpoint?

Un **breakpoint** (punto de interrupción) es una línea específica del código donde el navegador detiene la ejecución para que puedas inspeccionar:

- El valor de las variables
- El estado del DOM
- Qué funciones se están ejecutando

---

## 🔧 Cómo colocar un breakpoint

1. Abre la pestaña **Sources**.
2. Navega hasta el archivo `.js` que quieras revisar.
3. Haz clic sobre el número de línea donde quieras pausar la ejecución.

💡 Tip: Cuando recargas la página, el script se detendrá en ese punto y podrás comenzar a inspeccionar.

---

## 🔎 Herramientas útiles al depurar

- `Scope`: Muestra las variables disponibles en el contexto actual.
- `Call Stack`: Lista las funciones en ejecución, desde la más reciente hasta la primera.
- `Watch`: Permite observar valores específicos escribiéndolos manualmente.
- Controles de navegación:
  - ▶️ Resume
  - ⏩ Step over
  - ⬇️ Step into
  - ⬆️ Step out

---