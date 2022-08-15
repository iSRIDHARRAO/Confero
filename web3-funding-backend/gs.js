import express from 'express';
import mysql from 'mysql2';





const PORT=2001;
const app = express();

var con = mysql.createConnection({
    host: 'database-1.cchmrql77pxo.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: '6302510466mummy',
    database: 'confero'
})

app.get('/',function (req, res){
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected");
        return res.send("connected");
    
    })
})
app.listen(PORT,function() {
    console.log("server started");
})







