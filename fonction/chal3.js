var prompt = require('prompt-sync')();

let nombre1 =parseFloat( prompt('entrer un nombre1: '));
let nombre2 =parseFloat( prompt('entrer un nombre2: '));
function max(A, B) {
    if (A > B) {
        return A;
    } else return B;
}
let result = max(nombre1, nombre2)
console.log(result);