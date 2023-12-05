const { readFile } = require("fs")

console.log("start")

//Offload because it is async funct
//eg : api calling is used as async function beacuse it requires time to return data .. therefore the rest code is execute till output is obtained
readFile("./component/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log("done with the task")
})
console.log("starting the next task...")

//Output
/*start
starting the next task...
1234
done with the task*/
