var prompt = require("prompt-sync")();

let livre ={
    // titre : "your story",
    // auteur: "aya",
    // anne: 2023

}
livre.titre= prompt('entree le titre de livre:');
livre.auteur= prompt('entree le nom de auteur : ');
livre.anne= prompt('entree anne de livre : ');
console.log(`
    le titre de livre est : ${livre.titre} 
    le nom de auther est : ${livre.auteur} 
    anne de puclication est : ${livre.anne} ` 
);