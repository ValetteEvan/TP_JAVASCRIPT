//controle formulaire.js
function controleFormulaire() {
    // Récupérer les valeurs des champs
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let dateDeNaissance = document.getElementById("dateNaissance").value;

    // Récupérer la zone d'affichage des erreurs
    let messageErreur = document.getElementById("messageErreur");

    // Réinitialiser le message d'erreur
    messageErreur.style.display = "none";
    messageErreur.textContent = "";

    // Vérifier que le nom est renseigné
    if (nom.trim() === "") {
        messageErreur.textContent = "Le nom doit être renseigné.";
        messageErreur.style.display = "block";
        return false;
    }

    // Vérifier que le prénom est renseigné
    if (prenom.trim() === "") {
        messageErreur.textContent = "Le prénom doit être renseigné.";
        messageErreur.style.display = "block";
        return false;
    }

    // Vérifier que la date de naissance est renseignée
    if (dateDeNaissance.trim() === "") {
        messageErreur.textContent = "La date de naissance doit être renseignée.";
        messageErreur.style.display = "block";
        return false;
    }

    // Si tous les contrôles sont OK
    alert("Formulaire soumis avec succès !");
    return true;
}

// Ajouter l'écouteur d'événement sur le formulaire
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    controleFormulaire();
});
