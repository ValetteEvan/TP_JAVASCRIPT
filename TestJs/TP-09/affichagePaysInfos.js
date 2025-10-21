function chargerPaysInfos() {
  var req = new XMLHttpRequest();
  var url =
    "https://restcountries.com/v2/all?fields=name,capital,population,region";

  req.open("GET", url, true);

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      let data = JSON.parse(req.responseText);
      afficherPaysInfos(data);
    } else if (req.readyState === 4) {
      document.getElementById("resultat").innerHTML =
        "<p class='error'>Erreur lors du chargement des données (Status: " +
        req.status +
        ")</p>";
    }
  };
  req.send();
}

function afficherPaysInfos(data) {
  var html = "<table>";
  html += "<thead>";
  html += "<tr>";
  html += "<th>Pays</th>";
  html += "<th>Capitale</th>";
  html += "<th>Population</th>";
  html += "<th>Région</th>";
  html += "</tr>";
  html += "</thead>";
  html += "<tbody>";

  for (let i = 0; i < data.length; i++) {
    let nomPays = data[i].name;
    let capitale = data[i].capital || "N/A";
    let population = data[i].population;
    let region = data[i].region || "N/A";

    html += "<tr>";
    html += "<td><strong>" + nomPays + "</strong></td>";
    html += "<td>" + capitale + "</td>";
    html += "<td>" + population.toLocaleString("fr-FR") + " habitants</td>";
    html += "<td>" + region + "</td>";
    html += "</tr>";
  }

  html += "</tbody>";
  html += "</table>";

  document.getElementById("resultat").innerHTML = html;
}
