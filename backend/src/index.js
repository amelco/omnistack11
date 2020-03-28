const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());            // permite que qualquer frontend acesse esse backend (leia sobre: parametro origin)
app.use(express.json());
app.use(routes);
app.listen(3333);