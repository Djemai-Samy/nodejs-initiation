
// 1. Chemin absolue et relatif

// Import du module 'path' de l'API de chemin
const path = require('path');

// Renvoie le chemin absolu vers le dossier "Documents"
const cheminAbsolu = path.resolve('C:\\Utilisateurs\\NomUtilisateur\\Documents');

// Renvoie le chemin absolu vers le dossier "Images" à l'intérieur du dossier "Documents"
const cheminRelatif = path.resolve('..\\Images');

// écrire des chemins qui sont compatibles avec différents systèmes
const chemin = `.${path.sep}Documents${path.sep}Images`;

//////

// 2. Gestion des fichier

// Import du module 'path' de l'API de fichiers
const fs = require('fs');

// 2.1 Lecture de fichier

fs.readFile('./textes/fichier.txt', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

// 2.2 Ecriture de fichier

const data = 'Contenu à écrire dans le fichier';

fs.writeFile('./textes/fichier.txt', data, (err) => {
  if (err) {
    console.error(err);
  } else {
   //Écriture réussie !
  }
});

// 2.3 Ajouté à un fichier

const newData = 'Contenu à ajouter au nouveau fichier';

fs.appendFile('./textes/nouveau_fichier.txt', newData, (err) => {
  if (err) {
    console.error(err);
  } else {
    // Ajout réussi !
  }
});

// 2.4 Créer un fichier

const newFileData = 'Nouveau contenu à ajouter au fichier';

fs.appendFile('./textes/fichier.txt', newFileData, (err) => {
  if (err) {
    console.error(err);
  } else {
    // Ajout réussi !
  }
});

// 2.5 Supprimer un fichier

fs.unlink('./textes/fichier_a_supprimer.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    // Suppression réussie !
  }
});

//////

// 3. Gestion des dossiers

// 3.1 Contenu d'un dossier
fs.readdir('./textes', (err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log(files); // ["fichier.txt", "nouveau_fichier.txt",...]
  }
});

// 3.2 Créer un dossier
fs.mkdir('./textes/nouveau_dossier', (err) => {
  if (err) {
    console.error(err);
  } else {
    // Création réussie !
  }
});

// 3.3 Supprimer un dossier
fs.rmdir('./textes/dossier_a_supprimer', (err) => {
  if (err) {
    console.error(err);
  } else {
    // Suppression réussie !
  }
});

// 4. Autres opérations

// 4.1 Vérifier l'existence
fs.exists('./textes/fichier.txt', (exists) => {
  if (exists) {
    console.error("Le fichier existe !");
  } else {
    console.error("Le fichier n'existe pas!");
  }
});

// 4.2 Renommer un fichier ou dossier
fs.rename('./textes/ancien_nom.txt', './textes/nouveau_nom.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    // Renommage réussi !
  }
});