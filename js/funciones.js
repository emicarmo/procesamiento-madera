// Funcion que obtiene los datos del formulario para insertar en una tabla

function datosFormulario() {
    let formData = new FormData(FORM);

    let tabla_energia = document.getElementById('tabla-energia');
    let agregar_fila = tabla_energia.insertRow(-1);

    let agregar_celda = agregar_fila.insertCell(0);
    agregar_celda.textContent = formData.get("tipo-energia");
    
    agregar_celda = agregar_fila.insertCell(1);
    agregar_celda.textContent = formData.get("descripcion");
    
    agregar_celda = agregar_fila.insertCell(2);
    agregar_celda.textContent = formData.get("energia-generada");
    
    agregar_celda = agregar_fila.insertCell(3);
    agregar_celda.textContent = formData.get("presupuesto");
    
    agregar_celda = agregar_fila.insertCell(4);
    agregar_celda.textContent = formData.get("tiempo-estimado");
}

// Funcion que limpia el formulario una ves ingresado los datos

function limpiarFormulario() {
    FORM.reset();
}

// Funcion que guarda los datos de cada energia

function datosEnergia() {
    // Los datos de cada energia 
    
    datos_eolica = {
        tipo_energia: DATOS_TABLA[0].innerHTML,
        energia_generada: Number(DATOS_TABLA[2].innerHTML) + Number(DATOS_TABLA[7].innerHTML),
        presupuesto: Number(DATOS_TABLA[3].innerHTML) + Number(DATOS_TABLA[8].innerHTML),
        tiempo_estimado: Number(DATOS_TABLA[4].innerHTML) + Number(DATOS_TABLA[9].innerHTML)
    }
    
    datos_hidroelectrica = {
        tipo_energia: DATOS_TABLA[10].innerHTML,
        energia_generada: Number(DATOS_TABLA[12].innerHTML) + Number(DATOS_TABLA[17].innerHTML),
        presupuesto: Number(DATOS_TABLA[13].innerHTML) + Number(DATOS_TABLA[18].innerHTML),
        tiempo_estimado: Number(DATOS_TABLA[14].innerHTML) + Number(DATOS_TABLA[19].innerHTML)
    }
    
    datos_solar = {
        tipo_energia: DATOS_TABLA[20].innerHTML,
        energia_generada: Number(DATOS_TABLA[22].innerHTML) + Number(DATOS_TABLA[27].innerHTML),
        presupuesto: Number(DATOS_TABLA[23].innerHTML) + Number(DATOS_TABLA[28].innerHTML),
        tiempo_estimado: Number(DATOS_TABLA[24].innerHTML) + Number(DATOS_TABLA[29].innerHTML)
    } 
}
// Funcion que procesa la efectividad de cada energia y la recomendada

function procesarResultados() {
    // Llamaos a la funcion de los datos para sacar la efectividad
    
    datosEnergia() 
    
    let efectividad_eolica = datos_eolica.energia_generada / (datos_eolica.presupuesto * datos_eolica.tiempo_estimado)
    
    let efectividad_hidroelectrica = datos_hidroelectrica.energia_generada / (datos_hidroelectrica.presupuesto * datos_hidroelectrica.tiempo_estimado)
    
    let efectividad_solar = datos_solar.energia_generada / (datos_solar.presupuesto * datos_solar.tiempo_estimado)

    // Los resultados de las efectividades copiados al HTML

    PARRAFO_EOLICA.innerText = `Tipo de energia: ${datos_eolica.tipo_energia} | Efectividad: ${efectividad_eolica}`;
    
    PARRAFO_HIDROELECTRICA.innerText = `Tipo de energia: ${datos_hidroelectrica.tipo_energia} | Efectividad: ${efectividad_hidroelectrica}`;
    
    PARRAFO_SOLAR.innerText = `Tipo de energia: ${datos_solar.tipo_energia} | Efectividad: ${efectividad_solar}`;

    // Obtenemos la energia mas recomendada mediante if else

    if ((efectividad_eolica > efectividad_hidroelectrica) && (efectividad_eolica > efectividad_solar)){
        PARRAFO_RECOMENDADA.innerText = `La energia Eolica es la mas recomendada, con una efectividad de ${efectividad_eolica}`
    } else if ((efectividad_hidroelectrica > efectividad_eolica) && (efectividad_hidroelectrica > efectividad_solar)){
        PARRAFO_RECOMENDADA.innerText = `La energia Hidroelectrica es la mas recomendada, con una efectividad de ${efectividad_hidroelectrica}`
    } else{
        PARRAFO_RECOMENDADA.innerText = `La energia Solar es la mas recomendada, con una efectividad de ${efectividad_solar}`
    }
}