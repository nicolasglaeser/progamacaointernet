let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btcalcular4 = document.querySelector("#btcalcular4");
let resultado4 = document.querySelector("#resultado4");

function calcularDias() {
let num1 = Number(nome.value);
let num2 = Number(idade.value);
 
let resultado = num2 * 365;
resultado4.textContent = resultado + num1;

}

btcalcular4.onclick = function() {
    calcularDias();
}