const Servico = require('../model/servicoSchema');
module.exports = {
    listar: async (req, res) => {
        Servico.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },
    incluir: async (req, res) => {
        console.log(req.body.valor);
        let obj = new Servico(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    alterar: async (req, res) => {
        let obj = new Servico(req.body);
        Servico.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    excluir: async (req, res) => {
        Servico.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },
};