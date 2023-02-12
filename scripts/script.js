const botoes = document.querySelectorAll('.botao');
const operadores = document.querySelectorAll('.a');
const display = document.getElementById('display');

let arrValues1 = [];
let arrValues2 = [];
let operator = '';

for (const button of botoes) {
    button.addEventListener('click', function() {
        if (operator === '') {
            arrValues1.push(this.value);
            display.value += this.value;
        } else {
            arrValues2.push(this.value);
            display.value += this.value;
        }
    });
};

for (const operador of operadores) {
    operador.addEventListener('click', function() {
        if (this.value === '+') {
            operator = '+';
            display.value = '';
        } if (this.value === '=' && operator === '+') {
            let soma = 0;
            values1 = Number(arrValues1.join(''));
            values2 = Number(arrValues2.join(''));
            soma = values1 + values2;
            display.value = soma;
        } if (this.value === '-') {
            operator = '-';
            display.value = '';
        } if (this.value === '=' && operator === '-') {
            let sub = 0;
            values1 = Number(arrValues1.join(''));
            values2 = Number(arrValues2.join(''));
            sub = values1 - values2;
            display.value = sub;
        }
    });
};


// const adiçao = document.getElementById('operaçaoAdiçao');
// const sub = document.getElementById('operaçaoSub');
// const igual = document.getElementById('operaçaoIgual');
// const divisao = document.getElementById('operaçaoDivisao');
// const porcent = document.getElementById('operaçaoPorcetagem');
// const multi = document.getElementById('operaçaoMulti');

// adiçao.addEventListener('click', operaçaoAdiçao);
// sub.addEventListener('click', sub);
// igual.addEventListener('click', igual);
// divisao.addEventListener('click', divisao);
// porcent.addEventListener('click', porcent);
// multi.addEventListener('click', multi);

// function operaçaoAdiçao() {
//     operador = '+';
//     display.value = '';
//     let soma = 0;
//     values1 = Number(arrValues1.join(''));
//     values2 = Number(arrValues2.join(''));
//     soma = values1 + values2;
//     display.value = soma;
//     console.log(values1);
//     console.log(values2);
//     console.log(soma);
//     console.log(operador)
// }
