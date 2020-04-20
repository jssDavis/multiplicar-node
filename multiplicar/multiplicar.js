//requireds
const fs = require('fs'); //Ejemplo required: libreria propia de node
// const x = require('express'); //Ejemplo required: libreria hecha por alguien más
// const xxx = require('./xxxxx'); //Ejemplo required: libreria hecha por nosotros mismos
const colors = require('colors');

let listarTabla = (base, limite = 10) => {



    if (!Number(base)) {
        console.log('Base - No es un numero'.red);
        return;
    }

    if (!Number(limite)) {
        console.log('Base - No es un numero'.red);
        return;
    }

    console.log('========================='.blue);
    console.log(`Tabla del ${ base }`.blue);
    console.log('========================='.blue);



    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base*i }`);
    }
}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Base: No es un numero'.red);
            return;
        }

        if (!Number(limite)) {
            reject('Limite: No es un numero'.red);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base*i }\n`);
        }


        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {

                resolve(`tabla-${ base }.txt`);
            }

        });


    });

}


module.exports = {
    crearArchivo,
    listarTabla
}