// Llamamos a las etiquetas HTML

const FORM = document.getElementById('formulario');
const DATOS_TABLA = document.getElementsByTagName("td")
const BTN_PROCESAR_RESULTADOS = document.getElementById("btn-procesar-resultados");
const PARRAFO_EOLICA = document.getElementById("efectividad-eolica")
const PARRAFO_HIDROELECTRICA = document.getElementById("efectividad-hidroelectrica")
const PARRAFO_SOLAR = document.getElementById("efectividad-solar")
const PARRAFO_RECOMENDADA = document.getElementById("energia-recomendada")

// Llamamos al evento submit del formulario para traer sus datos a una tabla

FORM.addEventListener('submit', (e)=>{
    e.preventDefault();
    datosFormulario();
    limpiarFormulario();
})

BTN_PROCESAR_RESULTADOS.addEventListener('click', (e)=>{
    procesarResultados()
})