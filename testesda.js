// arr1 = [2,2,2,2,2];
// arr2 = [2,2,2,2,2];
// let soma1 = 0;
// let soma2= 0;

// for (var i = 0; i < arr1.length; i++) {
//     soma1 += arr1[i];
// }

// for (var i2 = 0; i2 < arr2.length; i2++) {
//     soma2 += arr2[i2];
// }

// let total = soma1 + soma2;

// console.log(soma1);
// console.log(soma2);
// console.log(total);

numeros = [1,3,5,6]
numeros2 = [2,3,5,6]

var resultados = [];
for(var id in numeros){
    
    total = numeros[id] + numeros2[id];
    
    resultados.push(total);
 }

 soma = 0;
 for (let indice in resultados) {
    
    soma += resultados[indice]
 }
console.log(resultados);
console.log(soma);