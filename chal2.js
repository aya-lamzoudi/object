var prompt = require("prompt-sync")();

let person ={
}
person.nom= prompt('entree votre nom :');
person.prenom= prompt('entree votre prenom : ');
person.array=[];

let index=prompt("entrer nombre de matieres : ");
for(i=0;i<index;i++){
   let element =parseFloat( prompt(`entrer la note de la matiere : ${i+1}: `));
    person.array.push(element);

}
console.log(`vote nom ${person.nom} ${person.prenom} .` );
console.log( `votre notes sont : `,person.array.join(","));
let moyyne=0;
for(i=0;i<index;i++){
   moyyne=moyyne+person.array[i];

}
moyyne=moyyne/index;
console.log("votre moyyne  note est :",moyyne);