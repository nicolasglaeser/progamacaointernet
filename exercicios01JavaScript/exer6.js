let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");
let valor3 = document.querySelector ("#valor3");
let valor4 = document.querySelector ("#valor4");
let btcalcular6 = document.querySelector ("#btcalcular6");
let resultado6 = document.querySelector ("#resultado6")

function encontrarMenor(){

    let num1 = Number(valor1.value);
    let num2 = Number(valor2.value);
    let num3 = Number(valor3.value);
    let num4 = Number(valor4.value);

    menorValor = num1 
    if (num2 < menorValor) menorValor = num2;
    if (num3 < menorValor) menorValor = num3;
    if (num4 < menorValor) menorValor = num4;
    resultado6.textContent = "O menor é: " + menorValor; 

}
  
btcalcular6.onclick = function(){
    encontrarMenor();
}