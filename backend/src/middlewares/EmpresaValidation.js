const EmpresaModel = require('../model/EmpresaModel');
const { isPast } = require('date-fns');

const empresaValidation = async (req, res, next) => {
    const { user, codigo, tipo, razaoSocial, fantasia, pontos, dataHora } = req.body;

    if (!codigo)
        return res.status(400).json({ erro: 'Código é obrigatório' });
    else if (!razaoSocial)
        return res.status(400).json({ erro: 'Razão Social é obrigatório' });
    else if (!fantasia)
        return res.status(400).json({ erro: 'Nome fantasia é obrigatório' });
    else if (!pontos)
        return res.status(400).json({ erro: 'Pontos é obrigatório' });
    else if (!dataHora)
        return res.status(400).json({ erro: 'Data e Hora são obrigatórios' });
    else {
        let existe;

        if (req.params.id) {

            existe = await EmpresaModel.findOne({
                '_id': { '$ne': req.params.id },                           // Operador de negação not exist
                'user': { '$in': user }                                    // Já existe este dados no Mongodb
            });

        } else {

            if (!user)
                return res.status(400).json({ erro: 'Usuário é obrigatório' });
            else if (isPast(new Date(dataHora)))
                return res.status(400).json({ erro: 'Escolha uma Data e Hora futura' });

            existe = await EmpresaModel.findOne({
                'codigo': { '$eq': codigo },                // No mesmo código
                'user': { '$in': user }
            });

            if (existe) {
                return res.status(400).json({ erro: 'Já existe uma empresa com esse código' });
            }
        }

        next();
    }
};

module.exports = empresaValidation;
