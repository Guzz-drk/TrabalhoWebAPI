const mongoose = require("mongoose");
const uri = "mongodb://admin:admin@localhost:27018/trabalho?authSource=trabalho";
mongoose.connect(uri, { } );