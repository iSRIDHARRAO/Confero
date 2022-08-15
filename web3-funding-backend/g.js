import mysql from "mysql2";
import express from 'express';
import cors from 'cors';


const PORT=3306;
const app = express();
// app.use(cors())

// const connection = mysql.createConnection({
//   host: 'database-1.cchmrql77pxo.ap-south-1.rds.amazonaws.com',
//   user: 'admin',
//   password: '6302510466mummy',
//   database: 'confero'
// })






app.get('/save',(req,res)=>{
    console.log("Hello world")
    res.send("")
    // connection.connect()
    // var query = "SELECT * from user_info where id="
    // query=query.concat("'")
    // query=query.concat(req.params.id)
    // query=query.concat("'")
    // connection.query(query, (err, rows, fields) => {
    //     if (err) throw err
    //         var b="Connection Success"
    //     b=b.concat(req.params.id)
    //     console.log(rows.length)
    //     if(rows.length==0){
    //         res.send("")
    //     }
    //     else{
      
    //     res.send("Available")}
    //     console.log('The solution is: ', rows)
    //   })
      
      
})

app.listen(PORT,()=>{
    console.log("Server started at port:",PORT);
})
