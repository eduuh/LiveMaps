﻿"use strict"
var debug = require("debug")
var express = require("express")
var path = require("path")
var favicon = require("serve-favicon")
var logger = require("morgan")
var cookieParser = require("cookie-parser")
var bodyParser = require("body-parser")
var cors = require("cors")
const mongoose = require("mongoose")

var routes = require("./routes/index")
var users = require("./routes/users")
var datasource = require("./routes/datasource")

require("dotenv/config")
var appInsights = require("applicationinsights")
if (process.env.NODE_ENV == "production") {
  appInsights.setup()
  appInsights.start()
}

var server
var app = express()
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080/",
  })
)

// cnnect to mongodb
function mongoConnect() {
  try {
    mongoose.connect(
      process.env.Db_connection,
      { useNewUrlParser: true },
      () => {
        console.log("connected to db!")
      }
    )
  } catch (err) {
    console.log(err)
  }
}

mongoConnect()
// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", routes)
app.use("/users", users)
app.use("/datasource", datasource)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render("error", {
      message: err.message,
      error: err,
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render("error", {
    message: err.message,
    error: {},
  })
})

app.set("port", process.env.PORT || 3000)

exports.listen = function () {
  server = app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + server.address().port)
  })
}

exports.close = function () {
  server.close(() => {
    debug("Server stopped.")
  })
}

this.listen()
