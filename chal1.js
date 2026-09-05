var prompt = require("prompt-sync")();

let person ={
}
person.nom= prompt('entree votre nom :');
person.prenom= prompt('entree votre prenom : ');
person.age= prompt('entree votre age : ');

console.log(`vote nom ${person.nom} ${person.prenom} et tu as ${person.age} ans` );