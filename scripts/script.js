const botoes = document.querySelectorAll('.botao');
const operadores = document.querySelectorAll('.operaçao');
const display = document.getElementById('display');

for (const button of botoes) {
    button.addEventListener('click', function() {
        let valorInput = this.value;
        arrValues = [];
        arrValues = document.getElementById('display').value += valorInput;
        // console.log(arrValues);
    });
};

for (const operador of operadores) {
    operador.addEventListener('click', function() {
        let valorInput = this.value;
        if (valorInput === '+') {
            document.getElementById('display').value = '';
            
        }
    });
};