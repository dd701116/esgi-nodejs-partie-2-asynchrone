const fetch = require('node-fetch'); // https://www.npmjs.com/package/node-fetch

// TODO: afficher "please provide a URL" dans la sortie d'erreur si aucune URL n'a été fournie
// TODO: afficher réponse à la requête dans la sortie standard, ou erreur obtenue dans la sortie d'erreurs
(async () => {
    const url = "https://dieunelson.fr";
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