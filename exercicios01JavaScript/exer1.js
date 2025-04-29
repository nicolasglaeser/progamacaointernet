let preco1 = document.querySelector ("#preco1");
let valorpago1 = document.querySelector ("#valorpago1");
let btcalcular = document.querySelector ("#btcalcular");
let resultado1 = document.querySelector ("#resultado1");

function calcularTroco(){

    let num1 = Number(preco1.value);
    let num2 = Number(valorpago1.value);

    resultado1.textContent = (num1 - num2);
}

btcalcular.onclick = function(){
    calcularTroco();
}