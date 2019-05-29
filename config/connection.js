//Code to connect Node to MYSQL
const mysql = require('mysql');

//Information provided by heroku's jawsdb
const connection = mysql.createConnection({
  host : 'h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user : 'z99qbf7pir2wq0y2',
  password : 'wbdu8b7hsizmqx80',
  database : 'lx5ldvt5u8iqyvdx'
});

connection.connect(function(err) {
    if(err){
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;