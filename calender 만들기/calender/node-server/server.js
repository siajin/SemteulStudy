const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); 
const multer  = require('multer');
const fs = require('fs');
const cors = require("cors");

const routes = require('../node-server/routes');

let upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file ,callback){
      const userName = req.url.split('/')[1];
      const day = req.body.day;
      try {
        fs.readdirSync('../db/'+userName+'/'+day+'/');
      } catch(err) {
        fs.mkdirSync('../db/'+userName+'/'+day+'/');
      }
      callback(null, '../db/'+userName+'/'+day+'/');
    },
    filename: function(req, file, callback){
      let extension = path.extname(file.originalname);
      let basename = path.basename(file.originalname, extension);
      callback(null, basename + extension);
    }
  })
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( express.static( path.join(__dirname, '../react-project/build') ) );
app.use(session({
  secret:"asdf",
  resave:false,
  saveUninitialized:true,
}));



app.post('/siajin', upload.single('file'));

app.use('/', routes);



app.use(cors());

http.listen(8000, function(){
    console.log('listening in 8000');
});
