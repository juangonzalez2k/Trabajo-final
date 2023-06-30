# Proyecto Final - API Rest con Node.js, Express y MongoDB

Este proyecto es una API Rest creada con Node.js y Express para el curso de programación. Esta API interactúa con una base de datos MongoDB para realizar operaciones CRUD en los datos del cliente.

## Objetivo del Proyecto

El objetivo de este proyecto es implementar una API Rest para el microservicio "Cliente" de una tienda en línea. Los endpoints permiten obtener, crear, actualizar y eliminar datos del cliente en una base de datos MongoDB.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas y archivos:

```plaintext
trabajofinal/
├── app/
│   ├── controllers/
│   ├── models/
│   └── routes/
├── node_modules/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

- `app/controllers/`: Esta carpeta contiene los controladores que gestionan las operaciones de la base de datos.
- `app/models/`: Esta carpeta contiene los esquemas de los modelos de la base de datos.
- `app/routes/`: Esta carpeta contiene las rutas de la API.
- `node_modules/`: Esta carpeta contiene las dependencias del proyecto.
- `.gitignore`: Este archivo le dice a Git qué archivos o directorios no debe rastrear.
- `package-lock.json` y `package.json`: Estos archivos contienen la información de las dependencias y scripts del proyecto.
- `README.md`: Este archivo contiene la documentación del proyecto.
- `server.js`: Este archivo es el punto de entrada del servidor y configura el servidor Express y MongoDB.

## Cómo ejecutar el proyecto

1. **Clonar el repositorio**: Puedes hacerlo utilizando el comando:

   ```bash
   git clone https://github.com/juangonzalez2k/Trabajo-final.git.
   ```

3. **Instalar las dependencias del proyecto**: Debes ubicarte en la carpeta del proyecto y ejecutar el comando:

   ```bash
   npm install
   ```

5. **Verificar la cadena de conexión a la base de datos**: La conexión a la base de datos se maneja en el archivo `app/models/customer.model.js`. Asegúrate de que la cadena de conexión a MongoDB Atlas es correcta.

6. **Iniciar el servidor**: Desde la carpeta raíz del proyecto, ejecuta el comando:
   ```bash
   npm start
   ```
Si todo está configurado correctamente, el servidor debería estar escuchando las solicitudes.

## Prueba de los Endpoints

Para probar los endpoints, puedes utilizar Postman. Asegúrate de utilizar la URL correcta (por ejemplo, `http://localhost:3000/`) seguida del endpoint específico que deseas probar (por ejemplo, `/customers/` para obtener todos los clientes).

Recuerda cambiar el método HTTP según el endpoint que estés probando y proporcionar el cuerpo del mensaje en formato JSON para las solicitudes POST y PUT.
