var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require ('morgan');
var mongoose = require('mongoose')
var User = require('./app/models/user.js')
//mongoose
const mongoURI = 'mongodb://localhost:27017/tutorial'
mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err))

app.use(morgan('dev'));

//http://localhost:8080/users
app.post('/users', function(req,res){
    res.send('testing users route')
})

app.listen(port, function(){
    console.log('Running the server on port:' + port)
});