function tableauNombre(tableau)
{
    if (!Array.isArray(tableau) || tableau === null) {
        throw new Error(`L'argument doit être un tableau. Vous avez fourni un type ${typeof tableau}.`);
    }

    for (let i = 0; i < tableau.length; i++)
    {
        if (typeof tableau[i] !== 'number') 
        {
            return false;
        }
    }
    return true;    
}

try {
    console.log(tableauNombre("not a table"));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}   
try {
    console.log(tableauNombre([1, 2, 3, 4, 5]));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}
try {
    console.log(tableauNombre({key: "value"}));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

try {
    console.log(tableauNombre([]));
} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

