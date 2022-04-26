const mongoose = require("mongoose");
const ServicoSchema = new mongoose.Schema({
    tipoServico: { type: String, required: true, unique: true },
    observacao: String,
    valor: Number,
});
module.exports = mongoose.model("Servico", ServicoSchema);