require('./db')
var postSubjectsRoutes = require('./controllers/postSubjectsController');
var addQuestionRoutes = require('./controllers/questionsAddController');
var currentIdRoutes = require('./controllers/currentsubId')

var studentRoutes = require('./controllers/StudentController');
var adminRoutes = require('./controllers/AdminController');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT =5000;

app.use(cors());
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use('/postSubjects',postSubjectsRoutes)
app.use('/addQuestions',addQuestionRoutes)
app.use('/id',currentIdRoutes)
//registration
app.use('/studentModel',studentRoutes)
app.use('/adminModel',adminRoutes)
//login
app.use('/adminModel/login',adminRoutes)
app.use('/studentModel/login',studentRoutes)