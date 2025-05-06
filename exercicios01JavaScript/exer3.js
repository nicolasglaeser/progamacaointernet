let salario3 = document.querySelector ("#salario3");
let btcalcular3 = document.querySelector ("#btcalcular3");
let resultado3 = document.querySelector ("#resultado3");

function calcularSalario(){

    let num = Number(salario3.value);

    resultado3.textContent = num + (num *0.01);
}

btcalcular3.onclick = function(){
    calcularSalario();
}