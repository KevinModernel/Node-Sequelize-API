# Node-Sequelize-API
Implementation of Node + PostgreSQL CRUD API

API para practicar implementación de base de datos SQL (One-to-many relation). Utilizando Node y Express para montar el servidor, y Sequelize como ORM para administrar DB PostgreSQL.

La aplicación crea proyectos, donde cada uno puede poseer varias tareas, aplicando la relación uno a muchos. Los proyectos y tareas se almacenan en una base de datos relacional, con posiblidad de ser consultados mediante HTTP Requests (GET). También se pueden crear (POST), actualizar (PUT) o borrar (DELETE). 
