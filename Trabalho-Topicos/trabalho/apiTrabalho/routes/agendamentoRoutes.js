const express = require("express");
const routes = express.Router();
const controle = require("../controller/agendamentoController");
routes.route('/agendamento').get(controle.listar);
routes.route('/agendamento').post(controle.incluir);
routes.route('/agendamento').put(controle.alterar);
routes.route('/agendamento/:id').delete(controle.excluir);
routes.route('/agendamento/filtro/:filtro').get(controle.filtrar);
routes.route('/agendamento/filtroDate/:data').get(controle.filtrar2);

module.exports = routes;