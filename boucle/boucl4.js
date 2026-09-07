var prompt = require('prompt-sync')();

let nombre = parseInt(prompt('entrer un nombre: '));
console.log(`les premier nombre entier impaire de ${nombre} est :`);
for (let i = 1; i <= nombre; i++) {
    if (i % 2 != 0) console.log(`${ i }`);
}