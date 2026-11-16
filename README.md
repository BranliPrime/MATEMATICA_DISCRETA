# Sistema de Operaciones de Matemática Discreta I

Aplicación web académica modular desarrollada con **HTML5, CSS3 y JavaScript (ES6 Modules)** para resolver y explicar paso a paso siete operaciones fundamentales de progresiones y combinatoria.

## Estructura del Proyecto

```text
sistema_web/
├── index.html                  # Estructura principal y menú de navegación
├── css/
│   └── styles.css              # Estilos modernos y diseño responsivo (Desktop/Móvil)
└── js/
    ├── app.js                  # Controlador de interfaz, eventos e historial
    ├── modules/
    │   ├── progresiones.js     # Módulos 1, 2, 3 y 4 (P.A. y P.G.)
    │   └── combinatoria.js     # Módulos 5, 6 y 7 (Factorial, Combinación, Variación)
    └── utils/
        └── validators.js       # Funciones de validación numérica y formateo
```

## Instrucciones de Ejecución

Dado que el proyecto utiliza **Módulos ES6 (`type="module"`)**, los navegadores modernos requieren servir los archivos mediante un servidor HTTP local (por políticas de seguridad CORS):

1. **Opción 1 (Visual Studio Code - Recomendada):**
   - Abra la carpeta `sistema_web/` en VS Code.
   - Instale la extensión **Live Server**.
   - Haga clic derecho sobre `index.html` y seleccione **"Open with Live Server"**.

2. **Opción 2 (Python instalado):**
   - Abra una terminal dentro de la carpeta `sistema_web/`.
   - Ejecute: `python -m http.server 8080`
   - Abra su navegador en `http://localhost:8080`.
