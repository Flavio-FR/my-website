---
sidebar_position: 4
---

# 📚 Casos de uso comunes del Inspector

### 🎯 Ver por qué un elemento no aparece

- Abre el inspector y selecciona el elemento en la pestaña **Elements**.
- Verifica si tiene estilos como `display: none`, `visibility: hidden`, o si está fuera de la pantalla (`position: absolute` con coordenadas negativas).

---

### 🎨 Cambiar estilos para pruebas rápidas

- Ideal para probar colores, márgenes, tipografías o efectos *hover* antes de escribir el código final.
- Puedes copiar y pegar estilos directamente desde la pestaña **Styles**.

---

### 🔗 Analizar llamadas a APIs

- Abre la pestaña **Network** y filtra por **XHR** o **Fetch**.
- Haz clic en cualquier llamada para ver:
  - La URL
  - Los datos enviados
  - La respuesta del servidor

> Esto es especialmente útil para revisar integraciones con APIs REST.

---

### 💥 Revisar errores JavaScript

- Ve a la pestaña **Console**.
- Los errores aparecerán en rojo.
- Haz clic sobre un error para ir directamente al archivo y línea donde ocurrió.

---

## 💡 Consejos útiles

- 🔁 **Los cambios no son permanentes**: todo lo que hagas se pierde al recargar la página.
- 🖱️ Usa el ícono de selección (`↖️`) para inspeccionar elementos con solo hacer clic en la página.
- 🧪 Puedes editar texto directamente desde el DOM con doble clic sobre el contenido del HTML.
- 🔍 Usa la consola para probar funciones, acceder al DOM o ver valores con `console.log()`.

