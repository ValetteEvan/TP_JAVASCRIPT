let tab1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tab2 =  [-1, 12, 17, 14, 5,-9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

let tabSomme = [];

for (let i = 0; i < tab1.length; i++) {
    tabSomme[i] = tab1[i] + tab2[i];
}

console.log("Le tableau somme est : " + tabSomme);