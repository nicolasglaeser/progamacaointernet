let num1a = document.querySelector ("#num1a");
let num2a = document.querySelector ("#num2a");
let num3a = document.querySelector ("#num3a");
let btcalcular4 = document.querySelector ("#btcalcular4");
let resultado4 = document.querySelector ("#resultado4");

function calcularmedia(){

    let n1 = Number(num1a.value);
    let n2 = Number(num2a.value);
    let n3 = Number(num3a.value);

    resultado4.textContent = (n1+ n2 + n3) / 3;
}

btcalcular4.onclick = function(){
    calcularmedia();
}

let num1b = document.querySelector ("#num1b");
let num2b = document.querySelector ("#num2b");
let num3b = document.querySelector ("#num3b");
let btcalcular4b = document.querySelector ("#btcalcular4b");
let resultado4b = document.querySelector ("#resultado4b");

function calcularMediaPonderada(){

    let n1b = Number(num1b.value);
    let n2b = Number(num2b.value);
    let n3b = Number(num3b.value);

    resultado4b.textContent = (n1b * 3 + n2b * 2 + n3b * 5) / ( 3 + 2 + 5);
}

btcalcular4b.onclick = function(){
    calcularMediaPonderada();
}


let num1c = document.querySelector ("#num1c");
let num2c = document.querySelector ("#num2c");
let num3c = document.querySelector ("#num3c");
let btcalcular4c = document.querySelector ("#btcalcular4c");
let resultado4c = document.querySelector ("#resultado4c");

function calcularMediaHarmonica(){

    let n1c = Number(num1c.value);
    let n2c = Number(num2c.value);
    let n3c = Number(num3c.value);

    resultado4c.textContent = (3 * (1/n1c) + 2 * (1/n2c) + 5 *(1/n3c)) / (3 + 2 +5);
}

btcalcular4c.onclick = function(){
    calcularMediaHarmonica();
}
    