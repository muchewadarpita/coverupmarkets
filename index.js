const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Connect mongodb
require('./mongoConnect')();

// Declare a new express app
const app = express()

app.use(cors());
app.use(express.json())

// Declare routes
// var auth = require('./routes/auth.js');
// app.use('/auth', auth);

var blogHome = require('./routes/blog_home');
app.use('/blog_home', blogHome);

// Health check
app.get('/subscriptions/health', (req, res) => {
    res.json("ALL OKAY");
})

app.listen(process.env.local_port, function () {
    console.log(`Server Running at localhost:${process.env.local_port}`)
});

module.exports = app
