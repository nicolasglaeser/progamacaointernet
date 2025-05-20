let largura = document.querySelector("#largura");
let comprimento = document.querySelector("#comprimento");
let btcalcular = document.querySelector("#btcalcular1");
let resultado = document.querySelector("#resultad01");

function calcularArea() {
let num1 = Number(largura.value);
let num2 = Number(comprimento.value);
if (area = num1 * num2 ){
    resultado.textContent = area;
} 
}

btcalcular.onclick = function() {
    calcularArea();
}