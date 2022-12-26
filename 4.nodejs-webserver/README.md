# NodeJS: Serveur Web

![Image du cours: NodeJS: CLI](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/4.nodejs-webserver/nodejs-webserver.png)

Dans ce chapitre, nous allons apprendre à créer un serveur Web avec Node.js et à gérer les requêtes et les réponses HTTP. Exemples: des chat en ligne, des jeux en ligne ou des applications de streaming de données en temps réel.

[Suivre tous les tutoriels sur mon site:](https://djemai-samy.com/posts/0.nodejs-initiation)

- [NodeJS: Introduction](https://djemai-samy.com/posts/1.nodejs-introduction.article)
- [NodeJS: Files System](https://djemai-samy.com/posts/2.nodejs-files.article)
- [NodeJS: Programmation de CLI](https://djemai-samy.com/posts/3.nodejs-cli.article)
- [NodeJS: Serveurs Web](https://djemai-samy.com/posts/4.nodejs-webserver.article)

## Prérequis

Il est conseillé d'avoir suivi la serie:

- [Javascript: Initation](https://djemai-samy.com/posts/0.js-inititation)

---

## C'est quoi un serveur web ?

Un **serveur web** est un **ordinateur** ou un **logiciel** qui sert de **plateforme pour l'hébergement de sites web**.

Lorsqu'un utilisateur **accède à un site web en utilisant un navigateur**, il **envoie une requête HTTP au serveur web**.

Le **serveur web répond en renvoyant les données du site web** au navigateur, qui les **affiche à l'écran**.

Il existe de **nombreux types de serveurs web**, tels que **Apache**, **Nginx** et **Microsoft IIS**, qui peuvent être **utilisés pour héberger des sites** web de différentes tailles et types.

**NodeJS** est particulièrement **populaire pour la création de serveurs web** et d'applications web en temps réel grâce à son **modèle d'exécution basé sur les événements** et à son **utilisation de nombreux processus légers** pour gérer de **nombreuses connexions simultanées**.

![Exemple illustration de comment internet fonctionne, et comment les appareils sont connectés entre eux.](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/4.nodejs-webserver/node-server.svg)

---

## Création d'un serveur HTTP

Pour **créer un serveur HTTP** avec Node.js, nous allons **utiliser le module** `http` intégré.

Voici comment **créer un serveur qui écoute sur le port 8000** :

```js
const http = require("http");

const server = http.createServer((req, res) => {
 console.log("Requète HTTP reçue!");
});

server.listen(8000);
```

Le **serveur HTTP** est **créé en utilisant la méthode** `createServer` du **module http**, qui **prend en paramètre** une **fonction de rappel** (également appelée `handler`).

Cette fonction est **appelée chaque fois qu'une requête est reçue** par le serveur.

Elle **prend en paramètres** les **objets** `req` (la requête) et `res` (la réponse).

Vous pouvez maintenant **lancer votre script** en **ouvrant un terminal** dans le **bon dossier** et en **exécutant la commande** :

```js
node index.js
```

Votre **serveur est accéssible** à l'**addresse IP** `localhost` ou `127.0.0.1` sur le **port** `8000`.

Pour **tester si votre serveur fonctionne**, vous pouvez y **accèder en utilisant votre navigateur**:

[http://localhost:8000](http://localhost:8000)

---

Pour rappel: **Localhost** est une **adresse IP spéciale** qui **pointe** vers votre **ordinateur local**.

Lorsque vous utilisez `localhost` **pour accéder à un site web**, votre **navigateur envoie une requête** au **serveur web sur votre ordinateur local**, plutôt qu'à un serveur distant sur Internet.

Cela est utile lorsque vous **développez un site web** et que vous voulez le **tester sur votre ordinateur** avant de le **mettre en ligne**.

Pour **accéder à un site web en utilisant localhost**, vous devez utiliser une **adresse de la forme** `http://localhost:port`, où `port` est le **numéro de port** sur lequel le serveur web est **en train d'écouter les requêtes**.

---

## Gestion des requêtes et des réponses

Lorsqu'une **requête est reçue** par le serveur, vous pouvez **accéder à diverses informations sur la requête** en **utilisant l'objet** `req`.

Voici quelques exemples d'**informations que vous pouvez récupérer** :

- `req.method` : la méthode HTTP utilisée (par exemple, `GET`, `POST`, `PUT`, etc.).
- `req.url` : l'URL de la requête.
- `req.headers` : les en-têtes de la requête.

Et vous pouvez **utiliser l'objet** `res`, **reçu en paramètre** pour **configurer** la reponse HTTP et **l'envoyer**.

---

### Envoyer une réponse

Pour **envoyer une réponse au client**, vous pouvez **utiliser l'objet** `res`.

Voici comment **envoyer une réponse** simple avec un **code de statut** `200` et un **corps de texte** :

```js
res.statusCode = 200;
res.setHeader("Content-Type", "text/plain");
res.end("Hello World");
```

Vous pouvez **tester votre serveur** de plusieurs manières:

En utilisant **votre navigateur** pour des **requêtes simples** comme dans l'exemple précédent.

![Exemple de requete envoyer en utulisant le navigateur.](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/4.nodejs-webserver/browser-request-exemple.png)

En utilisant **des logiciels graphiques** comme [**Postman, qui permet de tester vos API facilement**.](https://www.postman.com/)

![Exemple de requete envoyer en utulisant Postman.](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/4.nodejs-webserver/postman-request-exemple.png)

---

### Routage des requêtes

Le **routage des requêtes** consiste à **associer une requête** à **une action spécifique** en utilisant les informations de l'url, comme par exemple la **méthode HTTP** utilisées:

```js
if (req.method === "GET") {
 res.end("Requete GET reçue!");
 return;
}

if (req.method === "POST") {
 res.end("Requete POST reçue!");
 return;
}
```

---

### Gestion des paramètres

Vous pouvez **utiliser une expression régulière** ou une **fonction de parsing** de l'URL comme `url.parse` pour **analyser l'URL** de la requête et **récupérer les paramètres** de la requête.

Par exemple, pour connaitre les **valeurs envoyées** dans l'URL d'une requête `GET`, vous pouvez **utiliser le module** `querystring`.

```js
//import du module
const querystring = require("querystring");
```

Voici comment **récupérer les paramètres** d'une requête `GET` sous cette forme:

[http://localhost:8000?nom=Doe&prenom=John](http://localhost:8000?nom=Doe&prenom=John)

```js
//Dans le callback de la méthode createServer:

const params = querystring.parse(req.url.split("?")[1]); // {nom:"Doe", prenom:"John"}

res.end(`Bonjour, ${params.prenom} ${params.nom}`);
```

![Exemple de reponse d'un requête HTTP GET avec des paramètres depuis un navigateur.](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/4.nodejs-webserver/browser-request-params-exemple.png)

---

### Envoi de fichiers

Souvent les **serveur web envoie des fichiers** `HTML`, `CSS` et `JavaScript` au **navigateur** pour afficher le site web.

Ajouté un fichier html à la racine de votre projet:

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>une page web</title>
 </head>
 <body>
  <h1>une page web</h1>
  <p>Une page web servit depuis votre serveur !</p>
 </body>
</html>
```

---

Pour **envoyer un fichier au client** à **partir de votre serveur**, vous pouvez **utiliser la méthode** `readFile` du module `fs` pour **lire le fichier** et **la méthode** `send` de l'objet `res` pour **envoyer le contenu du fichier au client**.

Voici comment **envoyer le fichier** `index.html` dans votre script:

```js
// Ajout de l'import du module fs
const fs = require("fs");

// Dans la fonction callback
fs.readFile("index.html", (err, data) => {
 res.statusCode = 200;
 res.setHeader("Content-Type", "text/html");
 res.end(data);
});
```

![Exemple de reponse statique d'une requête HTTP GET .](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/4.nodejs-webserver/browser-request-html-exemple.png)

---

Il est également possible d'**envoyer des fichiers statiques** à partir **d'un dossier spécifique**.

Utiles pour **servir des fichiers CSS, Javascript, des images, vidéos**...

Voici un **exemple de gestion manuelle** de l'**envoi de fichiers statiques** à partir d'**un dossier** nommé `public` :

```bash

📦public
┣ 📜style.css
┣ 📜index.html
┗ 📜script.js

```

Le fichier HTML:

```js
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Une page web</title>

<!--Lier notre fichier ccs servit depuis localhost-->
<link rel="stylesheet" href="./style.css">
</head>
<body>
<h1>Une page web</h1>
<p>Une page web servit depuis votre serveur !</p>

<!--Lier notre fichier js servit depuis localhost-->
<script src="./script.js"></script>
</body>
</html>
```

Le fichier CSS:

```css
h1 {
 color: red;
}
```

Le fichier JavaScript:

```js
console.log("Hello world!");
```

Dans notre script **utilisons la méthode** `readFile` du module `fs` pour **lire le contenu du fichier**, en **vérifiant si le fichier** demandé par le client **existe**.

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
 // Construit le chemin du fichier pour la ressource demandée en enlevant la chaîne de requête
 const filePath = ("./public/" + req.url).split("?")[0];

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
```

![Accéder a des resource statique en utilisant le navigateur et un serveur web avec NodeJS.](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/1.nodejs-initiation/4.nodejs-webserver/browser-request-statique.png)

---

## Conclusion

En résumé, dans ce chapitre, nous avons **appris à créer un serveur HTTP** avec Node.js, à **gérer les requêtes** et les **réponses HTTP**, à **router les requêtes** et à **gérer les paramètres de requête**, et à **envoyer des fichiers au client** à partir de notre serveur.

Vous êtes maintenant **prêt à créer votre propre serveur web** avec Node.js !

Dans notre **prochain article**, nous allons découvrir comment**créer et gérer nos propres packages** Node.js et comment **utiliser des librairies externes** pour **étendre les fonctionnalités** de NodeJS.

Nous verrons **comment créer un package** Node.js en utilisant `npm init`, comment **publier notre package** sur le registre npm, et **comment utiliser des packages tiers** dans notre projet.

---

## Aller plus loin

[Précédent: NodeJS: Command Line](https://djemai-samy.com/posts/3.nodejs-cli.article)

[Suivant: NodeJS: Les packages](https://djemai-samy.com/posts/5.nodejs-packages.article)
