var mysql2 = require('mysql2/promise');
var {mysqlDetails} = require('./util')

async function add_dept() {
  const con = await mysql2.createConnection(mysqlDetails);
  try {
    const [result, fields] = await con.execute("insert into departments values(?,?)",
          ['d1', 'Department 1'])
    console.log(result)
  }
  catch (error) {
    console.log("Error -->", error.message)
  }
  con.end();
}


add_dept()