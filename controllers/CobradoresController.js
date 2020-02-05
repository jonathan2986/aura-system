import models from '../models';

export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.Cobrador.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req, res, next) =>{
        try {
            const reg = await models.Cobrador.findOne({_id: req.query._id});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        }catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req, res, next) =>{
        try {
            const reg = await models.Cobrador.find({});
            res.status(200).json(reg);
        }catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req, res, next) =>{
        try {
            const reg = await models.Cobrador.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre, apellido:req.body.apellido, direccion:req.body.direccion, telefono:req.body.telefono});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    remove:async (req, res, next) =>{
        try {
            const reg = await models.Cobrador.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}