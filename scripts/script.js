const botoes = document.querySelectorAll('.botao');
const operadores = document.querySelectorAll('.operaçao');
const display = document.getElementById('display');

let arrValues = [];

for (const button of botoes) {
    button.addEventListener('click', function() {
        arrValues.push(this.value);
        display.value += this.value;
        // console.log(arrValues)
    });
};

for (const operador of operadores) {
    operador.addEventListener('click', function() {
        if (this.value === '+') {
            display.value = '';
            arrValues1 = arrValues;
            arrValues = [];
            console.log(arrValues1);
        }
        if (this.value === '=') {
            console.log(arrValues)
            let soma1 = 0;
            let soma2 = 0;
            for (var i = 0; i < arrValues1.length; i++) {
                soma1 += parseInt(arrValues1[i]);
            }
            for (var i2 = 0; i2 < arrValues.length; i2++) {
                soma2 += parseInt(arrValues[i2]);
            }
            let total = soma1 + soma2
            display.value = total;
            console.log(total)
        }
    });
};
