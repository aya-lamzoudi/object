var prompt = require('prompt-sync')();

function lowCase(string) {
  let lowercase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let upercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let len = string.length;
  let result = '';
  for (let j = 0; j < len; j++) {
    let comp = false;
    for (let i = 0; i < 26; i++) {
      if (string[j] == upercase[i]) {
        result = result + lowercase[i];
        comp = true;
        break;
      }
      }
       if (comp == false) {
                 result = result + string[j];
            }
  }
  console.log(result);
}
let string = prompt('entrer a string: ');
lowCase(string);
