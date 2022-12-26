#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est le nom de votre projet ? ', (projectName) => {
  // Création du dossier du projet
  fs.mkdirSync(projectName);

  // Création du fichier HTML
  fs.writeFileSync(`${projectName}/index.html`, `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${projectName}</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>${projectName}</h1>
    <script src="script.js"></script>
  </body>
  </html>
  `);

  // Création du fichier CSS
  fs.writeFileSync(`${projectName}/style.css`, `
  body {
    background-color: lightblue;
  }
  
  h1 {
    color: red;
    text-align: center;
  }
  `);

  // Création du fichier JavaScript
  fs.writeFileSync(`${projectName}/script.js`, `
  console.log('${projectName} fonctionne !');
  `);

  console.log(`Projet "${projectName}" généré avec succès !`);

  rl.close();
});