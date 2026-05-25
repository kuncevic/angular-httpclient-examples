const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/ping', function (req, res) {
  req.body.text = `${req.body.text} from Nodejs`;
  res.send(req.body)
})

app.listen(3000, function (err) {
  if (err) {
    console.error('Failed to start server:', err.message)
    process.exit(1)
  }
  console.log('Nodejs app listening on port 3000')
})