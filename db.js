const mysql = require("mysql");
const dbConfig = require("./dbconfig.js");

const connection = mysql.createConnection({
  host: "localhost",
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


connection.connect(error =>{
  if (error) throw error;
  console.log("Successful connection.");
});
