# 📚 Librería Independiente Raíz - Oficial
Repositorio oficial de la página web para la Librería Independiente Raíz en Medellín.
##
---
## URL del Sitio Publicado
El sitio web se encuentra desplegado y accesible en:
https://camitru.github.io/proyecto_raiz/

## Tecnologías utilizadas 
HTML5, CSS3, JavaScript y GitHub Pages.

## 📁 Estructura del Proyecto
Para mantener el código organizado y evitar conflictos el proyecto utiliza la siguiente estructura:
```
libreria-raiz/
├── estilos/
│   └── main.css          # Estilos globales (variables, tipografía, reset)
│   │   ├── blog.css          # Estilos de la sección de blog
│   │   ├── calendario.css    # Estilos del calendario de eventos
│   │   └── formulario.css    # Estilos de la página de contacto 
├── scripts/
│   └── app.js        # Interacción
├── imagenes/         # Recursos gráficos
│   └── logo.png
    └── banner.jpg      
├── paginas/
|   ├── blog.html          # Sección de reseñas literarias
│   ├── calendario.html    # Agenda de eventos
│   ├── contacto.html      # Página de formulario de contacto
│   └── nosotros.html      # Historia
├── index.html       # Punto de entrada principal
└── README.md        # Documentación del proyecto
```

## Cómo ejecutar el proyecto en local

1. Clonar el repositorio:

`git clone [https://github.com/CamiTru/proyecto_raiz.git]`

2. Navegar a la carpeta del proyecto:

`cd proyecto_raiz`

3. Abrir el sitio en el navegador:

Opción 1: Haz doble clic en el archivo index.html.\  
Opción 2: Usa la extensión Live Server de Visual Studio Code haciendo clic derecho en index.html y seleccionando Open with Live Server.

## 🌿 Convención de ramas
Sigue estas reglas de trabajo

* Nunca trabajes ni hagas commits directamente sobre la rama main.
* Toda nueva funcionalidad o corrección debe crearse en una rama secundaria basada en main.
* Ejemplos de nombres de ramas:
    feat/nombre-de-la-funcionalidad
    fix/descripcion-del-error 
* Realiza tus cambios utilizando Conventional Commits.
