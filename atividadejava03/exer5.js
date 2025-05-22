let preco = document.querySelector("#preco");
let valor = document.querySelector("#valor");
let btcalcular5 = document.querySelector("#btcalcular5");
let resultado5 = document.querySelector("#resultado5");

function calcularCombustivel() {
let num1 = Number(preco.value);
let num2 = Number(valor.value);

 
let resultado = num1 / num2 ; 
resultado5.textContent = resultado + "litros"
}

btcalcular5.onclick = function() {
    calcularCombustivel();
}