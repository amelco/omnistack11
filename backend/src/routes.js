const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send("Olá, Mundo!");
});

routes.get('/user/:id', (request, response) => {
    
    const params = request.params;
    console.log(params);

    return response.json({
        texto: "Olá, mundo!",
        evento: "Semana Omnistack 11.0",
        aluno: "Andre Herman"
    });
});

routes.post('/user', (req, res) => {
    
    const params = req.body;
    console.log(params);

    return res.send("Usuário adicionado!")
});

module.exports = routes;