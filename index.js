const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome To the Home page")
  } else if (req.url === "/about") {
    res.end("About Page")
  } else {
    res.writeHead(404, { "Content-type": "text/html" }) // To use html
    res.end(
      "<h1>Oops</h1><p>The page doesn't exit</p><a href='/'>Go back to home</a>"
    )
  }
})

const port = 3000
server.listen(port)
console.log(`Listening to the port: ${port}`)
