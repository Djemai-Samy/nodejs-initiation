# nodejs-initiation

![Image du cours: NodeJS: Files System](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/2.nodejs-files/nodejs-files.png)

Dans cette série d'articles, vous apprendrez à utiliser Node.js pour de nombreuses choses, notamment développer des applications web côté serveur, créer des API, connecter des bases de données et gérer des fichiers sur le serveur, ainsi que créer des outils en ligne de commande.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.nodejs-initiation)

- [NodeJS: Introduction](https://djemai-samy.com/posts/1.nodejs-introduction.article)
- [NodeJS: Files System](https://djemai-samy.com/posts/2.nodejs-files.article)

## Prérequis

Il est conseillé d'avoir suivi les series:

- [Javascript: Initation](https://djemai-samy.com/posts/0.js-inititation)

---

## Pourquoi utiliser la gestion de fichier et dossier ?

Il y a de **nombreuses raisons** pour lesquelles vous pourriez avoir besoin de **gérer des fichiers et des dossiers** dans votre travail de développeur web. Voici quelques exemples:

- **Stocker et accéder à des données**: Vous pouvez utiliser des fichiers pour stocker et accéder à des données telles que des **bases de données**, **des images**, **des vidéos**, **des documents**, etc.
- **Automatiser des tâches**: Vous pouvez écrire du code qui effectue **automatiquement certaines tâches de gestion de fichiers et de dossiers**, comme la **création de dossiers**, la **copie de fichiers**, la **suppression de fichiers obsolètes**, etc. Cela peut vous faire gagner du temps et de l'énergie.
- **Créer des applications de bureau**: Vous pouvez utiliser Node.js et l'API de fichiers de Node.js pour **créer des applications de bureau qui fonctionnent sur votre ordinateur** et qui ont besoin de **manipuler des fichiers et des dossiers**.

---

## Chemin absolue et relatif

Un **chemin absolu** est un **chemin complet** vers un fichier ou un dossier sur votre ordinateur qui **commence à la racine** de votre système de fichiers.

Par exemple, le **chemin absolu** vers le dossier `Documents` sur un ordinateur Windows pourrait ressembler à ceci: `C:\Utilisateurs\NomUtilisateur\Documents`.

Un **chemin relatif**, en revanche, est un **chemin qui se réfère** à un fichier ou un dossier **par rapport à l'emplacement actuel** du fichier ou du dossier où vous êtes.

Par exemple, si vous êtes dans le dossier "Documents" et que vous voulez accéder au dossier `Images` à l'intérieur de celui-ci, vous pouvez utiliser le **chemin relatif** `./Images`.

Voici quelques exemples de chemins relatifs:

- `.` signifie l'**emplacement actuel**. Par exemple, si vous êtes dans le dossier `Documents`, `.` signifie le dossier "Documents".
- `..` signifie le **dossier parent**. Par exemple, si vous êtes dans le dossier `Documents/Images`, `..` signifie le dossier "Documents".

---

Pour utiliser les **chemins absolus et relatifs** dans votre **code Node.js**, vous pouvez utiliser la **fonction** `path.resolve()` de l'**API de chemin** de Node.js.

Cette **fonction prend en entrée** un **chemin relatif** et **renvoie le chemin absolu** correspondant. Par exemple:

```js
const path = require("path");

// Renvoie le chemin absolu vers le dossier "Documents"
const cheminAbsolu = path.resolve("C:\\Utilisateurs\\NomUtilisateur\\Documents");

// Renvoie le chemin absolu vers le dossier "Images" à l'intérieur du dossier "Documents"
const cheminRelatif = path.resolve("..\\Images");
```

En utilisant la **fonction** `path.resolve()`, vous pouvez facilement **convertir les chemins absolus** et **relatifs** en chemins absolus et **utiliser ces chemins absolus dans votre code** Node.js pour **accéder à des fichiers et des dossiers**.
</Block>

---

Il est également important de noter que les **chemins absolus et relatifs** peuvent être **utilisés dans différents systèmes d'exploitation**, tels que **Windows**, **MacOS** et **Linux**.

Cependant, il y a **quelques différences** dans la manière dont les **chemins sont écrits** sur chaque système d'exploitation.

Par exemple, sur **Windows**, les chemins sont **séparés par** des `\` tandis que sur **MacOS** et **Linux**, ils sont **séparés par** des `/`.

Voici **comment écrire quelques chemins courants** sur **différents systèmes** d'exploitation:

**Windows**: `C:\Utilisateurs\NomUtilisateur\Documents`

**MacOS** et **Linux**: `/Utilisateurs/NomUtilisateur/Documents`

Il est important de **tenir compte de ces différences** lorsque vous **écrivez du code** qui doit être **compatible avec différents systèmes** d'exploitation.

Vous pouvez **utiliser la fonction** `path.sep` de l'**API de chemin** de Node.js pour vous aider à **écrire des chemins** qui sont **compatibles avec différents systèmes** d'exploitation. Par exemple:

```js
const path = require("path");

const chemin = `.${path.sep}Documents${path.sep}Images`;
```

En utilisant la fonction `path.resolve()`, vous pouvez facilement convertir les chemins absolus et relatifs en chemins absolus et utiliser ces chemins absolus dans votre code Node.js pour accéder à des fichiers et des dossiers.

---

## Gestion des fichier

Dans ce chapitre, nous allons vous montrer **comment lire, créer, écrire et supprimmer des fichiers** avec Node.js en utilisant l'**API de fichiers** de Node.js.

---

### Lecture de fichier

Pour **lire un fichier** avec Node.js, vous pouvez **utiliser la fonction** `fs.readFile()` de l'**API de fichiers** de Node.js.

```js
const fs = require("fs");

fs.readFile("./textes/fichier.txt", (err, data) => {
 if (err) {
  console.error(err);
 } else {
  console.log(data);
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le fichier que vous voulez lire et un **callback qui sera exécuté** une fois que le fichier a été lu.

Le **callback prend en entrée deux paramètres**:

`err` et `data`. Si la **lecture du fichier a réussi**, `err` sera `null` et `data` contiendra les données du fichier sous forme de `Buffer`.

Si la **lecture du fichier a échoué**, `err` contiendra l'erreur et `data` sera `undefined`.

Ecriture de fichier

Pour **écrire dans un fichier** avec Node.js, vous pouvez **utiliser la fonction** `fs.writeFile()` de l'**API de fichiers** de Node.js.

```js
const fs = require("fs");

const data = "Contenu à écrire dans le fichier";

fs.writeFile("./dossier/fichier.txt", data, (err) => {
 if (err) {
  console.error(err);
 } else {
  //Écriture réussie !
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le fichier que vous voulez lire, les **données que vous voulez écrire** et un **callback qui sera exécuté** une fois que les données ont été écrites.

Le **callback prend en entrée un paramètre**:

`err`: Si la **lecture du fichier a réussi**, `err` sera `null`.

Si la **lecture du fichier a échoué**, `err` contiendra l'**erreur**.

---

Si le **fichier n'existe pas**, un **nouveau fichier sera créer** avec le contenu préciser en paramètre. Le code suivant permet de créer un nouveau fichier:

```js
const fs = require("fs");

const data = "Contenu à ajouter au nouveau fichier";

fs.appendFile("./textes/nouveau_fichier.txt", data, (err) => {
 if (err) {
  console.error(err);
 } else {
  // Ajout réussi !
 }
});
```

Il est important de noter que lorsque vous utilisez `fs.writeFile()` pour écrire dans un fichier, cette fonction **remplacera le contenu du fichier** par les données que vous lui passez.

---

Si vous voulez **ajouter du contenu au fichier sans supprimer** le contenu existant, vous pouvez **utiliser la fonction** `fs.appendFile()` de l'**API de fichiers** de Node.js.

Cette fonction fonctionne de la même manière que `fs.writeFile()`, mais **au lieu de remplacer** le contenu du fichier, elle **ajoute le nouveau contenu** à la fin du fichier.

```js
const fs = require("fs");

const data = "Nouveau contenu à ajouter au fichier";

fs.appendFile("./textes/fichier.txt", data, (err) => {
 if (err) {
  console.error(err);
 } else {
  // Ajout réussi !
 }
});
```

---

### Supprimer un fichier

Pour **supprimer un fichier** avec Node.js, vous pouvez **utiliser la fonction** `fs.unlink()` de l'**API de fichiers** de Node.js.

```js
const fs = require("fs");

fs.unlink("./textes/fichier_a_supprimer.txt", (err) => {
 if (err) {
  console.error(err);
 } else {
  // Suppression réussie !
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le fichier que vous voulez supprimer et un **callback qui sera exécuté** une fois que le fichier a été lu.

Le **callback prend en entrée un paramètre**:

`err`: Si la **suppression du fichier a réussi**, `err` sera `null` . Si la **suppression du fichier a échoué**, `err` contiendra l'erreur.

---

## Gestion de dossiers

Nous allons vous montrer ici comment naviguer dans les dossiers avec Node.js en utilisant l'API de fichiers de Node.js.

---

### Contenu d'un dossier

Pour **lister les fichiers et les dossiers d'un dossier** avec Node.js, vous pouvez **utiliser la fonction** `fs.readdir()` de l'**API de fichiers** de Node.js.

```js
const fs = require("fs");

fs.readdir("./textes", (err, files) => {
 if (err) {
  console.error(err);
 } else {
  console.log(files); // ["fichier.txt", "nouveau_fichier.txt",...]
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le fichier que vous voulez lire et un **callback qui sera exécuté** une fois que la liste des fichiers et dossiers a été obtenue.

Le **callback prend en entrée deux paramètres**:

`err` et `files`. Si la **lecture du fichier a réussi**, `err` sera `null` et `data` contiendra un tableau avec la liste des fichiers et dossiers du dossier.

Si la **lecture du fichier a échoué**, `err` contiendra l'erreur et `files` sera `undefined`.

---

### Créer un dossier

Pour **créer un dossier** avec Node.js, vous pouvez **utiliser la fonction** `fs.mkdir()` de l'**API de fichiers** de Node.js.

```js
const fs = require("fs");

fs.mkdir("./textes/nouveau_dossier", (err) => {
 if (err) {
  console.error(err);
 } else {
  // Création réussie !
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le dossier que vous voulez créer et un **callback qui sera exécuté** une fois que le dossier a été créé.

Le **callback prend en entrée deux paramètres**:

`err`: Si la **création du dossier a réussi**, `err` sera `null`. Si la **création du dossier a échoué**, `err` contiendra l'erreur.

---

### Supprimer un dossier

Pour **supprimer un dossier** avec Node.js, vous pouvez **utiliser la fonction** `fs.rmdir()` de l'**API de fichiers** de Node.js.

```js
const fs = require("fs");

fs.rmdir("./textes/dossier_a_supprimer", (err) => {
 if (err) {
  console.error(err);
 } else {
  // Suppression réussie !
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le dossier que vous voulez supprimmer et un **callback qui sera exécuté** une fois que le dossier a été supprimmé.

Le **callback prend en entrée deux paramètres**:

`err`: Si la **suppression du dossier a réussi**, `err` sera `null`. Si la **suppression du dossier a échoué**, `err` contiendra l'erreur.

---

## Autres opérations

Nous allons vous présenter quelques **autres opérations de gestion de fichiers et de dossiers utiles** que vous pouvez effectuer avec Node.js

---

### Vérifier l'existence

Pour **vérifier si un fichier ou un dossier existe** avec Node.js, vous pouvez **utiliser la fonction** `fs.exists()` de l'**API de fichiers** de Node.js.

```js
const fs = require("fs");

fs.exists("./texte/fichier.txt", (exists) => {
 if (exists) {
  //Le fichier existe !
 } else {
  //'Le fichier n'existe pas.
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le fichier que vous voulez lire et un **callback qui sera exécuté** une fois que la liste des fichiers et dossiers a été obtenue.

Le **callback prend en entrée deux paramètres** `exists`:

**Si le fichier ou le dossier existe**, `exists` sera `true`.

**Si le fichier ou le dossier n'existe pas**, `exists` sera `false`.

---

### Renommer un fichier ou dossier

Pour **renommer un fichier ou un dossier existe** avec Node.js, vous pouvez **utiliser la fonction** `fs.rename()` de l'**API de fichiers** de Node.js.
</Block>

```js
const fs = require("fs");

fs.rename("./textes/ancien_nom.txt", "./textes/nouveau_nom.txt", (err) => {
 if (err) {
  console.error(err);
 } else {
  // Renommage réussi !
 }
});
```

Cette fonction **prend en entrée un chemin absolu ou relatif** vers le fichier que que vous voulez renommer, le nouveau nom et un **callback qui sera exécuté** une fois que la liste des fichiers et dossiers a été obtenue.

Le **callback prend en entrée un paramètres** `err`:

**Si le renommage a réussi**, `err` sera `null`.

**Si le renommage a échoué**, `err` contiendra l'erreur.

La fonction peut également être utilisée pour déplacer un fichier ou un dossier en spécifiant un nouveau chemin absolu ou relatif pour le fichier ou le dossier.

Il existe encore de **nombreuses autres opérations** de gestion de fichiers et de dossiers que vous pouvez **effectuer avec l'API de fichiers** de Node.js, comme **copier des fichiers**, **obtenir des informations** sur des fichiers (taille, date de modification, etc.), etc.

Pour **en savoir plus sur ces opérations**, vous pouvez consulter [**la documentation de l'API de fichiers de Node.js**](https://nodejs.org/api/fs.html).

---

## Conclusion

Dans ce cours, nous avons vu comment **gérer des fichiers et des dossiers** avec Node.js en utilisant l'**API de fichiers** de Node.js.

Nous avons vu comment **lire** et **écrire des fichiers**, comment **naviguer dans les dossier**s, comment **créer** et **supprimer des fichiers** et **des dossiers**, et quelques autres opérations utiles de gestion de fichiers et de dossiers.

Grâce à ces connaissances, vous devriez maintenant être en mesure de **gérer facilement des fichiers et des dossiers** sur votre ordinateur avec Node.js.

---

## Aller plus loin

[Précédent: NodeJS: Introduction](https://djemai-samy.com/posts/1.nodejs-introduction.article)

[Suivant: NodeJS: Programmer des CLI](https://djemai-samy.com/posts/3.nodejs-cli.article)
