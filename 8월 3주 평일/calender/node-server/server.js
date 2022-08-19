const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

app.use( express.static( path.join(__dirname, '../react-project/build') ) );

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-project/build/index.html'));
});


http.listen(8000, function(){
    console.log('listening in 8000');
});
