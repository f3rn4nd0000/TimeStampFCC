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

//RETORNA O DIA EM QUE A PESSOA FEZ A SOLICITAÇÃO
  app.get("/api/timestamp", (req,res)=>{
    var today = new Date();
    console.log(typeof today);
    var utc =  today.toUTCString();
    var unix = today.valueOf();
    res.json({
      unix: unix,
      utc: utc 
    });
  });

  app.get("/api/timestamp/:date?", (req,res)=>{    
    let variavelData = new Date(String(req.params.date));
    let valid = variavelData.getTime() > 0 ;
    console.log(typeof req.params.date);
    
    if( (new Date(parseInt(req.params.date))).toUTCString() === 'Invalid Date'){
      res.json({
        error: "Invalid Date"
      });
    } else{
    if(!valid){
      res.json({   
        unix : Number(req.params.date),
        utc : (new Date(parseInt(req.params.date))).toUTCString()
        });  
    }
    else{
      res.json({   
        unix : variavelData.valueOf(),
        utc : variavelData.toUTCString()
        });
      }
    }
  });
  
  // listen for requests :)
  var listener = app.listen(port, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

