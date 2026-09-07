var prompt = require('prompt-sync')();

let nombre = parseInt(prompt('entrer un nombre: '));
let r = 2 * nombre - 1;
for (let i = 0; i < nombre; i++) {
  let sp = '';

  for (let j = 0; j < i; j++) {
    sp += ' ';
  }

  for (let j = r; j >= 1; j--) {
    sp += '*';
  }
  r = r - 2;
  console.log(sp);
}
