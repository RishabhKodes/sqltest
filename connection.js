//this is the connection object
const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "database",
    multipleStatements : true
  }); 

  //to start connection
  mysqlConnection.connect((err)=>{
    if(!err){
          console.log("Connected!");
    }else{
          console.log("Connection Failed!");
    }

  });

module.exports = mysqlConnection;