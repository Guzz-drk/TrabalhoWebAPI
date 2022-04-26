const { Router } = require("express");

const routes = Router();
// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({ origin: '*' }));
//routes.use(cors({origin: 'http://localhost:3001'}));
// const servicosRout = require("./servicosRoute");
const agendamentoRoutes = require("./agendamentoRoutes");
// routes.use("/api", servicosRout);
routes.use("/api", agendamentoRoutes);
module.exports = routes;