let anoInicio = document.querySelector("#anoInicio");
let anoFim = document.querySelector("#anoFim");
let btCalcular = document.querySelector("#btCalcular");
let resultados = document.querySelector("#resultados");

function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function calcularDias() {
    let inicio = Number(anoInicio.value);
    let fim = Number(anoFim.value);
    let totalDias = 0;

    for (let ano = inicio; ano <= fim; ano++) {
        if (ehBissexto(ano)) {
            totalDias += 366; // Ano bissexto
        } else {
            totalDias += 365; // Ano comum
        }
    }

    resultados.textContent = "Total de dias: $"+ {totalDias};
}

btCalcular.onclick = function() {
    calcularDias();
};