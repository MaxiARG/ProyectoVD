const promise = require('request-promise')
const URL = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';
const PORT = 3001;

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
.then( body => console.log('La repuesta del servidor fue: ', body))
.catch(err => console.log(err));

