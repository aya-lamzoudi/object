var prompt = require("prompt-sync")();
function ordrecroissante(table,taille){

for (let i = 0; i < taille; i++){
     let A;
       for (let j = i+1; j < taille; j++){
        
    
       if ( table[i] > table[j]) {
            A = table[i];
            table[i] = table[j];
            table[j] = A;

        
        }
}
}
console.log(table);
}

let taille = prompt("entrer la taille de tableaux: ");
let table = [];
for (let i = 0; i < taille; i++){
    let element = parseFloat(prompt(`entrer elemnt ${i + 1}: `));
    table.push(element);
}
ordrecroissante(table,taille)


