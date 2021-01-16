const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
    },
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    favourites: [Object]

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
