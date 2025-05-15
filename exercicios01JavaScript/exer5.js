let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");
let btcalcular5 = document.querySelector ("#btcalcular5");
let resultado5 = document.querySelector ("#resultado5")

function somarValores(){

    let num1 = Number(valor1.value);
    let num2 = Number(valor2.value);

    if(num1 > num2){
        resultado5.textContent = "O maior é:  " + num1;
    }else{
        resultado5.textContent = "O maior é:  " + num2;
    }
       
}

btcalcular5.onclick = function(){
    somarValores();
}