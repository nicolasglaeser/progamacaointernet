let cavalo = document.querySelector("#cavalo");
let btcalcular2 = document.querySelector("#btcalcular2");
let resultado2 = document.querySelector("#resultado2");

function calcularFerradura() {
let num = Number(cavalo.value);
 
    let ferraduras = num * 4;
    resultado2.textContent = ferraduras;

}

btcalcular2.onclick = function() {
    calcularFerradura();
}