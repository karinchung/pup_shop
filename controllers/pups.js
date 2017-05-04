const Pup = require('../models/Pup.js')

module.exports = {
  index: (req, res) => {
    Pup.find({}, (err, puppies) => {
      res.json(puppies)
    })
  },

  create: (req, res) => {
    Pup.create(req.body, (err, newPuppy) => {
      res.json({success: true, pup: newPuppy})
    })
  },

  show: (req, res) => {
    Pup.findById(req.params.id, (err, singlePup) => {
      res.json(singlePup)
    })
  },

  update: (req, res) => {
    Pup.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatePup) => {
      res.json({success: true, pup: updatePup})
    })
  },

  destroy: (req, res) => {
    Pup.findByIdAndRemove(req.params.id, (err, deletePup) => {
      res.redirect('/puppies')
    })
  }
}
