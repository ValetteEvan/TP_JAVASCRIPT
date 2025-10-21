function retournerFonction(n) {
    return function(x) {
        return n * x;
    }
}

const multiplierPar2 = retournerFonction(2);
const multiplierPar3 = retournerFonction(3);

console.log(multiplierPar2(5)); // Affiche 10
console.log(multiplierPar3(5)); // Affiche 15
