const express = require('express');
const routes = express.Router();
const controle = require('../controller/servicoController');
routes.route('/servicos').get(controle.listar);
routes.route('/servicos').post(controle.incluir);
routes.route('/servicos').put(controle.alterar);
routes.route('/servicos/:id').delete(controle.excluir);

module.exports = routes;