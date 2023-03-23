const fs = require('fs');

const crearArchivo = async(base=5,listar=false,h=10) => {

    try{ 
        
        let salida = '';
        let i=1;
        let nombreArchivo ='';
        for(1;i<(h+1);i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar) {
           
            console.log('=============');
            console.log(` Tabla de ${base} `);
            console.log('=============');
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return(`tabla-${base}.txt creado`);
    }
    catch(err){
        throw err;
    }       

    //fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //    if (err) throw err;
    //    console.log(`tabla-${base}.txt ha sido creado`)
    //})
}

module.exports ={
    crearArchivo: crearArchivo
}
