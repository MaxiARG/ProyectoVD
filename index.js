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
    response.send('<h1>Hola Mundo gg</h1>');
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


app.get('/api/personas',express.json(), (request, response) => {
    const elBody = request.body
    console.log("ASD");
    console.log(elBody);
    console.log(JSON.stringify(elBody));
    console.log("api rest");
    response.json(elBody);
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


const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server running on port 3001');
});
