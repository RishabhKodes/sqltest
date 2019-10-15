const express =require("express");
const mysql = require("mysql");

//Create connection
const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password : '',
    database: 'sampleDB'
});

//Connect                               
db.connect((err)=>{

    if(err){
        throw err;
    }
    console.log('Mysql connected..')

})

const app = express()

//THIS IS TO CREATE A DATABASE
// app.get('/createdb', (req, res)=>{
//         let sql = 'CREATE DATABASE nodemysql';
//         db.query(sql , (err, result)=>{
//             if(err) throw err;
//             console.log(result);
//             res.send("database created");

//         })
// })

app.get('/', (req, resp)=>{
    //about mysql
    db.query("SELECT * FROM mySampleTable", function(error, rows, fields){
        if(!!error){
            console.log("Error in the query");
        }else{
            console.log("Successful Query");
            console.log(rows);
            console.log(rows[0]);
            console.log(rows[1].Name);
            // resp.send("This is the Name "+rows[0].Name)
            resp.json(rows);
        }

    });


})

app.listen(port='1337',() =>{
    console.log("Server started on port "+port);
    
});
