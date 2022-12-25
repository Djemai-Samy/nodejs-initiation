# NodeJS: Ligne de commande

![Image du cours: NodeJS: CLI](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/3.nodejs-cli/nodejs-cli.png)

L'interface en ligne de commande est un outil incontournable pour les développeurs.

Nous commencerons par les bases, comme un rappel sur l'utilisation de la ligne de commande, puis nous passerons à des sujets plus avancés tels que la création de scripts CLI et un exemple de génération de template.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.nodejs-initiation)

- [NodeJS: Introduction](https://djemai-samy.com/posts/1.nodejs-introduction.article)
- [NodeJS: Files System](https://djemai-samy.com/posts/2.nodejs-files.article)
- [NodeJS: Programmation de CLI](https://djemai-samy.com/posts/3.nodejs-cli.article)

## Prérequis

Il est conseillé d'avoir suivi la serie:

- [Javascript: Initation](https://djemai-samy.com/posts/0.js-inititation)

---

## Interface en ligne de commande

L'**interface en ligne de commande**, également connue sous le nom de **CLI** (Command Line Interface) ou **terminal**, est un **outil permettant** de **naviguer** et d'**exécuter des commandes** sur votre ordinateur.

Contrairement aux interfaces graphiques que nous utilisons habituellement, comme celles de nos navigateurs web ou de nos systèmes d'exploitation, l'interface en ligne de commande ne possède pas d'interface visuelle.

Elle **fonctionne** en **utilisant des commandes textuelles** que vous tapez **dans un terminal**.
</Block>

---

## Pourquoi utiliser la CLI

L'**interface en ligne de commande** est très pratique pour les développeurs car elle leur permet de **lancer rapidement des commandes** et d'**exécuter du code sur leur ordinateur** sans avoir à utiliser d'interface graphique.

De plus, elle est souvent utilisée pour **effectuer des tâches de développement avancées**, comme la **gestion de paquets** npm ou la **création de scripts CLI**.

Avec Node.js, vous pouvez **utiliser l'interface en ligne de commande** pour **exécuter du code JavaScript** sur votre ordinateur.

Cela peut être très pratique pour **tester rapidement du code** ou pour **créer des scripts automatisés**.

---

## Accéder à l'interface en ligne de commande

Pour **accéder à l'interface en ligne de commande** sur votre ordinateur, vous devez d'abord **ouvrir un terminal**.

- Sur **Windows**, vous pouvez le faire en **appuyant sur la touche** `Windows + R` et en tapant `cmd` dans la boîte de dialogue `Exécuter`.

- Sur **MacOS**, vous pouvez **ouvrir le terminal** en allant dans:

`Applications > Utilitaires > Terminal`.

![Exemple du terminal windows](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/3.nodejs-cli/terminal.svg)

Une fois le terminal ouvert, vous pouvez **utiliser la ligne de commande** pour **naviguer** dans votre ordinateur et **exécuter des commandes**.

Pour **connaître les commandes disponibles**, vous pouvez utiliser **la commande** `help`.

Si vous souhaitez **en savoir plus sur une commande spécifique**, vous pouvez **utiliser la commande** `man [nom de la commande]`.

---

## Comment créer un script CLI avec Node.js?

Pour **créer un script CLI** avec Node.js, vous devez d'abord **créer un fichier JavaScript** contenant votre code.

Pour que votre script **puisse être exécuté** à partir de la ligne de commande, vous devez **ajouter** une instruction **shebang** en tête de votre fichier.

Cette instruction **indique à l'ordinateur** quelle **application doit être utilisée** pour **exécuter le script**.

Pour Node.js, l'instruction "shebang" est la suivante:

`#!/usr/bin/env node`

Une fois que vous avez **ajouté cette instruction** en **tête de votre fichier**, vous pouvez **exécuter votre script** en utilisant la **commande** `node` **suivie du nom de votre fichier**.

Par exemple, si votre script s'appelle `myscript.js`, vous pouvez l'**exécuter en tapant** `node myscript.js` **dans votre terminal**.

---

## Prendre les entrées de l'utilisateur

La **bibliothèque readline** de Node.js est une bibliothèque standard qui **permet de lire et écrire** sur la console de **manière interactive**.

Elle **permet de créer une interface** de ligne de commande pour **demander des informations à l'utilisateur**, **afficher du texte** à l'écran et **gérer l'historique des commandes**.

Voici quelques exemples de fonctionnalités que vous pouvez utiliser avec la bibliothèque readline :

- `createInterface()` : **crée une interface de ligne de commande** qui permet de lire et écrire sur la console, Cette **méthode prend en paramètre** un **objet** qui **définit les options** de l'interface de ligne de commande, notamment les **flux de lecture et d'écriture**.
- `question()` : **affiche une question à l'utilisateur** et **attend une réponse**. Cette méthode **prend en paramètre** une **chaîne de caractères** qui **représente la question** et une **fonction de callback** qui sera **exécutée** une fois que l'utilisateur aura **saisi une réponse**.
- `write()` : **affiche du texte** à l'écran sans passer à la ligne suivante. Cette méthode **prend en paramètre** une **chaîne de caractères** qui **représente le texte à afficher**.

Voici un exemple simple qui utilise la bibliothèque readline de Node.js pour demander et afficher le prénom de l'utilisateur :

```js
// On importe la bibliothèque readline de Node.js
const readline = require("readline");

// On crée une interface de ligne de commande
const rl = readline.createInterface({
 input: process.stdin, // flux de lecture sera process.stdin (la console)
 output: process.stdout, // flux d'écriture sera process.stdout (la console)
});

// On demande le prénom de l'utilisateur
rl.question("Quel est votre prénom ? ", (firstName) => {
 // On affiche un message de bienvenue avec le prénom de l'utilisateur
 console.log(`Bonjour, ${firstName} !`);

 //On ferme l'interface de ligne de commande
 rl.close();
});
```

Dans le cas présent, nous avons défini `process.stdin` comme **flux de lecture** (ce qui signifie que l'**interface de ligne de commande** va **lire les données entrées** par l'utilisateur **sur la console**) et `process.stdout` comme **flux d'écriture** (ce qui signifie que l'**interface de ligne de commande** va **afficher du texte sur la console**).

---

## Exemple: Generateur de projet web personnalisé

Nous allons coder un **generateur de projet web personnalisé** qui demande le nom du projet à l'utilisateur et génère un projet web simple avec un fichier HTML, un fichier CSS et un fichier JavaScript.

**Créez un fichier JavaScript vide** et **ajoutez l'instruction "shebang"** en tête de votre fichier pour indiquer à l'ordinateur qu'il s'agit d'un script exécutable avec Node.js.
</Block>

---

### 1. Import du module fs et readline

Pour pouvoir **créer des fichier et dossier**, nous allons **utiliser le module** `fs`.

Pour pouvoir **prendre les entrées de l'utilisateur** depuis le terminal, nous allons **utiliser le module** `readline`.

```js
const fs = require("fs");
const readline = require("readline");
```

---

### 2. Créer une interface

Pour **prendre le nom du projet** depuis la console, nous allons **ajouter une interface**:
</Block>

```js
// On crée une interface de ligne de commande
const rl = readline.createInterface({
 input: process.stdin, // Le flux de lecture sera process.stdin (la console)
 output: process.stdout, // Le flux d'écriture sera process.stdout (la console)
});
```

---

### 3. Demandez à l'utilisateur le nom du projet

Nous allons **utiliser notre interface** pour **demander le nom du projet** à l'utilisateur.

```js
// On demande le nom du projet à l'utilisateur
rl.question("Quel est le nom de votre projet ? ", (projectName) => {});
```

Le reste du code sera dans la fonction callback:

---

### 5. Création du dossier et fichiers

- **Utilisez la bibliothèque** `fs` (File System) de Node.js pour **créer un dossier** avec le **nom du projet** fourni par l'utilisateur. Vous pouvez **utiliser la méthode** `fs.mkdirSync()` pour cela.

- Utilisez à nouveau la bibliothèque `fs` pour **créer les trois fichiers** HTML, CSS et JavaScript **dans le dossier créé précédemment**. Vous pouvez **utiliser les méthodes** `fs.writeFileSync()` pour **créer et écrire dans les fichiers**.

- Dans le **fichier HTML**, **utilisez le nom du projet** fourni par l'utilisateur pour **titrer la page** et **ajoutez une balise** `link` pour **inclure le fichier CSS** et une **balise** `script` pour **inclure le fichier JavaScript**.

- Dans le fichier CSS, **ajoutez quelques règles** de style pour **personnaliser l'apparence** de votre projet web.

- Dans le fichier JavaScript, **ajoutez du code** pour ajouter du comportement à votre projet web.

```js
// On crée le dossier du projet
fs.mkdirSync(projectName);

// On crée le fichier HTML
fs.writeFileSync(
 `${projectName}/index.html`,
 `<!DOCTYPE html>
<html>
<head>
<title>${projectName}</title>
</head>
<body>
<h1>Bienvenue sur le projet ${projectName} !</h1>
</body>
</html>`
);

// On crée le fichier CSS
fs.writeFileSync(
 `${projectName}/style.css`,
 `body {
background-color: lightblue;
}`
);

// On crée le fichier JavaScript
fs.writeFileSync(
 `${projectName}/script.js`,
 `console.log('Bienvenue sur le projet ${projectName} !');`
);
```

---

### 6. Fermeture de l'interface

Un fois le tout créer, nous pouvons fermé l'interface en utilisant la methodes `close`:

```js
// Message de fin
console.log(`Le projet "${projectName}" a été créé avec succès !`);

// On ferme l'interface de ligne de commande
rl.close();
```

Voici le code complet:

```js
// Import de la bibliothèque fs qui permet de manipuler les fichiers
const fs = require("fs");

// Import de la bibliothèque readline qui permet de lire et écrire sur la console
const readline = require("readline");

// On crée une interface de ligne de commande
const rl = readline.createInterface({
 input: process.stdin, // Le flux de lecture sera process.stdin (la console)
 output: process.stdout, // Le flux d'écriture sera process.stdout (la console)
});

// On demande le nom du projet à l'utilisateur
rl.question("Quel est le nom de votre projet ? ", (projectName) => {
 // On crée le dossier du projet
 fs.mkdirSync(projectName);

 // On crée le fichier HTML
 fs.writeFileSync(
  `${projectName}/index.html`,
  `
<!DOCTYPE html>
<html>
<head>
<title>${projectName}</title>
</head>
<body>
<h1>Bienvenue sur le projet ${projectName} !</h1>
</body>
</html>`
 );

 // On crée le fichier CSS
 fs.writeFileSync(
  `${projectName}/style.css`,
  `body {
background-color: lightblue;
}`
 );

 // On crée le fichier JavaScript
 fs.writeFileSync(
  `${projectName}/script.js`,
  `console.log('Bienvenue sur le projet ${projectName} !');`
 );

 console.log(`Le projet "${projectName}" a été créé avec succès !`);

 // On ferme l'interface de ligne de commande
 rl.close();
});
```
---

## Conclusion

Vous êtes maintenant familiarisé avec les **bases de l'interface en ligne de commande** et de l'**utilisation de Node.js pour exécuter du code JavaScript** sur votre ordinateur, ainsi que pour **créer des scripts CLI**.

Dans le **prochain articles**, nous allons nous intéresser au **développement de serveur web** avec Node.js, ce qui vous permettra de **créer des applications web complètes**.

---

## Aller plus loin

[Précédent: NodeJS: File System](https://djemai-samy.com/posts/2.nodejs-files.article)

[Suivant: NodeJS: Serveur Web](https://djemai-samy.com/posts/4.nodejs-webserver.article)
