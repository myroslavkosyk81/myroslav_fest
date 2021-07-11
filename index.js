const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mongoose = require('mongoose');
app.set('view engine', 'pug');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
const bodyParser = require('body-parser')

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'css'),
    dest: path.join(__dirname, 'public', 'css'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

// це потрібне?????????????
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}



mongoose.connect('mongodb://localhost:27017/test', mongoOptions);

require('./routes/routes.js')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
