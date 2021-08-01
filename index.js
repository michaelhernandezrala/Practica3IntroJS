// Clases
const equipos = require('./utils/equipos');

// Utils
const {elegirEquipos, 
    emparejamientosOctavos, 
    emparejamientosCuartos, 
    emparejamientosSemis, 
    emparejamientosFinal
} = require('./utils/index');

console.log('\n=============================================== ');
console.log('============== COMIENZA LA EUROCOPA =========== ');
console.log('===============================================\n ');

console.log('=========== EQUIPOS PARTICIPANTES =============\n ');
const equiposParticipantes = elegirEquipos(equipos);
equiposParticipantes.forEach(equipo => {
    console.log(equipo)
});

console.log('\n=============================================== ');
console.log('==== COMIENZO DE LA FASE DE ELIMINATORIAS ===== ');
console.log('===============================================\n ');

console.log('===== OCTAVOS DE FINAL =====\n');
const partidosOctavos = emparejamientosOctavos(equiposParticipantes);
partidosOctavos.forEach(partido => {
    partido.jugarPartido();
});

const equiposClasificadosParaCuartos = [];

for (const partido of partidosOctavos) {
    const ganador = partido.getGanador();
    equiposClasificadosParaCuartos.push(ganador);
}

console.log('\n===== CUARTOS DE FINAL =====\n');
const partidosCuartos = emparejamientosCuartos(equiposClasificadosParaCuartos);
partidosCuartos.forEach(partido => {
    partido.jugarPartido();
});

const equiposClasificadosParaSemis = [];

for (const partido of partidosCuartos) {
    const ganador = partido.getGanador();
    equiposClasificadosParaSemis.push(ganador);
};

console.log('\n===== SEMIFINALES =====\n');
const partidosSemis = emparejamientosSemis(equiposClasificadosParaSemis);

partidosSemis.forEach(partido => {
    partido.jugarPartido();
});

const equiposClasificadosParaFinal = [];

for (const partido of partidosSemis) {
    const ganador = partido.getGanador();
    equiposClasificadosParaFinal.push(ganador);
};

const equiposNoClasificadosParaFinal = [];
for (const partido of partidosSemis) {
    const perdedor = partido.getPerdedor();
    equiposNoClasificadosParaFinal.push(perdedor);
};

console.log('\n===== TERCER Y CUARTO PUESTO =====\n ');
const partidoTercerYCuarto = emparejamientosFinal(equiposNoClasificadosParaFinal);
partidoTercerYCuarto.forEach(partido => {
    partido.jugarPartido();
})

console.log('\n===== FINAL =====\n ');
const partidoFinal = emparejamientosFinal(equiposClasificadosParaFinal);
partidoFinal.forEach(partido => {
    partido.jugarPartido();
})

console.log('\n')