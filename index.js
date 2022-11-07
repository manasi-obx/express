const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js')

const app = express();
app.use(bodyParser.json({ limit: "50mb", extended: true }));

 
app.get('/users',controller.getUsers)
// app.post('/',addUser )
app.get('/user/lastName/:lname',getUserWithLastName);
app.get('/user/firstName/:fname',getUserWithFirsttName);
// app.delete('/user/:fname',deleteUser );

app.listen(3000);


