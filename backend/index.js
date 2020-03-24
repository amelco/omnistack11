const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.send("Olá, Mundo!");
});

app.get('/user/:id', (request, response) => {
    
    const params = request.params;
    console.log(params);

    return response.json({
        texto: "Olá, mundo!",
        evento: "Semana Omnistack 11.0",
        aluno: "Andre Herman"
    });
});

app.post('/user', (req, res) => {
    
    const params = req.body;
    console.log(params);

    return res.send("Usuário adicionado!")
});

app.listen(3333);