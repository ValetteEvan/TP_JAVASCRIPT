function moyenne(tableau)   {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return tableau.length === 0 ? 0 : somme / tableau.length;
}
console.log(moyenne([10, 20, 30])); 
console.log(moyenne([5, 15, 25, 35]));
console.log(moyenne([]));
console.log(moyenne([100])); 
console.log(moyenne([-10, 0, 10])); 