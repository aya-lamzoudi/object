var prompt = require('prompt-sync')();

let table1 = [];
let table2 = [];
let table = [];

let taille1 = prompt('entrer la taille de tableaux 1: ');

for (let i = 0; i < taille1; i++) {
  let element = parseFloat(prompt(`entrer elemnt ${i + 1}: `));
    table1.push(element);
    table.push(element);
}
let taille2 = prompt('entrer la taille de tableaux 2: ');
for (let i = 0; i < taille2; i++) {
  let element = parseFloat(prompt(`entrer elemnt ${i + 1}: `));
    table2.push(element);
    table.push(element);
}


console.log(table);
