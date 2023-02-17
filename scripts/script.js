const botoes = document.querySelectorAll('.botao');
const operadores = document.querySelectorAll('.a');
const display = document.getElementById('display');

let arrValues1 = [];
let arrValues2 = [];
let operator = '';
let result = null;

for (const button of botoes) {
    button.addEventListener('click', function() {
        if (result) {
            display.innerHTML = '';
            result = null;
        }
        if (this.value === 'AC') {
            arrValues1 = [];
            arrValues2 = [];
            display.innerHTML = '';
            operator = '';
        }
        if (operator === '') { 
            if (this.value === ',' && !arrValues1.includes(',')) {
                arrValues1.push(this.value)
                display.innerHTML += this.value
            } else if (this.value !== ',' && this.value !== 'AC') {
                arrValues1.push(this.value);
                display.innerHTML += this.value; 
            }
            if (arrValues1.length > 15) {
                arrValues1.shift()
            }
        } else {
            if (this.value === ',' && !arrValues2.includes(',')) {
                arrValues2.push(this.value);
                display.innerHTML += this.value;
            } else if (this.value !== ',') {
                arrValues2.push(this.value);
                display.innerHTML += this.value;
            }
            if (arrValues2.length > 15) {
                arrValues2.shift();
            }
        }
    });
}

for (const operador of operadores) {
    operador.addEventListener('click', function() {
        values1 = parseFloat(arrValues1.join('').replace(',', '.'));
        values2 = parseFloat(arrValues2.join('').replace(',','.'));

        if (this.value === '+') {
            operator = '+';
            display.innerHTML = '';
        } if (this.value === '=' && operator === '+') {
            let soma = 0;
            soma = values1 + values2;
            display.innerHTML = soma;
            result = soma;
            arrValues1 = [];
            arrValues2 = [];
            operator = '';
        } if (this.value === '-' && result !== null) {

        } else (this.value === '-') {
            operator = '-';
            display.innerHTML = '';
        } if (this.value === '=' && operator === '-') {
            let sub = 0;
            sub = values1 - values2;
            display.innerHTML = sub;
            result = sub;
            arrValues1 = [];
            arrValues2 = [];
            operator = '';
        } if (this.value === '/') {
            operator = '/';
            display.innerHTML = '';
        } if (this.value === '=' && operator === '/') {
            if (values2 === 0) {
                alert('Erro: Divisão por zero.');
                display.innerHTML = ''
            } else {
                let divisao = 0;
                divisao = values1 / values2;
                display.innerHTML = divisao.toFixed(2);
                result = divisao;
            }
            arrValues1 = [];
            arrValues2 = [];
            operator = '';
        } if (this.value === '%') {
            operator = '%';
            display.innerHTML = '';
        } if (this.value === '=' && operator === '%') {
            let porcent = 0;
            porcent = values1 % values2;
            display.innerHTML = porcent;
            result = porcent;
            arrValues1 = [];
            arrValues2 = [];
            operator = '';
        } if (this.value === 'X') {
            operator = 'X';
            display.innerHTML = '';
        } if (this.value === '=' && operator === 'X') {
            let multi = 0;
            multi = values1 * values2;
            display.innerHTML = multi;
            result = multi;
            arrValues1 = [];
            arrValues2 = [];
            operator = '';
        }
    });
};