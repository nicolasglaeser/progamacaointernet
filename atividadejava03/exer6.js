let peso = document.querySelector("#peso");
let btcalcular = document.querySelector("#btcalcular");
let resultado = document.querySelector("#resultado");

function calcularRefeicao() {
let pesoNum = Number(peso.value);
let valor = pesoNum * 12.00;

resultado.textContent = "O valor a pagar é R$" + valor
}

btcalcular.onclick = function() {
    calcularRefeicao();
}