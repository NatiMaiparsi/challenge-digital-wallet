# Pasos para ejecutar el proyecto:
- Descargar las dependencias con npm i ubicandose tanto en la carpeta Api como en Client.

- Crear una base de datos, en este caso se caso se utilizo postgres

- Crear un archivo llamado ".env" con los siguientes datos en la carpeta Api:


    - DB_USER = (nombre del usuario de postgres)

    - DB_PASSWORD = (contraseña del usuario de postgres)

    - DB_PORT = (puerto de la base de datos, ej. 5432 esta asignado por defecto en postgres)

    - DB_HOST = (ej. localhost)

    - DB_NAME = (nombre de la base de datos)

    - PORT = 3001

    - API_KEY = (api key de https://etherscan.io/apis)
    

- Iniciar el backend con npm start en la carpeta Api

- Iniciar el frontend con npm start en la carpeta Client
