//Test d'un ficher serveur avec Bun

import index from "./tp08-affichage-json.html";

Bun.serve({
  routes: {
    "/": index,
  },
  port: 3000,
  development: {
    hmr: true,
    console: true,
  }
});

console.log("Serveur lancé sur http://localhost:3000");
