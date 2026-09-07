var prompt = require('prompt-sync')();

let T = [4, 6, 8, 1, 3, 7];
for (let i = 1; i < T.length -1; i++){
    
    for (let j = 0; j < T.length - i - 1; j++){
        let tmp = T[j];
        if (T[j] < T[j + 1]) {
            T[j] = T[j+1];
            T[j + 1] = tmp;
            
        }
    }

}
console.log(T);
    
