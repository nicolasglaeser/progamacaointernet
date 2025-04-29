let precoQuilo2 = document.querySelector ("#precoQuilo2");
let quantidade2 = document.querySelector ("#quantidade2");
let btcalcular2 = document.querySelector ("#btcalcular2");
let resultado2 = document.querySelector ("#resultado2");

function valorFinal(){

    let num1 = Number(precoQuilo2.value);
    let num2 = Number(quantidade2.value);

    resultado2.textContent = (num1 * num2);
}

btcalcular2.onclick = function(){
    valorFinal();
}