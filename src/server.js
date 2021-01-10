const express = require ("express")
const server = express()

// config public past
server.use(express.static("public"))

// config template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurando rota inicial
// __dirname == diretorio 
server.get ("/", (req, res) => {
   return res.render("index.html")
})

server.get ("/create-point", (req, res) => {
   return res.render("create-point.html")
})

server.get ("/seach-results", (req, res) => {
   return res.render("seach-results.html")
})

//iniciando servidor 
// listen = ouvindo
server.listen(3000)