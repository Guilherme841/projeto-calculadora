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

for (const operador of operadores) {
    operador.addEventListener('click', function() {
        if (this.value === '+') {
            display.value = '';
            arrValues1 = arrValues;
            arrValues2 = arrValues1.join('');
            arrValues4 = Number(arrValues2)
            arrValues3 = arrValues.join('');
            arrValues5 = Number(arrValues3)
            arrValues = [];
        }
        if (this.value === '=') {
            let soma = 0;
            soma = arrValues4 + arrValues5;
            display.value = soma;
        }
        
    });
};
