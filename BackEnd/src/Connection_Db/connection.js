import mysql from "mysql2";

const con = mysql.createConnection({
    host : "localhost",
    user:"root",
    password:"Reset@123"
})

con.connect((err)=>{
    if(err) throw err;
    console.log("Connected to DB!!!")
});

export default con;