const express = require('express')
const app = express()

const automoviles = [
    {
    "marca":"ford",
    "modelo":"1967",
    "ruedas": 4,
    "color": "Rojoo"
    },
    {
    "marca":"Chevrolet",
    "modelo":"2002",
    "ruedas": 3,
    "color": "blanco"
    }
];

app.get('/', (request, response) => {
    response.send('<h1>Hola Mundo g</h1>');
})

app.get('/api/notes', (request, response) => {
    response.json(JSON.stringify(automoviles));
})

app.get('/api/notes/:id', (request, response) => {  
    const id = request.params.id;
    console.log(id);
    let coincidencia = automoviles.find(auto => auto.marca == id)
    if(coincidencia){
        response.status(200);
        response.send(coincidencia.modelo);
    }else{
        response.status(404).end();
       // response.send('<h1>ERORR 404</h1>')
    }

})

//
app.post('/api/personas',express.json(), (request, response) => {
   try{ 
    const elBody = request.body
    console.log("La informacion recibida se detalla a continuacion: ");
    console.log("Nombre: " + elBody.nombre + " Apellido: " + elBody.apellido + " DNI: " + elBody.dni);
    //Validar Apellido no es cero
    if(elBody.apellido == '' || elBody.apellido.lenght == 0){
        response.send("Appellido no puede ser cero")
    }
    const numDNI = elBody.dni.toString()
    //Validar Numero DNI
    if(numDNI.length == 0 || numDNI == '' || numDNI.length >= 10){
        response.status(500)
        response.send("Error en DNI. El tamaño debe ser mayor a cero y no puede superar los 10 digitos.")
    }

    //Valida que Nombre sea string
    if(typeof(elBody.nombre) !== 'string'){
        response.status(500)
        response.send("El campo nombre debe ser una cadena de texto");
    }
    //Valida que Apellido sea String
    if(typeof(elBody.apellido) !== 'string'){
        response.status(500).send("El campo apellido debe ser una cadena de texto");
    }

    //Todo OK retorno el Json
    response.json(elBody);

    }catch(error){
       // console.log(error)
        response.send("Error al procesar JSON")
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    console.log(id);
    let coincidencias = automoviles.filter(auto => auto.marca != id)
    if(coincidencias){
        response.status(200);
        response.json(coincidencias);
    }else{
        response.status(404).end();
    }

})
app.use(function(err, req, res, next) {
    if(err.type == 'entity.parse.failed'){
        res.status(400)
        res.send("ERROR en la sintaxis JSON. Asegurese que el campo DNI no esta vacio y la sintaxis JSON es correcta");
    }
   
  });

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server running on port 3001');
});
