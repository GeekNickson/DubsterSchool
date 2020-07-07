var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express()
const cors = require('cors');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "root",
    database: "students"
});


connection.connect(error => {
    if (error) throw error;
    console.log("connection has been established");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Where to serve static content


app.post("/", (req,res) => {
    let users = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        englishLevel: req.body.englishLevel
    };
    let userData = users;

    connection.query("INSERT INTO students(firstName, lastName, phoneNumber, email, englishLevel) VALUES('" + users.firstName + "','" + users.lastName + "','" + users.phoneNumber + "','" + users.email + "','" + users.englishLevel + "');", function (error, results, fields) {
        if (error) console.log("error: " + error);
        console.log("success");
    });

    res.status(200).send("Ваша заявка принята!");
});

app.listen(5000, () => {
    console.log('running on port 5000');
})