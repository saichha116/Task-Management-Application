const mysql = require("mysql2");


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sbnma11@asdfg",
    database: "task_manager"
});


db.connect((err)=>{
    if(err){
        console.log("Database connection failed");
        return;
    }

    console.log("MySQL Connected Successfully");
});


module.exports = db;