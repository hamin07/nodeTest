let express = require("express");


let app = express();
app.listen(8888);
console.log("Runnning...");

app.get("/hello", (req, res) => {
    res.send("hello");
    // let result = req.url;
    // res.send(result + "world")
});

app.get("/hi", (req, res) => {
    res.send("hi");
});
let fs = require("fs");
app.get('/save', (req, res) => {
     let data = req.param('data');
     console.log(data);
     fs.writeFileSync("C:Temp/read.txt", data)
     res.send(data);
 });

 app.get('/read', (req,res) => {
    var data = fs.readFileSync('C:/Temp/read.txt', 'utf-8')
    res.send(data);
 });

 app.get("/google", (req, res) => {
   var data = fs.readFileSync("c:/Temp/google.html", 'utf8');
   res.send(data);
 });
 
 console.log(__dirname);
 app.use('/calc', express.static(__dirname + '/public')); //app = express, use = 사용

 app.get("/add", (req, res) => {
   var p1 = req.param('p1');
   var p2 = req.param('p2');
   var result = Number(p1) + Number(p2);
 
 
   res.send(result.toString());
 });

 var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());

// curl http://localhost:8888/calculator -X POST -d "1+2" -H "Content-Type: text/plain"
app.post("/calculator", (req, res) => {
   var data = req.body;
   var result = eval(data);
   res.send(String(result));
 });
 
 