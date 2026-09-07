var prompt = require("prompt-sync")();

let matrice = [[3, 5, 8], [2, 9, 0], [1, 6, 3]];
// let tab = [[3, 5, 8], [2, 9, 0], [1, 6, 3]];



for (let i = 0; i < matrice.length; i++) {

    for (let j = 0; j < matrice[i].length; j++) {

        for (let k = 0; k < matrice.length; k++) {

            for (let l = 0; l < matrice[k].length; l++) {

                if (matrice[i][j] < matrice[k][l]) {

                    let tmp = matrice[i][j];
                    matrice[i][j] = matrice[k][l];
                    matrice[k][l] = tmp;
                }
            }
        }
    }
}

console.log(matrice);








// let T= [[3, 5, 8], [2, 9, 0], [1, 6, 3]];


// for (let i = 0; i < T.length-1; i++) {
   
//     for (let j = i+1; j<  T.length; j++) {
        
//         if (matrice[i] < T[j]) {
//             let tmp = matrice[i];
//             matrice[i] = T[j];
//         T[j] = tmp;
//         }
//     }
    
// }
// console.log(matrice);
// console.log(T);