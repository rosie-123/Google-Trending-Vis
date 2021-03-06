var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var trendsRouter = require("./routes/trends");
var termRouter = require("./routes/term");
var decadeRouter = require("./routes/decade");
var compareRouter = require("./routes/compare");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const CLIENT_BUILD_PATH = path.join(__dirname, "./build");
app.use(express.static(path.join(CLIENT_BUILD_PATH)));


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trends", trendsRouter);
app.use("/term", termRouter);
app.use("/decade", decadeRouter);
app.use("/compare", compareRouter);
app.get("*", (req, res) => {
  const index = path.join(CLIENT_BUILD_PATH, "index.html");
  res.sendFile(index);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
const port = process.env.PORT || 9000
app.listen(port, () => {
  console.log(`Server set up!`)
})
module.exports = app;
