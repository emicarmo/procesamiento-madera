// Controles de la pagina

const
    BTNAGREGAR = $("#btn-agregar"),
    BTNPROCESAR = $("#btn-procesar"),
    TXT_TIPOENERGIA = $("#txtTipoEnergia"),
    TXTDESCRIPCION = $("#txtDescripcion"),
    TXTENERGIAGENERADA = $("#txtEnergiaGenerada"),
    TXTPRESUPUESTO = $("#txtPresupuesto"),
    TXT_TIEMPOESTIMADO = $("#txtTiempoEstimado"),
    DIV_IMPLEMENTACIONES = $("#implementaciones"),
    DIV_RESULTADOS = $("#resultados")

let implementaciones = [];

// Plantilla Handlebars

let resultadosTemplate = Handlebars.compile(`
<hr>
{{#each grupos}}
    <div>
        <span>Tipo de Energia: {{this.tipoEnergia}} |</span>
        <span>Efectividad: {{this.efectividad}}</span>
    </div>
{{/each}}
<hr>
<h3>
    La energia {{this.masEfectiva.tipoEnergia}} es la mas recomendada, con una efectividad de {{this.masEfectiva.efectividad}}
</h3>
`);

let listaImplementacionesTemplate = Handlebars.compile(`
<table>
    <thead>
        <tr>
            <th>Tipo de energia</th>
            <th>Descripcion</th>
            <th>Energia generada (en kw/h)</th>
            <th>Presupuesto ($)</th>
            <th>Tiempo estimado (en meses)</th>
        </tr>
    </thead>
    <tbody>
        {{#each items}}
        <tr>
            <td>{{this.tipoEnergia}}</td>
            <td>{{this.descripcion}}</td>
            <td>{{this.energiaGenerada}}</td>
            <td>{{this.presupuesto}}</td>
            <td>{{this.mesesEstimados}}</td>
        </tr>
        {{/each}}
    </tbody>
</table>
`);

$(BTNAGREGAR).click(function () { 
    implementaciones.push({
        tipoEnergia: $(TXT_TIPOENERGIA).val(),
        descripcion: $(TXTDESCRIPCION).val(),
        energiaGenerada: $(TXTENERGIAGENERADA).val(),
        presupuesto: $(TXTPRESUPUESTO).val(),
        mesesEstimados: $(TXT_TIEMPOESTIMADO).val()
    });
    $(DIV_IMPLEMENTACIONES).html(listaImplementacionesTemplate({
        items: implementaciones
    }));
    $(TXTDESCRIPCION).val("");
    $(TXTENERGIAGENERADA).val("");
    $(TXTPRESUPUESTO).val("");
    $(TXT_TIEMPOESTIMADO).val("");
});

$(BTNPROCESAR).click(function () { 
    $(DIV_RESULTADOS).html(resultadosTemplate(procesarImplementaciones(implementaciones)));
});