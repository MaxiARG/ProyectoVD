# ProyectoVD
Proyecto Virtual Dreams

Para ejecutar el punto 5, el proyecto utilizó Express. La extension nodemon se utilizó solo en el ambiente Dev por lo que 
no deberia ser necesario tenerlo instalado. Nodemon sirve para reiniciar el servidor cada vez que se detecta un cambio, una suerte de HotReload.

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
