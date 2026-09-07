var prompt = require('prompt-sync')();

let nombre = prompt('entrer un nombre entier: ');
console.log(`inverse de  ${nombre}  est : `);
let l = nombre.length;
let result = '';
nombre = parseInt(nombre);
for (let i = 1; i <= l; i++) {
  result = result + (nombre % 10);

  // nombre = nombre / 10;
  nombre = Math.trunc(nombre / 10);
}
console.log(`${result}`);
