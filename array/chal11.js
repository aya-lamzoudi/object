var prompt = require('prompt-sync')();
function remplacer(table, taille, valeur1, valeur2) {
  let compteur = 0;
  for (let i = 0; i < taille; i++) {
    if (table[i] == valeur1) {
      table[i] = valeur2;
      compteur++;
    }
  }
  if (compteur == 0) {
    console.log(` la valeur  ${valeur1} n'est  pas dans tableau. `);
  } else {
      console.log(table);
  }
}

let taille = prompt('entrer la taille de tableaux: ');
let table = [];
for (let i = 0; i < taille; i++) {
  let element = parseFloat(prompt(`entrer elemnt ${i + 1}: `));
  table.push(element);
}
let value1 = parseInt(prompt("entrer  la valeur à remplacer: "));
let value2 = parseFloat(prompt("entrer  la nouvelle valeur:  "));
remplacer(table, taille, value1,value2);
