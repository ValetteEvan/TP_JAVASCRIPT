let tab = [1, 2, 3, 4, 5];
let n = 2; // nombre de rotations

for (let i = 0; i < n; i++) {
    let firstElement = tab.shift();
    tab.push(firstElement); 
}

console.log("Tableau après " + n + " rotations: " + tab);