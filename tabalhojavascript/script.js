let xInput = document.querySelector("#x");
let yInput = document.querySelector("#y");
let zInput = document.querySelector("#z");
let calcularBtn = document.querySelector("#calcular");
let resultadoTri = document.querySelector("#resultadoTri");

calcularBtn.onclick = function() {
    let x = Number(xInput.value);
    let y = Number(yInput.value);
    let z = Number(zInput.value);

    // Verifica se forma um triângulo: a soma de dois lados deve ser maior que o terceiro
    if (x + y > z && y + z > x && x + z > y) {
        // Verifica o tipo de triângulo
        if (x === y && y === z) {
            resultadoTri.textContent = "Equilatero: todos os lados iguais";
        } else if (x === y || y === z || x === z) {
            resultresultadoTriado.textContent = "Isosceles: dois lados iguais";
        } else {
            resultadoTri.textContent = "Escaleno: todos os lados diferentes";
        }
    } else {
        resultadoTri.textContent = "Não forma um triangulo";
    }
};

let pesoInput = document.querySelector("#peso");
let alturaInput = document.querySelector("#altura");
let calcularImc = document.querySelector("#calcularImc");
let resultadoImc = document.querySelector("#resultadoImc");

calcularImc.onclick = function() {
    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value);

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultadoImc.textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

let anoInput = document.querySelector("#ano");
let valorInput = document.querySelector("#valor");
let calcular3 = document.querySelector("#calcular3");
let resultado3 = document.querySelector("#resultado3");

calcular3.onclick = function() {
    let ano = Number(anoInput.value);
    let valor = Number(valorInput.value);
    let taxa;

    if (ano < 1990) {
        taxa = 0.01; // 1% para antes de 1990
    } else {
        taxa = 0.015; // 1.5% para 1990 ou depois
    }

    let imposto = valor * taxa;
    resultado3.textContent = `Imposto a pagar: R$${imposto.toFixed(2)}`;
}

let salarioInput = document.querySelector("#salario");
let cargoSelect = document.querySelector("#cargo");
let calcularSala = document.querySelector("#calcularSala");
let resultadoSala = document.querySelector("#resultadoSala");

calcularSala.onclick = function() {
    let salario = Number(salarioInput.value);
    let cargo = cargoSelect.value;
    let percentual;

    switch (cargo) {
        case "101": percentual = 0.10; break; // Gerente
        case "102": percentual = 0.20; break; // Engenheiro
        case "103": percentual = 0.30; break; // Técnico
    }

    let aumento = salario * percentual;
    let novoSalario = salario + aumento;
    let diferenca = novoSalario - salario;

    resultadoSala.textContent = `Salário antigo: R$${salario.toFixed(2)}, Novo salário: R$${novoSalario.toFixed(2)}, Aumento: R$${diferenca.toFixed(2)}`;
}