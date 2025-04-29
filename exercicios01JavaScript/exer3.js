let salario3 = document.querySelector ("#salario3");
let btcalcular3 = document.querySelector ("#btcalcular3");
let resultado3 = document.querySelector ("#resultado3");

function calcularSalario(){

    let salario3 = Number(precoQuilo2.value);
    let num2 = num1 * 0.01

    resultado3.textContent = (salario3 + num2);
}

btcalcular3.onclick = function(){
    calcularSalario();
}