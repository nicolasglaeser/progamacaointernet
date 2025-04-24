let inputNum1 = document.querySelector ("#inputNum1");
let inputNum2 = document.querySelector ("#inputNum2");
let btsomar = document.querySelector ("#btsomar");
let h3Resultado = document.querySelector ("#h3Resultado");

function somarNumero(){

    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);

    h3Resultado.textContent = (num1 + num2);
}

btsomar.onclick = function(){
    somarNumero();
}