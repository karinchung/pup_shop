const
  express = require('express')
  app = express()
  bodyParser = require('body-parser')
  morgan = require('morgan')
  mongoose = require('mongoose')
  Pup = require(./models/Pup.js)

app.listen(3000, (err) =>{
  console.log(err || "Server runnin on port 3000!")
})
