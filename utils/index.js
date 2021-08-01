const Partido = require('../clases/Partido');
const Equipo = require('../clases/Equipo');

// Función que va a elegir de manera aleatroía 16 equipos de los 32 equipos iniciales
const elegirEquipos = (equiposEntrada) => {
    const equiposClasificados = [];
    for (let i = 0; i < 16; i++) {
        let equipo = Math.round(Math.random() * (equiposEntrada.length - 1));

        while (
            equipo === i ||
            equiposClasificados.includes(equiposEntrada[equipo])
        ) {
            equipo = Math.round(Math.random() * (equiposEntrada.length - 1));
        }

        equiposClasificados.push(equiposEntrada[equipo]);
    }

    return equiposClasificados;
};

const emparejamientosOctavos = (equiposClasificados) => {
    let aux = [...equiposClasificados];
    const partidos = [];
    let numeroPartido = 1;
    for (let i = 0; i < equiposClasificados.length; i++) {
        if (aux[i] != false) {
            let equipoRival = Math.round(Math.random() * (equiposClasificados.length - 1));
            while (equipoRival === i || aux[equipoRival] === false) {
                equipoRival = Math.round(Math.random() * (equiposClasificados.length - 1));
            }
            const partido = new Partido(numeroPartido++, new Equipo(equiposClasificados[i]), new Equipo(equiposClasificados[equipoRival]));
            aux[i] = false;
            aux[equipoRival] = false;

            partidos.push(partido);
        }
    }

    return partidos;
}

const emparejamientosCuartos = (equiposClasificadosParaCuartos) => {
    let equipoRival = equiposClasificadosParaCuartos.length - 1;
    const partidos = [];
    let numeroPartido = 1;

    for (let j = 0; j < equiposClasificadosParaCuartos.length / 2; j++) {
        const partido = new Partido(numeroPartido++, new Equipo(equiposClasificadosParaCuartos[j].getName()), new Equipo(equiposClasificadosParaCuartos[equipoRival].getName()));
        equipoRival--;

        partidos.push(partido);
    }

    return partidos;
}

const emparejamientosSemis = (equiposClasificadosParaSemis) => {
    let equipoRival = equiposClasificadosParaSemis.length - 1;
    const partidos = [];
    let numeroPartido = 1;

    for (let j = 0; j < equiposClasificadosParaSemis.length / 2; j++) {
        let partido = null;
        if (j === 0) {
            partido = new Partido(numeroPartido++, new Equipo(equiposClasificadosParaSemis[j].getName()), new Equipo(equiposClasificadosParaSemis[2].getName()));
        } else {
            partido = new Partido(numeroPartido++, new Equipo(equiposClasificadosParaSemis[3].getName()), new Equipo(equiposClasificadosParaSemis[j].getName()));

        }
        partidos.push(partido);
    }

    return partidos;
}

const emparejamientosFinal = (equipos) => {
    const partidos = [];
    for (let j = 0; j < equipos.length / 2; j++) {
        const partido = new Partido('', new Equipo(equipos[j].getName()), new Equipo(equipos[1].getName()));

        partidos.push(partido);
    }
    return partidos;
}

module.exports = { 
    elegirEquipos, 
    emparejamientosOctavos, 
    emparejamientosCuartos, 
    emparejamientosSemis,
    emparejamientosFinal };