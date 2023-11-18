const path = require("path")

//sep - separator
console.log(path.sep)

//join - join the paths
const filePath = path.join("/components", "landing", "index.js")
console.log(filePath)

//basename - get the file name
console.log(path.basename(filePath))

//resolve - get the absolute path
const absolute = path.resolve(__dirname, "components", "landing", "index.js")
console.log(absolute)
