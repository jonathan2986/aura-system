import jwt from 'jsonwebtoken';

import models from '../models';

async function checkToken(token) {
    let __id = null;
    try{
        const { _id } = await jwt.decode(token);
        __id = _id;
    }catch (e) {
        return false;
    }

}
export default {
    // decode:async (token) =>{
    //     try{
    //         const {_id} = await jwt.verify(token, 'clavesecretaparagenerartoken');
    //     }catch (e) {
    //
    //     }
    // }
}