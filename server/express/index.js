const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/ping', function (req, res) {
  req.body.text = `${req.body.text} from Nodejs`;
  res.send(req.body)
})

app.listen(3000, function () {
  console.log('Nodejs app listening on port 3000')
})