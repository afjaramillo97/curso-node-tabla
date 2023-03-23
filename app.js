//import 

//const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');


console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.base);

crearArchivo(argv.b,argv.l,argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err) );








/*
//console.log(process.argv);
//se toma el valor basado en la posición
const [ , ,arg3 = 'base=5']= process.argv;
const [ , base =5] = arg3.split('=');
//console.log(base);

//const base = 8;

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err) );
*/

