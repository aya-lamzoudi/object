var prompt = require('prompt-sync')();
function recherche(table, taille, valeur) {
  let compteur = 0;
  for (let i = 0; i < taille; i++) {
    if (table[i] == valeur) {
      compteur++;
      break;
    }
  }
  if (compteur == 0) {
    console.log(` element ${valeur} ne  présent pas dans le tableau. `);
  } else console.log(` element ${valeur} est présent dans le tableau. `);
}

let taille = prompt('entrer la taille de tableaux: ');
let table = [];
for (let i = 0; i < taille; i++) {
  let element = parseFloat(prompt(`entrer elemnt ${i + 1}: `));
  table.push(element);
}
let value = prompt("entrer le nombre d'élément: ");
recherche(table, taille, value);
