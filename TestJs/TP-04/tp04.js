const google = {
  nom: "Google",
  siegeSocial: "Googleplex, Mountain View, California, United States",
  fondateurs: [
    {
      nom: "Larry Page",
      dateNaissance: "26/03/1973",
      lieuNaissance: "East Lansing, Michigan",
    },
    {
      nom: "Sergey Brin",
      dateNaissance: "21/08/1973",
      lieuNaissance: "Moscou, Union Sovi�tique",
    },
  ],
  chiffreAffaires: [
    {
      annee: 2008,
      montant: 16.49,
    },
    {
      annee: 2012,
      montant: 37.97,
    },
    {
      annee: 2016,
      montant: 89.46,
    },
    {
      annee: 2018,
      montant: 136.2,
    },
  ],
};

console.log("=== Informations sur " + google.nom + " ===");
console.log("Siège social : " + google.siegeSocial);

console.log("\n=== Fondateurs ===");
for (let i = 0; i < google.fondateurs.length; i++) {
  const fondateur = google.fondateurs[i];
  console.log(
    "- " +
      fondateur.nom +
      ", n� le " +
      fondateur.dateNaissance +
      " � " +
      fondateur.lieuNaissance
  );
}

console.log("\n=== Chiffres d'affaires (en milliards de $) ===");
for (let i = 0; i < google.chiffreAffaires.length; i++) {
  const ca = google.chiffreAffaires[i];
  console.log("- " + ca.annee + " : " + ca.montant + " milliards $");
}
