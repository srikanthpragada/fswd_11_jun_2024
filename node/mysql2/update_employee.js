var mysql2 = require('mysql2/promise');
var {mysqlDetails} = require('./util')

async function updateEmployee() {
  const con = await mysql2.createConnection(mysqlDetails);
  try {
    const [result, fields] = await con.execute("update employees set salary = ? where emp_id = ?",
          [60000, 4])
    //console.log(fields)
    //console.log(result)
    if(result.affectedRows === 1)
      console.log("Updated Salary!")
    else
      console.log("Employee Id Not Found!")
  }
  catch (error) {
    console.log("Error -->", error.message)
  }
  con.end();
}


updateEmployee()