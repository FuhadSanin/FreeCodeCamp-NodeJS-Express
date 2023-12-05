const express = require("express")

const app = express()
const { people } = require("./data.js")

app.use(express.static("./login-page"))
app.use(express.json())

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people })
})
app.post("/api/people", (req, res) => {
  const { name } = req.body
  res.status(201).json({ success: true, person: name })
})

app.listen(3001, () => {
  console.log("Listening to port http://localhost:3001")
})
