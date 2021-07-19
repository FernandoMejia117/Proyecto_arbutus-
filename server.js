const app = require('./app/app');
const confi= require('./app/config');
const morgan=require('morgan');
const conexion = require('./app/conexion');

conexion.connect();
app.use(morgan('dev'))

app.listen(confi.PORT,function(erro){
    if(erro) return console.log(erro);
    
    console.log(`Servidor en el puerto: ${confi.PORT}`);
});