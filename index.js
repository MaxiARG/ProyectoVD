const express = require('express')
const app = express()

const Ajv = require("ajv")
const ajv = new Ajv() 

const promise = require('request-promise')
const URL = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';
//http://localhost:3001/api/personas


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
app.post('/api/personas',express.json(), (request, response) => {
    const elBody = request.body
    const validate = ajv.compile(schema)
    const IsValid = validate(elBody)

    if (!IsValid) {
        response.status(500)
        response.send(validate.errors);
    }else{

        const opciones = {
            uri: URL,
            method: 'GET',
            body: persona,
            json: true
        }

        promise(opciones)
        .then( body => console.log('El servidor responde: ', body) )
        .catch(err => console.log(err));
        
        response.status(201)
        response.json(elBody);
    }


});

app.use(function(err, req, res, next) {
    if(err.type == 'entity.parse.failed'){
        res.status(400)
        res.send("ERROR en la sintaxis JSON. Asegurese que el campo DNI no esta vacio y la sintaxis JSON es correcta");
    }
   
  });


app.listen(PORT, () => {
    console.log('Servidor funcionando en el puerto 3001');
});
