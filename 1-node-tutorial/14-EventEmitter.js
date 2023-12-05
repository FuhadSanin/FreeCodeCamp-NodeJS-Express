const EventEmitter = require("events") //on and emit

const check = new EventEmitter()

check.on("variable", () => {
  console.log("Event is listened")
})

check.on("another", () => {
  console.log("Second Task")
})

check.emit("another")
check.emit("variable")
