const http = require("http")

const server = http.createServer((req, res) => {
  // req - Incoming request, res - response
  if (req.url === "/") {
    // url - Uniform Resource Locator
    res.end("Welcome To the Home page")
  } else if (req.url === "/about") {
    res.end("About Page")
  } else {
    res.writeHead(404, { "Content-type": "text/html" }) // To use html in the response body we need to set the header
    res.end(
      "<h1>Oops</h1><p>The page doesn't exit</p><a href='/'>Go back to home</a>"
    )
  }
})

const port = 3000
server.listen(port) // To listen to the port
console.log(`Listening to the port: ${port}`)
