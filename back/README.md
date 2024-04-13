# Backend de EMAVRA

Este es el backend de EMAVRA, desarrollado utilizando Express.js.

## Estructura de Carpetas

El proyecto sigue la siguiente estructura de carpetas:

- `src/`: Directorio principal del código fuente.
  - `prisma/`: Archivos relacionados con la configuración de Prisma ORM.
  - `controller/`: Controladores que manejan las solicitudes HTTP.
  - `middleware/`: Middleware personalizado para manejar funciones específicas.
  - `routes/`: Definición de rutas para diferentes endpoints de la API.
  - `utils/`: Utilidades y funciones auxiliares.
- `index.js`: Archivo principal que inicia el servidor.
- `uploads/`: Directorio para almacenar archivos subidos por los usuarios.
- `.gitignore`: Archivo que especifica qué archivos y directorios deben ignorarse por Git.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/TANHEHANZ/Emavra
```


2. Dirijite a la carpeta back

```bash
cd back
```


3. instala dependencias

```bash
npm install 
```


4. Ejecuta la bd Realizada en prisma como ORM

```bash
npx prisma migrate dev
```


5. Ejecuta el proyecto 

```bash
npm start
```
