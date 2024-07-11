var mysql2 = require('mysql2/promise');
var {mysqlDetails} = require('./util')

async function deleteDept(id) {
  const con = await mysql2.createConnection(mysqlDetails);
  try {
    const [result, fields] = await con.execute
                           ("delete from departments where dept_id = ?", [id])
    console.log(fields)                           
    if(result.affectedRows === 1)
      console.log("Deleted Department")
    else
      console.log("Department Id Not Found!")
  }
  catch (error) {
    console.log("Error -->", error.message)
  }
  con.end();
}


deleteDept('d1')
