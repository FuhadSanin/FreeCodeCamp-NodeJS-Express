const express = require("express")

const app = express()

app.use(express.static("./login-page"))
//Parse the data
app.use(express.urlencoded({ extended: true }))

//MiddleWare
const data = (req, res, next) => {
  const { name } = req.body
  if (name == "") {
    res.status(401).send("Enter the details")
  }
  res.send(`Welcome ${name}`)
  next()
}

app.post("/login", data, (req, res) => {})
app.listen(3001, () => {
  console.log("Listening to port http://localhost:3001")
})
