// server.js
// where your node app starts

// init project
const express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
const app = express();

app.use(bodyParser.json());
app.use(cors());

var upload = multer({dest: 'uploads/'});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.post('/upload', upload.single('file'), function(req, res, next){
  var result = req.file;
  res.json({size: result.size});
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
