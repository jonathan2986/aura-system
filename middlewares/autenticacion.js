import jwt from 'jsonwebtoken';
import secret from '../services/secret';

// verificar token

let verificaToken = (req, res, next) =>{
    let token = req.get('token');
    console.log(token);

    if (!token){
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        })
    }

        let tokenValidado =  jwt.decode(token, secret);
        if (tokenValidado){
            next();
        }else{
            return res.status(401).json({
                auth: false,
                message: 'Token invalido'
            })
        }



};

module.exports = {
    verificaToken
};