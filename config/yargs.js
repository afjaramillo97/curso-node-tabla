const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'

    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        demandOption: false,
        default:false,
        describe:'Permite habilitar la impresión en consola de la tabla generada'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption: false,
        default:10,
        describe:'Permite definir el limite de productos de la tabla generada'
    })
    .check ((argv, options) =>{
        if(isNaN( argv.b) ){
            throw 'La base debe ser un número'
        }
        return true;
    })
    .check ((argv, options) =>{
        if(isNaN( argv.hasta) ){
            throw 'hasta debe ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;