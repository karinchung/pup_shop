const
  mongoose = require('mongoose'),
  pupSchema = new mongoose.Schema({
    name: {type: String},
    breed: {type: String},
    flees: {type: Boolean},
    age: {age: Number}
  })

module.exports = mongoose.model('Pup', pupSchema)
