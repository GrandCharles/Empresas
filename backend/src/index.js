const express = require('express');
const cors = require('cors'); 
const server = express();

server.use(cors());
server.use(express.json());

const EmpresaRoutes = require('./routes/EmpresaRoutes');
server.use('/empresa',EmpresaRoutes);

server.listen(3333,()=>{
    console.log('API EMPRESAS - Rodando na Porta 3333');
})
