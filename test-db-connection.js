const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'expenseuser',
  password: '#Alfred2504',
  database: 'amaktech_expenses'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL connected...');
  db.end();
});