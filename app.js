const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //Ejemplo required: libreria hecha por nosotros mismos
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(resp => {
            console.log(colors.green(`El archivo ${ resp }`), 'ha sido creado'.blue);
        }).catch(e => {
            console.log(e);
        });
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);


// let argv2 = process.arg






// let parametro = argv[2]
// let base = parametro.split('=')[1];

// crearArchivo(base).then(resp => {
//     console.log(`El archivo ${ resp } ha sido creado`);
// }).catch(e => {
//     console.log(e);
// });