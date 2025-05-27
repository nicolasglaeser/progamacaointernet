let pequena = document.querySelector("#pequena");
let media = document.querySelector("#media");
let grande = document.querySelector("#grande");
let btCalcular = document.querySelector("#btCalcular");
let resultados = document.querySelector("#resultados");

function calcularCamisetas() {
    let qtdPequena = Number(pequena.value);
    let qtdMedia = Number(media.value);
    let qtdGrande = Number(grande.value);

    let valorPequena = qtdPequena * 10.00; // R$10 por camiseta pequena
    let valorMedia = qtdMedia * 12.00;     // R$12 por camiseta média
    let valorGrande = qtdGrande * 15.00;   // R$15 por camiseta grande

    let total = valorPequena + valorMedia + valorGrande;

    resultados.textContent = `O valor total é R$` + total;
}

btCalcular.onclick = function() {
    calcularCamisetas();
};