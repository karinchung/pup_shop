const
  express = require('express'),
  pupRouter = express.Router(),
  pupsCtrl = require('../controllers/pups.js')

pupRouter.route('/')
  .get(pupsCtrl.index)
  .post(pupsCtrl.create)

pupRouter.route('/:id')
  .get(pupsCtrl.show)
  .patch(pupsCtrl.update)
  .delete(pupsCtrl.destroy)

module.exports = pupRouter
