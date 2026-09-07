var prompt = require('prompt-sync')();

let nombre =parseFloat( prompt('entrer un nombre1: '));

function factoriel(A) {
    let result = 1;
    for (let i = 1; i <= A; i++) {
        result = result * i;
    }
    return result;
}
let result = factoriel(nombre);
console.log(result);