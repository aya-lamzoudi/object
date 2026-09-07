var prompt = require('prompt-sync')();

let base = parseInt(prompt('entrer un nombre: '));
let exposant = parseInt(prompt("entrer l'exposant :"));
let result = 1;
for (let i = 1; i <= exposant; i++) {
  result = result * base;
}
console.log(`la puissance est : ${result}`);
