import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

//conexion a la base de datos
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb://localhost:27017/dbaura';
mongoose.connect(dbUrl, {useCreateIndex: true, useNewUrlParser: true})
    .then(mongoose => console.log('Conectando a la base de datos en el puerto 27017'))
    .catch(err => err);
const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    // console.log(path.join(__dirname,'public'));
    console.log('Server on port 3000')
});
