const express=require('express');
const path = require('path');
const port=8000;

const db=require('./config/mongoose')
const todolist=require('./models/todo.js');
//const { route } = require('./routes');

const app=express();

app.set('view engine', 'ejs');
app.set('views', "./views");
app.use(express.urlencoded({ extended: true}));

app.use('/',require('./routes/index.js'));

app.use(express.static('assets'));

app.use(express.static('images'));

app.listen(port, function(err){
      if(err){
        console.log('error are generated: ', err);
      }

      console.log('my express server is running on port: ', port);
});