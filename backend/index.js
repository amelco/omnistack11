const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.json({
        texto: "Olá, mundo!",
        evento: "Semana omnistack 11.0",
        aluno: "Andre Herman"
    });
});

app.listen(3333);