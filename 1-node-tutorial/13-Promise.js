//A promise is essentially an improvement of callbacks that manage all asynchronous data activities
//It is used to avoid callback hell
const { readFile, writeFile } = require("fs").promises //Adding promises doesn't require util module
// const util = require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const check = async () => {
  try {
    const first = await readFile("./component/first.txt", "utf-8")
    const second = await readFile("./component/second.txt", "utf-8")
    await writeFile(
      "./component/result-promise.txt",
      `Here the numbers are ${first} and ${second}`
    )
    console.log(first, second)
  } catch (error) {
    console.log("Error is detected")
  }
}

check()
// const start = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, res) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(res)
//       }
//     })
//   })
// }

// start("./component/first.txt")
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

//   start("./component/second.txt")
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
