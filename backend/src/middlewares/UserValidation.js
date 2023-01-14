const userValidation = (req,res,next) => {
    if (!req.body.user) 
        return res.status(400).json({erro: 'Usuário é obrigatório'});
    else 
        next();
};

module.exports = userValidation;
