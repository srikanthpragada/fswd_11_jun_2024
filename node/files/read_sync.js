const fs = require("fs")

try {
    let data = fs.readFileSync(`${__dirname}/names.txt`, "utf-8")
    console.log(data)
}
catch(err) {
    console.log("Error ->" + err.message)
}

console.log(`Ended at ${new Date()}`)
