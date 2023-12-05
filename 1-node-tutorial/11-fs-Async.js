const { readFile, writeFile } = require("fs")

console.log("Started")
readFile("./component/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  //   console.log(result)
  let f = Number(result)

  readFile("./component/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    // console.log(result)
    let s = Number(result)

    writeFile(
      "./component/result-async.txt",
      `Result is ${f + s}\n`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          //   console.log(err)
          return
        }
        console.log("Done with task")
      }
    )
  })
})
console.log("starting the next one..")

/*
                Output 
           ------------------
                Started
                starting the next one..
                Done with task
*/
