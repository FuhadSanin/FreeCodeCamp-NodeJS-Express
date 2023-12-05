const express = require("express")
const app = express()
// const path = require("path")

//setup static and middleware
app.use(express.static("./public"))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "navbar-app", "index.html"))
// })
app.listen(3000, () => {
  console.log("Listening to the port 3000...")
})
