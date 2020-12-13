const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Artist = require('../models/artist.model')


router.get('/getAllArtists', (req, res) => {

    Artist
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneArtist/:artist_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.artist_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

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

// FILTER ARTISTS

// router.get('/pop', (req, res ) => {
    
//     Artist
//         .find({ genre: pop })
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


module.exports = router