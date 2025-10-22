let paysData = [];
let sortOrder = 'none'; 

function chargerPaysEtCapitale() {
    var req = new XMLHttpRequest();

    var url = "https://restcountries.com/v2/all?fields=name,capital,population,region";

    req.open("GET", url, true);

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            let data = JSON.parse(req.responseText);

            paysData = data;

            afficherTableau();
        } else if (req.readyState === 4) {
            document.getElementById("resultat").innerHTML =
                "<p class='error'>Erreur lors du chargement des données (Status: " + req.status + ")</p>";
        }
    };

    req.send();
}

function afficherTableau() {
    var html = "<table>";
    html += "<thead>";
    html += "<tr>";
    html += "<th>Pays</th>";
    html += "<th>Capitale</th>";
    html += "<th class='sortable' onclick='trierParPopulation()'>Population " + getIconeTri() + "</th>";
    html += "<th>Région</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";

    for (let i = 0; i < paysData.length; i++) {
        let nomPays = paysData[i].name;
        let capitale = paysData[i].capital || "N/A";
        let population = paysData[i].population;
        let region = paysData[i].region || "N/A";

        html += "<tr>";
        html += "<td><strong>" + nomPays + "</strong></td>";
        html += "<td>" + capitale + "</td>";
        html += "<td class='population-cell'>" + population.toLocaleString('fr-FR') + "</td>";
        html += "<td>" + region + "</td>";
        html += "</tr>";
    }

    html += "</tbody>";
    html += "</table>";

    document.getElementById("resultat").innerHTML = html;
}

function getIconeTri() {
    if (sortOrder === 'none') {
        return '<i class="fa-solid fa-sort"></i>';
    } else if (sortOrder === 'asc') {
        return '<i class="fa-solid fa-sort-up"></i>';
    } else if (sortOrder === 'desc') {
        // Icône pour tri descendant (décroissant)
        return '<i class="fa-solid fa-sort-down"></i>';
    }
}

function trierParPopulation() {
    // Changement de l'état du tri selon un cycle : none -> asc -> desc -> asc -> ...
    if (sortOrder === 'none') {
        sortOrder = 'asc';
        // Tri croissant (du plus petit au plus grand)
        paysData.sort(function(a, b) {
            return a.population - b.population;
        });
    } else if (sortOrder === 'asc') {
        sortOrder = 'desc';
        // Tri décroissant (du plus grand au plus petit)
        paysData.sort(function(a, b) {
            return b.population - a.population;
        });
    } else {
        sortOrder = 'asc';
        // Retour au tri croissant
        paysData.sort(function(a, b) {
            return a.population - b.population;
        });
    }

    // Réaffichage du tableau avec les données triées
    afficherTableau();
}
