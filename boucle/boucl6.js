var prompt = require('prompt-sync')();

let nombre = parseInt(prompt('entrer un nombre entier: '));
console.log(`les premier ${nombre} nombre entier paire   est :`);
for (let i = 1; i <= nombre*2; i++) {
    if (i % 2 == 0) console.log(`${i}`);
}