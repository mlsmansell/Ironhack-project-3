const mongoose = require("mongoose")
module.exports = {
    checkId: (req, res, next) => !mongoose.Types.ObjectId.isValid(req.params.artist_id) ? res.status(500).send({message: 'ID inválido'}) : next()
  }
  