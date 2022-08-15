
import mysql from "mysql2";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT=3001;
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'database-1.cchmrql77pxo.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: '',
    database: 'confero'
})






app.get('/user/:id',(req,res)=>{
    connection.connect()
    var query = "SELECT * from userinfo where id="
    query=query.concat("'")
    query=query.concat(req.params.id)
    query=query.concat("'")
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
            var b="Connection Success"
        b=b.concat(req.params.id)
        console.log(rows.length)
        if(rows.length==0){
            res.send("")
        }
        else{
            console.log(rows)
        res.send("Success")}
 
      })
      
      
})
app.get('/profiledetails/:id',(req,res)=>{
    connection.connect()
    var query = "SELECT * from userinfo where id="
    query=query.concat("'")
    query=query.concat(req.params.id)
    query=query.concat("'")
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
            var b="Connection Success"
        b=b.concat(req.params.id)
        console.log(rows.length)
        if(rows.length==0){
            res.send("")
        }
        else{
            console.log("Details are:",res[0])
        res.send(rows)}
 
      })
      
      
})


app.get('/fundsdetails/:id',(req,res)=>{
    connection.connect()
    var query = "SELECT * from donors where from_id="
    query=query.concat("'")
    query=query.concat(req.params.id)
    query=query.concat("'")
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
            var b="Connection Success"
        b=b.concat(req.params.id)
        console.log(rows.length)
        if(rows.length==0){
            res.send("")
        }
        else{
            console.log("Details are:",res[0])
        res.send(rows)}
 
      })
      
      
})



app.get('/',(req,res)=>{
    var query = "SELECT * from fundraisers";
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
            console.log("Fetched")
        if(rows.length==0){
            res.send("Not Available")
        }
        else{

            res.send(rows)
     }
      })
})

app.post('/userdetails', function(req, res, next) {
    var name= req.body.name
    var id=req.body.id
    var email= req.body.email
    var mobile= req.body.mobile
    var address=req.body.address

    var sql = `INSERT INTO userinfo (name, id, email,mblno, address) VALUES ("${name}", "${id}", "${email}", "${mobile}", "${address}")`;
    connection.query(sql, function(err, result) {
      if (err) throw err;
      res.send("Success")
    });
  });
  app.post('/fundraisers', function(req, res, next) {
    var title= req.body.title
    var matter=req.body.matter
    var image_url= req.body.image_url
    var amount_needed= req.body.amount_needed
    var amount_raised=req.body.amount_raised
    var amount_need_to_be_raised=req.body.amount_need_to_be_raised
    var id=req.body.id

    var sql = `INSERT INTO fundraisers VALUES ("${title}", "${matter}", "${image_url}", "${amount_needed}", "${amount_raised}", "${id}", "${amount_need_to_be_raised}")`;
    connection.query(sql, function(err, result) {
      if (err) throw err;
      res.send("Success")
    });
  });


app.listen(PORT,()=>{
    console.log("Server started at port:",PORT);
})
