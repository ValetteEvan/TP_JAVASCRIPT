function creerGestionnaire() {
    return {
        taches: [],

        ajouterTache(description) {
            const nouvelleTache = {
                description: description,
                terminee: false
            };
            this.taches.push(nouvelleTache);
            console.log(`Tache ajoutée : "${description}"`);
        },

        terminerTache(index) {
            if (index >= 0 && index < this.taches.length) {
                this.taches[index].terminee = true;
                console.log(`Tache "${this.taches[index].description}" marquée comme terminée`);
            } else {
                console.log("Index invalide");
            }
        },

        afficherTaches() {
            console.log("\n=== Liste des tâches ===");
            if (this.taches.length === 0) {
                console.log("Aucune tâche");
            } else {
                this.taches.forEach((tache, index) => {
                    const statut = tache.terminee ? "Terminée" : "À faire";
                    console.log(`${index}. [${statut}] ${tache.description}`);
                });
            }
            console.log("========================\n");
        }
    };
}

// Tests
const gestionnaire = creerGestionnaire();

// Ajout
gestionnaire.ajouterTache("Apprendre JavaScript");
gestionnaire.ajouterTache("Faire les courses");
gestionnaire.ajouterTache("Reviser pour l'examen");

// Affichage
gestionnaire.afficherTaches();

// Marquer comme terminées
gestionnaire.terminerTache(0);
gestionnaire.terminerTache(2);

// Affichage final
gestionnaire.afficherTaches();
