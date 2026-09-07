var prompt = require("prompt-sync")();

let taille = prompt("entrer la taille de tableaux: ");
let table = [];
let newtable = [];
for (let i = 0; i < taille; i++){
    let element = parseFloat(prompt(`entrer elemnt ${i + 1}: `));
    table.push(element);
}
for (let i = taille-1; i >=0; i--){
    let element = table[i];
    newtable.push(element);
}
console.log(table);
console.log(newtable);