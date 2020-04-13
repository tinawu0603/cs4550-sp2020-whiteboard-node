const express = require('express')
const app = express()

// var session = require('express-session')
// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: 'any string'
// }));

// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/whiteboard-cs4500-sp20',
//     { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "https://cs4550-sp20-whiteboard-angular.herokuapp.com");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
// require('./controllers/users.controller.server')(app)

app.listen(process.env.PORT || 3000)