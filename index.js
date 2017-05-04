const
  express = require('express')
  app = express()
  bodyParser = require('body-parser')
  morgan = require('morgan')
  mongoose = require('mongoose')
  Pup = require(./models/Pup.js)

mongoose.connect('mongodb://localhost/pupshop', (err) => {
    console.log(err || "connected to mongo!")
  })

app.use(morgan('dev'))

app.use(bodyParser.json())

app.listen(3000, (err) =>{
  console.log(err || "Server runnin on port 3000!")
})
