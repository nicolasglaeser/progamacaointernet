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

let salarioCre = document.querySelector("#salarioCre");
let calcularCre = document.querySelector("#calcularCre");
let resultadoCre = document.querySelector("#resultadoCre");

calcularCre.onclick = function() {
    let salario1 = Number(salarioCre.value);
    let percentual;
    let credito;

    if (salario1 <= 200) {
        percentual = 0;
    } else if (salario1 <= 400) {
        percentual = 0.20;
    } else if (salario1 <= 600) {
        percentual = 0.30;
    } else {
        percentual = 0.40;
    }

    credito = salario1 * percentual;
    resultadoCre.textContent = `Salário médio: R$${salario1.toFixed(2)}, Crédito: R$${credito.toFixed(2)}`;
}

let codigoInput = document.querySelector("#codigo");
let quantidadeInput = document.querySelector("#quantidade");
let calcularLan = document.querySelector("#calcularLan");
let resultadoLan = document.querySelector("#resultadoLan");

calcularLan.onclick = function() {
    let codigo = Number(codigoInput.value);
    let quantidade = Number(quantidadeInput.value);
    let precoUnitario;
    let total;

    switch (codigo) {
        case 1: precoUnitario = 11.00; break; // Cachorro Quente
        case 2: precoUnitario = 8.50; break;  // Bauuru
        case 3: precoUnitario = 8.00; break;  // Misto Quente
        case 4: precoUnitario = 9.00; break;  // Hamburger
        case 5: precoUnitario = 10.00; break; // Cheeseburger
        case 6: precoUnitario = 4.50; break;  // Refrigerante
        default: precoUnitario = 0;
    }

    total = precoUnitario * quantidade;
    resultadoLan.textContent = `Total a pagar: R$${total.toFixed(2)}`;
}

let codigo7 = document.querySelector("#codigo7");
let quantidade7 = document.querySelector("#quantidade7");
let pagamentoSelect = document.querySelector("#pagamento7");
let calcular7 = document.querySelector("#calcular7");
let resultado7 = document.querySelector("#resultado7");

calcular7.onclick = function() {
    let codigo = Number(codigo7.value);
    let quantidade = Number(quantidade7.value);
    let pagamento = pagamentoSelect.value;
    let precoUnitario;

    switch (codigo) {
        case 1: precoUnitario = 10.00; break;
        case 2: precoUnitario = 15.00; break;
        case 3: precoUnitario = 20.00; break;
        case 4: precoUnitario = 25.00; break;
        default: precoUnitario = 0;
    }

    let totalSemDesconto = precoUnitario * quantidade;
    let totalComDesconto;

    switch (pagamento) {
        case "a": totalComDesconto = totalSemDesconto * 0.90; break; // 10% de desconto
        case "b": totalComDesconto = totalSemDesconto * 0.85; break; // 15% de desconto
        case "c": totalComDesconto = totalSemDesconto; break;        // Sem juros
        case "d": totalComDesconto = totalSemDesconto * 1.10; break; // 10% de juros
    }

    resultado7.textContent = `Total a pagar: R$${totalComDesconto.toFixed(2)}`;
}

let nivelSis = document.querySelector("#nivelSis");
let horas8 = document.querySelector("#horas8");
let calcularSis = document.querySelector("#calcularSis");
let resultadoSis = document.querySelector("#resultadoSis");

calcularSis.onclick = function() {
    let nivel = Number(nivelSis.value);
    let horas = Number(horas8.value);
    let valorPorHora;

    switch (nivel) {
        case 1: valorPorHora = 12.00; break;
        case 2: valorPorHora = 17.00; break;
        case 3: valorPorHora = 25.00; break;
        default: valorPorHora = 0;
    }

    let salario = valorPorHora * horas;
    resultadoSis.textContent = `Salário: R$${salario.toFixed(2)}`;
}