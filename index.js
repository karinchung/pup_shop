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

app.get('/puppies', (req, res) => {
  Pup.find({}, (err, puppies) => {
    res.json(puppies)
  })
})

app.post('/puppies', (req, res) => {
  Pup.create(req.body, (err, newPuppy) => {
    res.json({success: true, pup: newPuppy})
  })
})

app.get('/puppies/:id', (req, res) => {
  Pup.findById(req.params.id, (err, singlePup) => {
    res.json(singlePup)
  })
})

app.patch('/puppies/:id', (req, res) => {
  Pup.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatePup) => {
    res.json({success: true, pup: updatePup})
  })
})

app.delete('/puppies/:id', (req, res) => {
  Candy.findByIdAndRemove(req.params.id, (err, deletePup) => {
    res.redirect('/puppies')
  })
})

app.listen(3000, (err) =>{
  console.log(err || "Server runnin on port 3000!")
})


app.get('/pups', (req, res) => {
  var allPups = exports.pupsShow()
  res.json(allPups)
})
