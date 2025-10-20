let data = {
    "polluant": "CO2",
    "unite": "milliards de tonnes",
    "annee": 2017,
    "pays": [
        {"nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn"},
        {"nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us"},
        {"nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in"},
        {"nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru"},
        {"nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp"},
        {"nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de"},
        {"nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr"},
        {"nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir"},
        {"nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca"}
    ]
};

// Fonction appelée au chargement de la page
window.initialiserTableau = function() {
    // Modifier le contenu de la balise h1 : polluant + unité
    document.getElementById("titre").textContent = data.polluant + " (" + data.unite + ")";

    // Modifier le contenu de la balise h2 : année
    document.getElementById("annee").textContent = "Année : " + data.annee;

    // Générer les lignes du tableau
    let tbody = document.getElementById("corps");
    let lignesHTML = "";

    for (let i = 0; i < data.pays.length; i++) {
        let pays = data.pays[i];
        lignesHTML += "<tr>";
        lignesHTML += "<td><img src='https://flagcdn.com/24x18/" + pays.code + ".png' alt='" + pays.nom + "'> " + pays.nom + "</td>";
        lignesHTML += "<td>" + pays.valeur + " " + data.unite + "</td>";
        lignesHTML += "<td>" + pays.pourcentage + "%</td>";
        lignesHTML += "</tr>";
    }

    tbody.innerHTML = lignesHTML;
};
