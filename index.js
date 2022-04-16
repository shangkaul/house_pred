var express = require('express');
var logger = require('morgan');
const bodyParser = require('body-parser')
var cors = require('cors');
require('dotenv').config()

var app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
      origin: "*" // restrict calls to those this address
    })
  );
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// const dbURI = process.env['dbURI'];
// var usersRouter = require('./Routes/users.routes');
// var wsRouter = require('./Routes/ws.routes');
// var taskRouter = require('./Routes/task.routes');
// mongoose
// 	.connect(dbURI)
// 	.then(() => console.log("Database Connected"))
// 	.catch((err) => console.log(err));

// mongoose.Promise = global.Promise;
// app.use('/users', usersRouter);
// app.use('/ws', wsRouter);
// app.use('/task', taskRouter);






app.timeout = 0;
app.listen(process.env.PORT||port,()=>{
    console.log("Server running at localhost:"+port)
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err).json({
    message: "Error Message"
  })
});
module.exports = app;