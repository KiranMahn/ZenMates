const mysql = require("mysql");
const dbConfig = require("./dbconfig.js");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


connection.connect(error =>{
  if (error) throw error;
  console.log("Successful connection.");
});

module.exports = connection;
