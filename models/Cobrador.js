import mongoose,{ Schema } from 'mongoose';

const cobradoresSchema = new Schema({
    nombre:{
        type:String, maxlength:50,
        required:true,
        trim:true
    },
    apellido: {type:String,maxlength:50, required:true},
    direccion: {type:String,maxlength:100, required:true},
    telefono:{type:String, maxlength: 60},
    createdAt:{type:Date,default:Date.now}
});

const Cobrador = mongoose.model('cobradores',cobradoresSchema);

export default Cobrador;