require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'slot_booking_db', 
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("logs", process.env.DB_USER)
    throw err;
  }
  console.log('==Connected to MySQL database ==');
});

module.exports = db;

