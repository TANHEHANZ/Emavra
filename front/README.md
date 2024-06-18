# Emavra Front-End

Este repositorio contiene el código del front-end de Emavra, una aplicación web desarrollada con React y Vite. A continuación, se describen los detalles del proyecto, incluyendo su instalación, estructura y uso.

## Instalación

Para comenzar con el proyecto, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/TANHEHANZ/Emavra
    cd front
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

emavra-front/
├── public/ # Archivos públicos estáticos
├── src/ # Código fuente del proyecto
│ ├── assets/ # Recursos como imágenes, fuentes, etc.
│ ├── components/ # Componentes reutilizables
│ ├── pages/ # Páginas principales de la aplicación
│ ├── App.jsx # Componente principal de la aplicación
│ ├── main.jsx # Punto de entrada de la aplicación
│ ├── index.css # Estilos globales
│ └── ... # Otros archivos y carpetas necesarias
├── .gitignore # Archivos y directorios a ignorar por git
├── index.html # Archivo HTML principal
├── package.json # Dependencias y scripts del proyecto
├── README.md # Documentación del proyecto
└── vite.config.js # Configuración de Vite

markdown
Copiar código

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

### `npm run dev`

Inicia el servidor de desarrollo. La aplicación estará disponible en `http://localhost:3000`.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.

### `npm run preview`

Previsualiza la versión de producción después de construirla.

## Uso

1. Para iniciar el servidor de desarrollo, usa:
    ```bash
    npm run dev
    ```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

3. Para construir la aplicación para producción:
    ```bash
    npm run build
    ```

4. Para previsualizar la versión de producción:
    ```bash
    npm run preview
    ```

## Contribución

¡Las contribuciones son bienvenidas! Para contribuir, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commits (`git commit -m 'Agrega nueva feature'`).
4. Envía tus cambios (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.
