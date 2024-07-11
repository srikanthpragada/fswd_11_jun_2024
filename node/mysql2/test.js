var mysql2 = require('mysql2/promise');
var { mysqlDetails } = require('./util')

async function test() {
  try {
    const con = await mysql2.createConnection(mysqlDetails);
    console.log("Connected")
    con.end()
  }
  catch (err) {
    console.log("Error :" + err.message)
  }
}

test()

