const { response } = require('express');
const EmpresaModel = require('../model/EmpresaModel');

const {
    startOfDay, 
    endOfDay, 
    startOfWeek, 
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear
} = require('date-fns');

const dataSys =  new Date();

class EmpresaController {

    async create(req, res) {
        const empresaModel = new EmpresaModel(req.body);

        await empresaModel.save()
                         .then(response => {
                              return res.status(200).json(response)})   // Deu certo
                         .catch(error => {
                                return res.status(500).json(error)})        // Deu errado             
    }
    
    // {new:true} retorna os dados atualizados
    async update(req, res) {
        await EmpresaModel.findByIdAndUpdate({ '_id': req.params.id }, 
                                            req.body, 
                                            { new: true })  
            .then(response => {
                return res.status(200).json(response);
            })       // Deu certo
            .catch(error => {
                return res.status(500).json(error);
            })            // Deu errado             
    }

    // Lista todas as empresas  $in pertence
    async all(req, res) {
        await EmpresaModel.find({ user: { '$in': req.params.user } })
            .sort('razaoSocial')
            .then(response => {return res.status(200).json(response);})       // Deu certo
            .catch(error => {return res.status(500).json(error);})            // Deu errado             
    }

    async show(req,res){
        await EmpresaModel.findById(req.params.id)
        .then(response => {
            if (response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Empresa não encontrada'});}) 
        .catch(error => {return res.status(500).json(error);})            // Deu errado             
    }

    async delete(req,res) {
        await EmpresaModel.deleteOne({'_id' : req.params.id})
        .then(response => {
            return res.status(200).json(response);})
        .catch(error => {return res.status(500).json(error);})            // Deu errado             
    }

    // Atualizar "Concluído"
    async done(req,res) {
        await EmpresaModel.findByIdAndUpdate({'_id': req.params.id},
                                            {'concluido': req.params.concluido},
                                            {new: true})
        .then(response => {            
            return res.status(200).json(response);})
        .catch(error => {
            return res.status(500).json(error);})
    }

    // Empresas atrasadas - $lte menor ou igual)
    async late(req,res) {
        await EmpresaModel.find({
                                 'user' : {'$in': req.params.user},
                                 'dataHora': {'$lte' : dataSys}
                               })
                         .sort('razaoSocial')
                         .then(response => {            
                            return res.status(200).json(response);})
                         .catch(error => {
                            return res.status(500).json(error);})
    }

    // Empresas do dia - $gte maior ou igual / $lte menor ou igual)
    async today(req,res) {
        await EmpresaModel.find({
                                'user' : {'$in': req.params.user},
                                'dataHora': {'$gte' : startOfDay(dataSys), '$lte' : endOfDay(dataSys)}
                              })
                         .sort('razaoSocial')
                         .then(response => {            
                            return res.status(200).json(response);})
                         .catch(error => {
                            return res.status(500).json(error);})
    }

    // Empresas da semana - $gte maior ou igual semana / $lte menor ou igual semana)
    async week(req,res) {
        await EmpresaModel.find({
                                'user' : {'$in': req.params.user},
                                'dataHora': {'$gte' : startOfWeek(dataSys), '$lte' : endOfWeek(dataSys)}
                                })
                            .sort('razaoSocial')
                            .then(response => {            
                            return res.status(200).json(response);})
                            .catch(error => {
                            return res.status(500).json(error);})
    }

    // Empresas do meês - $gte maior ou igual semana / $lte menor ou igual semana)
    async month(req,res) {
        await EmpresaModel.find({
                                'user' : {'$in': req.params.user},
                                'dataHora': {'$gte' : startOfMonth(dataSys), '$lte' : endOfMonth(dataSys)}
                                })
                            .sort('razaoSocial')
                            .then(response => {            
                            return res.status(200).json(response);})
                            .catch(error => {
                            return res.status(500).json(error);})
    }

        // Empresas do ano - $gte maior ou igual semana / $lte menor ou igual semana)
        async year(req,res) {
            await EmpresaModel.find({
                                    'user' : {'$in': req.params.user},
                                    'dataHora': {'$gte' : startOfYear(dataSys), '$lte' : endOfYear(dataSys)}
                                    })
                                .sort('razaoSocial')
                                .then(response => {            
                                return res.status(200).json(response);})
                                .catch(error => {
                                return res.status(500).json(error);})
        }
    
}

module.exports = new EmpresaController();
