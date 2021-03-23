# esgi-nodejs-partie-2-asynchrone
About Cours Node.jsCours Node.js - Partie 2 - Programmation asynchrone et requête à d'autres APIs

### Q1 : Afficher dans la console la réponse textuelle à cette requête HTTP GET
```
const request = require('request');

request('https://jsonplaceholder.typicode.com/photos/1', (error, response, body) => {

  // TODO: afficher dans la console la réponse textuelle à cette requête HTTP GET
  if (!error) {
      console.log(body);
  }
});

```

### Q2 : Sur la base de votre solution précédente, écrivez un programme Node.js qui:
- envoie une requête HTTP GET à un serveur qui n'existe pas;
- affiche dans la sortie standard l'erreur retournée par l'appel à request() suite à l'échec de cette requête.
```
const request = require('request');

request('https://serveur-inexistant.xyz', (error, response, body) => {

  // TODO: récupérer l'erreur de l'API puis l'afficher
  if (error) {
      console.log(error);
  }
});

```

### Q3 : Cette fois-ci, nous allons utiliser le module npm node-fetch qui emploie les Promesses (Promise) au lieu des fonctions de callback.
```
const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch

// TODO: compléter l'appel à fetch() pour afficher la réponse de l'API
fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(res => res.text())
    .then(body => console.log(body));

```

### Q4 : Sur la base de la solution à l'exercice précédent, nous allons envoyer une requête HTTP GET à un serveur qui n'existe pas et afficher dans la sortie standard l'erreur retournée par fetch() suite à l'échec de cette requête.
```
const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch

// TODO: compléter l'appel à fetch() pour afficher la réponse de l'API
fetch('https://serveur-inexistant.xyz')
    .then(res => res.text())
    .then(body => console.log(body))
    .catch(error => console.log(error));


```

### Q5 : Cette fois-ci, nous allons le mot clé await au lieu de la fonction .then().
```
const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch

(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/1');
    const body = await res.text();
    console.log(body);
})();

```

### Q6 : Sur la base de votre solution précédente, écrivez un programme Node.js qui:
- envoie une requête HTTP GET à un serveur qui n'existe pas;
- affiche dans la sortie standard l'erreur retournée par await fetch() suite à l'échec de cette requête.
```
const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch

(async () => {
    try {
        const res = await fetch('https://serveur-inexistant.xyz');
        const body = await res.text();
        console.log(body);
    } catch (e) {
        console.log(e);
    }
})();

```

### Q7 : Sur la base de votre solution précédente, écrivez un programme Node.js qui:
- récupérera sous forme d'argument l'URL à laquelle envoyer une requête;
- si aucun argument n'est trouvé, affichera "please provide a URL" dans la sortie d'erreurs;
- sinon, il enverra la requête à l'aide de node-fetch et await;
- en cas de succès, il affichera la réponse dans la sortie standard;
- en cas d'échec, il affichera l'erreur obtenue dans la sortie d'erreurs.
```
const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch

// TODO: afficher "please provide a URL" dans la sortie d'erreur si aucune URL n'a été fournie
(async () => {
    const url = process.argv[2];
    if (url){
        try {
            const res = await fetch(url);
            const body = await res.text();
            console.log(body);
        } catch (e) {
            console.error(e);
        }
    }else{
        console.error("please provide a URL");
    }
    
})();

```
Site web source :
- https://adrienjoly.com/cours-nodejs/
