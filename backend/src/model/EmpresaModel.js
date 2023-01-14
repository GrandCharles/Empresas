
const { Schema } = require('mongoose');
const mongoose = require('../config/database');
const schema = mongoose.Schema;

const empresaSchema = new schema({
    user: { type: String, required: true },
    codigo: { type: String, required: true },
    tipo: { type: String, default: 'J'},
    razaoSocial: { type: String, required: true },
    fantasia: { type: String, required: true },
    dataHora: { type: Date, required: true },
    pontos:  { type: Number, required: true,default: 1 },
    ativa: { type: Boolean, default: true },
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('TabEmpresa', empresaSchema);

