const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        enum: ['pop', 'blues', 'rock', 'soul', 'jazz', 'punk'],
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    recommendedAlbum: {
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true
})

const Artist = mongoose.model('Artist', artistSchema) 

module.exports = Artist