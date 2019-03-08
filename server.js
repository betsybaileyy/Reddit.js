const express = require('express')
const app = express()
var exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

// require('./data/reddit-db')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

/* Mongoose Connection */
assert = require("assert");

// const url = "mongodb://localhost/reddit-db";
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reddit-db",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to reddit-db");
  }
);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())

require('./controllers/posts.js')(app)
require('./controllers/comments.js')(app)
require('./controllers/auth.js')(app)

app.listen(3000, () => {
    console.log('this thing is on!! port 3000')
})

module.exports = app;
