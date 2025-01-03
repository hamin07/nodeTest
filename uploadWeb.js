let express = require("express");


let app = express();
app.listen(8888);
console.log("Runnning...");

app.get("/", (req, res) => {
    res.send("Hello Upload");
});

app.use('/public', express.static(__dirname+'/public'));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());

let multer = require('multer');

let upload = multer({ dest: './public'});

app.post('/upload', upload.single('userfile'), function(req, res){
    res.send('Uploaded! : '+ req.file.originalname);
    console.log(req.file);
});

