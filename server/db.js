const mysql = require("mysql");
const dbConfig = require("./dbconfig.js");
var Client = require('ssh2').Client;
var ssh = new Client();


const sshConnection = new Promise((resolve, reject) => {
	ssh.on('ready', () =>{
	  ssh.forwardOut(
	    '127.0.0.1', //localhost
	    3306, //local port
	    'cafe.cis.strath.ac.uk', //remote client
	    3306, //remote port
	    (err, stream) => {
	      if (err) throw err;
        const connection = mysql.createConnection({
          host: dbConfig.HOST,
          user: dbConfig.USER,
          password: dbConfig.PASSWORD,
          database: dbConfig.DB
        });

	      // send connection back in variable depending on success or not
        connection.connect((error) => {
            if (error) {
                reject(error);
            }
            resolve(connection);
            });
	  });
	}).connect({
	  host: 'cafe.cis.strath.ac.uk',
	  port: 22,
	  username: 'ckb23158', //student number eg 'ckb....'
	  password: '' //uni password
	});
});
