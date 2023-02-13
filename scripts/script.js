const botoes = document.querySelectorAll('.botao');
const operadores = document.querySelectorAll('.a');
const display = document.getElementById('display');

let arrValues1 = [];
let arrValues2 = [];
let operator = '';
let result = 0;

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
        values1 = Number(arrValues1.join(''));
        values2 = Number(arrValues2.join(''));

        if (this.value === '+') {
            operator = '+';
            display.value = '';
        } if (this.value === '=' && operator === '+') {
            let soma = 0;
            soma = values1 + values2;
            display.value = soma;
            result = soma;
            arrValues1 = [];
            arrValues2 = [];
            operator = '';

        } if (this.value === '-') {
            operator = '-';
            display.value = '';
        } if (this.value === '=' && operator === '-') {
            let sub = 0;
            sub = values1 - values2;
            display.value = sub;
            result = sub;
            arrValues1 = [];
            arrValues2 = [];
            operator = '';
        } if (this.value === '/') {
            operator = '/';
            display.value = '';
        } if (this.value === '=' && operator === '/') {
            let divisao = 0;
            divisao = values1 / values2;
            display.value = divisao.toFixed(1);
            console.log(divisao);
        } if (this.value === '%') {
            operator = '%';
            display.value = '';
        } if (this.value === '=' && operator === '%') {
            let porcent = 0;
            porcent = values1 % values2
            display.value = porcent
        } if (this.value === 'X') {
            operator = 'X';
            display.value = '';
        } if (this.value === '=' && operator === 'X') {
            let multi = 0;
            multi = values1 * values2
            display.value = multi
        }
    });
};