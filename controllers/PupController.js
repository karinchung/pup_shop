var exports = module.exports = {}

exports.pupsShow = function(){
  Pup.find({}, (err, pupsFromDb) => {
    return pupsFromDb
  })
}
