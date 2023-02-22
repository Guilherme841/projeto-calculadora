const botoes = document.querySelectorAll(".botao");
const operadores = document.querySelectorAll(".a");
const display = document.getElementById("display");

let arrValues1 = [];
let arrValues2 = [];
let operator = "";
let type = "";
let result = null;

for (const button of botoes) {
  button.addEventListener("click", function () {
    if (result || result === 0) {
      if (type === "number") {
        display.innerHTML = "";
        arrValues1 = [];
        arrValues2 = [];
        result = null;
        operator = "";
        type = "";
      } else if (type === "operator") {
        arrValues1 = [result];
        arrValues2 = [];
        result = null;
        type = "number";
      }
    }
    if (this.value === "AC") {
      arrValues1 = [];
      arrValues2 = [];
      display.innerHTML = "";
      operator = "";
      result = null;
      type = "";
    }
    if (type !== "operator") {
      if (operator === "") {
        if (this.value === "," && !arrValues1.includes(",")) {
          arrValues1.push(this.value);
          display.innerHTML += this.value;
        } else if (
          this.value !== "," &&
          this.value !== "AC" &&
          this.value !== "="
        ) {
          arrValues1.push(this.value);
          display.innerHTML += this.value;
        }
        if (arrValues1.length > 15) {
          arrValues1.shift();
          display.innerText = display.innerText.slice(0, 15);
        }
        type = "number";
      } else {
        if (this.value === "," && !arrValues2.includes(",")) {
          arrValues2.push(this.value);
          display.innerHTML += this.value;
        } else if (this.value !== "," && this.value !== "=") {
          arrValues2.push(this.value);
          display.innerHTML += this.value;
          console.log(arrValues2);
        }
        if (arrValues2.length > 15) {
          arrValues2.shift();
          display.innerText = display.innerText.slice(0, 15);
        }
        type = "number";
      }
    } else {
      if (this.value !== "=" && this.value !== "AC") {
        return;
      }
      type = "operator";
    }
  });
}

for (const operador of operadores) {
  operador.addEventListener("click", function () {
    values1 = parseFloat(arrValues1.join("").replace(",", "."));
    values2 = parseFloat(arrValues2.join("").replace(",", "."));
    if (this.value === operator) {
      return;
    }
    if (this.value === "=" && isNaN(values1)) {
      return;
    }
    if (
      this.value !== "=" &&
      arrValues1.length === 1 &&
      arrValues1[0] === ","
    ) {
      return;
    } else if (
      this.value !== "=" &&
      arrValues1.length === 1 &&
      arrValues1[0] === ","
    ) {
      return;
    }
    if (this.value === "+") {
      operator = "+";
      display.innerHTML = "";
    }
    if (this.value === "=" && operator === "+") {
      if (isNaN(values2)) {
        return;
      }
      let soma = 0;
      soma = values1 + values2;
      result = soma;
      if (result.toString().length > 15) {
        display.innerHTML = result.toExponential(6);
      } else {
        display.innerHTML = soma;
      }
      arrValues1 = [];
      arrValues2 = [];
      operator = "";
    }
    if (result && this.value !== "=") {
      operator = this.value;
      type = "operator";
    }
    if (this.value === "=" && arrValues1.length === 0) {
      return;
    } else if (this.value === "=" && arrValues2.length === 0) {
      return;
    }
    if (this.value === "-") {
      operator = "-";
      display.innerHTML = "";
    }
    if (this.value === "=" && operator === "-") {
      if (isNaN(values2)) {
        return;
      }
      let sub = 0;
      sub = values1 - values2;
      result = sub;
      if (result.toString().length > 15) {
        display.innerHTML = parseFloat(result.toFixed(6));
      } else {
        display.innerHTML = parseFloat(result);
      }
      arrValues1 = [];
      arrValues2 = [];
      operator = "";
    }
    if (this.value === "/") {
      operator = "/";
      display.innerHTML = "";
    }
    if (this.value === "=" && operator === "/") {
      if (values2 === 0) {
        alert("Erro: Divisão por zero.");
        display.innerHTML = "";
      } else {
        let divisao = 0;
        divisao = values1 / values2;
        display.innerHTML = divisao.toFixed(2);
        result = divisao;
      }
      arrValues1 = [];
      arrValues2 = [];
      operator = "";
    }
    if (this.value === "%") {
      operator = "%";
      display.innerHTML = "";
    }
    if (this.value === "=" && operator === "%") {
      if (isNaN(values2)) {
        return;
      }
      if (values2 === 0) {
        alert("Erro: Divisão por zero.");
        display.innerHTML = "";
      } else {
        let porcent = 0;
        porcent = values1 % values2;
        result = porcent;
        if (result.toString().length > 15) {
          display.innerHTML = result.toExponential(6);
        } else {
          display.innerHTML = porcent;
        }
      }
      arrValues1 = [];
      arrValues2 = [];
      operator = "";
    }
    if (this.value === "X") {
      operator = "X";
      display.innerHTML = "";
    }
    if (this.value === "=" && operator === "X") {
      if (isNaN(values2)) {
        return;
      }
      let multi = 0;
      multi = values1 * values2;
      result = multi;
      if (result.toString().length > 15) {
        display.innerHTML = result.toExponential(6);
      } else {
        display.innerHTML = multi;
      }
      arrValues1 = [];
      arrValues2 = [];
      operator = "";
    }
  });
}
