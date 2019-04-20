const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let element of listado) {
            console.log('========================'.green);
            console.log(element.descripcion);
            console.log('Estado:', element.completado);
            console.log('========================'.green)
        };

        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualido = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualido) {
            console.log('Se actualizo correctamente');
        } else {
            console.log('Error');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}