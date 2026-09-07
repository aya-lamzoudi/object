var prompt = require('prompt-sync')();

let nombre = parseInt(prompt('entrer un nombre: '));
let result = 1;
for (let i = 1; i <= nombre; i++) {
  result = result * i;
  
}
console.log(`factoriele de la nombre est: ${result}`);