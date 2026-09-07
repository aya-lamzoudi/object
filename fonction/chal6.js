var prompt = require('prompt-sync')();

let nombre =parseFloat( prompt('entrer la premiers termes de la suite de Fibonacc: '));

function fib(N) {
    let F1 = 0;
    let F2 = 1;
    let result;
    for (let i = 1; i < N; i++) {
        if (N == 0) {
            return 0;
        } else if (N == 1) {
            return 1;
        } else {
            result = F1 + F2;
            F1 = F2;
            F2 = result;
        
        }
    }
    return result;
}
let result = fib(nombre)
console.log(result);