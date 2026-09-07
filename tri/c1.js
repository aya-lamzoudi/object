let person = {
    nom: "aya",
    age : 21,
}
console.log(person.nom);

person.nom = "ahmed";
console.log(person.nom);

person.ville = "safi";
console.log(person);

for (let key in person) {
    console.log( person[key]);
}
function modifacation(objet) {
    objet.nom = "aya";
    console.log( objet.nom)
}
modifacation(person)
