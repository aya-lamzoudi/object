var prompt = require('prompt-sync')();

let nombre = parseFloat(prompt('entrer un nombre: '));
// function pair(N) {
//     if (N % 2 === 0) {
//         console.log("true");
// } else {
//    console.log("false");
// }
// }
// pair(nombre);



// function pair(N) {
//     let result = (N % 2 === 0);
//     if (result) {
//         console.log("true");
//     }else console.log("false");
// }



function pair(N) {
    console.log(N % 2 === 0);
}
pair(nombre);