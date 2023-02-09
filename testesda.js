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

numeros = [2,5,0,0]
numeros2 = [2,5,0,0]
numeros3 = numeros.join('')
numeros4 = numeros2.join('')
numeros5 = Number(numeros3)
numeros6 = Number(numeros4)


somaTeste = 0;

somaTeste = numeros5 + numeros6
console.log(somaTeste)

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
console.log(numeros3)