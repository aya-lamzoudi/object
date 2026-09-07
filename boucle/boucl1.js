var prompt = require('prompt-sync')();

let nombre = prompt('entrer un nombre: ');
for (let i = 1; i <= 10; i++) {
  let result = i * nombre;
  console.log(` ${nombre} * ${i} = ${result}`);
}
