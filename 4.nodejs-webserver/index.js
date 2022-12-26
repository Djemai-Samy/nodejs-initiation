const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Construit le chemin du fichier pour la ressource demandée en enlevant la chaîne de requête
  const filePath = ("./public/"+req.url).split('?')[0];

  // Lit le fichier à l'emplacement spécifié
  fs.readFile(filePath, (err, data) => {
    
    // Si une erreur s'est produite lors de la lecture du fichier
    if (err) {
      
      //statut 404 indiquant que la ressourcen'a pas été trouvée
      res.statusCode = 404;
      res.end(`fichier introuvable!`);
      return;
    }

    res.statusCode = 200;
    // Envoie le contenu du fichier au client comme réponse
    res.end(data);
  });

});

server.listen(8000);
