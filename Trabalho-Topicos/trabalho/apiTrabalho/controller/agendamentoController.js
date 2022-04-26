const Agendamento = require("../model/agendamentoSchema");
const Moment = require("moment");
module.exports = {
    listar: async (req, res) => {
        Agendamento.find((err, objetos) => {
            err ? res.status(400).send(err) : res.status(200).json(objetos);
        }).sort({ cliente: 1 }); // -1 decrescente 1 crescente
    },
    incluir: async (req, res) => {

        dataInicio = new Date(req.body.dataHoraInicio);
        dataFinal = new Date(req.body.dataHoraFinal);

        if (dataInicio > dataFinal) {
            res.status(400).send('Houveram incompatibilidades nos horários');
        }
        let obj = new Agendamento(req.body);
        obj.save((err, obj) => {
            err ? res.status(400).send(err) : res.status(200).json(obj);
        });
    },
    alterar: async (req, res) => {
        let obj = new Agendamento(req.body);
        Agendamento.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    excluir: async (req, res) => {
        Agendamento.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },
    filtrar: async (req, res) => {
        console.log(req.params.filtro);
        Agendamento.find({ cliente: req.params.filtro }).then((result) => {
            res.json(result)
        }, (err) => {
            res.status(500).json({ error: err })
        })
    }, 
    filtrar2: async (req, res) => {
        console.log(req.params.filtro);
        var date = Moment(req.params.data);
        var dataInicial = date.format("YYYY-MM-DD 00:00:00");
        var dataFinal = date.format("YYYY-MM-DD 23:59:59");
        console.log(dataInicial);
        console.log(dataFinal);
        Agendamento.find({ dataHoraInicio: {$gte:dataInicial, $lt:dataFinal} }).then((result) => {
            res.json(result)
        }, (err) => {
            res.status(500).json({ error: err })
        })
    }, 

};