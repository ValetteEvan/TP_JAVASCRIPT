function calculerAge(dateNaissance) {

    if (!(dateNaissance instanceof Date)) {
        throw new Error("L'argument doit être un objet Date valide.");
    }

    if (isNaN(dateNaissance.getTime())) {
        throw new Error("La date fournie n'est pas valide.");
    }
    
    const maintenant = new Date();
    

    if (dateNaissance > maintenant) {
        throw new Error("La date de naissance ne peut pas être dans le futur.");
    }
    
    let annees = maintenant.getFullYear() - dateNaissance.getFullYear();
    let mois = maintenant.getMonth() - dateNaissance.getMonth();

    if (mois < 0) {
        annees--;
        mois += 12;
    }

    if (mois === 0 && maintenant.getDate() < dateNaissance.getDate()) {
        annees--;
        mois = 11;
    } else if (maintenant.getDate() < dateNaissance.getDate()) {
        mois--;
        if (mois < 0) {
            annees--;
            mois = 11;
        }
    }
    
    console.log(`Vous avez ${annees} ans et ${mois} mois.`);
}

// Tests
try {
    calculerAge(new Date(2000, 1, 1));

} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

try {
    calculerAge(new Date(1990, 5, 15));  

} catch (error) {
    console.error(`Erreur: ${error.message}`);
}

