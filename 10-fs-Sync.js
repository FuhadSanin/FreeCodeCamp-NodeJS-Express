const { readFileSync, writeFileSync } = require("fs")

console.log("start")
const first = readFileSync("./component/first.txt", "utf-8")
const second = readFileSync("./component/second.txt", "utf-8")

const f = Number(first)
const s = Number(second)

// Concatenate and log the readable strings
writeFileSync(
  "./component/result-sync.txt",
  `The result of sum is : ${f + s}\n`,
  { flag: "a" } //To append the result in the file
)
console.log("done with this task")
console.log("starting the next one..")
