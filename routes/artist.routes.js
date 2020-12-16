const express = require('express')
const router = express.Router()

const Artist = require('../models/artist.model')
const { checkId } = require('./middlewares')

router.get('/getAllArtists', (req, res) => {

    Artist
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneArtist/:artist_id', checkId, (req, res) => {

    Artist
        .findById(req.params.artist_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/newArtist', (req, res) => {

    Artist
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.put('/editArtist/:artist_id', (req, res) => {

    Artist
        .findByIdAndUpdate(req.params.artist_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/deleteArtist/:artist_id', (req, res) => {

  Artist
    .findByIdAndDelete(req.params.artist_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


router.post('/deleteArtistFromAUser/:artist_id', (req, res) => {

    User
        .findByIdAndUpdate(req.params.user_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
  })
  
  
  
router.get('/getArtistsByText/:genre', (req, res) => { 
    Artist
        .find({'genre':req.params.genre})
        .then(response => res.json(response ))
        .catch(err => res.status(500).json(err))
})


module.exports = router