let numeroInput = document.querySelector("#numero");
let calcularBtn = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let numero = Number(numeroInput.value);
    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = numero % 10;

    resultado.textContent = `CENTENA = ${centena}, DEZENA = ${dezena}, UNIDADE = ${unidade}`;
};