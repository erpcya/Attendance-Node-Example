var express = require('express');
var app = express();

app.post('*', function (req, res) {
  const chunks = [];
  req.on("data", (chunk) => {
    chunks.push(chunk);
  });
  req.on("end", () => {
    console.log("***************************************")  
    const data = Buffer.concat(chunks);
    console.log("Header: ", req.headers);
    console.log("Data: ", data);
    console.log("***************************************")  
  });
    // console.log(req.body);
    res.json({
        result: ''
      })
})

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})