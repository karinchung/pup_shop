const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  Pup = require('./models/Pup.js')

var PupController = require('./controllers/PupController.js')

mongoose.connect('mongodb://localhost/pupshop', (err) => {
    console.log(err || "connected to mongo!")
  })

app.use(morgan('dev'))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({message:'All of the puppies!'})
})

app.get('/puppies', )

app.post('/puppies', )

app.get('/puppies/:id', )

app.patch('/puppies/:id', )

app.delete('/puppies/:id', )

app.listen(3000, (err) =>{
  console.log(err || "Server runnin on port 3000!")
})


app.get('/pups', (req, res) => {
  var allPups = exports.pupsShow
  res.json(allPups)
})
