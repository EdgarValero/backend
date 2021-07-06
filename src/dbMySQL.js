const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'actividad_3_2_db'
});

connection.connect((error) => {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log('BD is Connected');
  }
});

module.exports = connection;