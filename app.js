const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let player = require('./baseball/player/index');
let team = require('./baseball/team/index');


app.set('json spaces', 2);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");//add urls here instead of being global with CORS 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Access-Control-Allow-Methods", "PUT");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello Baseball API player!');
});

app.use('/player', team);
app.use('/team', player);


app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});


/*
balls and strikes count
https://codereview.stackexchange.com/questions/11419/baseball-game-state-class-in-python-looking-for-feedback
 */

// TODO
// add in commentary like i did for the basketball simulator
