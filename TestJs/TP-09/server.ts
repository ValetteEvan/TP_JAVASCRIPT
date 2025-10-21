import index from "./tp09-affichageDonnees.html";

Bun.serve({
  routes: {
    "/": index,
  },
  port: 3001,
  development: {
    hmr: true,
    console: true,
  }
});

console.log("🚀 Serveur TP-09 lancé sur http://localhost:3001");
