# 🎁 App de Sorteo

Una aplicación web interactiva y moderna para realizar sorteos de forma rápida y divertida.

![App Sorteo](img/home.png)

## 📋 Descripción

**App Sortep** es una aplicación web desarrollada con HTML, CSS y JavaScript vanilla que permite organizar sorteos aleatorios entre amigos, familiares o compañeros de trabajo. Con un diseño responsive y una interfaz intuitiva, hace que organizar tu intercambio de regalos sea muy sencillo.

## ✨ Características

- 🎲 **Sorteo aleatorio** de participantes
- 📱 **Diseño responsive** - funciona en móviles, tablets y desktop
- 🎨 **Interfaz moderna** con animaciones suaves
- ♿ **Accesible** con etiquetas ARIA y semántica HTML
- 🔄 **Función de reinicio** para comenzar un nuevo sorteo
- ⌨️ **Atajos de teclado** - presiona Enter para agregar nombres rápidamente
- 🎯 **Sin dependencias** - código vanilla puro

## 🚀 Demo

Puedes ver la aplicación en funcionamiento [aquí](#) _(agrega tu link de demo si tienes)_

## 📁 Estructura del Proyecto

```
amigo-secreto/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño responsive
├── app.js              # Lógica de la aplicación
├── assets/             # Recursos multimedia
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas


![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)


- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS, flexbox y animaciones
- **JavaScript (ES6+)** - Lógica de la aplicación
- **Google Fonts** - Tipografías Inter y Merriweather

## 📖 Cómo Usar

### Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/amigo-secreto.git
```

2. Navega al directorio del proyecto:
```bash
cd amigo-secreto
```

3. Abre el archivo `index.html` en tu navegador preferido.

### Uso de la Aplicación

1. **Agregar participantes:**
   - Escribe el nombre de cada participante en el campo de texto
   - Presiona el botón "Añadir" o la tecla **Enter**
   - Repite el proceso para todos los participantes

2. **Realizar el sorteo:**
   - Una vez que hayas agregado todos los nombres
   - Haz clic en el botón "Sortear amigo"
   - El ganador aparecerá destacado en pantalla

3. **Reiniciar:**
   - Presiona el botón "Reiniciar" para limpiar todo
   - Confirma la acción y comienza un nuevo sorteo

## 🎨 Paleta de Colores

```css
--color-primary: #7c3aed        /* Morado principal */
--color-primary-dark: #6d28d9   /* Morado oscuro */
--color-accent: #10b981         /* Verde para acciones */
--color-accent-hover: #059669   /* Verde hover */
--color-text: #374151           /* Texto principal */
--color-bg-light: #fef9f3       /* Fondo claro */
```

## 📱 Responsive Design

La aplicación está optimizada para diferentes tamaños de pantalla:

- **Desktop** (> 768px): Vista completa con botones lado a lado
- **Tablet** (768px - 480px): Diseño adaptado con elementos ajustados
- **Mobile** (< 480px): Vista vertical optimizada para pantallas pequeñas

## 🔧 Características Técnicas

### JavaScript
- Manipulación del DOM
- Generación de números aleatorios con `Math.random()`
- Event listeners para interactividad
- Validación de entrada de datos
- Confirmaciones de usuario

### CSS
- Variables CSS para temas consistentes
- Flexbox para layouts responsivos
- Animaciones y transiciones CSS
- Media queries para responsive design
- Gradientes y sombras modernas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Mejoras Futuras

- [ ] Agregar opción para eliminar participantes individuales
- [ ] Permitir editar nombres de participantes
- [ ] Guardar listas de participantes en localStorage
- [ ] Exportar resultados en formato PDF
- [ ] Modo oscuro/claro manual
- [ ] Historial de sorteos realizados
- [ ] Restricciones de sorteo (quién no puede ser de quién)
- [ ] Compartir resultados por email

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👩‍💻 Autora

**Lucero Uzuriaga**

- GitHub: [@lucerouzuriaga](https://github.com/lucerouzuriaga)
- LinkedIn: [Lucero Uzuriaga](https://linkedin.com/in/lucerouzuriaga)

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella!

**Desarrollado con 💜 por Lucero Uzuriaga © 2025**
