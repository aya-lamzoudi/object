var prompt = require('prompt-sync')();

let nombre = parseInt(prompt('entrer un nombre: '));
let result = 0;
for (let i = 1; i <= nombre; i++) {
  result = result + i;
}
console.log(`la somme de ${nombre} premier entier est: ${result}`);
