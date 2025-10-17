function toMajuscule(str) {
    if (typeof str !== 'string') {
        throw new Error(`L'argument doit être une chaîne de caractères. Vous avez fourni un type ${typeof str}.`);
    }
    return str.toUpperCase();
}



try {
    console.log(toMajuscule(123));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

try {
    console.log(toMajuscule(true));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

try {
    console.log(toMajuscule(["array"]));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}   

try {
    console.log(toMajuscule("Test passed"));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}   
