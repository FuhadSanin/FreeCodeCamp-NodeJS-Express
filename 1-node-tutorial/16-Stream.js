const { readFileSync, createReadStream } = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
  // const val = readFileSync("./component/bigfile.txt", "utf-8")
  // res.end(val)

  //Stream is used To transfer large data and the data written will be chunked format
  const readStream = createReadStream("./component/bigfile.txt", "utf-8")
  readStream.on("open", () => {
    readStream.pipe(res) //pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable
  })
  readStream.on("error", err => {
    res.end("Error : ", err)
  })
})

server.listen(3000, () => {
  console.log("Listening")
})
