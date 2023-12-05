import express from "express"

const app = express()

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getMilliseconds()

  console.log(method, url, time)
  next()
}
app.get("/", logger, (req, res) => {
  res.status(200).send("Hello World")
})
app.get("/about", logger, (req, res) => {
  res.status(200).send("About Page")
})
app.listen(3000, () => {
  console.log("Listening the Port..!!")
})
