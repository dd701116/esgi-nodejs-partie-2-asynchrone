
const fetch = require('node-fetch')

function initialization(port) {
  console.log(`The server is ready : http://localhost:${port}/`)
}

async function curlCustom(url) {
  if (url){
    try {
        const res = await fetch(url);
        const body = await res.text();
        return body
    } catch (e) {
        console.error(e);
        return "Erreur :: curlCustom"
    }
  }else{
    return "please provide a URL"
  }
}

module.exports = {
  initialization,
  curlCustom,
}