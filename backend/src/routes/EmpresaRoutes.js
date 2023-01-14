const express = require('express');
const router = express.Router();

const EmpresaController = require('../controller/EmpresaController');
const EmpresaValidation = require('../middlewares/EmpresaValidation');
const UserValidation = require('../middlewares/UserValidation');

// Incluir
router.post('/', EmpresaValidation, EmpresaController.create);
//Alterar
router.put('/:id', EmpresaValidation,  EmpresaController.update);
// Listar somente um empresa
router.get('/:id',EmpresaController.show);
// Deletar um registro
router.delete('/:id',EmpresaController.delete);
// Atualizar o campo "concluido"
//router.put('/:id/:concluido',EmpresaController.done);


// Listar todos
router.get('/filter/all/:user',  EmpresaController.all);
// Empresas atrasadas
router.get('/filter/late/:user', EmpresaController.late);
// Empresas do dia
router.get('/filter/today/:user', EmpresaController.today);
// Empresas da semana
router.get('/filter/week/:user', EmpresaController.week);
// Empresas do mês
router.get('/filter/month/:user', EmpresaController.month);
// Empresas do ano
router.get('/filter/year/:user', EmpresaController.year);

module.exports = router;