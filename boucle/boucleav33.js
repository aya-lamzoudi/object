var prompt = require('prompt-sync')();

let nombre = parseFloat(prompt('entrer un nombre: '));

for (let i = 2; i <= nombre; i++) {
  let cal = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      cal++;
      break;
    }
  }
  if (cal == 0) {
    console.log(`${i}`);
  }
}
