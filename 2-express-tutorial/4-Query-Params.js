const express = require("express")
const app = express()
const { packages } = require("./data.js")

//Array Destructuring
// app.get("/", (req, res) => {
//   const sortedPackages = packages.map(package => {
//     const { id, name, image } = package
//     return { id, name, image }
//   })
//   res.json(sortedPackages)
// })

//Router Params
// app.get("/package/:productID", (req, res) => {
//   const { productID } = req.params
//   // console.log(productID)
//   const singlepackage = packages.find(
//     package => package.id === Number(productID)
//   )
//   if (!singlepackage) res.status(404).send("No Product Found")
//   res.json(singlepackage)
// })

//Query Params
app.get("/package/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedPackages = [...packages]

  if (search) {
    sortedPackages = sortedPackages.filter(package => {
      return package.name.startsWith(search)
    })
  }
  if (limit) {
    sortedPackages = sortedPackages.slice(0, Number(limit))
  }
  if (sortedPackages.length < 1) {
    res.status(200).json({ succes: true, data: [] })
  }
  res.send(sortedPackages)
})

app.listen(3000, () => {
  console.log("Listening..!")
})
