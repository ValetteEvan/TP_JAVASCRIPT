function moyenne(tableau) {
    if (!Array.isArray(tableau)) {
        throw new Error("Le paramètre doit être un tableau");
    }
    if (tableau.length === 0) {
        return 0;
    }
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== 'number' || isNaN(tableau[i])) {
            throw new Error(`L'élément à l'index ${i} n'est pas un nombre valide: ${tableau[i]}`);
        }
        somme += tableau[i];
    }
    return somme / tableau.length;
}


console.log("=== Test 1: Tableau de nombres valide ===");
try {
    const resultat1 = moyenne([10, 20, 30]);
    console.log(`Moyenne de [10, 20, 30] = ${resultat1}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

console.log("\n=== Test 2: Autre tableau de nombres valides ===");
try {
    const resultat2 = moyenne([5, 15, 25, 35]);
    console.log(`Moyenne de [5, 15, 25, 35] = ${resultat2}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

console.log("\n=== Test 3: Tableau vide ===");
try {
    const resultat3 = moyenne([]);
    console.log(`Moyenne de [] = ${resultat3}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

console.log("\n=== Test 4: Tableau contenant une chaîne de caractères ===");
try {
    const resultat4 = moyenne([10, 20, "trente", 40]);
    console.log(`Moyenne = ${resultat4}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

console.log("\n=== Test 5: Paramètre qui n'est pas un tableau ===");
try {
    const resultat5 = moyenne("pas un tableau");
    console.log(`Moyenne = ${resultat5}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

console.log("\n=== Test 6: Paramètre nombre au lieu de tableau ===");
try {
    const resultat6 = moyenne(42);
    console.log(`Moyenne = ${resultat6}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

console.log("\n=== Test 7: Tableau contenant null ===");
try {
    const resultat7 = moyenne([10, null, 30]);
    console.log(`Moyenne = ${resultat7}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

console.log("\n=== Test 8: Tableau avec nombres négatifs ===");
try {
    const resultat8 = moyenne([-10, 0, 10]);
    console.log(`Moyenne de [-10, 0, 10] = ${resultat8}`);
} catch (error) {
    console.error(`Erreur: ${error.message}`);
} 