# esgi-nodejs-partie-2-asynchrone
About Cours Node.jsCours Node.js - Partie 2 - Programmation asynchrone et requête à d'autres APIs

## Installation

- Clonner le repos
```
    git clone https://github.com/dd701116/esgi-nodejs-partie-2-asynchrone.git
```

- Installer les dépendances
```
    cd esgi-nodejs-partie-2-asynchrone
    npm install
```

- Lancer le serveur
```
    npm start
```

## Déploiement sur Heroku

```
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login
Enter your Heroku credentials.
...
$ heroku create
Creating arcane-lowlands-8408... done, stack is cedar
http://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git
Git remote heroku added
$ git push heroku main
```

## Les endpoints

### GET /
```
{
    url : <L'url d'un site>
}
```
Affiche le contenu du site<br>
Dans le cas où 'url' est vide, il affiche "URL is missing in queries !"

## DEMO

Déployé sur heroku => https://protected-woodland-06129.herokuapp.com/?url=https://github.com

<br>
<hr>

Site web source :
- https://adrienjoly.com/cours-nodejs/
