const fs = require("fs")

try {
    let data = fs.readFileSync(`${__dirname}/names.txt`, "utf-8")
    fs.writeFileSync(`${__dirname}/newnames.txt`, data)
    console.log("Copied!")
}
catch(err) {
    console.log("Error ->" + err.message)
}

console.log(`Ended at ${new Date()}`)
