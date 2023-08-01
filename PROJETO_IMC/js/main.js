const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    //previne o recarregamento da pagina
    e.preventDefault();
    console.log('evento previnindo');
    const inputPeso = e.target.querySelector('#peso');
    const InputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(InputAltura.value);

    if (!peso) {
        inserirResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        inserirResultado('Altura inválido', false);
        return;
    }
    
    const imc = obterImc(peso, altura);
    const classificacaoIMC = classificacaoImc(imc);

    const mensagemResultado = `Seu IMC é ${imc}, classificado como: ${classificacaoIMC}`;
    
     inserirResultado(mensagemResultado, true);



})

function classificacaoImc(imc) {
    const classificacao = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];
    if (imc >= 40) return classificacao[5];
    if (imc >= 35) return classificacao[4];
    if (imc >= 30) return classificacao[3];
    if (imc >= 25) return classificacao[2];
    if (imc >= 18.5) return classificacao[1];
    if (imc < 18.5) return classificacao[0];
}



function criarSpan() {
    const span = document.createElement('span');
    return span;
}

function obterImc(x,y) {
    return (x / y ** 2).toFixed(2);
}



function inserirResultado(msg, valido){

    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = '';

    const span = criarSpan();

    if (valido == true) {
        document.getElementById('resultado').style.background = '#198754'
    } else {
        document.getElementById('resultado').style.background = '#dc3545'
    }
    span.innerHTML = msg;
    resultado.appendChild(span);
}