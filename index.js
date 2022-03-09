const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })) //Para extraer datos del formulario

const Ajv = require("ajv")
const ajv = new Ajv() 

const promise = require('request-promise')
const URL = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';

const PORT = 3001;

//Usado para validar el formato y estructura del JSON
const schema = {
    type: "object",
    properties: {
      nombre: {type: "string"},
      apellido: {type: "string", nullable: false, maxLength: 15, minLength: 1},
      dni:{type: "integer", maximum: 9999999999, minimum: 1000000}
    },
    required: ["apellido", "dni"],
    additionalProperties: false
  }
const persona = {
    "nombre": "maxi",
    "apellido":  "ramos",
    "dni": 11111111,
}
// Resolucion Ejercicio 4
app.get('/ejercicio4', (request, response) => {
    response.setHeader('Content-Type', 'application/json');

    let cuerpo = {
        nombre:"maxi",
        apellido:"ramos",
        dni:35068917
    }
    
    let opciones = {
        url: URL,
        method: 'GET',
        body: cuerpo,
        json:true
    }

    promise(opciones)
    .then( body => {
         console.log('La repuesta del servidor fue: ', body); //Respuesta por consola
         response.json(body); //Respuesta al cliente
        })
    .catch(err => console.log(err));
})

//Ruta home o index. Ejecutar esta ruta llama al formulario CrearPersona.html
app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.sendFile(__dirname + "/crearPersonas.html");
})

//Resolucion Ejercicio 5. Solo llamado mediante Postman con un payload Json en el body
app.post('/api/personas',express.json(), (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    const elBody = request.body
    const validate = ajv.compile(schema)
    const IsValid = validate(elBody)

    if (!IsValid) {
        response.status(500)
        response.json(validate.errors);
    }else{

        let opciones = {
            uri: URL,
            method: 'POST', //Si lo cambio por un GET me hace un retrieve de la base de datos
            body: elBody,
            json: true,
        }

        promise(opciones)
        .then( body => {
            response.status(201);
            response.json(body);
            } )
        .catch(err => console.log(err));
    }


});


//Ejercicio 6. Esta ruta es llamada al poner la URL localhost:3001. No hace falta llamarla explicitamente
//El servicio es llamado mediante la vista CrearPersonas
app.post('/api/formulario', (request, response) => {
    
    response.setHeader('Content-Type', 'application/json');
    let datos = {
        "nombre":   request.body.nombre,
        "apellido": request.body.apellido,
        "dni":      Number.parseInt(request.body.dni)
    }
    //Valido JSON
    const validate = ajv.compile(schema)
    const IsValid = validate(datos)

    console.log("/api/formulario recibió: ")
    console.log(JSON.stringify(datos))

    if (!IsValid) {
        response.status(500)
        response.json(validate.errors);
    }else{

        let opciones = {
            uri: URL,
            method: 'POST', //Si lo cambio por un GET me hace un retrieve de la base de datos
            body: datos,
            json: true,
        }
        promise(opciones)
            .then( body => {
                console.log('El servidor responde: ', body);
                response.status(201);
                response.json(body);
                } )
            .catch(err => console.log(err));
    }//fin del else
});

app.use(function(err, req, res, next) {
    if(err.type == 'entity.parse.failed'){
        res.status(400)
        res.setHeader('Content-Type', 'application/json');
        res.json({"mensaje":"ERROR en la sintaxis JSON. Asegurese que el campo DNI no esta vacio y la sintaxis JSON es correcta"});
    }
   
  });


app.listen(PORT, () => {
    console.log('Servidor funcionando en el puerto 3001');
});
