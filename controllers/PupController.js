var exports = module.exports = {};

exports.pupsShow = function(Pup){
  Pup.find({}, (err, pupsFromDb) => {
    return pupsFromDb
  })
}
