const express = require('express')
const app = express()
const { Server } = require('http')
const path = require('path')
const exphbs = require('express-handlebars')

// MIDDLEWARE
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')))


const server = require('http').createServer(app)
const port = process.env.PORT || 5000
server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

// ROUTES
app.get('/', function (req, res) { 
    res.render("home");
})
