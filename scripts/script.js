const botoes = document.querySelectorAll('.botao');
const operadores = document.querySelectorAll('.operaçao');
const display = document.getElementById('display');

arrValues = [];

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
            let soma1 = arrValues1;
            let soma2 = arrValues;
            function somar() {}
            // let total = soma1 + soma2
            display.value = total;
            console.log(total)
            
        }
    });
};
