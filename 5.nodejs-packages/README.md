# NodeJS: Les packages

![Image du cours: NodeJS: Les packages](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/5.nodejs-packages/nodejs-packages.png)

Cours sur la création et la gestion de packages Node.js. Dans ce cours, nous allons apprendre à créer et à publier nos propres packages Node.js sur le registre npm, ainsi qu'à utiliser des librairies externes pour étendre les fonctionnalités de notre projet.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.nodejs-initiation)

- [NodeJS: Introduction](https://djemai-samy.com/posts/1.nodejs-introduction.article)
- [NodeJS: Files System](https://djemai-samy.com/posts/2.nodejs-files.article)
- [NodeJS: Programmation de CLI](https://djemai-samy.com/posts/3.nodejs-cli.article)
- [NodeJS: Serveurs Web](https://djemai-samy.com/posts/4.nodejs-webserver.article)
- [NodeJS: Les packages](https://djemai-samy.com/posts/5.nodejs-packages.article)

## Prérequis

Il est conseillé d'avoir suivi la serie:

- [Javascript: Initation](https://djemai-samy.com/posts/0.js-inititation)

---

## Introduction aux packages

Un **package Node.js** est un **module de code JavaScript** qui peut être **utilisé dans plusieurs projets** différents.

**Les packages sont publiés sur le registre npm**, qui est le **dépôt de packages** JavaScript le plus populaire au monde.

npm est **inclus dans l'installation de Node.js** et peut être utilisé pour **installer**, **mettre à jour** et **utiliser** des packages Node.js.

---

Il existe **plusieurs types de packages** Node.js, chacun ayant sa propre utilisation :

- Les **packages de bibliothèques** : Ces packages contiennent du **code réutilisable** qui peut être **utilisé pour effectuer des tâches spécifiques**, telles que **manipuler des chaînes de caractères**, **travailler avec des dates** ou **gérer des erreurs**.

- Les **packages de scripts** : Ces packages contiennent des **scripts exécutables** qui peuvent être **utilisés pour automatiser des tâches**, comme la **génération de code** ou le **linting**.

---

Voici quelques exemples de packages Node.js populaires :

- [**Lodash**](https://lodash.com/): une bibliothèque de fonctions utilitaires pour manipuler des tableaux, des chaînes de caractères et des objets.
- [**Express**](https://expressjs.com/fr/): une bibliothèque de fonctions utilitaires pour manipuler des tableaux, des chaînes de caractères et des objets.
- [**React**](https://fr.reactjs.org/): Une bibliothèque JavaScript pour créer des interfaces utilisateurs.
- [**Create React App**](https://create-react-app.dev/): un script pour génerer une template basique avec un environnement confortable pour apprendre React.

---

## Création de packages

Pour **créer un package Node.js**, vous devez d'abord **initialiser un nouveau projet** npm en utilisant la commande `npm init`.

Cette commande vous guidera à travers le **processus de création d'un fichier** `package.json`, qui **contient les informations** sur votre package, telles que son `nom`, sa `version`, ses `dépendances` et ses `scripts`.

---

### package.json

Le fichier package.json est un **fichier de configuration** qui se trouve à la **racine de chaque projet** Node.js.

Il contient des **informations sur le package**, telles que son **nom**, sa **version**, ses **dépendances** et ses **scripts**.

Voici quelques-unes des **informations** que vous pouvez **inclure dans votre fichier** `package.json` :

- `name` : le **nom de votre package**. Il **doit être unique** sur le registre npm et **ne doit pas contenir de caractères spéciaux** ou de **majuscules**.

- `version` : la **version actuelle de votre package**. Elle doit être **au format x.y.z**, où x, y et z sont des nombres entiers. La **version doit être mise à jour** chaque fois que vous **publiez une nouvelle version** de votre package.

- `description` : une **brève description de votre package**.

- `main` : indique le **fichier principal** de votre package. Lorsque votre package est **utilisé dans un autre projet**, ce fichier sera **automatiquement chargé**.

- `dependencies` : une **liste des packages dont votre package dépend**. Ces packages seront **automatiquement installés** lorsque vous **utiliserez** `npm install` dans votre projet.

- `devDependencies` : une **liste des packages qui ne sont nécessaires que pour le développement** de votre package, comme les **outils de build** ou de **test**. Ces packages **ne seront pas installés** lorsque vous utiliserez `npm install` dans un projet qui utilise votre package.

- `scripts` : une **liste de scripts exécutables** dans votre projet. Vous pouvez **définir des scripts pour effectuer des tâches spécifiques**, comme la **compilation de code** ou **les tests**. Vous pouvez **exécuter un script** en utilisant la **commande** `npm run nom-du-script`.

Voici un exemple simple de ficher package.json:

```json
{
 "name": "exemple-package",
 "version": "1.0.0",
 "description": "Un exemple de package",
 "author": "Djemai Samy"
}
```

---

### Créer et utiliserune librairie

Pour l'exemple, nous allons **créer une librairie simple** et l'**utiliser dans un autre projet**.

---

#### Créer le package

Notre librairie **fournira deux méthodes** pour **additionner** et **soustraire** deux nombres.

Commençons par **créer un dossier** nommé `math-librairie` et **initialiser un fichier** `package.json` à l'intérieur :

```json
{
"name": "math-librairie",
"version": "1.0.0",
"description": "Fonctions pour additionner ou soutaire deux nombre",
"main": "index.js"
"author": "Djemai Samy"
}
```

Ici, nous avons **précisé le fichier principal à charger**, `index.js`, situé à la racine.

Il s'agira du fichier qui **exportera les fonctions** `add` et `sub`:

```js
module.exports = {
 add: (a, b) => a + b,
 sub: (a, b) => a - b,
};
```

---

#### Utiliser le package

Pour pouvoir **installer et utiliser** notre package dans un **autre dossier de l'ordinateur**, nous devons d'abord **initialiser** un `package.json` avec la **commande**: `npm init`.

Ensuite, nous pouvons **installer la dépendance** avec **la commande** `npm install /chemin/vers/math-librairie`.

Une fois l'**installation terminée**, vous trouverez un **nouveau dossier créé automatiquement** par `npm`, `node_modules`, où le **code exporté** de notre package est situé.

Notre fichier `package.json` a également été **modifié automatiquement** pour **lister cette nouvelle dépendance** :

```json
{
"name": "exemple-utilisation-librairie",
"version": "1.0.0",
"description": "Exemple de projet qui utliserai la librairie 'math-librairie'.",
"dependencies": {
"math-librairie": "file: /chemin/vers/math-librairie"
}
"author": "Djemai Samy"
}
```

Vous pouvez maintenant **utiliser les fonction dans ce projet**, par exemple dans un fichier `index.js`:

```js
//Importer votre librairie comme un module
const { sub, add } = require("math-librairie");

//Utiliser les fonctions de la librairie
console.log(`1 + 2 = ${add(1, 2)}`);

console.log(`1 - 1 = ${sub(1, 1)}`);
```

Et **tester si ca fonctionne** en executant la command `node ./index.js`:

```console
1 + 2 = 3
1 - 1 = 0
```

---

### Créer et utiliser un script

Pour l'exemple, nous allons **créer un script qui demande à l'utilisateur le nom du projet**, puis **crée une structure de dossiers et de fichiers** pour un site web basique.

#### Créer le package script

Commençons par **créer un dossier** nommé `site-generator` et **initialiser un fichier** `package.json` à l'intérieur :

```json
{
 "name": "site-generator",
 "version": "1.0.0",
 "description": "Un script pour créer une structure de dossier pour un site web basique.",
 "bin": {
  "create-project": "./bin/create-script.js"
 },
 "author": "Djemai Samy"
}
```

Ici, nous avons **ajouté la clé** `bin` qui **liste toute les commandes** possibles ainsi que les **fichiers executés pour chaque commande**.

Dans notre exemple, nous avons **une seule commande** `create-project`, qui quand invoquée, **executera le script** du fichier `create-script.js` situé dans **dans le dossier** `bin`.

Nous allons **utiliser le code** vu dans le [**chapitre sur les lignes de commandes.**](https://djemai-samy.com/posts/3.nodejs-cli.article)

```js
# !/usr/bin/env node

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

```

---

#### Le rendre accéssible

Pour pouvoir **utiliser le script globalement** sur votre machine, vous pouvez **utiliser la commande** `npm link`.

La commande permet de **créer un lien symbolique** entre **votre package local** et le **répertoire global de votre système**, ce qui vous permet d'**utiliser votre script** comme s'il était **installé globalement** sur votre ordinateur.

---

#### Utiliser le script

Maintenant que **le script est installé globalement** sur votre machine, vous pouvez l'**utiliser** n'importe où en **tapant la commande** `create-project`.

---

## Publier un package

Pour **publier un package sur le registre npm**, vous devez d'abord **vous connecter à votre compte** npm en **utilisant la commande** `npm login`.

Entrez votre **nom d'utilisateur**, votre **mot de passe** et votre **adresse e-mail** lorsque vous êtes invité.

**Une fois connecté**, vous pouvez **publier votre package** en utilisant **la commande** `npm publish`.

---

Il est important de noter que **le nom de votre package doit être unique** sur le registre npm et **ne doit pas contenir de caractères spéciaux** ou de **majuscules**.

Si vous **tentez de publier un package avec un nom qui existe** déjà, npm vous indiquera qu'il existe déjà et **vous demandera de choisir un autre nom**.

---

Lorsque vous **publiez un package** sur npm, vous devez également **choisir une licence** sous laquelle il sera publié.

**La licence** détermine comment les utilisateurs peuvent **utiliser et réutiliser votre package**.

Il existe de **nombreuses licences différentes**, telles que la **licence MIT**, la **licence Apache 2.0** et la **licence GPL**.

Choisissez une **licence qui convient à vos besoins** et assurez-vous de la **mentionner dans votre fichier** `package.json`.

---

Une fois votre **package publié** sur npm, il sera **disponible pour tous les utilisateurs** de npm.

Les **utilisateurs peuvent l'installer** en utilisant **la commande** `npm install nom-du-package`.

Ils peuvent également **accéder à votre code** et à la **documentation de votre package** sur le site web npm.

---

## Conclusion

Les **packages avec Node.j**s sont une partie importante de l'écosystème Node.js et de l'univers de la développement de serveur web.

Ils vous **permettent de créer et de partager vos propres modules**, ainsi que de tirer parti de la communauté de développeurs en **utilisant des packages existants**.

En suivant ce cours, vous avez appris à **créer et à publier vos propres packages**, ainsi qu'à **utiliser des packages existants dans vos projets**.

Vous êtes maintenant prêt à **explorer d'autres librairies et frameworks** populaires, comme **Express** et **React**, qui vous permettront de **développer des applications web complètes et performantes**.

---

## Aller plus loin

[Précédent: NodeJS: Serveur Web](https://djemai-samy.com/posts/4.nodejs-webserver.article)

[Bientôt: ExpressJS](https://djemai-samy.com/posts/0.nodejs)
