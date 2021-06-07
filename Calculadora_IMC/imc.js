const calcular = document.getElementById("calcular");

function calcularImc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const mostrar = document.getElementById("resultado");

    if (nome !== "" && peso !== "" && altura !== "" ) {
        var imc = (peso / (altura * altura)).toFixed(1);
        let classificacao;

        if (imc < 18.5) {
            classificacao = 'abaixo do peso'
        }
        else if (imc > 18.5 && imc <= 24.9) {
            classificacao = 'peso normal'
        }
        else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'sobrepeso'
        }
        else if (imc >= 30 && imc <= 34.9) {
            classificacao = 'obesidade grau 1'
        }
        else if (imc >= 35 && imc <= 39.9) {
            classificacao = 'obesidade grau 2'
        }
        else if (imc >= 40) {
            classificacao = 'obesidade grau 3'
        }

        mostrar.textContent = `${nome} seu imc é ${imc} e você está classificado(a) em ${classificacao}`


    } else {
        mostrar.textContent = 'Preencha Todos os Campos'
    }

}




calcular.addEventListener("click", calcularImc);