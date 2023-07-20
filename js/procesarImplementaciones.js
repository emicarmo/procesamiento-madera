function procesarImplementaciones(implementaciones) {

    let output = {
        grupos: [],
        masEfectiva: {}
    },
    tipoPrevio = "",
    //Acumuladores
    energiaTotal = 0,
    presupuestoTotal = 0,
    tiempoTotal = 0;

    //Algoritmo
    for (let i = 0; i < implementaciones.length; i++) {
        let actual = implementaciones[i]
        if (tipoPrevio == "") {
            tipoPrevio = actual.tipoEnergia;
            energiaTotal = actual.energiaGenerada;
            presupuestoTotal = actual.presupuesto;
            tiempoTotal = actual.mesesEstimados;
        } else {
            if (actual.tipoEnergia == tipoPrevio) {
                energiaTotal += actual.energiaGenerada;
                presupuestoTotal += actual.presupuesto;
                tiempoTotal += actual.mesesEstimados;
            } else {
                output.grupos.push({
                    tipoEnergia: tipoPrevio,
                    efectividad: energiaTotal / (presupuestoTotal * tiempoTotal),
                });
                tipoPrevio = actual.tipoEnergia;
                energiaTotal = actual.energiaGenerada;
                presupuestoTotal = actual.presupuesto;
                tiempoTotal = actual.mesesEstimados
            }
        }
    }
    output.grupos.push({
        tipoEnergia: tipoPrevio,
        efectividad: energiaTotal / (presupuestoTotal * tiempoTotal),
    });

    output.masEfectiva = output.grupos.reduce((prev, actual)=>{
        if (actual > prev) {
            return actual
        } else {
            return prev
        }
    });

    return output
}