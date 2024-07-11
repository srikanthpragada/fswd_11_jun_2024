var mysql2 = require('mysql2/promise');
var {mysqlDetails} = require('./util')

async function list_employees() {
  try {
    const con = await mysql2.createConnection(mysqlDetails);
    const [rows, fields] = await con.query('SELECT * FROM employees');
    // console.log(rows)  // rows is an Array of JS object 
    //console.log(fields)
    for (let emp of rows) {
        console.log(`${emp.fullname.padEnd(30)}  ${emp.salary}`)
    }
    con.end();
  }
  catch (error) {
    console.log("Error --> ", error)
  }
}


list_employees()


    
 