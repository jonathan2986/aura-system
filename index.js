import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from "./routes/index";



mongoose.Promise= global.Promise;
mongoose.connect('mongodb+srv://jonathan1986:adames123@cluster0-4znjg.mongodb.net/auradb?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(mongoose => console.log('Conectada a la base de datos'));
 .catch(err => console.log('Error no se pudo conectar'));


const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',router);

app.set('port', process.env.PORT || 3000);

app.get('/hola', function (req, res) {
    res.send('Hola klk');
});

app.listen(app.get('port'), () => {
    // console.log(path.join(__dirname,'public'));
    console.log('Server on port 3000')
});
