const botoes = document.querySelectorAll('.botao');
const operadores = document.querySelectorAll('.operaçao');
const display = document.getElementById('display');

arrValues = [];

for (const button of botoes) {
    button.addEventListener('click', function() {
        arrValues.push(this.value);
        display.value += this.value;
    });
};

// for (const operador of operadores) {
//     operador.addEventListener('click', function() {
        // if (this.value === '+') {
        //     display.value = '';
        //     arrValues1 = arrValues;
        //     arrValues2 = arrValues1.join('');
        //     arrValues = [];
        // }
        // if (this.value === '=') {
        //     arrValues4 = Number(arrValues2)
        //     arrValues3 = arrValues.join('');
        //     arrValues5 = Number(arrValues3)
        //     let soma = 0;
        //     soma = arrValues4 + arrValues5;
        //     display.value = soma;
        // }
//     });
// };

// Seleção de operadores/funções/eventos 

const adiçao = document.getElementById('operaçaoAdiçao');
const sub = document.getElementById('operaçaoSub');
const igual = document.getElementById('operaçaoIgual');
const divisao = document.getElementById('operaçaoDivisao');
const porcent = document.getElementById('operaçaoPorcetagem');
const multi = document.getElementById('operaçaoMulti');

adiçao.addEventListener('click', operaçaoAdiçao);
sub.addEventListener('click', sub);
igual.addEventListener('click', igual);
divisao.addEventListener('click', divisao);
porcent.addEventListener('click', porcent);
multi.addEventListener('click', multi);

function operaçaoAdiçao() {
    display.value = '';
    arrValues1 = arrValues;
    arrValues2 = arrValues1.join('');
    arrValues = [];
    if (this.value === '=') {
        arrValues4 = Number(arrValues2)
        arrValues3 = arrValues.join('');
        arrValues5 = Number(arrValues3)
        let soma = 0;
        soma = arrValues4 + arrValues5;
        display.value = soma;
    }
}