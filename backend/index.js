// Modules
const express = require('express');
const bodyParser = require('body-parser')
const passport = require('passport')
const morgan = require('morgan');

// Express
const app = express();
const port = process.env.PORT || 4000;
const www = process.env.WWW || './';

// Settings
app.set(port, (req, res) => {
    console.log(`Request to port ${port}`);
});

// Middlewares

// Morgan -> Sends messages like 
// "GET / 404 3.307 ms - 139"
app.use(morgan('dev'));

// Allow express accept JSON's
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// Allow CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  })

// PASSPORT
app.use(passport.initialize())
require('./configs/passport')(passport)

// MongoDB
const { mongoose} = require ('./database/');

app.use('/api', require('./routes/auth.routes'));
app.use('/api', require('./routes/file.routes'));
app.use('/api', require('./routes/admin.routes'));
app.use('/api', require('./routes/user.routes'));
app.use('/api', require('./routes/match.routes'));
app.use('/api', require('./routes/map.routes'));
app.use('/api', require('./routes/hero.routes'));

// Serve static map images
app.use('/uploads/maps', express.static(__dirname + '/../uploads/maps'))
app.use('/uploads/heroes', express.static(__dirname + '/../uploads/heroes'))

// - Server up
app.listen(port, () => {
    console.log(
        `\n🚀 Express server API up! :D\n` +
          `  - Start time: ${new Date(Date.now()).toLocaleString()}\n` +
          `  - Port: ${port}\n`
      )
});