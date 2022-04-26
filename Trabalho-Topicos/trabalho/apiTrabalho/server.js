console.log('Arquivo server.js executou com sucesso!');
// usar o express
const express = require('express');
const moment = require('moment');
const app = express();
app.use(express.json()); // para tratar json
// definir porta para a API de serviço
const port = process.env.PORT || 3000;
app.listen(port, () => {
 return console.log('API executando na porta ' + port);
});

// usar o momgo
require("./Banco/mongo");
// Usar as rotas
const routes = require('./routes/index');
app.use(routes);