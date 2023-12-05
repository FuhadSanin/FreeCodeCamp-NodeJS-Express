const http = require("http")
const { readFileSync } = require("fs")

const homePage = readFileSync("./navbar-app/index.html")
const homeStyle = readFileSync("./navbar-app/styles.css")
const homeJS = readFileSync("./navbar-app/browser-app.js")
const homeSVG = readFileSync("./navbar-app/logo.svg")

const server = http.createServer((req, res) => {
  let url = req.url
  console.log(url)
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write(homePage)
    res.end()
  } else if (url == "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" })
    res.write(homeStyle)
    res.end()
  } else if (url == "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" })
    res.write(homeJS)
    res.end()
  } else if (url == "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" })
    res.write(homeSVG)
    res.end()
  } else if (url == "/about") {
    res.write("ABOUT PAGE")
    res.end()
  } else {
    res.write("Error")
    res.end()
  }
})

server.listen(3000, () => {
  console.log("Listening to port 3000")
})
