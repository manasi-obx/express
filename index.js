const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js')

const app = express();
app.use(bodyParser.json({ limit: "50mb", extended: true }));

 
app.get('/users',controller.getUsers)
app.post('/adduser', controller.addUser)
app.get('/user/lastName/:lname',controller.getUserWithLasttName);
app.get('/user/firstName/:fname',controller.getUserWithFirstName);
app.delete('/deleteUser/:fname',controller.deleteUser)

app.listen(3000);


