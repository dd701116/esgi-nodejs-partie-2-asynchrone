const express = require('express')
const {initialization, curlCustom} = require('./functions')

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  const url = req.query.url;
  if (url) {
    res.send(await curlCustom(url))
  }else {
    res.send("URL is missing in queries !");
  }
});

app.listen(PORT, () => initialization(PORT))