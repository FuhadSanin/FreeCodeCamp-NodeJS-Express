const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user)

// info about the uptime
console.log(`The uptime is ${os.uptime()} sec`)

//info about current os Details
const osDetails = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(osDetails)
