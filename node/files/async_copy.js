const fs = require("fs")

fs.readFile(`${__dirname}/names.txt`, "utf-8",
   (err, data) => {
      if (err)
         console.log("Error : " + err)
      else {
            fs.writeFile(`${__dirname}/newnames.txt`, data,
            (err) => {
               if (err)
                  console.log("Error : " + err)
               else
                  console.log("Copied!!!")
            }
         );
      }
   }
);

console.log(`Ended at ${new Date()}`)


