# ProyectoVD
Proyecto Virtual Dreams

Para el ejercicio 5 se usaron las siguientes dependencias:
Express
Ajv
Promise
Request-Promise
Nodemon (solo en modo dev, a modo de hot-reload)

Comandos para iniciar el proyecto:
npm index.js

Comando para iniciar el proyecto usando nodemon:
npm run dev

1) en Postman escribir un GET con la URL http://localhost:3001/api/personas
2) en el Body, seleccionar RAW y escribir el JSON de ejemplo
{
    "nombre": "maxi",
    "apellido": "ramos",
    "dni": "35068917"
}
3) en el Header agregar el atributo Content-Type application/json

4) Con el servidor ya iniciado, presionar el boton Send, en Postman.
Postman recibira como respuesta el mismo JSON y en la consola del servidor se veran los datos JSON recibidos.
