let person = {
    nom: "ahmed",
    prenom : "joth",
    age: 12
}
for (let key in person) {
    console.log(key ,person[key]);
}
function affichage(personne){
    console.log(personne.nom);
    console.log(personne.age);
}

affichage(person);  // ahmed   12


























// Valeur simple
let nom = "aya"
let age = 21;
// console.log(nom);    // aya
// console.log(age);    // 21


// Create an Object


// let person1 = {
//     nom: "ahmed",
//     prenom : "joth",
//     age: 12
// }
for (let key in person1) {
    console.log(key, person1[key]);
}



// person1.ville = "safi"
// console.log(person1); // { nom: 'ahmed', prenom: 'joth', age: 12, ville: 'safi' }



person1.age = 25;
console.log(person1.age); //25





console.log(person1.nom); // ahmed









let person2 = new Object({
  firstName: "aya",
  lastName: "lamzoudi",
  age: 21,

});
console.log(person2); // { nom: 'aya', prenom: 'lamzoudi', age: 21 }



