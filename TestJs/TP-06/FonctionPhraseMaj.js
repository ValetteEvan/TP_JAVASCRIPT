function firstCharToUpperCase(phrase) {
    if (typeof phrase !== 'string') {
        throw new Error(`L'argument doit être une chaîne de caractères. Vous avez fourni un type ${typeof phrase}.`);
    }
    if (phrase.length === 0) {
        return phrase;
    }
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}


try {
    console.log(firstCharToUpperCase(123));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

try {
    console.log(firstCharToUpperCase(["array"]));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}   

try {
    console.log(firstCharToUpperCase("bonjour tout le monde"));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}