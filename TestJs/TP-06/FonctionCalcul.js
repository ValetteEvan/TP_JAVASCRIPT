function opperation(a,b)
{
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error(`Les deux arguments doivent être des nombres. Vous avez fourni des types ${typeof a} et ${typeof b}.`);
    }
    return a * b + a + b
}   



try {
    console.log(opperation("test","test"));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

try {
    console.log(opperation(true,false));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

try {
    console.log(opperation(2,3));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}