let person = {
    nom: "aya",
    age : 21
}
person.age = 23;

function printObject(object) {
    for (let key in object) {
        console.log(key, object[key]);
    }
}


function update(object) {
    object.nom = "ahmed"
}

printObject(person)
update(person)
printObject(person)