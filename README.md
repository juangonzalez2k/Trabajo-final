# API REST con MongoDB - Microservicio Customer

## Objetivo de la Tarea

El objetivo principal de esta tarea es implementar un microservicio que gestione operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la colección "Customer" (Cliente) usando MongoDB como base de datos. El resultado será una API REST funcional que permita a los clientes interactuar con la plataforma y gestionar datos de los clientes en la base de datos.

## Endpoints Implementados

La API proporcionará los siguientes puntos finales:

- **GET /customers/**: Este endpoint devuelve todos los clientes presentes en la base de datos.
- **POST /customer/**: Este endpoint permite la creación de un nuevo cliente en la base de datos.
- **GET /customer/:id**: Este endpoint permite obtener los detalles de un cliente específico usando su ID.
- **PUT /customer/:id**: Este endpoint permite actualizar los detalles de un cliente específico usando su ID.
- **DELETE /customer/:id**: Este endpoint permite eliminar un cliente específico de la base de datos usando su ID.

## Cómo ejecutar el proyecto

1. **Requisitos previos**: Asegúrate de tener instalados en tu sistema Node.js, npm y MongoDB. Si estás usando un servicio en la nube como MongoDB Atlas, asegúrate de tener la cadena de conexión.

2. **Clonar el proyecto**: Clona el repositorio a tu máquina local utilizando el comando git clone.

3. **Instalar las dependencias**: Navega hasta el directorio del proyecto en tu terminal y ejecuta el comando `npm install` para instalar todas las dependencias necesarias para el proyecto.

4. **Configurar el entorno**: Crea un archivo `.env` en el directorio raíz del proyecto. Este archivo debería contener la cadena de conexión a tu base de datos MongoDB. Aquí hay un ejemplo de cómo podría verse:


