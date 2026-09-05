var prompt = require("prompt-sync")();
 function aire(larg,long){
            return long*larg;
 }

let triangle ={};
triangle.longuer= prompt('entree la longuer:');
triangle.larguer= prompt('entree largeur : ');

console.log(aire(triangle.larguer,triangle.longuer));