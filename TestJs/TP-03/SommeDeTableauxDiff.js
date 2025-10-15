let tab1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tab2 = [-1, 12, 17, 14, 5,-9, 0, 18] ;

let tabDiff = [];

for (let i = 0; i < tab1.length; i++) {
    if (i < tab2.length) {
        tabDiff[i] = tab1[i] - tab2[i];
    } else {
        tabDiff[i] = tab1[i];
    }
}

console.log("Le tableau différence est : " + tabDiff);