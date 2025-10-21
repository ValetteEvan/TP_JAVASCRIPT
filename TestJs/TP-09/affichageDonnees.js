
window.chargerDonneesPays = function() {
    var xhr = new XMLHttpRequest();
    var url = "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies";

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var donnees = JSON.parse(xhr.responseText);
            afficherPays(donnees);
        } else if (xhr.readyState === 4) {
            document.getElementById("resultat").innerHTML =
                "<p style='color: red; text-align: center;'>Erreur lors du chargement des données (Status: " + xhr.status + ")</p>";
        }
    };
    xhr.send();
}

function afficherPays(pays) {
    var html = "";
    for (var i = 0; i < pays.length; i++) {
        var p = pays[i];

        html += "<div class='pays'>";
        if (p.flag) {
            html += "<img src='" + p.flag + "' alt='Drapeau de " + p.name + "'>";
        }
        html += "<h3>" + p.name + "</h3>";
        if (p.region) {
            html += "<div class='info'><span class='label'>Région:</span> " + p.region + "</div>";
        }
        if (p.population) {
            html += "<div class='info'><span class='label'>Population:</span> " +
                    p.population.toLocaleString('fr-FR') + " habitants</div>";
        }
        if (p.languages && p.languages.length > 0) {
            html += "<div class='info'><span class='label'>Langues:</span> ";
            var langues = [];
            for (var j = 0; j < p.languages.length; j++) {
                langues.push(p.languages[j].name);
            }
            html += langues.join(", ") + "</div>";
        }
        if (p.currencies && p.currencies.length > 0) {
            html += "<div class='info'><span class='label'>Monnaies:</span> ";
            var monnaies = [];
            for (var k = 0; k < p.currencies.length; k++) {
                var monnaie = p.currencies[k].name;
                if (p.currencies[k].symbol) {
                    monnaie += " (" + p.currencies[k].symbol + ")";
                }
                monnaies.push(monnaie);
            }
            html += monnaies.join(", ") + "</div>";
        }

        html += "</div>";
    }
    document.getElementById("resultat").innerHTML = html;
}
