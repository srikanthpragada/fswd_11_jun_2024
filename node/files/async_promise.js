const fs = require("fs/promises")

console.log("Started Reading...")

fs.readFile(`${__dirname}/names.txt`, "utf-8")
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log("Error : ", error)
    })

console.log("The End")


