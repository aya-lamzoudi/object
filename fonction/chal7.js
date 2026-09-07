var prompt = require('prompt-sync')();

let nombre =parseFloat( prompt('entrer un nombre: '));
// function rebo(N) {
//     let sp=" "
//     for (let i = N; i >= 0; i--){
//         sp = sp + i + " ";
        
//     }
//     return sp;
// }
function rebo(N) {
    for (let i = N; i >= 0; i--) {
        console.log(i);
    }
}
rebo(nombre);
//  let result = rebo(nombre);
// console.log(result);