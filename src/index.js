const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const path = require('path')
const morgan = require('morgan')

const db = require('./config/db')
//  connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

const route = require('./routes')

// template engine
app.engine('hbs', handlebars({  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.use(morgan('combined'))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



route(app)