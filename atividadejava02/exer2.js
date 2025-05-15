let queijo2 = document.querySelector("#queijo2");
let btcalcular2 = document.querySelector("#btcalcular2");
let resultado2 = document.querySelector("#resultado2");

function calcularQueijos() {
let num = Number(queijo2.value);
if (num) {
let ovos = num * 2;
let queijo = num * 50;
resultado2.textContent = "Ovos: " + ovos + ", Queijo; " + queijo + "Gramas"; 
}

}

btcalcular2.onclick = function() {
    calcularQueijos();
}