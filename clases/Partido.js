class Partido {

    constructor(id, local, visitante) {
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.golesLocal = 0;
        this.golesVisitante = 0;
        this.ganador = '';
        this.perdedor = ''
    }

    getGanador() {
        return this.ganador;
    }

    getPerdedor() {
        return this.perdedor;
    }

    setGanador(ganador) {
        this.ganador = ganador;
    }

    setPerdedor(perdedor) {
        this.perdedor = perdedor;
    }

    getLocal() {
        return this.local;
    }

    getVisitante() {
        return this.visitante;
    }

    getGolesLocal() {
        return this.golesLocal;
    }

    getGolesVisitante() {
        return this.golesVisitante;
    }


    jugarPartido() {
        this.golesLocal = Math.round(Math.random() * 10);
        this.golesVisitante = Math.round(Math.random() * 10);

        while (this.golesLocal === this.golesVisitante) {
            this.golesLocal = Math.round(Math.random() * 10);
            this.golesVisitante = Math.round(Math.random() * 10);
        }

        if (this.golesLocal > this.golesVisitante) {
            this.setGanador(this.local);
            this.setPerdedor(this.visitante);
        } else {
            this.setGanador(this.visitante);
            this.setPerdedor(this.local);
        }

        console.log(`${this.local.getName()} ${this.golesLocal} - ${this.visitante.getName()} ${this.golesVisitante}`)
    }
}

module.exports = Partido;