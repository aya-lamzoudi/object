var prompt = require('prompt-sync')();

let nombre1 =parseFloat( prompt('entrer un nombre1: '));
let nombre2 =parseFloat( prompt('entrer un nombre2: '));
function somme(A, B) {
    return A + B;
}
let result = somme(nombre1, nombre2)
console.log(result);