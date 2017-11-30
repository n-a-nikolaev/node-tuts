const express = require('express');
const expressValidator = require('express-validator');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const config = require('./config');
const port = config.port; // used to create, sign, and verify tokens

// App
const app = express();

// Routes
const auth = require('./routes/auth');

// Some middlewares
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());

app.get('/', (req, res) => {
  res.json({
    success: false,
    message: 'FUCK OFF'
  });
});

app.use('/authenticate', auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: 'Internal Server Error'
  });
});


app.listen(port);
console.info('Magic happens at http://localhost:' + port);
