let diasInput = document.querySelector("#dias");
let calcularBtn = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

calcularBtn.onclick = function() {
    let totalDias = Number(diasInput.value);
    let anos = Math.floor(totalDias / 360); // 12 meses de 30 dias = 360 dias por ano
    let diasRestantes = totalDias % 360;
    let meses = Math.floor(diasRestantes / 30);
    let diasFinal = diasRestantes % 30;

    resultado.textContent = `${anos} anos, ${meses} meses e ${diasFinal} dias`;
};