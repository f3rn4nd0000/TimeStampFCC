// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var port = 3000;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// app.param('date', function(req, res, next, date) {

//   dateUTC = date.toUTC();
//   dateUnix = date.valueOf();
//   // save name to the request
//   // req.dateUTC = dateUTC;
//   // req.dateUnix = dateUnix;
//   next();
// });

app.get("/api/timestamp/:date?", (req,res)=>{
  
  variavelData = req.params[0];
  var data = new Date(variavelData);
  // console.log(typeof data);
  // var  date = new Date();
  res.json({
    // unix: variavelData.valueOf(), 
    unix: data.valueOf(),
    utc: data.toUTCString()
  });
  
});

app.get("date", (req,res)=>{
  

});

//RETORNA O DIA EM QUE A PESSOA FEZ A SOLICITAÇÃO
app.get("/api", (req,res)=>{
  // console.log("oiiiiiiiiiiiii");
  // let jsonDate = new Date();
  // let currentTimeZone = jsonDate.getTimezoneOffset() / 60;
  var today = new Date();
  console.log(typeof today);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  // console.log("hoje"+today);
  res.json({today: today,
    day: dd,
    month: mm 
  });
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


//POSSA SER QUE EU VÁ USAR DEPOIS

// var date = new Date();
// var year = date.getFullYear();
// var month = String(date.getMonth() + 1).padStart(2, '0');
// var day = String(date.getDate()).padStart(2, '0');
// date = year+'-'+month+'-'+day;
// res.json({
//   time: date,
//   day: day,
//   month: month,
//   year: year
// });
