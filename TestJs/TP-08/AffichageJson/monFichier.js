window.initialiserDonnees = async function() {
    try {
        const response = await fetch('https://digicode.cleverapps.io/json/pays/pollution');

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données: ' + response.status);
        }

        const data = await response.json();

        document.getElementById("titre").textContent = data.polluant + " (" + data.unite + ")";

        document.getElementById("annee").textContent = "Année : " + data.annee;

        let listePaysHTML = "";
        for (let i = 0; i < data.pays.length; i++) {
            let pays = data.pays[i];
            listePaysHTML += "<p>";
            listePaysHTML += "<strong>" + pays.nom + "</strong> (code: " + pays.code + ")<br>";
            listePaysHTML += "Valeur: " + pays.valeur + " " + data.unite + "<br>";
            listePaysHTML += "Pourcentage: " + pays.pourcentage + "%";
            listePaysHTML += "</p>";
        }

        document.getElementById("listePays").innerHTML = listePaysHTML;

    } catch (error) {
        console.error("Erreur:", error);
        document.getElementById("titre").textContent = "Erreur lors du chargement des données";
        document.getElementById("listePays").innerHTML = "<p style='color: red;'>Impossible de récupérer les données de pollution.</p>";
    }
}
