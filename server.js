const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var jsonParser = bodyParser.json();

// you shouldn't need to server static since it is served by `npm run dev`
// but keep here for reference
//app.use(express.static('build'));

let record;

app.get('/record', function(req, res) {
    //return record
    console.log('res: ', res.params.record)
    return res.status(202).json({record : record});
});

app.post('/record', jsonParser, function(req, res) {
    // update record (count) here
    // remember to compare it to the current guesess to determine which is lowest
    if (!req.body.record) {
      return res.sendStatus(400);
    }
    // if (req.body.record < record) {
    //   record = req.body.record;
    //   return res.sendStatus(201).json(record);
    // }
    else {
        console.log('posted record: ', req.body.record);
        return res.sendStatus(200).json(req.body.record);
    }
});

const PORT = 8081;
app.listen(PORT, function () {
    console.log('Hot n Cold app listening on localhost:' + PORT);
});
