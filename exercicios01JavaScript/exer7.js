let valor1 = document.querySelector ("#valor1");
let btcalcular7 = document.querySelector ("#btcalcular7");
let resultado7 = document.querySelector ("#resultado7")

function parImpar(){

    let num1 = Number(valor1.value);

    if(num1 % 2 === 0){
        resultado7.textContent = num1 + " e par";
    }else{
        resultado7.textContent = num1 + " e impar";
    }
       
}

btcalcular7.onclick = function(){
    parImpar();
}