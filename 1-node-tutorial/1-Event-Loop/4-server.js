const http = require("http")

const server = http.createServer((req, res) => {
  console.log("request recieved")
  res.end("Hello World")
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Listening to the port  ${PORT}`)
}) //WRITE IN SINGLE LINE
