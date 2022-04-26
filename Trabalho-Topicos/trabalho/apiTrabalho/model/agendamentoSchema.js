const mongoose = require("mongoose");
const AgendamentoSchema = new mongoose.Schema({
    dataHoraInicio: { type: Date, required: true, unique: true },
    dataHoraFinal: { type: Date, required: true, unique: true },
    cliente: {type:String, required:true, unique:false},
    servico: {type: String, required: true, unique: false},
    valorFinal: Number,
});
module.exports = mongoose.model("Agendamento", AgendamentoSchema);