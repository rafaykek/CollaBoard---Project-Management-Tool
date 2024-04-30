var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
var indexRouter = require('./routes/index');
const loginRouter = require('/Users/AbdulRafay/DataBase Project/routes/login.js');
const signupRouter = require('/Users/AbdulRafay/DataBase Project/routes/signup.js');
const dashboardmanagerRouter = require('/Users/AbdulRafay/DataBase Project/routes/manager.js');
const issueFormrouter = require('/Users/AbdulRafay/DataBase Project/routes/issues.js');
const projectFormrouter = require('/Users/AbdulRafay/DataBase Project/routes/addproject.js');
const sprintFormrouter = require('/Users/AbdulRafay/DataBase Project/routes/sprintForm.js');
const showissuerouter =require('/Users/AbdulRafay/DataBase Project/routes/issues.js');
const showprojectrouter = require('/Users/AbdulRafay/DataBase Project/routes/addproject.js');
const showsprintrouter = require('/Users/AbdulRafay/DataBase Project/routes/sprintForm.js');


var app = express();
const port = 3000; 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret : 'webslesson',
  cookie : {maxAge : 60000},
  saveUninitialized : false,
  resave : false
}));

app.use(flash());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/dashboardmanager', dashboardmanagerRouter);
app.use('/addissue', issueFormrouter);
app.use('/addproject', projectFormrouter);
app.use('/addsprint', sprintFormrouter);
app.use('/allissues', showissuerouter);
app.use('/allprojects', showprojectrouter);
app.use('/allsprints', showsprintrouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;