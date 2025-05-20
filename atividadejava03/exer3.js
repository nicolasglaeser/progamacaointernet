let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let btcalcular3 = document.querySelector("#btcalcular3");
let resultado3 = document.querySelector("#resultado3");

function calcularCustos() {
let num1 = Number(paes.value);
let num2 = Number(broas.value);
 
let custoPaes = num1 * 0.12;
let custosBroas = num2 * 1.50;
let total = custoPaes + custosBroas;
let poupanca = total * 0.10;
resultado3.textContent = poupanca;

}

btcalcular3.onclick = function() {
    calcularCustos();
}