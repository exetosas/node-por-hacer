const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        console.log('Se grabaron los cambios con exito');
    });
}

const getListado = () => {
    return cargarDB();
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const cargarDB = () => {
    try {
        return listadoPorHacer = require('../db/data.json');
    } catch (error) {
        return listadoPorHacer = [];
    }


};

const crear = (descripcion) => {

    listarPorHacer = cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((element) => {
        return element.descripcion === descripcion;
    });
    console.log('index:', index);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else
        return false;

}
module.exports = {
    getListado,
    crear,
    actualizar,
    borrar
}