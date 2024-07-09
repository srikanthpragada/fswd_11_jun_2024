const fs = require("fs")

fs.readFile(`${__dirname}/names.txt`, "utf-8",
        (err, data) => {
          if(err)
             console.log("Error : " + err)
          else
             console.log(data)
       }
);

console.log(`Ended at ${new Date()}`)


