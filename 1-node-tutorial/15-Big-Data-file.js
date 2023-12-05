const { writeFile } = require("fs")

for (let i = 0; i < 100000; i++) {
  writeFile("./component/bigfile.txt", `Hello World ${i}\n`, { flag: "a" })
}
