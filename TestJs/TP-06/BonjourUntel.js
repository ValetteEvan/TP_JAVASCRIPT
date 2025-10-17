function bonjour(prenom) {
    if (typeof prenom !==   'string') {
        throw new Error(`Le prénom doit être une chaîne de caractères. Vous avez fourni un type ${typeof prenom}.`);
    }
    console.log("Bonjour " + prenom + " !");
}

try {
    bonjour(123); 
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}
try {
    bonjour("Jean");
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}
