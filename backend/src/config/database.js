// Configurando o acesso ao Banco de Dados //

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/empresasBD';

mongoose.connect(url,{useNewUrlParser: true});

module.exports = mongoose;





