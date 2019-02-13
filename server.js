const express = require('express')
const app = express()
var exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

require('./data/reddit-db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())

require('./controllers/posts.js')(app)

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('posts-index', {})
})

app.listen(3000, () => {
    console.log('this thing is on!! port 3000')
})

app.get('/posts/new', (req, res) => {
    res.render('posts-new', {} )
})
